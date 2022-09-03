import React, { useLayoutEffect, useRef } from 'react'
import './Project.css'

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

const Project = ({ project, setWidthProject }) => {
	const ref = useRef(null)

	useLayoutEffect(() => {
		setWidthProject(ref.current.offsetWidth)
	}, [])

	return (
		<article ref={ref} className='project-container'>
			<picture className='project-container--image'>
				<img src={project.image} alt={project.title} />
			</picture>
			<div className='project-container--content'>
				<h1 className='fs-secondary-heading fw-bold'>{project.title}</h1>
				<p>{project.description}</p>
				<div className='project-techs'>
					{project.technologies.map((technology, index) => {
						return <span key={index} className='fw-bold project-tech' style={{ background: colorTechnology[technology] }}>{technology}</span>
					})}
				</div>
			</div>
		</article>
	)
}

export { Project }
