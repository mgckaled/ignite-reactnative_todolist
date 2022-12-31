import { MaterialIcons } from '@expo/vector-icons'
import { IconButton, IIconButtonProps } from 'native-base'

type Props = IIconButtonProps & {
	handleAddItem: () => void
}

export function Button({ handleAddItem, ...rest }: Props) {
	return (
		<IconButton
			_icon={{
				as: MaterialIcons,
				name: 'add-task',
				size: 8,
				color: 'gray.100'
			}}
			borderRadius={10}
			backgroundColor="blue.500"
			color="white"
			size={16}
			onPress={handleAddItem}
			{...rest}
		/>
	)
}
