import { Text, TouchableOpacity, View } from 'react-native'
import { TaskProps } from '../../components/Task'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'

interface Props {
	data: TaskProps
	handleCheck: (id: string) => void
	handleDelete: (id: string) => void
}

export function Task({ data, handleCheck, handleDelete }: Props) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => handleCheck(data.id)}
				activeOpacity={0.7}
				style={data.checked ? styles.checked : styles.unchecked}
			>
				{data.checked && (
					<Ionicons name="checkmark-sharp" size={12} color="#F2F2F2" />
				)}
			</TouchableOpacity>

			<Text style={styles.taskTitle}>{data.title}</Text>

			<TouchableOpacity
				onPress={() => handleDelete(data.id)}
				activeOpacity={0.7}
			>
				<Ionicons name="trash-outline" size={24} color="#808080" />
			</TouchableOpacity>
		</View>
	)
}
