import Image from "next/image";
import Button from "@/ui/button";

export default function Home() {
  const projectLinks = [
    {
      title: "Doqi - AI Calendar Assistant",
      link: "https://doqi.pro/",
      description: "Designed and developed an AI-powered calendar manager using Google's Gemini API. Lets users control Google Calendar via natural language -- bringing ChatGPT-level convenience to everyday scheduling",
      image: "https://res.cloudinary.com/dtnscafax/image/upload/v1748242724/doqi-ss_vfbrqc.png"
    },
    {
      title: "Buckshot Roulette",
      link: "https://github.com/ET-z/engg1340-119",
      description: "Recreated the indie game “Buckshot Roulette” in C++ with the ncurses library, implementing complex game mechanics in a fully playable text-based interface.",
      image: "https://res.cloudinary.com/dtnscafax/image/upload/v1748243153/Screenshot_2025-05-26_at_3.05.45_PM_hbzhsl.png"
    },
    {
      title: "Todo-list",
      link: "https://todo-list-app-etz.vercel.app/",
      description: "Built a responsive todo-list app with React, featuring persistent local storage and dynamic task management.",
      image: "https://res.cloudinary.com/dtnscafax/image/upload/v1748242658/todo-list-ss_yjws5x.png"
    }
  ];

  return (
    <div className="w-full h-screen flex lg:flex-row flex-col font-['Josefin_Sans'] overflow-y-auto">
      <div className="min-h-screen lg:flex-1 lg:h-full lg:sticky top-0 flex flex-col justify-center items-center py-8 lg:py-0 lg:border-r-2 lg:border-r-gradient-to-b lg:from-white lg:via-gray-800 lg:to-white" style={{ borderImageSlice: 1, borderImageSource: 'linear-gradient(to bottom, white, black, white)' }}>
        <h1 className="text-5xl">Projects</h1>
        <p>Here are some of the projects I have worked on!</p>
        <Image 
          src="https://res.cloudinary.com/dtnscafax/image/upload/v1748244465/The_Sad_Snowman_-_Losing_My_Head_qtnwqv.png"
          alt="Waving snowman"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="lg:flex-1 w-full flex flex-col items-center">
        {projectLinks.map(({ title, link, description, image }) => (
          <div key={title} className="min-h-screen flex flex-col justify-center items-center border-b border-gray-300 w-full p-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            {image && (
              <div className="relative group">
                <Image 
                  src={image}
                  alt={title}
                  width={800}
                  height={300}
                  className="my-4 rounded-lg shadow-lg transition-all duration-300 group-hover:brightness-75"
                />
                {link && (
                  <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button className="">
                      Visit
                    </Button>
                  </a>
                )}
              </div>
            )}
            <p className="text-center">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
