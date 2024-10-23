import React from 'react'
import MainCards from './MainCards'
import './main.css';

const MainContent = () => {
  return (
    <main className="flex-grow flex flex-col justify-center items-center text-center">

        <div className="flex mb-8">
          <h1 className="text-3xl font-bold">What can I help with?</h1>
          <div className="dot-animation"></div>
        </div>
        
        
          
        
        <div className="w-full mb-6 flex justify-center">
          <div className="relative w-[40.5%]">
            <input type="text"
                    placeholder="Message ChatGPT"
                    className="w-full p-3 pl-4 pr-12 bg-[#f0f0f0] rounded-full focus:outline-none placeholder-black placeholder-opacity-60"
            />
            <button style={{ top: '8px' }} 
                    disabled
                    aria-label="Send prompt" 
                    data-testid="send-button" 
                    className="absolute right-2 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary disabled:bg-[#D7D7D7]"
            >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-2xl">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z" fill="currentColor"></path>
            </svg>
            </button>
          </div>
        </div>
  
        <MainCards />
    </main>
  )
}

export default MainContent