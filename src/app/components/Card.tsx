"use client";
import React from "react";
import Image from "next/image";

import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";

export const Card = () => {
	return (
		<section id="home">
			<div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
				<div className="md:mt-2 md:w-3/5">
					<h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
						Привет, я Даниил!
					</h1>
					<p className="text-lg mt-4 mb-6 md:text-2xl">
						Я&nbsp;
						<span className="font-semibold text-teal-600">
							Frontend-разработчик&nbsp;
						</span>
						,живу в Санкт-Петербурге. Работаю над созданием сайтов и
						web-приложении, которые делает жизнь проще и осмысленнее.
					</p>
					<Link
						to="projects"
						className="cursor-pointer flex justify-center items-center text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}
					>
						Проекты
					</Link>
				</div>
			</div>
			<div className="flex flex-row items-center text-center justify-center ">
				<Link
					to="about"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<HiArrowDown size={35} className="animate-bounce cursor-pointer" />
				</Link>
			</div>
		</section>
	);
};
