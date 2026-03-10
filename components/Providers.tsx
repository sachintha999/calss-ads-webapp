"use client"
import { ReactNode } from "react"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#2563eb"
        options={{ showSpinner: false }}
        shallowRouting
        delay={0}
      />
    </>
  );
}