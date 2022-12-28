import { extendTheme } from 'native-base'

export const THEME = extendTheme({
	colors: {
		gray: {
			700: '#0D0D0D',
			600: '#1A1A1A',
			500: '#262626',
			400: '#333333',
			300: '#808080',
			200: '#D9D9D9',
			100: '#F2F2F2'
		},
		blue: {
			500: '#4EA8DE',
			700: '#1E6F9F'
		},
		purple: {
			500: '#8284FA',
			700: '#5E60CE'
		},
		red: {
			400: '#E25858'
		},
		white: '#FFFFFF'
	},
	fonts: {
		heading: 'Inter_700Bold',
		body: 'Inter_400Regular'
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16
	}
})
