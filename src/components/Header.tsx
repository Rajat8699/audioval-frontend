import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-black py-5 relative z-10 shadow-md shadow-primary/10">
      <div className="container-responsive">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src={ASSETS.logo}
              width={130}
              height={58}
              alt="AudioVal Logo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
