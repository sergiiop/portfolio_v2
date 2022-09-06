import React from 'react'
import './SkillItem.css'
import { motion } from 'framer-motion'

const SkillItem = ({ skill }) => {
	return (
		<motion.article
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className='skill-item-container'
		>
			<h2 className='ff-bold fw-bold fs-600'>{skill.name}</h2>
			<img src={skill.pathIcon} alt='Skill Image' />
		</motion.article>
	)
}

export { SkillItem }
