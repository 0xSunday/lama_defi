"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/bitcoin");
  }, []);
  return <h1 className="">hello sunil</h1>;
}
