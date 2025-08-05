import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";
import { Container } from "./ui/container";
import { memo } from "react";

const Header = memo(() => {
  return (
    <header className="bg-black py-5 relative z-10 shadow-md shadow-primary/10">
      <Container>
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src={ASSETS.logo}
              width={130}
              height={58}
              alt="AudioVal Logo"
              priority
              className="w-auto h-8 sm:h-10 lg:h-12"
              sizes="(max-width: 640px) 104px, (max-width: 1024px) 120px, 130px"
            />
          </Link>
        </div>
      </Container>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
