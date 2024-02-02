import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginForm() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { user },
    } = await supabase.auth.getUser();


    const signIn = async (formData: FormData) => {
        "use server";

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/admin");
    };

    if (user) {
        return redirect("/admin");
    }

    return (
        <div className="flex justify-center h-screen m-auto w-60">

            <form
                className="flex flex-col justify-center flex-1 w-full gap-2 animate-in text-foreground"
                action={signIn}
            >
                <label className="text-md" htmlFor="email">
                    Email
                </label>
                <input
                    className="px-4 py-2 mb-6 border rounded-md bg-inherit"
                    name="email"
                    placeholder="you@example.com"
                    required
                />
                <label className="text-md" htmlFor="password">
                    Password
                </label>
                <input
                    className="px-4 py-2 mb-6 border rounded-md bg-inherit"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                />
                <button className="px-4 py-2 mb-2 bg-green-700 rounded-md text-foreground">
                    Sign In
                </button>
            </form>
        </div>
    );
}
