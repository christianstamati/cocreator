import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Button asChild>
        <Link href="/tasks">Get Started</Link>
      </Button>
    </main>
  );
}
