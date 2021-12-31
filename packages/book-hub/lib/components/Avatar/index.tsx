import NextLink, { LinkProps } from 'next/link';
import NextImage from 'next/image';
import * as RadixAvatar from '@radix-ui/react-avatar';
import classNames from 'classnames';

type TagProps = Omit<JSX.IntrinsicElements['a'], 'href'>;
export interface AvatarProps extends TagProps {
  alt: Maybe<string>;
  src: Maybe<string>;
  className?: string;
  fallbackImgSeed: string;
  href: LinkProps['href'];
  size?: 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  src,
  size,
  href,
  className,
  fallbackImgSeed,
  ...props
}) => {
  const imgSize = size === 'lg' ? 48 : 32;
  return (
    <NextLink href={href}>
      <a
        className={classNames(
          'inline-block overflow-hidden rounded-full cursor-pointer bg-skin-tertiary',
          className,
          size === 'lg' ? 'w-12 h-12' : 'w-8 h-8',
        )}
        {...props}
      >
        <RadixAvatar.Root>
          <RadixAvatar.Image
            width={imgSize}
            height={imgSize}
            alt={alt || undefined}
            src={src || undefined}
            className="rounded-full animate-fadeIn"
          />
          <RadixAvatar.Fallback delayMs={1000}>
            <NextImage
              width={imgSize}
              height={imgSize}
              alt={alt || undefined}
              className="rounded-full animate-fadeIn"
              src={`https://avatars.dicebear.com/api/bottts/${fallbackImgSeed}.svg`}
            />
          </RadixAvatar.Fallback>
        </RadixAvatar.Root>
      </a>
    </NextLink>
  );
};
