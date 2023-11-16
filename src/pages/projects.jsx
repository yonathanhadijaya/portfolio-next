import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
     rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light  p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Yonathan | Projects Page</title>
        <meta
          name="description"
          content="HTML, CSS, JavaScript, MySQL, Tailwind CSS, React JS, TypeScript"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trump Knowledge!"
            className="!text-6xl mb-12"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Jamu Larisna"
                summary="A featured website using HTML, CSS, and JavaScript that built to help spread brand awareness of a herb drinks called Jamu Larisna in Yogyakarta."
                img={project1}
                link="jamu-larisna.vercel.app"
                type="Featured Project"
                github="github.com/yonathanhhadijaya"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Jamu Larisna"
                img={project1}
                link="jamu-larisna.vercel.app"
                type="Featured Project"
                github="github.com/yonathanhhadijaya"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Jamu Larisna"
                img={project1}
                link="jamu-larisna.vercel.app"
                type="Featured Project"
                github="github.com/yonathanhhadijaya"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Jamu Larisna"
                summary="A featured website using HTML, CSS, and JavaScript that built to help spread brand awareness of a herb drinks called Jamu Larisna in Yogyakarta."
                img={project1}
                link="jamu-larisna.vercel.app"
                type="Featured Project"
                github="github.com/yonathanhhadijaya"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Jamu Larisna"
                img={project1}
                link="jamu-larisna.vercel.app"
                type="Featured Project"
                github="github.com/yonathanhhadijaya"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Jamu Larisna"
                img={project1}
                link="jamu-larisna.vercel.app"
                type="Featured Project"
                github="github.com/yonathanhhadijaya"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
