import Link from "next/link";

export function UserFeed(): JSX.Element {
  return (
    <Link
      className="grid items-center align-middle p-10 cursor-pointer hover:bg-gray-100"
      href="/huge"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-center">User feed profile</h2>
        <p className="text-center mt-4">
          I'm NOT that important <br /> please, I don't wanna block everything
        </p>
      </div>
    </Link>
  );
}
