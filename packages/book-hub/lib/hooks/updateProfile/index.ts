import gg from 'lib/generated';
import toastService from 'lib/services/toast.service';

export const useUpdateProfile = () => {
  const [mutate, { loading }] = gg.useUpdateProfileHook();

  const updateProfile = async (options: Parameters<typeof mutate>[0]) => {
    const id = 'upd-profile-mutation';
    try {
      await mutate(options);
      toastService.success('Profile updated successfully', { id });
    } catch (err) {
      toastService.error('Something went wrong', { id });
    }
  };

  return {
    loading,
    updateProfile,
  };
};
