import { useEffect } from 'preact/hooks'
import './FilterButton.css'

const FilterButton = ({ items, setFiltered, activeItem, setActiveItem, buttonProperties }) => {
	useEffect(() => {
		if (activeItem === 'all') {
			setFiltered(items)
			return
		}
		const filtered = items.filter((item) => {
			return item.genre === activeItem
		})
		console.log(filtered)
		setFiltered(filtered)
	}, [activeItem])

	useEffect(() => {
		console.log('hellow')
	}, [])
	return (
		<div className='button-container'>
			{buttonProperties.map((button) => {
				return (
					<button
						key={button.name}
						onClick={() => {
							setActiveItem(button.genre)
						}}
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
