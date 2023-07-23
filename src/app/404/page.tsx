import Link from 'next/link'

export default function Page404() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center bg-purple-500 h-96 w-full">
      <h1>Not Found - 404</h1>
      <Link
        href={"/"}
        className='px-6 py-3 bg-purple-800 text-white rounded-md outline outline-offset-2 outline-purple-300'
      >
        Go home
      </Link>
    </main>
  );
}
