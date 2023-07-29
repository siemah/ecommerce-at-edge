import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css"
import "@/assets/css/main.css";
import { Roboto} from "next/font/google";
import Logo from "@/assets/images/logo.svg";
import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ecommerce-at-edge.pages.dev'),
  title: 'Ecommerce at the edge via cloudflare workers and pages using ci/cd',
  description: 'Generated by running an ecommerce at the edge using cloudflare workers and pages',
  creator: "siemah",
  publisher: "zzenz.com",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="preconnect" href="https://images.weserv.nl" />
        <link rel="preconnect" href="https://images.zzenz.com" />

      </head>
      <body className={`${roboto.className}`}>

        {/* header */}
        <Header logo={Logo} />
        {/* main ui */}
        <main>
          {children}
        </main>
        {/* footer */}
        <Footer logo={Logo} />

      </body>
    </html>
  )
}
