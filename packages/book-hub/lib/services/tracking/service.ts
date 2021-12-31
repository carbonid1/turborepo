import splitbee from '@splitbee/web';

export const init = (): void => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    splitbee.init();
  }
};
