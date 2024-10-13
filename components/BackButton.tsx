import Icon from '@/assets/icons'
import { theme } from '@/constants/theme'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

const BackButton = () => {
  const router = useRouter()

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className='p-2 rounded-xl bg-primary/10 self-start'
    >
      <Icon name='arrowLeft' color={theme.colors.primary} strokeWidth={2.5} />
    </TouchableOpacity>
  )
}

export default BackButton
