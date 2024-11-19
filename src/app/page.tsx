"use client";
import { UserProfile } from "@/components/UserProfile";
import { UserFeed } from "@/components/UserFeed";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => console.log("client..."));
  return (
    <main className="grid grid-cols-2 max-w-[1000px] mx-auto">
      <UserProfile />
      <UserFeed />
    </main>
  );
}
