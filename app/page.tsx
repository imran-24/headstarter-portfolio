import About from "@/components/About";
import Grid from "@/components/Grid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen justify-between space-y-10 lg:space-y-0 space-x-6  p-6 lg:p-14 xl:p-24">
      <About />
      <Grid />
    </main>
  );
}
