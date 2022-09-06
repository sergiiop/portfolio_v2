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
	// const [position, setPosition] = useState(0)
	// const [widthProject, setWidthProject] = useState(0)
	// const carousel = useRef(null)
	// const [widthContainer, setWidthContainer] = useState(0)
	// const width = useWindowDimensions()
	// const [limitLeft, setLimitLeft] = useState(0)
	// const [count, setCount] = useState(0)

	const { useIcons } = useAssets()
	const { LeftArrow, RigthArrow } = useIcons()

	const saveProjects = () => {
		setProjects(ProjectsData)
		setFiltered(ProjectsData)
	}

	useEffect(() => {
		saveProjects()
	}, [])

	// useEffect(() => {
	// 	if (width.width < 680) {
	// 		setWidthContainer(filtered.length * 100)
	// 		setLimitLeft(filtered.length - 1)
	// 	} else if (width.width >= 680 && width.width < 1180) {
	// 		setWidthContainer(filtered.length * 50)
	// 		setLimitLeft(filtered.length - 2)
	// 	} if (width.width >= 1180) {
	// 		setWidthContainer(filtered.length * 33.3)
	// 		setLimitLeft(filtered.length - 3)
	// 	}
	// }, [filtered, width])

	// useEffect(() => {
	// 	carousel.current.style.transform = `translateX(${position}px)`
	// }, [position])

	// const moveCarousel = (direction) => {
	// 	// cuando de click en el button se tiene que desplazar el carousel
	// 	// direccion ?
	// 	if (direction === 'rigth') {
	// 		setPosition((prev) => prev - (widthProject + 5))
	// 		setCount((prev) => prev + 1)
	// 	}

	// 	if (direction === 'left') {
	// 		setPosition((prev) => prev + (widthProject + 5))
	// 		setCount((prev) => prev - 1)
	// 	}
	// }

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
