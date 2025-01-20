import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg- flex min-h-screen items-center justify-center bg-homepagebg2 bg-cover bg-center bg-no-repeat">
      <div className="max-w-lg text-center">
        <h1 className="mb-4 font-Inter text-6xl font-extrabold leading-[64px]">
          404
        </h1>
        <p className="mb-6 font-Inter text-2xl">Oops! Page not found</p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-white px-6 py-2 font-Inter text-lg font-medium shadow-md transition hover:shadow-lg"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
