import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column'
	},
	imageContainer: {
		flexDirection: 'row',
		paddingTop: 48,
		paddingBottom: 72,
		backgroundColor: '#0D0D0D',
		justifyContent: 'center'
	},
	content: {
		flex: 1,
		backgroundColor: '#1A1A1A',
		paddingHorizontal: 24
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 32,
		marginBottom: 24
	},
	listSeparator: {
		margin: 4
	}
})
