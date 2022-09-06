import React from 'react'
import './Project.css'
import { useAssets } from '../../assets'

const colorTechnology = {
	ReactJS: '#61DAFB',
	'HTML y CSS': 'linear-gradient(to right top, #1572b6, #7965bc, #bd4ca1, #e3396b, #e34f26)',
	JavaScript: '#F7DF1E',
	Nodejs: '#339933',
	Expressjs: '#000000',
	WordPress: '#21759B',
	'React Native': '#61DAFB',
	Firebase: '#FFCA28',
	Git: '#F05032',
	WebRTC: '#333333',
	Vite: '#646CFF',
	Astro: '#FF5D01'
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
				<p>{project.description}</p>
				<div className='project-techs'>
					{project.technologies.map((technology, index) => {
						return (
							<span
								key={index}
								className='fw-bold project-tech ff-bold fs-350'
								style={{ background: colorTechnology[technology] }}
							>
								{technology}
							</span>
						)
					})}
				</div>
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
