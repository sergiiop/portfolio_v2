import { useIcons } from './icons'
import { useImages } from './images'
import { useDocs } from './docs'

const useAssets = () => {
	return {
		useIcons,
		useImages,
		useDocs
	}
}

export { useAssets }
