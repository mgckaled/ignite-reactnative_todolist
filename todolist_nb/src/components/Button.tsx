import { MaterialIcons } from '@expo/vector-icons'
import { IconButton, IIconButtonProps } from 'native-base'

type Props = IIconButtonProps & {}

export function Button({ ...rest }: Props) {
	return (
		<IconButton
			_icon={{
				as: MaterialIcons,
				name: 'add-task',
				size: 8,
				color: 'gray.100'
			}}
			backgroundColor="blue.500"
			color="white"
			size={16}
			{...rest}
		/>
	)
}
