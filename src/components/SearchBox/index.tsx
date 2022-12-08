import { TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'

interface Props {
	value: string
	setValue: (value: string) => void
	handleAddItem: () => void
}

export function SearchBox({ value, setValue, handleAddItem }: Props) {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder="Adicione uma nova tarefa"
				placeholderTextColor="#808080"
				value={value}
				onChangeText={text => setValue(text)}
				returnKeyType="done"
				onSubmitEditing={handleAddItem}
			/>

			<View style={styles.separator} />

			<TouchableOpacity
				style={styles.addButton}
				activeOpacity={0.7}
				onPress={handleAddItem}
			>
				<MaterialIcons name="add-task" size={24} color="white" />
			</TouchableOpacity>
		</View>
	)
}
