"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Languages:C,C++,Python</li>
        <li>Web:HTML,CSS,JavaScript</li>
        <li>Frameworks:ReactJS,NodeJS,<br></br>NextJS,TailwindCSS</li>
        <li>Others:PowerBI,MS Excel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelor of Technology</li>
        <li>Netaji Subhas University of Technology, Dwarka Delhi</li>
      </ul>
    ),
  }
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image className='rounded' priority src="/images/about.png" alt="About Image" height={500} width={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>
          Hi, I&apos;m Ranjan, a dedicated Web Developer and Software Engineer currently pursuing a BTech degree from Netaji Subhas University of Technology. With a strong foundation in modern web technologies and software development practices, I am passionate about creating efficient, scalable, and user-friendly web applications. Outside of work, I enjoy watching movies, which helps me stay creative and inspired.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
