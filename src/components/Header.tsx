import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black py-5 relative z-10 shadow-md shadow-primary/10">
      <div className="container-responsive">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/assets/Logo.png"
              width={130}
              height={58}
              alt="AudioVal Logo"
            // className="w-24 sm:w-28 lg:w-32 xl:w-36 2xl:w-40 h-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
