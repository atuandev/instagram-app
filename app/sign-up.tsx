import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

const SignUpScreen = () => {
  return (
    <ScreenWrapper>
      <StatusBar style='dark' />
      <View className={`flex-1 items-center justify-center`}>
        <Text>SignUpScreen</Text>
      </View>
    </ScreenWrapper>
  )
}

export default SignUpScreen