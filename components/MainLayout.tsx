
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NavBar from "./NavBar";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "./ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout(
  { children }: MainLayoutProps
) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  if (!user) return redirect("/login");

  return (
    <main className="flex">
      <NavBar />
      <section className="w-10/12">
        <header className="p-6 border border-gray-300">
          <div className=" container flex justify-between">
            <div>


            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className=" cursor-pointer">
                    <AvatarImage src="https://github.com/TitleKung-01.png" alt="@TitleKung-01" />
                    <AvatarFallback>{user?.email && user.email[0]} </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 " align="end">
                  <DropdownMenuItem>
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut >⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="px-5 py-2 ">
          {children}
        </div>
      </section>
    </main>
  );
  // return user ? (
  //   <div className="flex items-center gap-4">
  //     Hey, {user.email}!
  //     <form action={signOut}>
  //       <button className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover">
  //         Logout
  //       </button>
  //     </form>
  //   </div>
  // ) : (
  //   <Link
  //     href="/login"
  //     className="flex px-3 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
  //   >
  //     Login
  //   </Link>
  // );
}
