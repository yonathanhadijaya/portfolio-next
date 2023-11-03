import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rouded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
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
        <div>
          <Link href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank">
            Visit Project
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
          <div className="grid grid-cols-12 gap-24">
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
            <div className="col-span-6">Project 1</div>
            <div className="col-span-6">Project 2</div>
            <div className="col-span-12">Featured Projects</div>
            <div className="col-span-6">Project 3</div>
            <div className="col-span-6">Project 4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
