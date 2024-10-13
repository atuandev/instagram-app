import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import ScreenWrapper from '@/components/ScreenWrapper'

const index = () => {
  return (
    <ScreenWrapper>
      <StatusBar style='dark' />
      <View className={`flex-1 items-center justify-center`}>
        <Text>Welcome to Expo Router</Text>
        <Link href='/welcome' className='text-sky-500'>
          <Text>Go to Welcome Page</Text>
        </Link>
      </View>
    </ScreenWrapper>
  )
}

export default index
