import { ROUTE } from 'lib/consts/routes'
import useProfile from 'lib/hooks/useProfile'
import { Avatar } from 'lib/components/Avatar'

export const HeaderAvatar: React.FC = () => {
  const { profile } = useProfile()

  if (!profile) return null

  return (
    <Avatar
      size="lg"
      src={profile.image}
      href={`/${ROUTE.settings}`}
      alt={profile.name ?? 'user'}
      fallbackImgSeed={profile.id}
      aria-label="Open your profile"
    />
  )
}
