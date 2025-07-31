import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black py-4 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Image
            src="/assets/Logo.png"
            width={130}
            height={58}
            alt="AudioVal Logo"
          />
        </div>
      </div>
    </header>
  );
}
