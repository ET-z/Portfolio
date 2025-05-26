'use client'
import Link from "next/link";
import Button from "@/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav() {
  const pathname = usePathname();
  const navLinks = [
    {href: "/", label: "About"},
    {href: "/projects", label: "Projects"},
    {href: "/contact", label: "Contact"},
  ]

  return (
    <div className="z-50 fixed md:my-4 w-full md:mx-32 md:w-[calc(100%-16rem)] border-2 b-white md:rounded-2xl py-2 px-4 flex backdrop-blur-xl">
      <div className="md:flex-1 hidden lg:flex justify-center items-center font-bold font-[Poppins]">
        <h1 className="font-bold">Enkhtushig Zolzaya</h1>
      </div>
      <div className="flex-2 flex justify-center gap-4 font-['Josefin_Sans']">
        {
          navLinks.map(({href, label}) => (
            <Link 
              href={href}
              key={href}
            > 
              <Button 
                className={`mb-2 border-2 ${pathname === href ? "translate-y-1 [box-shadow:none]" : ""}`}
              >
                {label}
              </Button>
            </Link>
          ))}
      </div>
      <div className="md:flex-1 hidden lg:flex justify-center items-center">
        <a href="https://github.com/ET-z" target="_blank" rel="noopener noreferrer">
          <Image src="/github-mark.svg" alt="GitHub" width={24} height={24} />
        </a>
      </div>
    </div>
  );
}