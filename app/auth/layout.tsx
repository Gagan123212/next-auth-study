function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex justify-center items-center bg-gradient-to-tl from-pink-300 from-10% via-orange-100 via-40% to-white-500 to-90%">
      {children}
    </div>
  );
}

export default AuthLayout;
