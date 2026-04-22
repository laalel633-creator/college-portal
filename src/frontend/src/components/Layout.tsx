import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f7f7f7",
      }}
    >
      <Header />
      <main style={{ flex: 1, width: "100%" }}>{children}</main>
      <Footer />
    </div>
  );
}
