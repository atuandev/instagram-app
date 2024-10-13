import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'

import Icon from '@/assets/icons'
import BackButton from '@/components/BackButton'
import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import KeyboardProvider from '@/components/KeyboardProvider'
import ScreenWrapper from '@/components/ScreenWrapper'
import { wp } from '@/helpers/common'
import { router } from 'expo-router'

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: 'Please fill in all fields'
      })
    }
  }

  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />
      <KeyboardProvider iosHeight={-150}>
        <View
          style={{ paddingHorizontal: wp(5) }}
          className='w-full min-h-[85vh]'
        >
          <BackButton />

          <View className='mt-10'>
            <Text className='font-extrabold text-3xl text-primary'>Hey,</Text>
            <Text className='font-extrabold text-3xl text-primary'>
              Welcome back
            </Text>
          </View>

          <View className='mt-8'>
            <Text className='text-xl text-gray-700 font-semibold mb-3'>
              Login to your account
            </Text>
            <FormInput
              title='Email'
              icon={<Icon name='mail' className='mr-3' />}
              placeholder='Enter your email'
              value={formData.email}
              handleChangeText={e => setFormData({ ...formData, email: e })}
              formStyle='mt-2'
              options={{ autoCapitalize: 'none' }}
            />
            <FormInput
              title='Password'
              icon={<Icon name='lock' className='mr-3' />}
              placeholder='Enter your password'
              value={formData.password}
              handleChangeText={e => setFormData({ ...formData, password: e })}
              formStyle='mt-2'
            />
            <Text className='mt-4 text-right text-sm text-slate-500 font-medium'>
              Forgot password?
            </Text>

            <CustomButton
              title='Log in'
              handlePress={handleSubmit}
              containerStyle='mt-6 shadow-lg'
            />
            <View className='flex-row space-x-1.5 mt-6 justify-center'>
              <Text className='text-neutral-700 text-base'>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push('/sign-up')}>
                <Text className='text-primary text-base font-semibold'>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardProvider>
    </ScreenWrapper>
  )
}

export default LoginScreen
