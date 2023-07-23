import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link'
import Logo from "@/assets/images/logo.svg";
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: 'Not Found - 404',
  description: 'this page doesnt exists',
  creator: "siemah",
  alternates: {
    canonical: "/",
  },
};

export default function Page404() {
  return (
    <body className={`${poppins.className}`}>
      <Header logo={Logo} />
      <main className="flex flex-col gap-6 justify-center items-center bg-purple-500 w-full h-screen">
        <h1>Not Found - 404</h1>
        <Link
          href={"/"}
          className='px-6 py-3 bg-purple-800 text-white rounded-md outline outline-offset-2 outline-purple-300 hover:bg-purple-950 hover:outline-dashed transition-all'
        >
          Go home
        </Link>
      </main>
      <Footer logo={Logo} />
    </body>
  );
}
