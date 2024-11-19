import Link from "next/link";

export default async function There() {
  return (
    <div className="grid items-center align-middle p-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-center">I&#39;m just there. Period.</h2>
        <Link className="mx-auto" href="/">
          Take me back home!
        </Link>
        <Link className="mx-auto" href="/huge">
          Take me back to huge!
        </Link>
      </div>
    </div>
  );
}
