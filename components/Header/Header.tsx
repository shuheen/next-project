import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaUser } from "react-icons/fa"

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full border border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="logo text-2xl text-blue-500">
            <Image src="/logo/logo.png" alt="HapHub Logo" width={150} height={60} />
          </div>

          <div className="menu-left">
            <div className="flex gap-2 font-medium">
              <Link
                className="text-md hover bg transitiona-ll rounded-full border border-gray-300 px-6 py-2 text-gray-600 hover:border-orange-600 hover:bg-orange-600 hover:text-white"
                href="/about"
              >
                List an Event
              </Link>
              <div className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white">
                <FaUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
