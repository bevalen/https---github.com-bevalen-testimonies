import React from 'react';
import { Button } from '@/components/ui/button'; // Importing Button component
import Link from 'next/link';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent">
        Write Your
        <br />
        7-Minute Story
        <br />
        with AI
      </span>
      <p className="mt-4 text-center text-base md:text-lg font-medium text-gray-700 mx-4">
        &quot;...always be prepared to give an answer to everyone who asks you
        <br />
        to give the reason for the hope that you have.&quot; - 1 Peter 3:15
      </p>
      <Link href="/testimony">
        <Button variant="default" className="mt-6">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
export default Home;
