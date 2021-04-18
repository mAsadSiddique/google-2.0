import Head from 'next/head'
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { SearchIcon } from "@heroicons/react/outline"

export default function Home() {
  return (
    <div >
      <Head>
        <title>Google-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left-Side */}

        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>

        </div>


        {/* Right-Side */}
        <div className="flex space-x-4 items-center">
          <p className="link">Google</p>
          <p className="link">Images</p>

          {/* Icon */}

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}

          <Avatar url='https://coaching.papareact.com/ai9' />

        </div>


      </header>



      {/* Body */}

      <form className="flex flex-col items-center mt-20 flex-grow">
        <Image
          width={300}
          height={100}
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
        rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl
        lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input type="text" className="flex-grow focus:outline-none " />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center 
        mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn active:gray-ring-300">
            Google Search
          </button>
          <button className="btn">
            I'm Feeling Lucky
          </button>
        </div>


      </form>

      {/* Footer */}


    </div >
  )
}
