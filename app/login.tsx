import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

import ScreenWrapper from '@/components/ScreenWrapper'
import Home from '@/assets/icons/Home'

const LoginScreen = () => {
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />

      <View className='flex-1 items-center justify-center'>
        <Text>LoginScreen</Text>
        <Text>
          <Home color='#db2777' strokeWidth={2} />
        </Text>
      </View>
    </ScreenWrapper>
  )
}

export default LoginScreen
