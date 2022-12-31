import { Ionicons } from '@expo/vector-icons'
import { Box, HStack, Icon, Pressable, Text, useTheme } from 'native-base'
import { Platform, TouchableOpacity } from 'react-native'

import { TaskProps } from '@screens/Home'

type Props = {
	data: TaskProps
	handleCheck: (id: string) => void
	handleDelete: (id: string) => void
}

export function TaskCard({ data, handleCheck, handleDelete }: Props) {
	const { colors } = useTheme()

	return (
		<Box
			h={16}
			borderRadius={10}
			borderWidth={1}
			borderColor="gray.400"
			bg="gray.400"
			p={3}
			justifyContent="center"
			mb={2}
		>
			<HStack alignItems="center" justifyContent="space-between">
				<Pressable
					w={6}
					h={6}
					borderRadius={12}
					borderWidth={2}
					borderColor="blue.500"
					justifyContent="center"
					alignItems="center"
					onPress={() => handleCheck(data.id)}
					style={
						data.checked
							? { backgroundColor: colors.purple[700], borderWidth: 0 }
							: null
					}
				>
					{data.checked && (
						<Icon
							as={Ionicons}
							name={Platform.OS ? 'ios-checkmark-sharp' : 'md-checkmark-sharp'}
							size={5}
							color="gray.100"
						/>
					)}
				</Pressable>
				<Text
					color="gray.100"
					fontSize="xs"
					numberOfLines={2}
					flex={1}
					pr={2}
					pl={3}
					style={data.checked ? { textDecorationLine: 'line-through' } : null}
				>
					{data.title}
				</Text>
				<TouchableOpacity
					activeOpacity={0.5}
					onPress={() => handleDelete(data.id)}
				>
					<Icon
						as={Ionicons}
						name={Platform.OS ? 'ios-trash-outline' : 'md-trash-outline'}
						size={6}
						color="gray.300"
					></Icon>
				</TouchableOpacity>
			</HStack>
		</Box>
	)
}
