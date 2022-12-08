import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center'
	},
	line: {
		borderTopColor: THEME.colors.gray[300],
		borderTopWidth: StyleSheet.hairlineWidth
	},
	image: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50,
		marginBottom: 10
	},
	textRegular: {
		color: THEME.colors.gray[300],
		fontSize: THEME.fontSizes.sm,
		textAlign: 'center'
	},
	textBold: {
		color: THEME.colors.gray[300],
		fontSize: THEME.fontSizes.sm,
		textAlign: 'center',
		fontWeight: 'bold'
	}
})
