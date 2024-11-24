import About from "@/components/About";
import Grid from "@/components/Grid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col xl:flex-row min-h-screen justify-between gap-y-4 lg:space-y-0 xl:space-x-8 p-8">
      <About />
      <Grid />
    </main>
  );
}
