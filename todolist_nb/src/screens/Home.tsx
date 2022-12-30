import { HStack, VStack } from 'native-base'

import { Button } from '@components/Button'
import { Counter } from '@components/Counter'
import { EmpytItems } from '@components/EmptyItems'
import { Header } from '@components/Header'
import { Input } from '@components/Input'

export function Home() {
	return (
		<VStack flex={1} bg="gray.400">
			<Header />
			<HStack justifyContent="center" mt={-9}>
				<Input mr={2} />
				<Button />
			</HStack>
			<HStack my={4} mx={7} justifyContent="space-between">
				<Counter label="Criadas" value={0} color="blue.500" />
				<Counter label="Concluídas" value={0} color="purple.500" />
			</HStack>
			<EmpytItems />
		</VStack>
	)
}
