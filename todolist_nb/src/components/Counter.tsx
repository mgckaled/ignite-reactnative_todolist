import { Box, HStack, Text } from 'native-base'
import React from 'react'

interface Props {
	label: string
	value: number
	color: string
}

export function Counter({ label, value, color }: Props) {
	return (
		<HStack alignItems="center">
			<Text color={color} fontFamily="heading" fontSize="sm">
				{label}
			</Text>
			<Box borderRadius={12} ml={2} bg="gray.300">
				<Text fontFamily="heading" fontSize="sm" color="gray.200" my={1} mx={2}>
					{value}
				</Text>
			</Box>
		</HStack>
	)
}
