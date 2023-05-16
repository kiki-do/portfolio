import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

export const Footer = () => {
	return (
		<footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
			<hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
			<div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
				<div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
					© 2023 Daniil Antipov<a href="/" className="hover:underline"></a>
				</div>
				<div className="flex flex-row items-center justify-center space-x-2 mb-1">
					<a href="https://github.com/kiki-do" rel="noreferrer" target="_blank">
						<AiOutlineGithub
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
							size={30}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8%D0%BB-%D0%B0%D0%BD%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-155266247/"
						rel="noreferrer"
						target="_blank"
					>
						<AiOutlineLinkedin
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
							size={30}
						/>
					</a>
					<a href="mailto:kiki1881@yandex.ru" target="_blank">
						<FiMail
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
							size={30}
						/>
					</a>
					<a href="https://t.me/kiki_1881" rel="noreferrer" target="_blank">
						<RiTelegramLine
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
							size={30}
						/>
					</a>

					<a
						href="https://disk.yandex.ru/i/-LmKJqkk19NPwQ"
						rel="noreferrer"
						target="_blank"
					>
						<span className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100">
							HeadHunter
						</span>
					</a>
				</div>
			</div>
		</footer>
	);
};
