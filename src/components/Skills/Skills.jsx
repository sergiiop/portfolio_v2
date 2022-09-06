import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { mySkillsData } from '../../mocks/data'
import { FilterButton } from '../FilterButton/FilterButton'
import { SkillItem } from '../SkillItem/SkillItem'
import './Skills.css'

const Skills = () => {
	const [activeSkills, setActiveSkills] = useState('all')
	const [filtered, setFiltered] = useState(mySkillsData)
	const [skills, setSkills] = useState(mySkillsData)

	const buttonProperties = [
		{ name: 'All', genre: 'all' },
		{ name: 'Frontend', genre: 'frontend' },
		{ name: 'Backend', genre: 'backend' },
		{ name: 'DB', genre: 'db' },
		{ name: 'Tools', genre: 'others' }
	]

	return (
		<>
			<div className='skills-container--header'>
				<FilterButton
					items={skills}
					setFiltered={setFiltered}
					activeItem={activeSkills}
					setActiveItem={setActiveSkills}
					buttonProperties={buttonProperties}
				/>
			</div>
			<motion.div
				layout
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='skills-container--content'
			>
				<AnimatePresence>
					{filtered.map((skill, id) => {
						return <SkillItem key={id} skill={skill} />
					})}
				</AnimatePresence>
			</motion.div>
		</>
	)
}

export { Skills }
