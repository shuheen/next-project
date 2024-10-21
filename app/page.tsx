import { Metadata } from "next"
import Header from "components/Header/Header"
import { FaSearch } from "react-icons/fa"
import { DatePicker } from "@/components/DatePicker/DatePicker"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg- h-[500px] bg-gray-50 bg-[url('/images/city-banner/delhi.jpg')] bg-cover bg-center bg-top">
        <div className="mx-auto flex h-full max-w-screen-2xl flex-col items-center justify-center gap-6">
          <h2 className="mb-4 text-center text-6xl font-black text-white">Explore the Events in your City</h2>
          <div className="flex h-[60px] w-[50%] items-center justify-between rounded-full border-gray-400 bg-white px-6 shadow-sm">
            <div className="">Dropdown</div>
            <div className="">
              <DatePicker />
            </div>
            <div className="">
              <FaSearch />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
