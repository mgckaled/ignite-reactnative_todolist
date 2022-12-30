import { FontAwesome5 } from '@expo/vector-icons'
import { Icon, Text, VStack } from 'native-base'

export function EmpytItems() {
	return (
		<VStack alignItems="center" mt={16}>
			<Icon as={FontAwesome5} name="tasks" color="gray.300" size={16} />
			<Text
				mt={6}
				color="gray.300"
				fontSize="sm"
				textAlign="center"
				fontFamily="heading"
			>
				Você ainda não tem tarefas cadastradas
			</Text>
			<Text color="gray.300" fontSize="sm" textAlign="center" fontFamily="body">
				Crie tarefas e organize seus itens a fazer
			</Text>
		</VStack>
	)
}
