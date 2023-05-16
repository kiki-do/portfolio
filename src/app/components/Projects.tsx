import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FaGulp, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import {
	SiCss3,
	SiJavascript,
	SiRedux,
	SiReduxsaga,
	SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SlideUp } from "./SlideUp";

const stackMap = (item: string) => {
	if (item === "react")
		return (
			<FaReact
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "redux-toolkit")
		return (
			<SiRedux
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "typescript")
		return (
			<SiTypescript
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "sass")
		return (
			<FaSass
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "gulp")
		return (
			<FaGulp
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "html")
		return (
			<FaHtml5
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "javascript")
		return (
			<SiJavascript
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "css")
		return (
			<SiCss3
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "framer-motion")
		return (
			<TbBrandFramerMotion
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
	else if (item === "saga")
		return (
			<SiReduxsaga
				size={30}
				className="hover:-translate-y-1 transition-transform cursor-pointer"
			/>
		);
};

const projects = [
	{
		name: "Parcel Project",
		description:
			"Parcel Project это стандартный макет, начало моего понимания создания лендинга.",
		image: "/parcel.png",
		github: "https://github.com/kiki-do/parcel_proj",
		link: "https://kiki-do.github.io/parcel_proj/#",
		stack: ["gulp", "sass", "javascript", "html"],
	},
	{
		name: "Background Changer",
		description:
			"Background Changer это первые шаги в добавления логики в проект.",
		image: "/background.png",
		github: "https://github.com/kiki-do/background_changer",
		link: "https://kiki-do.github.io/background_changer/",
		stack: ["css", "javascript", "html"],
	},

	{
		name: "React Sneakers",
		description:
			"React Sneakers - мое первое полноценное React-приложение о продаже кросовок.",
		image: "/sneakers.png",
		github: "https://github.com/kiki-do/react-sneakers",
		link: "https://kiki-do.github.io/react-sneakers/",
		stack: ["redux-toolkit", "javascript", "react", "sass"],
	},

	{
		name: "React Pizza",
		description:
			"React Pizza это первое введение в типизацию, а также использование thunk.",
		image: "/pizza.png",
		github: "https://github.com/kiki-do/pizza_project",
		link: "https://kiki-do.github.io/pizza_project/",
		stack: ["redux-toolkit", "typescript", "react", "sass"],
	},

	{
		name: "React Todo",
		inProgress: true,
		description:
			"React Todo - первое большое приложение, оно пока находится в стадии разработки, но в будущем можно будет выполнять авторизацию и создавать несколько листов задач.",
		image: "/todo.png",
		github: "https://github.com/kiki-do/pizza_project",
		link: "https://kiki-do.github.io/pizza_project/",
		stack: ["redux-toolkit", "typescript", "react", "sass"],
	},

	{
		name: "React Hotel Finder",
		description:
			"Hotel Finder это тестовое задание для собеседования, оно не полностью реализовано из-за отсутствия определенных фильтров в api, вы можете прочитать весь функционал в README.md на GitHub.",
		image: "/hotel.png",
		github: "https://github.com/kiki-do/pizza_project",
		link: "https://kiki-do.github.io/pizza_project/",
		stack: [
			"redux-toolkit",
			"typescript",
			"react",
			"sass",
			"saga",
			"framer-motion",
		],
	},
];

export const Projects = () => {
	return (
		<section id="projects">
			<h1 className="my-10 text-center font-bold text-4xl">
				Проекты
				<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
			</h1>

			<div className="flex flex-col space-y-28">
				{projects.map((project, idx) => {
					return (
						<div className="relative" key={idx}>
							{project.inProgress && (
								<span className="absolute top-6 left-0 px-5 text-white bg-neutral-600 rounded-sm rounded-e-sm hover:bg-teal-500 z-10 hover:transition-all hover:text-white">
									В разработке...
								</span>
							)}
							<SlideUp offset="-300px 0px -300px 0px">
								<div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
									<div className=" md:w-1/2">
										<Link href={project.link}>
											<Image
												src={project.image}
												alt=""
												width={1000}
												height={1000}
												className="rounded-xl shadow-xl hover:opacity-70"
											/>
										</Link>
									</div>
									<div className=" flex flex-col gap-5 mt-8 md:w-1/2">
										<h1 className="text-4xl font-bold mb-6">{project.name}</h1>
										<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
											{project.description}
										</p>
										<div className="flex flex-row align-bottom space-x-4">
											<Link href={project.github} target="_blank">
												<BsGithub
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
											<Link href={project.link} target="_blank">
												<BsArrowUpRightSquare
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
										</div>
										<div className="flex flex-row space-x-4">
											<h1 className="text-xl font-medium mb-6">
												Стек технологии:
											</h1>
											{project.stack.map(item => (
												<>{stackMap(item)}</>
											))}
										</div>
									</div>
								</div>
							</SlideUp>
						</div>
					);
				})}
			</div>
		</section>
	);
};
