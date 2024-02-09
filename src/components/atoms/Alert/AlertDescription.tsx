type AlertDescriptionProps = {
  children: string;
};
export const AlertDescription = ({ children }: AlertDescriptionProps) => {
  return <p className="text-md font-normal">{children}</p>;
};

export default AlertDescription;
