
import Image from 'next/image'; 
import Head from 'next/head';


export default
function Home() {
  return(
    <div>
    <main>
      <div className="">
      <h1 className="flex mt-40 ml-20 text-bold  text-5xl justify-left max-w-xl text-left pl-90 ">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
How  actually the problem solving process is a structured</h1>
      <p className="flex  ml-20 text-2xl justify-left max-w-xl text-left pl-50 mt-0">
      The problem-solving process, UP ITOR, involves: Understanding the problem, Planning the solution, Implementing it, Testing and debugging, Optimizing for efficiency, and finally Reviewing for improvements.</p>
      </div>
      
      {/* <Image
        src={"./image.png"} // Replace with your image URL
        alt="Description of the image"
        width={500} // Set the width of the image
        height={300} // Set the height of the image
      /> */}
      {/* <img className="image" src="src/app/client/image.png" alt="Example" /> */}
    
          <a
            className="rounded-full border border-solid border-black/[.98] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#adbb61] dark:hover:bg-[#000000] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 sm:px-2 sm:min-w-1 px-2 py-1 w-1/4 self-start ml-16"
            href="/algorithm"
            target="_blank"
            rel="noopener noreferrer"
            >
              Get Algorithms
            </a>
          
    </main>
    </div>
  );
};

 