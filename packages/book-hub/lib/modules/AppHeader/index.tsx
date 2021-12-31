import { signIn, signOut } from 'next-auth/react';
import { TextLink } from 'lib/components';
import useProfile from 'lib/hooks/useProfile';
import { useAppProgress } from '../AppProgress/useAppProgress';
import { HeaderAvatar } from './HeaderAvatar';

export const AppHeader: React.FC = () => {
  const setIsAnimating = useAppProgress(state => state.setIsAnimating);
  const { profile } = useProfile();

  const handleSignOut = () => {
    setIsAnimating(true);
    signOut().then(() => setIsAnimating(false));
  };

  const handleSignIn = () => {
    setIsAnimating(true);
    signIn().then(() => setIsAnimating(false));
  };

  return (
    <div className="sticky top-0 flex items-center w-full bg-skin-base z-header justify-items-center">
      <div className="flex items-center flex-1 max-w-5xl p-4 mx-auto">
        <TextLink path="/" className="mr-auto text-3xl font-bold" color="text">
          BookHub
        </TextLink>
        <HeaderAvatar />
        <TextLink
          className="ml-4 font-bold"
          color="text"
          onClick={profile ? handleSignOut : handleSignIn}
        >
          {profile ? 'Sign Out' : 'Sign In'}
        </TextLink>
      </div>
    </div>
  );
};
