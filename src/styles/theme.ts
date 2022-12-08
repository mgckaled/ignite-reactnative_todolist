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
	fontConfig: {
		Inter: {
			100: {
				normal: 'Inter_100Thin'
			},
			200: {
				normal: 'Inter_200ExtraLight'
			},
			300: {
				normal: 'Inter_300Light'
			},
			400: {
				normal: 'Inter_400Regular'
			},
			500: {
				normal: 'Inter_500Medium'
			},
			600: {
				normal: 'Inter_600SemiBold'
			},
			700: {
				normal: 'Inter_700Bold'
			},
			800: {
				normal: 'Inter_800ExtraBold'
			},
			900: {
				normal: 'Inter_900Black'
			}
		}
	},
	fonts: {
		heading: 'Inter',
		body: 'Inter'
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16
	}
})
