import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
  } from "@heroicons/react/outline"; //outline/solid
  
  import { HomeIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';


  function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

    return (
      <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto items-center ">
          {/* Left - Logo */}
          <div onClick={() => router.push('/')} className="relative w-24 h-24 hidden lg:inline-grid cursor-pointer">
            <Image
              src="https:links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div onClick={() => router.push('/')} className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
            <Image
              src="https:links.papareact.com/jjm"
              layout="fill"
              objectFit="contain" // makes the image look clean
            />
          </div>
          {/* Middle - Search */}
          <div className="max-w-xs">
            <div className="mt-1 relative p-3  rounded-md flex ">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                type="text"
                placeholder="search"
              />
            </div>
          </div>


            {/* Right */}
            <div className='flex items-center justify-end space-x-4'>
                <HomeIcon onClick={() => router.push('/')} className="navBtn" />
                <MenuIcon className="h-6 md:hidden cursor-pointer" />

              {session ? (
           <>
                  <div className="relative navBtn">
                  <PaperAirplaneIcon className='navBtn rotate-45' />
                  <div className='absolute -top-2 -right-2 text-xs
                  w-5 h-5 bg-red-500 rounded-full flex items-center
                  justify-center animate-pulse text-white'>3</div>
                </div>
                <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                <UserGroupIcon className='navBtn' />
                <HeartIcon className='navBtn' />

                <img
                  onClick={signOut}
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={session.user.image}
                  alt='profile pic'
                />
            </>
              ) : (
                <button onClick={signIn}>Sign in</button>
              )}  

            </div>
        </div>
    </div>
  )
}

export default Header;