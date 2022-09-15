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

const {
	TodoApp,
	Portfolio,
	ACI,
	KalaBasic,
	Prematix,
	Weather,
	PortfolioV2,
	Batatabit,
	BlogsPlantilla,
	Cientifico,
	GoogleClone,
	PensionateLanding,
	ManageLanding,
	WorkShops
} = useImages()

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
		title: 'WorkShops',
		description:
			'In this project are the two workshops worked on in the dom manipulation course, in which I learned how to use the DOM API to read, add, modify, delete nodes, know how Events work in the DOM and use them to make a page interactive',
		image: WorkShops,
		technologies: [mySkillsData[0].name],
		github: 'https://github.com/sergiiop/DOM-Manipulation',
		live: 'https://sergiiop.github.io/DOM-Manipulation/',
		genre: 'personal'
	},
	{
		title: 'Todo List',
		description:
			'A todo list application that allows users to create, edit, and delete tasks, this application was built using React. I created this project to learn React.',
		image: TodoApp,
		technologies: [mySkillsData[3].name, mySkillsData[12].name],
		github: 'https://github.com/sergiiop/To-Do-List',
		live: 'https://sergiiop.github.io/To-Do-List/',
		genre: 'personal'
	},
	{
		title: 'Portfolio V1',
		description:
			'This was the first version of my portfolio that I built, I did it with React for fun',
		image: Portfolio,
		technologies: [mySkillsData[3].name, mySkillsData[12].name],
		github: 'https://github.com/sergiiop/my_portfolio',
		live: 'https://sergiiop.github.io/my_portfolio_v1/',
		genre: 'personal'
	},
	{
		title: 'Batatabit',
		description:
			'This is a project from the Mobile-First course at Platzi, in which I learned how to make a page mobile-first using HTML and CSS',
		image: Batatabit,
		technologies: [mySkillsData[2].name],
		github: 'https://github.com/sergiiop/Batabit',
		live: 'https://sergiiop.github.io/Batabit/',
		genre: 'personal'
	},
	{
		title: 'Manage Landing',
		description:
			'This project is the solution to a challenge proposed by the Frontend Mentor Page, in which I improved my html layout skills',
		image: ManageLanding,
		technologies: [mySkillsData[2].name, mySkillsData[12].name],
		github: 'https://github.com/sergiiop/manage-landing-page',
		live: 'https://sergiiop.github.io/manage-landing-page/',
		genre: 'personal'
	},
	{
		title: '100tifico',
		description:
			'This is a project from the SPA with Vanilla JS course where you learned how to create a single page application using only vanillaJS and dom manipulation in platzi',
		image: Cientifico,
		technologies: [mySkillsData[0].name],
		github: 'https://github.com/sergiiop/SPA-100tifico',
		live: 'https://sergiiop.github.io/SPA-100tifico/',
		genre: 'personal'
	},
	{
		title: 'Blog template',
		description:
			'This is a project of the Definitive Course of HTML and CSS in Platzi, in which I learned html and css a little more deeply',
		image: BlogsPlantilla,
		technologies: [mySkillsData[2].name],
		github: 'https://github.com/sergiiop/My-Blog',
		live: 'https://sergiiop.github.io/My-Blog/',
		genre: 'personal'
	},
	{
		title: 'GoogleClone',
		description:
			'This project was one of my first approaches to html and css is from the Practical Course of HTML and CSS in Platzi',
		image: GoogleClone,
		technologies: [mySkillsData[2].name],
		github: 'https://github.com/sergiiop/GoogleClone',
		live: 'https://sergiiop.github.io/GoogleClone/',
		genre: 'personal'
	},
	{
		title: 'Pensionate Landing',
		description:
			'This project was the first landing page I made, I built it using bootstrap and it"s from the Bootstrap Course at Platzi',
		image: PensionateLanding,
		technologies: [mySkillsData[2].name, 'Bootstrap'],
		github: 'https://github.com/sergiiop/Landing',
		live: 'https://sergiiop.github.io/Landing/',
		genre: 'personal'
	},
	{
		title: 'Prematix',
		description:
			"Prematix was my thesis project, it's a multy-platform application that allows fathers to monitorize their premature babies while they are in the intensive care unit, I was in charge of the functionality of the video calls of the application",
		image: Prematix,
		technologies: [mySkillsData[3].name, 'Firebase', 'WebRTC'],
		live: null,
		github: 'https://github.com/ramiroguzmanc/Prematix-web',
		genre: 'professional'
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
		technologies: [mySkillsData[3].name, mySkillsData[12].name, mySkillsData[13].name],
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
		year: '2022',
		credential: 'https://drive.google.com/file/d/1lrni-LeldWc-PJZIfVSj8okYMxPMbsMR/view?usp=sharing'
	},
	{
		title: 'Mísion TIC 2022',
		subtitle: 'Universidad Pontificia Bolivariana',
		description:
			'The program is made up of a basic training cycle (basic programming, fundamentals of programming and software development of 600 hours) and a deepening cycle (web application development). In this program I lead a work team of 5 people in which we carry out a consultancy application',
		year: '2021',
		credential: 'https://drive.google.com/file/d/13Ldix3C6djb2E2QGPlqA2QeBqPbhilDG/view?usp=sharing'
	},
	{
		title: 'Full Stack Developer career with JavaScript',
		subtitle: 'Platzi',
		description:
			'In this career I learned to use the MERN and PERN stack, Add interactivity and DOM manipulation to applications with JavaScript and React.js. Work with JavaScript on the backend using Node.js, Express.js, and PostgreSQL. Finally add authentication flows using Passport.js and JSON Web Tokens.',
		year: '2020',
		credential: 'https://platzi.com/p/sergiiolperez/ruta/100-escuela-javascript/diploma/detalle/'
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
