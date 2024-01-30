import Text from "../Text";

type RadiiBoxProps = {
  rounded: string;
  roundedText: string;
  roundedValue: string;
};

const Radii = () => {
  return (
    <div className="w-[762px] grid grid-cols-4 gap-12">
      <RadiiBox rounded="rounded-none" roundedText="none" roundedValue="0rem" />
      <RadiiBox rounded="rounded-sm" roundedText="sm" roundedValue="00125rem" />
      <RadiiBox
        rounded="rounded-base"
        roundedText="base"
        roundedValue="0.25rem"
      />
      <RadiiBox rounded="rounded-md" roundedText="md" roundedValue="0.375rem" />
      <RadiiBox rounded="rounded-lg" roundedText="lg" roundedValue="0.5rem" />
      <RadiiBox rounded="rounded-xl" roundedText="xl" roundedValue="0.75rem" />
      <RadiiBox rounded="rounded-2xl" roundedText="2xl" roundedValue="1rem" />
      <RadiiBox rounded="rounded-3xl" roundedText="3xl" roundedValue="1.5rem" />
      <RadiiBox
        rounded="rounded-full"
        roundedText="full"
        roundedValue="9999px"
      />
    </div>
  );
};

export default Radii;

export const RadiiBox = ({
  rounded,
  roundedText,
  roundedValue,
}: RadiiBoxProps) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`border border-gray-200 w-20 h-20 shadow-base ${rounded}`}
      />
      <div>
        <Text fontSize="sm" className="font-semibold">
          {roundedText}
        </Text>
        <Text fontSize="sm" className="text-gray-500">
          {roundedValue}
        </Text>
      </div>
    </div>
  );
};
