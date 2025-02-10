"use client"

import { PostProvider } from "./contexts/PostContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostList } from "@/components/PostList";

export default function Home() {
  return (
    <PostProvider>
      <div className="container mx-auto">
        <Header />
        <PostList />
        <Footer />
      </div>
    </PostProvider>
  );
}
