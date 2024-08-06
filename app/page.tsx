import Image from "next/image";
import FileInput from "@/components/FileInput";

export default function Home() {
  return (
    <main className="p-2 grid place-content-center h-dvh w-full">
      <h1 className="text-4xl text-primary font-bold text-center">Generate Image URL</h1>
      <div className="mt-10">
        <FileInput />
      </div>
    </main>
  );
}
