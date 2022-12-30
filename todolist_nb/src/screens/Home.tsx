import { Divider, HStack, Stack, VStack } from 'native-base'

import { Button } from '@components/Button'
import { Counter } from '@components/Counter'
import { EmpytItems } from '@components/EmptyItems'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { TaskCard } from '@components/TaskCard'

export function Home() {
	return (
		<Stack flex={1} bg="gray.500">
			<Header />
			<VStack mx={6}>
				<HStack justifyContent="center" mt={-9}>
					<Input mr={2} />
					<Button />
				</HStack>
				<HStack my={4} justifyContent="space-between">
					<Counter label="Criadas" value={0} color="blue.500" />
					<Counter label="Concluídas" value={0} color="purple.500" />
				</HStack>
				<Divider mb={6} bg="gray.300" />
				<TaskCard />
				<EmpytItems />
			</VStack>
		</Stack>
	)
}
