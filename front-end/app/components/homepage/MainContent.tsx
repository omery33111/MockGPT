import React from 'react'
import './homepage.css';
import AnimatedText from './AnimatedText';
import ChatTextbox from './ChatTextbox';
import MainCards from './MainCards';

const MainContent = () => {
  return (
    <main className="flex-grow flex flex-col justify-center items-center text-center gap-[26px]">

        <AnimatedText />

        <ChatTextbox />

        <MainCards />

    </main>
  )
}

export default MainContent