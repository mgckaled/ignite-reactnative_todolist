import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#333',
		backgroundColor: '#262626',
		justifyContent: 'space-between',
		padding: 16
	},
	unchecked: {
		width: 24,
		height: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: '#4EA8DE',
		alignItems: 'center',
		justifyContent: 'center'
	},
	checked: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: '#5E60CE',
		alignItems: 'center',
		justifyContent: 'center'
	},
	taskTitle: {
		flex: 1,
		color: '#F2F2F2',
		fontSize: 14,
		marginHorizontal: 8
	},
	taskTitleChecked: {
		flex: 1,
		color: '#808080',
		fontSize: 14,
		marginHorizontal: 8,
		textDecorationLine: 'line-through'
	}
})
