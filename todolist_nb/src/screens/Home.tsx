import { HStack, VStack } from 'native-base'

import { Button } from '@components/Button'
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
			<EmpytItems />
		</VStack>
	)
}
