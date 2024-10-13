import { theme } from '@/constants/theme'
import ArrowLeft from './ArrowLeft'
import Call from './Call'
import Camera from './Camera'
import Comment from './Comment'
import Delete from './Delete'
import Edit from './Edit'
import Heart from './Heart'
import HomeIcon from './Home'
import Image from './Image'
import Location from './Location'
import Lock from './Lock'
import Logout from './Logout'
import Mail from './Mail'
import Plus from './Plus'
import Search from './Search'
import Send from './Send'
import Share from './Share'
import ThreeDotsCircle from './ThreeDotsCircle'
import ThreeDotsHorizontal from './ThreeDotsHorizontal'
import User from './User'
import Video from './Video'
import Eye from './Eye'
import EyeHide from './EyeHide'

export type IconType = keyof typeof icons

const icons = {
  home: HomeIcon,
  mail: Mail,
  lock: Lock,
  user: User,
  heart: Heart,
  plus: Plus,
  search: Search,
  location: Location,
  call: Call,
  camera: Camera,
  edit: Edit,
  arrowLeft: ArrowLeft,
  threeDotsCircle: ThreeDotsCircle,
  threeDotsHorizontal: ThreeDotsHorizontal,
  comment: Comment,
  share: Share,
  send: Send,
  delete: Delete,
  logout: Logout,
  image: Image,
  video: Video,
  eye: Eye,
  eyeHide: EyeHide
}

type IconProps = {
  name: IconType
  size?: number
  strokeWidth?: number
  color?: string
  className?: string
}

const Icon = ({
  name,
  size = 24,
  strokeWidth = 1.9,
  color = '#64748b',
  className,
  ...props
}: IconProps) => {
  const IconComponent = icons[name]

  return (
    <IconComponent
      height={size}
      width={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      {...props}
    />
  )
}

export default Icon
