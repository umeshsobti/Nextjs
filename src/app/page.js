import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello You are in main app</h1>
      <Link href="/profile">Profile</Link> &nbsp; &nbsp;
      <Link href="/order-product">Order</Link>
    </>
  );
}
