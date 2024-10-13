import { Stack } from 'expo-router'
import Toast from 'react-native-toast-message'

const RootLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast visibilityTime={2000} />
    </>
  )
}

export default RootLayout
