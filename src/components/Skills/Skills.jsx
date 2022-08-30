import { useState, useEffect } from 'preact/hooks'
import { FilterButton } from '../FilterButton/FilterButton'

import { mySkillsData } from '../../mocks/data'
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
		{ name: 'Data Bases', genre: 'db' },
		{ name: 'Others', genre: 'others' }
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
			<div className='skills-container--content'>
				{filtered.map((skill, id) => {
					return <SkillItem key={id} skill={skill} />
				})}
			</div>
		</>
	)
}

export { Skills }
