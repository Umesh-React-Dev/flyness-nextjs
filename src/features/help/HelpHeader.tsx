import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/help/logo-green.svg";
import iconGlobe from "@/assets/images/help/icon-globe.svg";
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

        <button type="button" className="helpHeader__lang" aria-label="Language">
          <span className="helpHeader__langIcon" aria-hidden="true">
            <Image src={iconGlobe} alt="" width={16} height={16} />
          </span>
          English
        </button>
      </div>
    </header>
  );
}
