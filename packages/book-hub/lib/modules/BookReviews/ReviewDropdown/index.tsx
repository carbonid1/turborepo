import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { ROUTE } from 'lib/consts/routes';
import type gg from 'lib/generated';

export interface ReviewDropdownProps {
  reviewId: gg.Review['id'];
}

export const ReviewDropdown: React.FC<ReviewDropdownProps> = ({ reviewId }) => {
  const router = useRouter();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Review options"
          className="absolute right-0 p-1 rounded-full shadow-md top-1 dark:border-2 dark:border-skin-base bg-skin-complement"
        >
          <DotsVerticalIcon className="w-4 h-4 dark:w-3 dark:h-3 text-[#9ca3af]" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="py-1 rounded-md shadow-md bg-skin-complement"
        side="right"
        sideOffset={8}
      >
        <DropdownMenu.Item
          className="px-2 cursor-default focus:bg-skin-primary-light focus:outline-none focus:text-skin-primary text-skin-complement"
          onSelect={() => router.push(`/${ROUTE.review}/${reviewId}`)}
        >
          See review
        </DropdownMenu.Item>
        <DropdownMenu.Arrow className="fill-skin-complement" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
