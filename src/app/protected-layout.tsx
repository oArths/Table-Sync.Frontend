"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className=" absolute top-0  h-screen w-full bg-primary300/50 flex items-center justify-center text-white  text-3xl">
        <div
          className={`w-5 h-5 border-1 border-solid border-t-gray200 border-gray-300 rounded-full mr-2 animate-spin`}
        ></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedLayout;
