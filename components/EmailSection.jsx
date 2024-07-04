"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../public/github-icon.svg';
import LinkedinIcon from '../public/linkedin-icon.svg';

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const resData = await response.json();
      console.log(resData);

      setEmailSubmitted(true);
      console.log("Message sent.");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
        Whether you&apos;re looking to collaborate on exciting projects, explore new opportunities, or simply share ideas, I&apos;m always eager to connect with fellow enthusiasts in web development and software engineering. Feel free to reach out, and let&apos;s create something amazing together!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/github-rnjn">
            <Image src={GithubIcon} alt='Github Icon'/>
          </Link>
          <Link href="https://www.linkedin.com/in/rnjn/">
            <Image src={LinkedinIcon} alt='Linkedin Icon'/>
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='flex flex-col gap-3 mb-4'>
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
            <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" name="email" type="email" id="email" required placeholder="abc@gmail.com" />
          </div>
          <div className='flex flex-col gap-3 mb-4'>
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
            <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" type="text" name="subject" required placeholder='What is the subject?' />
          </div>
          <div className='flex flex-col gap-3 mb-6'>
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
            <textarea className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" name="message" id="message" placeholder="Write your message..." />
          </div>
          <button className='bg-purple-500 hover:bg-purple-800 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-200'>Send Message</button>
          {
            emailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>Email Sent Successfully!</p>
            )
          }
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
