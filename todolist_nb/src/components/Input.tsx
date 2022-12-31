import { IInputProps, Input as NativeBaseInput } from 'native-base'

type Props = IInputProps & {
	value: string
	setValue: (value: string) => void
}

export function Input({ value, setValue, ...rest }: Props) {
	return (
		<NativeBaseInput
			bg="gray.400"
			borderWidth={0}
			borderRadius={10}
			h={16}
			w="80%"
			px={4}
			color="gray.100"
			type="text"
			placeholder="Adicione um nova tarefa"
			fontSize="md"
			fontFamily="body"
			placeholderTextColor="gray.300"
			value={value}
			onChangeText={text => setValue(text)}
			returnKeyType="done"
			_focus={{
				borderWidth: 1,
				borderColor: 'purple.700',
				backgroundColor: 'gray.400'
			}}
			selectionColor="gray.100"
			cursorColor="gray.100"
			{...rest}
		></NativeBaseInput>
	)
}
