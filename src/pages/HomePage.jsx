import React from 'react';
import Hero from '../components/Hero';
import GridContainer from '../components/GridContainer';
import AdContainer from '../components/AdContainer';
import Products from '../components/Products';
import BottomNav from '../components/BottomNav';

const HomePage = () => {
  return (
    <main className="bg-[hsl(201,88%,97%)] mt-[52px] relative pb-10">
      <Hero />
      <GridContainer />
      {/* <AdContainer /> */}
      <Products />
      <div className="fixed bottom-0 lg:hidden w-full">
        <BottomNav />
      </div>
    </main>
  );
};

export default HomePage;
