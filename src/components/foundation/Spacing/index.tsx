const Spacing = () => {
  return (
    <div className="w-[762px]">
      <div className="relative overflow-x-auto">
        <table className="text-left">
          <thead className=" bg-gray-50">
            <tr>
              <th className="p-2 font-normal">Name</th>
              <th className="p-2 font-normal">Spacing</th>
              <th className="p-2 font-normal">Pixels</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[
              ["w-0", " 0px"],
              ["w-px", "1px"],
              ["w-0.5", "0.125rem"],
              ["w-1", "0.25rem"],
              ["w-1.5", "0.375rem"],
              ["w-2", "0.5rem"],
              ["w-2.5", "0.625rem"],
              ["w-3", "0.75rem"],
              ["w-3.5", "0.875rem"],
              ["w-4", "1rem"],
              ["w-5", "1.25rem"],
              ["w-6", "1.5rem"],
              ["w-7", "1.75rem"],
              ["w-8", "2rem"],
              ["w-9", "2.25rem"],
              ["w-10", "2.5rem"],
              ["w-11", "2.75rem"],
              ["w-12", "3rem"],
              ["w-14", "3.5rem"],
              ["w-16", "4rem"],
              ["w-20", "5rem"],
              ["w-24", "6rem"],
              ["w-28", "7rem"],
              ["w-32", "8rem"],
              ["w-36", "9rem"],
              ["w-40", "10rem"],
              ["w-44", "11rem"],
              ["w-48", "12rem"],
              ["w-52", "13rem"],
              ["w-56", "14rem"],
              ["w-60", "15rem"],
              ["w-64", "16rem"],
              ["w-72", "18rem"],
              ["w-80", "20rem"],
              ["w-96", "24rem"],
            ].map(([size, text]) => (
              <tr>
                <th className="p-2 font-normal text-gray-700">{size.split('-')[1]}</th>
                <td className="p-2 font-normal text-gray-700">{text}</td>
                <td className="p-2 font-normal text-gray-700">{`${remToPx(text)}px`}</td>
                <td className="p-2 ">
                  <div className={`h-4 ${size} bg-red-100 rounded-xs`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spacing;

const remToPx = (remValue: string) => {
  const remValueWithoutUnit = remValue.includes('rem') ? remValue.replace('rem', '') : remValue;
  const remValueAsNumber = parseFloat(remValueWithoutUnit);
  if (isNaN(remValueAsNumber)) {
    console.error('Invalid input. Please provide a valid rem value.');
    return NaN;
  }
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const pxValue = remValueAsNumber * rootFontSize;
  return pxValue;
}
