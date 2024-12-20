"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../redux/store";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { SessionProvider } from "next-auth/react";


export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <SessionProvider>
      {children}
      <ProgressBar
        height="4px"
        color="rgb(0, 111, 238)"
        options={{ showSpinner: false }}
        shallowRouting
      />
      </SessionProvider>
    </Provider>
  );
}
