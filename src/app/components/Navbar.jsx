"use client";
import { useEffect, useState } from "react"; // NEW: useEffect
import Link from "next/link";
import { siteName, navLinks, createMenu } from "../data/homeContent";
import ProfileMenu from "./ProfileMenu"; // NEW

// NEW: navbar ke items backend se aate hain
const NAV_API = "http://localhost:8080/backend/nav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [links, setLinks] = useState(navLinks); // NEW: pehle purani list, phir database wali

  // NEW: navbar ke naam aur dikhana/chhupana database se lao. Na aaye to purani list hi rehti hai.
  useEffect(() => {
    fetch(NAV_API, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (data.success && Array.isArray(data.items)) {
          setLinks(
            data.items
              .filter((i) => i.visible !== false)
              .map((i) => ({ label: i.title, href: `/${i.slug}` }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className='bg-blue-300 h-[90] flex'>
      <div className='bg-pink-700 w-[20%] flex justify-center items-center'>
        <p className='text-4xl font-bold text-white'>{siteName}</p>
      </div>
      <div className='bg-pink-700 flex w-[70%] gap-6 justify-center items-center text-white overflow-visible'>

        {/* Create aur Dropdown Div ka Wrapper */}
        <div className="relative inline-block overflow-visible">
          <p
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-white hover:underline select-none text-xl"
          >
            Create
          </p>

          {isOpen && (
            <div className="absolute top-full left-0 mt-3 w-180 bg-white rounded-2xl shadow-2xl p-8 z-50 border border-gray-100 font-poppins text-slate-800 animate-in fade-in zoom-in-95 duration-150">
              <div className="grid grid-cols-3 gap-10 text-left">
                {createMenu.map((column) => (
                  <div key={column.title}>
                    <h3 className="font-bold text-xl text-[#0F172A] mb-4">{column.title}</h3>
                    <ul className="space-y-3 text-slate-600 text-sm font-medium">
                      {column.items.map((item) => (
                        <li key={item} className="hover:text-[#E21564] cursor-pointer transition-colors">{item}</li>
                      ))}
                      {column.seeAll && (
                        <li className="hover:text-[#E21564] cursor-pointer font-semibold pt-1">{column.seeAll}</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {links.map((item) => (
          <Link key={item.href} href={item.href} className="cursor-pointer text-xl">
            {item.label}
          </Link>
        ))}
      </div>
      <div className='flex bg-pink-700 w-[25%]'>
        {/* NEW: login ho to profile icon, warna wahi Login / Signup buttons */}
        <ProfileMenu>
          <Link
            href={"/login"}
            className='bg-white h-13 w-28 flex justify-center items-center mt-5 ml-10 rounded-4xl'
          >
            Login
          </Link>
          <Link
            href={"/signup"}
            className='bg-pink-700 text-blue-300 h-13 w-28 flex justify-center items-center mt-5 ml-5 border-2 rounded-3xl'
          >
            Signup
          </Link>
        </ProfileMenu>
      </div>
    </div>
  );
}