import Image from "next/image";
import background from "../public/sutirta.jpg";

export default function Home() {
  return (
    <section>
      <div className="w-full h">
        <Image src={background} alt="backround image" priority />
      </div>
    </section>
  );
}
