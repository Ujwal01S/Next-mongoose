import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      Hello
      <button>
        <Link href='/addproducts'>
          Goto Add Products
        </Link>
        </button>
        <Link href='/product'>
          Goto Products
        </Link>
    </div>
  );
}
