"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const PageButtonList = () => {
  const { push } = useRouter();

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/bonus">Bonus</Link>
    </div>
  );
};

export default PageButtonList;
