import Image from "next/image";
import Link from "next/link";
import bookNowPayLaterImg from "@/assets/images/img5763.webp";
import "./BookNowPayLater.scss";

export default function BookNowPayLater() {
  return (
    <section className="bookNowPayLater" aria-label="Book now, pay later">
      <div className="bookNowPayLater__inner">
        <Link href="#" className="bookNowPayLater__link">
          <Image
            src={bookNowPayLaterImg}
            alt="Book now, Pay later! — madfu, tabby, and tamara"
            priority={false}
            className="bookNowPayLater__image"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </Link>
      </div>
    </section>
  );
}
