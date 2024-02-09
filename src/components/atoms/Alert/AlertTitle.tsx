type AlertTitleProps = {
  children: string;
};
export const AlertTitle = ({ children }: AlertTitleProps) => {
  return <h2 className="font-bold text-base">{children}</h2>;
};

export default AlertTitle;
