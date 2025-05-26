'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "@/ui/button";
import "@/app/(main)/components/marquee.css"
import Image from "next/image";


export default function Hero() {
  const words = ["a software engineer", "a student", "an artist"];
  const [el, setEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setEl(document.getElementById("changing-word"));
  }, []);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    function type() {
      const currentWord = words[wordIndex];
      if (el) {
        el.textContent = currentWord.substring(0, charIndex);
      }

      if (isDeleting) {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
        timeoutId = setTimeout(type, 50);
      } else {
        charIndex++;
        if (charIndex > currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 1000); // wait before deleting
        } else {
          timeoutId = setTimeout(type, 100);
        }
      }
    }

    type();

    return () => clearTimeout(timeoutId);
  }, [el]);


  const skills = ["React", "Next.js", "Javascript", "Typescript", "Tailwind CSS", "Python", "C++", "C", "Supabase"]

  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center font-['Josefin_Sans']"> 
      <div className="flex-1 flex-col h-full pt-16 lg:p-0 lg:w-1/2 flex justify-center text-4xl items-center space-y-8">
        <h1>Hello! <br />I'm Enkhtushig</h1>
        <Link 
          href="https://drive.google.com/file/d/16DSN5pxTR20beYtRtonQ2lnZbPOqmP3h/view?usp=sharing"
          target="_blank"
        > 
          <Button 
            className="p-4"
          >
            <p className="text-xl">Check out my resume!</p>
          </Button>
        </Link>
        <Image 
          src="https://res.cloudinary.com/dtnscafax/image/upload/v1748244449/The_Sad_Snowman_-_Waving_1_nck9nj.png"
          alt="Waving snowman"
          width={300}
          height={300}
          className="rounded-lg hidden lg:flex"
        />
      </div>
      <div className="flex-1 lg:h-full lg:w-1/2 text-4xl font-bold flex flex-col justify-center items-center space-y-16">
        <p className="text-center">I am <span id="changing-word"></span></p>
        <div className='skills lg:w-full relative'>
          <div className='skills-track text-xl'>
            {[...Array(3)].map(() => 
              skills.map((skill: string) => (
                <p>{skill}</p>
              ))
            )}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
}