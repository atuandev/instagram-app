import Icon, { IconType } from '@/assets/icons'
import { RefObject, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  KeyboardTypeOptions
} from 'react-native'

type FormInputProps = {
  title: string
  value: string
  placeholder?: string
  handleChangeText: (e: string) => void
  formStyle?: string
  keyBoardType?: KeyboardTypeOptions
  inputRef?: RefObject<TextInput>
  icon?: JSX.Element
  options?: TextInputProps
}

const FormInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  formStyle,
  keyBoardType,
  inputRef,
  icon,
  options
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${formStyle}`}>
      <Text className='text-base font-medium'>{title}</Text>

      <View className='w-full h-14 px-3 border border-slate-500 focus:border-primary rounded-xl items-center flex-row'>
        {icon && icon}

        <TextInput
          value={value}
          onChangeText={handleChangeText}
          className='flex-1 text-base'
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          secureTextEntry={title === 'Password' && !showPassword}
          keyboardType={keyBoardType}
          ref={inputRef}
          {...options}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? <Icon name='eye' /> : <Icon name='eyeHide' />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormInput
