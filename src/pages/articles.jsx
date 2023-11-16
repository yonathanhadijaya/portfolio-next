import Head from "next/head";
import React, { useRef } from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const imgRef = useRef(null);

	function handleMouse(event) {
		imgRef.current.style.display = "inline-block";
		x.set(event.PageX);
		y.set(-10);
	}
	function handleMouseLeave(event) {
		imgRef.current.style.display = "none";
		x.set(0);
		y.set(0);
	}

	return (
		<Link
			href={link}
			target="_blank"
			onMouseMove={handleMouse}
			onMouseLeave={handleMouseLeave}
		>
			<h2 className="capitalize text-xl font-semibold hover:underline">
				{title}
			</h2>
			<FramerImage
				style={{ x: x, y: y }}
				ref={imgRef}
				src={img}
				alt={title}
				className="z-10 w-96 h-auto hidden absolute rounded-lg"
			/>
		</Link>
	);
};

const Article = ({ img, title, date, link }) => {
	return (
		<li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-b-4 border-r-4">
			<MovingImage title={title} img={img} link={link} />
			<span className="text-primary font-semibold pl-4">{date}</span>
		</li>
	);
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
	return (
		<li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
			<Link
				href={link}
				target="_blank"
				className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
			>
				<FramerImage
					src={img}
					alt={title}
					className="w-full h-auto"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				/>
			</Link>
			<Link href={link} target="_blank">
				<h2 className="capitalize text-2xl font-bold mt-4 my-2 hover:underline">
					{title}
				</h2>
			</Link>
			<p className="text-sm mb-2">{summary}</p>
			<span className="text-primary font-semibold">{time}</span>
		</li>
	);
};

const articles = () => {
	return (
		<>
			<Head>
				<title>Yonathan | Articles Page</title>
				<meta
					name="description"
					content="HTML | CSS | JavaScript | Tailwind | JSX | TSX | MySQL"
				/>
			</Head>
			<main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
				<Layout>
					<AnimatedText
						text="Words Can Change The World!"
						className="mb-16 !text-6xl"
					/>
					<ul className="grid grid-cols-2 gap-16">
						<FeaturedArticle
							title="Build A Custom Pagination Component In Reactjs From Scratch"
							summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
							time="9 min read"
							link="/"
							img={article1}
						/>
						<FeaturedArticle
							title="Build A Custom Pagination Component In Reactjs From Scratch"
							summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
							time="9 min read"
							link="/"
							img={article2}
						/>
					</ul>
					<h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
						All Articles
					</h2>
					<ul>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							date="November 15, 2023"
							link="/"
							img={article3}
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							date="November 15, 2023"
							link="/"
							img={article3}
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							date="November 15, 2023"
							link="/"
							img={article3}
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							date="November 15, 2023"
							link="/"
							img={article3}
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							date="November 15, 2023"
							link="/"
							img={article3}
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							date="November 15, 2023"
							link="/"
							img={article3}
						/>
						<Article
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							date="November 15, 2023"
							link="/"
							img={article3}
						/>
					</ul>
				</Layout>
			</main>
		</>
	);
};

export default articles;
