import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full min-h-[100dvh] grid place-items-center px-4 py-8">
      {children}
    </main>
  );
};

export default AuthLayout;
