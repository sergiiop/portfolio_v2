import React from 'react'
import './SkillItem.css'

const SkillItem = ({ skill }) => {
	return (
		<div className='skill-item-container'>
			<h2 className='ff-bold fw-bold fs-600'>{skill.name}</h2>
			<img src={skill.pathIcon} alt='Skill Image' />
		</div>
	)
}

export { SkillItem }
