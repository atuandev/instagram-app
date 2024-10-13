import { View, Text, ActivityIndicator } from 'react-native'

type LoadingProps = {
  size?: 'small' | 'large'
  color?: string
}

const Loading = ({ size = 'large', color = '#e11d48' }: LoadingProps) => {
  return (
    <View className='justify-center items-center'>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading
