import gg from 'lib/generated';

const useProfile = () => {
  const { data } = gg.useProfileHook();

  return {
    profile: data?.profile,
  };
};

export default useProfile;
