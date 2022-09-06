import React from 'react'
import './Project.css'
import { useAssets } from '../../../public/assets'

const colorTechnology = {
	ReactJS: '#1BCEFF',
	'HTML y CSS': 'linear-gradient(to right top, #1572b6, #7965bc, #bd4ca1, #e3396b, #e34f26)',
	JavaScript: '#FFF539',
	Nodejs: '#339933',
	Expressjs: '#000000',
	WordPress: '#21759B',
	'React Native': '#1BCEFF',
	Firebase: '#FFCA28',
	Git: '#F05032',
	WebRTC: '#333333',
	Vite: '#B1B5FB',
	Astro: '#FF5D01'
}

const keysColorsBlack = ['JavaScript', 'ReactJS', 'Astro', 'React Native', 'Firebase', 'Vite']

const definedStyles = (technology) => {
	const isBlack = keysColorsBlack.includes(technology)
	let color
	isBlack ? color = 'hsl(var(--clr-almost-dark))' : color = 'hsl(var(--clr-white))'
	return {
		background: colorTechnology[technology],
		color
	}
}


const Project = ({ project }) => {
	const { useIcons } = useAssets()
	const { Githubv2, Live } = useIcons()

	return (
		<div className='project-container'>
			<picture className='project-container--image'>
				<img src={project.image} alt={project.title} />
			</picture>
			<div className='project-container--content'>
				<h1 className='fs-700 ff-bold fw-bold'>{project.title}</h1>
				<div className='project-techs'>
					{project.technologies.map((technology, index) => {
						return (
							<span
								key={index}
								className='fw-bold project-tech ff-bold fs-350'
								style={definedStyles(technology)}
							>
								{technology}
							</span>
						)
					})}
				</div>
				<p>{project.description}</p>
				<div className='sources-container'>
					{project.github && (
						<a href='' className='button-src'>
							<span className='visually-hidden'>Codigo Fuente</span>
							<img src={Githubv2} alt='' />
						</a>
					)}
					{project.live && (
						<a href='' className='button-src live'>
							<span className='visually-hidden'>Site Live</span>
							<img src={Live} alt='' />
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export { Project }
