import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-screen flex items-center p-10 relative">
        <div className="md:w-1/2 flex flex-col gap-2 items-start">
          <h1 className="text-balance font-medium md:text-7xl text-4xl">
            All the documents you need in <span className="text-theme-1 underline">one</span> place
          </h1>
          <p className="md:text-2xl text-xl">Government fillings made <span className="text-theme-1">simple</span></p>
          <Link href = '/dashboard' className="md:text-xl text-lg bg-theme-5 text-white font-medium rounded-full px-5 py-1">
            Get started
          </Link>
        </div>
      </section> 
    </>
  );
}
