import {
	Inter_400Regular,
	Inter_700Bold,
	useFonts
} from '@expo-google-fonts/inter'
import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'

import { Loading } from '@components/Loading'
import { Home } from '@screens/Home'
import { THEME } from './src/theme'

export default function App() {
	const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? <Home /> : <Loading />}
		</NativeBaseProvider>
	)
}
