import { useEffect } from 'react'
import './FilterButton.css'

const FilterButton = ({
	items,
	setFiltered,
	activeItem,
	setActiveItem,
	buttonProperties,
	handlePosition,
	handleCount
}) => {
	useEffect(() => {
		if (activeItem === 'all') {
			setFiltered(items)
			return
		}
		const filtered = items.filter((item) => {
			return item.genre === activeItem
		})
		setFiltered(filtered)
	}, [activeItem])

	const handleClick = (button) => {
		setActiveItem(button.genre)
		handlePosition(0)
		handleCount(0)
	}

	return (
		<div className='button-container'>
			{buttonProperties.map((button) => {
				return (
					<button
						key={button.name}
						onClick={() => handleClick(button)}
						className={button.genre === activeItem ? 'active' : ''}
					>
						{button.name}
					</button>
				)
			})}
		</div>
	)
}

export { FilterButton }
