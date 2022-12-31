import { Divider, FlatList, HStack, Stack, VStack } from 'native-base'
import { useState } from 'react'
import { Alert, Keyboard } from 'react-native'

import { Button } from '@components/Button'
import { Counter } from '@components/Counter'
import { EmpytItems } from '@components/EmptyItems'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { TaskCard } from '@components/TaskCard'

export type TaskProps = {
	id: string
	title: string
	checked: boolean
}

export function Home() {
	const [tasks, setTask] = useState<TaskProps[]>([])
	const [text, setText] = useState('')

	function handleAddItem() {
		if (!text) {
			return Alert.alert('Atenção', 'Informe o nome da tarefa.')
		}

		const newItem = {
			id: new Date().getTime().toString(),
			title: text,
			checked: false
		}

		setTask(prev => [...prev, { ...newItem }])
		setText('')
		Keyboard.dismiss()
	}

	function handleCheck(id: string) {
		const newTasks = tasks.map(item => {
			if (item.id === id) item.checked = !item.checked
			return item
		})

		setTask(newTasks)
	}

	function handleDelete(id: string) {
		Alert.alert('Atenção', 'Tem certeza que deseja remover essa tarefa?', [
			{
				text: 'Não',
				style: 'cancel'
			},
			{
				text: 'Sim',
				style: 'destructive',
				onPress: () => {
					const newTasks = tasks.filter(item => item.id !== id)
					setTask(newTasks)
				}
			}
		])
	}

	return (
		<Stack flex={1} bg="gray.500">
			<Header />
			<VStack flex={1} mx={6}>
				<HStack justifyContent="center" mt={-9}>
					<Input mr={2} value={text} setValue={setText} />
					<Button handleAddItem={handleAddItem} />
				</HStack>
				<HStack my={5} justifyContent="space-between">
					<Counter label="Criadas" value={tasks.length} color="blue.500" />
					<Counter
						label="Concluídas"
						value={tasks.filter(item => item.checked).length}
						color="purple.500"
					/>
				</HStack>
				<Divider mb={6} bg="gray.300" />
				<FlatList
					data={tasks}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<TaskCard
							data={item}
							key={item.id}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
						/>
					)}
					ListEmptyComponent={() => <EmpytItems />}
					showsVerticalScrollIndicator={false}
					_contentContainerStyle={{
						paddingBottom: 16
					}}
				/>
			</VStack>
		</Stack>
	)
}
