import { useAssets } from '../../public/assets'

const { useIcons, useImages } = useAssets()

const {
	Docker,
	Express,
	Git,
	HTMLyCSS,
	JavaScript,
	Mysql,
	NodeJS,
	Postgres,
	Python,
	React,
	Redux,
	Mongo,
	Vite,
	Astro
} = useIcons()

const { TodoApp, Portfolio, ACI, KalaBasic, Prematix, Weather, PortfolioV2 } = useImages()

export const mySkillsData = [
	{
		name: 'JavaScript',
		pathIcon: JavaScript,
		genre: 'language'
	},
	{
		name: 'Python',
		pathIcon: Python,
		genre: 'language'
	},
	{
		name: 'HTML y CSS',
		pathIcon: HTMLyCSS,
		genre: 'frontend'
	},
	{
		name: 'ReactJS',
		pathIcon: React,
		genre: 'frontend'
	},

	{
		name: 'Redux',
		pathIcon: Redux,
		genre: 'frontend'
	},
	{
		name: 'NodeJS',
		pathIcon: NodeJS,
		genre: 'backend'
	},
	{
		name: 'ExpressJS',
		pathIcon: Express,
		genre: 'backend'
	},
	{
		name: 'MongoDB',
		pathIcon: Mongo,
		genre: 'db'
	},
	{
		name: 'MySQL',
		pathIcon: Mysql,
		genre: 'db'
	},
	{
		name: 'PostgreSQL',
		pathIcon: Postgres,
		genre: 'db'
	},
	{
		name: 'Git',
		pathIcon: Git,
		genre: 'others'
	},
	{
		name: 'Docker',
		pathIcon: Docker,
		genre: 'others'
	},
	{
		name: 'Vite',
		pathIcon: Vite,
		genre: 'others'
	},
	{
		name: 'Astro',
		pathIcon: Astro,
		genre: 'frontend'
	}
]

export const ProjectsData = [
	{
		title: 'Prematix',
		description:
			"Prematix was my thesis project, it's a multy-platform application that allows fathers to monitorize their premature babies while they are in the intensive care unit, I was in charge of the functionality of the video calls of the application",
		image: Prematix,
		technologies: [
			mySkillsData[0].name,
			mySkillsData[3].name,
			'React Native',
			'Firebase',
			'WebRTC',
			mySkillsData[10].name
		],
		live: null,
		github: 'https://github.com/ramiroguzmanc/Prematix-web',
		genre: 'professional'
	},
	{
		title: 'Todo List',
		description:
			'A todo list application that allows users to create, edit, and delete tasks, this application was built using React. I created this project to learn React.',
		image: TodoApp,
		technologies: [mySkillsData[0].name, mySkillsData[3].name, mySkillsData[12].name],
		github: 'https://github.com/sergiiop/To-Do-List',
		live: 'https://sergiiop.github.io/To-Do-List/',
		genre: 'personal'
	},
	{
		title: 'Portfolio',
		description: 'This is my portfolio website. It was built using React.',
		image: Portfolio,
		technologies: [mySkillsData[0].name, mySkillsData[3].name, mySkillsData[12].name],
		github: 'https://github.com/sergiiop/my_portfolio',
		genre: 'personal'
	},
	{
		title: 'ACI ITALIANA',
		description:
			'This is a landing page for a company named ACI ITALIANA that provides advisory services for obtaining Italian citizenship. This project was built using HTML y CSS.',
		image: ACI,
		technologies: [mySkillsData[2].name],
		github: 'https://github.com/juanfug/Aci',
		live: 'https://acitaliana.com.co/',
		genre: 'professional'
	},
	{
		title: 'Weather App',
		description: 'this is an app i made to practice reactjs and api consumptions with axios',
		image: Weather,
		technologies: [mySkillsData[3].name, mySkillsData[12].name],
		github: 'https://github.com/sergiiop/WeatherApp',
		live: 'https://sergiiop.github.io/WeatherApp/',
		genre: 'personal'
	},
	{
		title: 'KALA BASIC',
		description:
			'This is a eccomerce website for a company named KALA BASIC located in Montería, Colombia that sells basic and printed t-shirts. This project was built using WordPress.',
		image: KalaBasic,
		technologies: ['WordPress'],
		github: null,
		live: 'https://kalabasic.com/',
		genre: 'professional'
	},
	{
		title: 'Portfolio V2',
		description: 'This is my portfolio website V2. It was built using Astro and a little React.',
		image: PortfolioV2,
		technologies: [
			mySkillsData[0].name,
			mySkillsData[3].name,
			mySkillsData[12].name,
			mySkillsData[13].name
		],
		github: 'https://github.com/sergiiop/portfolio_v2',
		live: '/',
		genre: 'personal'
	}
]

export const EducationQualityData = [
	{
		title: 'Information Systems Engineer',
		subtitle: 'Universidad del Sinú',
		description:
			'I completed my studies in Information Systems Engineer at the Universidad del Sinú in Montería, Colombia. I was part of the team that developed the a multi-platform application that allows fathers to monitorize their premature babies while they are in the intensive care unit.',
		year: '2022'
	},
	{
		title: 'Mísion TIC 2022',
		subtitle: 'Universidad Pontificia Bolivariana',
		description:
			'I participated in the programa Mision TIC 2022 that was created by the ministry of technology of the Colombia. This program was created to train 100000 young people in 3 years. The enphasis was learning programming and aplications web with a intensity of 800 hours',
		year: '2021'
	},
	{
		title: 'JavaScript School',
		subtitle: 'Platzi',
		description:
			'I learned JavaScript from Platzi. I learned how to use the JavaScript language and how to use the JavaScript framework ReactJS, finally I finished the career of javascript developer in agoust 2020.',
		year: '2020'
	}
]

// export const SocialData = [
// 	{
// 		icon: FiLinkedin,
// 		label: 'Linkedin',
// 		path: 'https://www.linkedin.com/in/sergiio-perez/'
// 	},
// 	{
// 		icon: FiGithub,
// 		label: 'Github',
// 		path: 'https://github.com/sergiiop'
// 	},
// 	{
// 		icon: AiOutlineWhatsApp,
// 		label: 'WhatsApp',
// 		path: 'https://wa.link/c7lxrs'
// 	}
// ]
