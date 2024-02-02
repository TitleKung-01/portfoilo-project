import LoginForm from "@/components/LoginForm";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { massage: string };
}) {
  return (
    <div className="flex justify-center h-screen m-auto w-60">
      <LoginForm />
      {searchParams.massage && (
        <p className="text-red-500">{searchParams.massage}</p>
      )}
    </div>
  );
} 