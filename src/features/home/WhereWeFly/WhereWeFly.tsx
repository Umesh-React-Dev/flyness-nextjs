import Image from "next/image";
import Link from "next/link";
import whereWeFlyGif from "@/assets/images/img33-gif.webp";
import "./WhereWeFly.scss";

export default function WhereWeFly() {
  return (
    <section className="whereWeFly" aria-label="Where we fly">
      <Link href="#" className="whereWeFly__link">
        <Image
          src={whereWeFlyGif}
          alt="Where we fly — click here and navigate the Dynamic Route Map"
          unoptimized
          priority={false}
          className="whereWeFly__image"
          sizes="100vw"
        />
      </Link>
    </section>
  );
}
