import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have any account?"
      backButtonUrl="/auth/register"
      showSocial
    >
      <div>Login Form </div>
    </CardWrapper>
  );
};
