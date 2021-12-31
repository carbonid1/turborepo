import type { GetServerSideProps, NextPage } from 'next';
import { ClientSafeProvider, getProviders, getSession, signIn } from 'next-auth/react';
import { GoogleIcon, GitHubIcon, TwitterIcon } from 'lib/icons';
import { isSSR } from 'lib/utils';
import { errors } from 'lib/consts/errors';
import toastService from 'lib/services/toast.service';

type TSignInProviders = 'google' | 'github' | 'twitter';
export interface SignInPageProps {
  providers: Record<TSignInProviders, ClientSafeProvider>;
  error: string | undefined;
}

const SignInPage: NextPage<SignInPageProps> = ({ providers, error }) => {
  if (error && !isSSR()) toastService.error(error, { duration: 10000 });

  return (
    <div className="flex items-center justify-center flex-1">
      <div className="grid gap-4 p-6 transition-transform duration-300 shadow-md rounded-xl focus-within:shadow-xl focus-within:translate-y-[-4px] focus-within:transform text-skin-complement bg-skin-complement border-skin-base border-2 dark:focus-within:transform-none">
        <button
          onClick={() => signIn(providers?.twitter.id)}
          className="flex items-center w-full max-w-xs p-4 text-sm font-medium xs:text-xl rounded-xl"
        >
          <TwitterIcon className="mr-4 text-xl xs:text-3xl" />
          Continue with Twitter
        </button>
        <button
          onClick={() => signIn(providers?.google.id)}
          className="flex items-center w-full max-w-xs p-4 text-sm font-medium xs:text-xl rounded-xl"
        >
          <GoogleIcon className="mr-4 text-xl xs:text-3xl" />
          Continue with Google
        </button>
        <button
          onClick={() => signIn(providers?.github.id)}
          className="flex items-center w-full max-w-xs p-4 text-sm font-medium xs:text-xl rounded-xl"
        >
          <GitHubIcon className="mr-4 text-xl xs:text-3xl" />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  if (session) {
    return {
      props: {},
      redirect: {
        destination: ctx.query.callbackUrl || '/',
      },
    };
  }

  return {
    props: {
      providers: await getProviders(),
      error: ctx.query.error === 'OAuthAccountNotLinked' ? errors.OAuthAccountNotLinked : null,
    },
  };
};

export default SignInPage;
