"use client";
import { Header } from "@/components/Header";
import Image from "next/image";
import { LoggedUserProvider } from "./contexts/LoggedUser";

export default function Home() {
  return (
    <div className="container mx-auto">
      <LoggedUserProvider>
        <Header />
      </LoggedUserProvider>
      {/* Header que estava aqui vai pra dentro do provider */}
    </div>
  );
}
