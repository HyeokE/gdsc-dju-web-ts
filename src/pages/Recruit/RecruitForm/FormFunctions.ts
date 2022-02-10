export const positionHandler = ({
  value,
  setValue,
}: {
  value: string | undefined;
  setValue: (value: string) => void;
}) => {
  switch (value as string) {
    case 'frontend':
      return setValue('Frontend Developer');
    case 'backend':
      return setValue('Backend Developer');
    case 'design':
      return setValue('UX/UI Designer');
    case 'android':
      return setValue('Android Developer');
    case 'beginner':
      return setValue('Beginner Position');
    case 'ml':
      return setValue('Machine Learning Engineer');
    default:
      return;
  }
};
