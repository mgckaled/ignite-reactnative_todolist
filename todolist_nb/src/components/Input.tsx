import { IInputProps, Input as NativeBaseInput } from 'native-base'

// interface Props {
// 	value: string
// 	setValue: (value: string) => void
// 	handleAddItem: () => void
// }

type Props = IInputProps & {}

export function Input({ ...rest }: Props) {
	return (
		<NativeBaseInput
			variant="filled"
			bg="gray.400"
			borderWidth={0}
			h={16}
			w="75%"
			px={4}
			color="gray.100"
			type="text"
			placeholder="Adicione um nova tarefa"
			fontSize="md"
			fontFamily="body"
			placeholderTextColor="gray.300"
			_focus={{
				borderWidth: 1,
				borderColor: 'purple.700',
				backgroundColor: 'gray.500'
			}}
			{...rest}
		></NativeBaseInput>
	)
}
