import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black py-6 relative z-10">
      <div className="container-responsive">
        <div className="flex justify-center">
          <Image
            src="/assets/Logo.png"
            width={130}
            height={58}
            alt="AudioVal Logo"
            // className="w-24 sm:w-28 lg:w-32 xl:w-36 2xl:w-40 h-auto"
          />
        </div>
      </div>
    </header>
  );
}
