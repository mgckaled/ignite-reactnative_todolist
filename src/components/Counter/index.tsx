import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

interface Props {
	label: string
	value: number
	color: string
}

export function Counter({ label, value, color }: Props) {
	return (
		<View style={styles.container}>
			<Text style={[styles.label, { color }]}>{label}</Text>

			<View style={styles.countContainer}>
				<Text style={styles.count}>{value}</Text>
			</View>
		</View>
	)
}
