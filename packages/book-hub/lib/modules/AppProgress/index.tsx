import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Progress } from './Progress';
import { useAppProgress } from './useAppProgress';

export const AppProgress: React.FC = () => {
  const router = useRouter();
  const progressKey = useAppProgress(state => state.key);
  const updateKey = useAppProgress(state => state.updateKey);
  const setIsAnimating = useAppProgress(state => state.setIsAnimating);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleStart = () => {
      updateKey();
      timeout = setTimeout(() => setIsAnimating(true), 500);
    };

    const handleStop = () => {
      clearTimeout(timeout);
      setIsAnimating(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router.events, setIsAnimating, updateKey]);

  return <Progress key={progressKey} />;
};
