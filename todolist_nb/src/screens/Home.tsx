import { VStack } from 'native-base'

import { Header } from '@components/Header'

export function Home() {
	return (
		<VStack flex={1} bg="gray.400">
			<Header />
		</VStack>
	)
}
