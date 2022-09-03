import React, { useState, useEffect, useRef } from 'react'
import { ProjectsData } from '../../mocks/data.js'
import { FilterButton } from '../FilterButton/FilterButton.tsx'
import { Project } from './Project.jsx'
import { useAssets } from '../../assets'

import './Projects.css'
import useWindowDimensions from './../../assets/hooks/useWindowDimensions'

const buttonProperties = [
	{ name: 'All', genre: 'all' },
	{ name: 'Personal Projects', genre: 'personal' },
	{ name: 'Professional Projects', genre: 'professional' }
]

const Projects = () => {
	const [projects, setProjects] = useState([])
	const [filtered, setFiltered] = useState([])
	const [activeProject, setActiveProject] = useState('all')
	const [position, setPosition] = useState(0)
	const [widthProject, setWidthProject] = useState(0)
	const carousel = useRef(null)
	const [widthContainer, setWidthContainer] = useState(0)
	const width = useWindowDimensions()
	const [limitLeft, setLimitLeft] = useState(0)
	const [count, setCount] = useState(0)

	const saveProjects = () => {
		setProjects(ProjectsData)
		setFiltered(ProjectsData)
	}

	useEffect(() => {
		saveProjects()
	}, [])

	useEffect(() => {
		if (width.width < 680) {
			setWidthContainer(filtered.length * 100)
			setLimitLeft(filtered.length - 1)
		} else if (width.width >= 680 && width.width < 1180) {
			setWidthContainer(filtered.length * 50)
			setLimitLeft(filtered.length - 2)
		} if (width.width >= 1180) {
			setWidthContainer(filtered.length * 33.3)
			setLimitLeft(filtered.length - 3)
		}
	}, [filtered, width])

	const { useIcons } = useAssets()
	const { LeftArrow, RigthArrow } = useIcons()

	useEffect(() => {
		carousel.current.style.transform = `translateX(${position}px)`
	}, [position])

	const moveCarousel = (direction) => {
		// cuando de click en el button se tiene que desplazar el carousel
		// direccion ?
		if (direction === 'rigth') {
			setPosition((prev) => prev - (widthProject + 5))
			setCount((prev) => prev + 1)
		}

		if (direction === 'left') {
			setPosition((prev) => prev + (widthProject + 5))
			setCount((prev) => prev - 1)
		}
	}


	return (
		<div className='projects--section'>
			<h1>Projects</h1>
			<FilterButton
				items={projects}
				setFiltered={setFiltered}
				activeItem={activeProject}
				setActiveItem={setActiveProject}
				buttonProperties={buttonProperties}
				handlePosition={setPosition}
				handleCount={setCount}
			/>
			<div className='projects-carousel'>

				{ position < 0 && (
					<button className="carousel-button carousel-button--left" onClick={() => moveCarousel('left')}>
						<img src={LeftArrow} alt="" />
					</button>
				)}
				<div ref={carousel} className='carousel-track--container' style={{ '--width': `${widthContainer}px` }}>
					{filtered.map((project, id) => {
						return <Project key={id} project={project} setWidthProject={setWidthProject} />
					})}
				</div>
				{
					(count < limitLeft) && (

						<button className="carousel-button carousel-button--rigth" onClick={() => moveCarousel('rigth')}>
							<img src={RigthArrow} />
						</button>
					)
				}
			</div>
		</div>
	)
}

export { Projects }
