import React, { useState } from 'react'
import { Alert, FlatList, Image, Keyboard, View } from 'react-native'
import { EmptyItems } from '../../components/EmptyItems'
import { SearchBox } from '../../components/SearchBox'
import { Task } from '../../components/Task'
import { Counter } from '../../components/Counter'

import { styles } from './styles'

export interface TaskProps {
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
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={require('../../assets/logo.png')} resizeMode="contain" />
			</View>

			<View style={styles.content}>
				<SearchBox
					value={text}
					setValue={setText}
					handleAddItem={handleAddItem}
				/>

				<View style={styles.titleContainer}>
					<Counter label="Criadas" value={tasks.length} color="#4EA8DE" />

					<Counter
						label="Concluídas"
						value={tasks.filter(item => item.checked).length}
						color="#8284FA"
					/>
				</View>

				<FlatList
					data={tasks}
					renderItem={({ item }) => (
						<Task
							key={item.id}
							data={item}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
						/>
					)}
					ListEmptyComponent={() => <EmptyItems />}
					ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
				/>
			</View>
		</View>
	)
}
