"use client";

import React from "react";
import Link from "next/link";
import Logo from "../../../public/LogoHorizontal.png";
import Image from "next/image";
import { signOut } from "next-auth/react";

function Navbar({ session }) {
  return (
    <nav className="shadow-wl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
          <div>
            <Link href="/">
              <Image src={Logo} width={100} height={200} alt={"Next js logo"} />
            </Link>
          </div>
          <ul className="flex">
            {!session ? (
              <>
                <li className="mx-3">
                  <Link href="/login">Login</Link>
                </li>
                <li className="mx-3">
                  <Link href="/register">Register</Link>
                </li>
              </>
            ) : (
              <li className="mx-3">
                <Link
                  href={"/welcome"}
                  className="bg-gray-500 text-white border py-2 px-3 rouded-md text-lg my-2"
                >
                  Welcome
                </Link>
                <a
                  onClick={() => signOut()}
                  className="bg-red-500 text-white border py-2 px-3 rouded-md text-lg my-2"
                >
                  Log out
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
