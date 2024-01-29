import Text from "../Text";

type ShadowBoxProps = {
  shadow: string;
  shadowName: string;
};

const Shadows = () => {
  return (
    <div className="w-[762px] grid grid-cols-5 gap-12">
      <ShadowBox shadow="shadow-xs" shadowName="xs" />
      <ShadowBox shadow="shadow-sm" shadowName="sm" />
      <ShadowBox shadow="shadow-base" shadowName="base" />
      <ShadowBox shadow="shadow-md" shadowName="md" />
      <ShadowBox shadow="shadow-lg" shadowName="lg" />
      <ShadowBox shadow="shadow-xl" shadowName="xl" />
      <ShadowBox shadow="shadow-2xl" shadowName="2xl" />
      <ShadowBox shadow="shadow-outline" shadowName="outline" />
      <ShadowBox shadow="shadow-inner" shadowName="inner" />
      <ShadowBox shadow="shadow-dark-lg" shadowName="dark-lg" />
    </div>
  );
};

export default Shadows;

export const ShadowBox = ({ shadow, shadowName }: ShadowBoxProps) => {
  return (
    <div className="flex items-center flex-col gap-4">
      <div className={`w-20 h-20 rounded ${shadow}`} />
      <Text fontSize="md">{shadowName}</Text>
    </div>
  );
};
