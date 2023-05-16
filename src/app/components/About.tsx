import Image from "next/image";

const skills = [
	{ skill: "HTML" },
	{ skill: "CSS" },
	{ skill: "SCSS" },
	{ skill: "JavaScript" },
	{ skill: "TypeScript" },
	{ skill: "React" },
	{ skill: "Next.js" },
	{ skill: "Tailwind CSS" },
	{ skill: "GitHub" },
	{ skill: "Redux-Toolkit" },
	{ skill: "Redux-Thunk" },
	{ skill: "MobX	" },
];

export const About = () => {
	return (
		<section id="about">
			<div className="my-12 pb-12 md:pt-16 md:pb-48">
				<h1 className="text-center font-bold text-4xl">
					О себе
					<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
				</h1>

				<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
					<div className="md:w-1/2 ">
						<h1 className="text-center text-2xl font-bold mb-6 md:text-left">
							Узнайте меня!
						</h1>
						<p>
							Привет, меня зовут Даниил, я&nbsp;
							<span className="font-bold">{"амбициозный"}</span>,&nbsp;
							<span className="font-bold">{"самомотивированный"}</span>,&nbsp;
							и&nbsp;
							<span className="font-bold">{"целеустремленный"}</span>{" "}
							frontend-разработчик, живущий в Санкт-Петербурге, Россия.
						</p>
						<br />
						<p>
							Я студент заочной формы университета ГУАП по направлению
							прикладная информатика и решил развиваться в области
							frontend-разработки, так как нашел ее очень интересной и
							востребованной.
						</p>
						<br />
						<p>
							Также у меня есть около 1,5 лет коммерческого опыта и я могу
							показать и рассказать о своем опыте, при дальнейшем общении с
							компанией.
						</p>
						<br />
						<p>
							Я считаю, что никогда не стоит&nbsp;
							<span className="font-bold text-teal-500">
								останавливаться в развитии
							</span>{" "}
							и это то, к чему я стремлюсь, у меня есть страсть к технологиям и
							желание всегда расширять границы возможного. Я с нетерпением жду,
							куда приведет меня моя карьера, и всегда открыт для новых
							возможностей.
						</p>
					</div>
					<div className="text-center md:w-1/2 md:text-left">
						<h1 className="text-2xl font-bold mb-6">Мой стек</h1>
						<div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
							{skills.map((item, idx) => {
								return (
									<p
										key={idx}
										className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-teal-500 hover: cursor-pointer  hover:text-white hover:transition-all"
									>
										{item.skill}
									</p>
								);
							})}
						</div>
						<Image
							src="/about.gif"
							alt=""
							width={425}
							height={425}
							className="rounded-xl hidden md:block md:relative md:top-16 md:left-5 md:z-0"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
