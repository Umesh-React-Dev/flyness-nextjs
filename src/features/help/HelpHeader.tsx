import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/help/logo-green.svg";
import HelpLanguageMenu from "./HelpLanguageMenu";
import "./HelpHeader.scss";

export default function HelpHeader() {
  return (
    <header className="helpHeader">
      <div className="helpHeader__inner">
        <div className="helpHeader__left">
          <Link href="/" className="helpHeader__logo" aria-label="flynas home">
            <Image
              src={logo}
              alt="flynas"
              width={111}
              height={48}
              priority
              className="helpHeader__logoImage"
            />
          </Link>
          <nav className="helpHeader__nav" aria-label="Help navigation">
            <Link href="/" className="helpHeader__homeLink">
              Home
            </Link>
          </nav>
        </div>

        <HelpLanguageMenu />
      </div>
    </header>
  );
}
