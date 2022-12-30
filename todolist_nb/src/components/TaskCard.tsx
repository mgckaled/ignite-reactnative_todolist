import { Ionicons } from '@expo/vector-icons'
import { Box, HStack, Icon, Text } from 'native-base'
import { Platform, TouchableOpacity } from 'react-native'

export function TaskCard() {
	return (
		<Box
			h={20}
			borderRadius={10}
			borderWidth={1}
			borderColor="gray.400"
			bg="gray.400"
			p={3}
			justifyContent="center"
		>
			<HStack alignItems="center" justifyContent="space-between">
				<TouchableOpacity>
					<Icon
						as={Ionicons}
						name={Platform.OS ? 'ios-checkmark-sharp' : 'md-checkmark-sharp'}
						size={6}
						color="gray.300"
					></Icon>
				</TouchableOpacity>
				<Text color="gray.100" fontSize="sm" numberOfLines={2} flex={1} px={2}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
					maxime omnis quam rerum, suscipit sunt magni nihil maiores consectetur
					accusantium porro similique atque impedit temporibus laboriosam
					deserunt. Dicta, quasi corporis?
				</Text>
				<TouchableOpacity>
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
