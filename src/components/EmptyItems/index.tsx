import { Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import { styles } from './styles'
import { THEME } from '../../styles/theme'

export function EmptyItems() {
	return (
		<View style={styles.container}>
			<View style={styles.line} />
			<View style={styles.image}>
				<FontAwesome5 name="tasks" size={56} color={THEME.colors.gray[300]} />
			</View>
			<Text style={styles.textBold}>
				Você ainda não tem tarefas cadastradas
			</Text>
			<Text style={styles.textRegular}>
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	)
}
