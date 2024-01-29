import Heading from "../Heading";
import Text from "../Text";
import {
  blackAlpha,
  blue,
  cyan,
  gray,
  green,
  orange,
  pink,
  purple,
  red,
  teal,
  whiteAlpha,
  yellow,
} from "./colorsConstant";

type ColorType = {
  colorName: string;
  colorCode: string;
  bgCode: string;
};

const Colors = () => {
  return (
    <div className="w-[762px]">
      <Heading as="h1" size="lg">
        Colors
      </Heading>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Black & White
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          <Color colorName="Black" colorCode="#000" bgCode="bg-black" />
          <Color colorName="White" colorCode="#fff" bgCode="bg-white" />
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          White Alpha
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {whiteAlpha.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`whiteAlpha ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Black Alpha
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {blackAlpha.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`blackAlpha ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Gray
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {gray.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Gray ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Red
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {red.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Red ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Orange
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {orange.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Orange ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Yellow
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {yellow.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Yellow ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Green
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {green.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Green ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Teal
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {teal.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Teal ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Blue
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {blue.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Blue ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Cyan
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {cyan.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Cyan ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Purple
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {purple.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Purple ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
      <div className="pt-12">
        <Heading as="h2" size="md">
          Pink
        </Heading>
        <div className="grid grid-cols-3 gap-4 pt-6">
          {pink.map((num) => (
            <Color
              key={num.code}
              bgCode={num.color}
              colorName={`Pink ${num.shade}`}
              colorCode={num.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;

export const Color = ({ colorName, colorCode, bgCode }: ColorType) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`${bgCode} w-12 h-12 rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]`}
      />
      <div>
        <Text fontSize="sm" className="font-semibold">
          {colorName}
        </Text>
        <Text fontSize="sm" className="text-gray-500 uppercase">
          {colorCode}
        </Text>
      </div>
    </div>
  );
};
