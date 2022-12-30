import { Center, Image } from 'native-base'

import logoImgPng from '@assets/logo.png'

export function Header() {
	return (
		<Center bg="gray.700" h={48}>
			<Image
				source={logoImgPng}
				defaultSource={logoImgPng}
				alt="logo do app"
				resizeMode="contain"
			/>
		</Center>
	)
}
