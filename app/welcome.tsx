import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import CustomButton from '@/components/CustomButton'
import ScreenWrapper from '@/components/ScreenWrapper'
import { images } from '@/constants'
import { wp } from '@/helpers/common'
import { useRouter } from 'expo-router'

const WelcomePage = () => {
  const router = useRouter()

  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />
      <View
        className='min-h-[86vh] items-center'
        style={{ paddingHorizontal: wp(4) }}
      >
        <View className='items-center mt-20'>
          <Image
            source={images.welcome}
            className='w-48 h-48'
            resizeMode='contain'
          />

          <Text className='font-extrabold text-primary text-4xl tracking-widest'>
            Instagram
          </Text>
        </View>

        <View className='w-full items-center mt-auto'>
          <CustomButton
            title='Getting Started'
            containerStyle='w-full mt-10 shadow-md'
            textStyle='text-xl'
            handlePress={() => router.push('/sign-up')}
          />
          <View className='flex-row space-x-1.5 mt-6'>
            <Text className='text-neutral-700 text-base'>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text className='text-primary text-base font-semibold'>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default WelcomePage
