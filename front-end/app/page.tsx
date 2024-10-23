import React from 'react';
import MainContent from './components/homepage/MainContent';
import MainFooter from './components/homepage/MainFooter';
import MainHeader from './components/homepage/MainHeader';



const Page = () => {


  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainHeader />

      <MainContent />

      <MainFooter />
    </div>
  );
};

export default Page;
