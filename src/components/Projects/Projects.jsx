import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ProjectsData } from '../../mocks/data.js'
import { FilterButton } from '../FilterButton/FilterButton.tsx'
import { Project } from './Project.jsx'
import { useAssets } from '../../../public/assets'

import './Projects.css'

const buttonProperties = [
	{ name: 'All', genre: 'all' },
	{ name: 'Personal Projects', genre: 'personal' },
	{ name: 'Professional Projects', genre: 'professional' }
]

const Projects = () => {
	const [projects, setProjects] = useState([])
	const [filtered, setFiltered] = useState([])
	const [activeProject, setActiveProject] = useState('all')

	const saveProjects = () => {
		setProjects(ProjectsData)
		setFiltered(ProjectsData)
	}

	useEffect(() => {
		saveProjects()
	}, [])

	return (
		<div className='projects--section'>
			<FilterButton
				items={projects}
				setFiltered={setFiltered}
				activeItem={activeProject}
				setActiveItem={setActiveProject}
				buttonProperties={buttonProperties}
			/>
			<div className='slide-container'>
				<Swiper
					slidesPerView={3}
					spaceBetween={25}
					loop={true}
					grabCursor={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
						dynamicBullets: true
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper slide-content'
					breakpoints={{
						0: {
							slidesPerView: 1
						},
						640: {
							slidesPerView: 2
						},
						950: {
							slidesPerView: 3
						}
					}}
				>
					{filtered.map((project, id) => {
						return (
							<SwiperSlide key={id}>
								<Project project={project} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export { Projects }
