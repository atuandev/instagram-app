import { Text, TouchableOpacity, View } from 'react-native'
import Loading from './Loading'

type CustomButtonProps = {
  title: string
  handlePress: () => void
  containerStyle?: string
  textStyle?: string
  isLoading?: boolean
}

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  isLoading,
  textStyle
}: CustomButtonProps) => {
  if (isLoading) {
    return (
      <View
        className={`${containerStyle}bg-white rounded-xl min-h-[60px] items-center justify-center shadow-none`}
      >
        <Loading />
      </View>
    )
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-primary rounded-xl min-h-[60px] items-center justify-center ${containerStyle} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
    >
      <Text className={`text-foreground tracking-wider font-semibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
