import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-tl from-pink-300 from-10% via-orange-100 via-40% to-white-500 to-90%">
      <div className="space-y-6">
        <h1 className="text-6xl text-semibold drop-shadow-md">🔒Auth</h1>
        <p>Login</p>
        <LoginButton>
          <Button size={"lg"}>Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}
