import Link from "next/link";
import { HugeComponent } from "@/components/HugeComponent";
import { Suspense } from "react";

export default async function Huge() {
  return (
    <div className="grid items-center align-middle p-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-center">I'm a huge load of everything</h2>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <HugeComponent />
        </Suspense>
        <Link className="mx-auto" href="/">
          Take me back home!
        </Link>
        <Link className="mx-auto" href="/there">
          Or take me there
        </Link>
      </div>
    </div>
  );
}
