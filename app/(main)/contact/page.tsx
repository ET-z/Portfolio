import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 space-y-4 font-['Josefin_Sans']">
      <h1 className="text-2xl font-semibold">Contact Me</h1>
      <div className="flex flex-col items-center space-y-2">
        <p>
          Email:{" "}
          <a href="mailto:zolzayatushig@gmail.com" className="text-blue-500 underline">
            zolzayatushig@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/enkhtushig-zolzaya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            linkedin.com/in/enkhtushig-zolzaya/
          </a>
        </p>
      </div>
      <h1 className="text-2xl font-semibold">More</h1>
      <div className="flex flex-col items-center space-y-2">
        <a href="https://github.com/ET-z" target="_blank" rel="noopener noreferrer" className="flex flex-row">
          <Image src="/github-mark.svg" alt="GitHub" width={24} height={24} />
        </a>
        <Image 
          src="https://res.cloudinary.com/dtnscafax/image/upload/v1748244555/The_Sad_Snowman_-_Existencial_Crisis_qsu7f2.png"
          alt="Waving snowman"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
