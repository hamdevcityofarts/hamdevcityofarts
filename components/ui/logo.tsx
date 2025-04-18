import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logoGedomed (2).png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 py-2" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={62} height={52} />
      
    </Link>
  );
}
