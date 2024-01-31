type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
  loading?: "eager" | "lazy";
  src: string;
  alt: string;
  width?: string;
  height?: string;
};
const Image = ({ src, loading, alt, height, width, ...props }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      height={height}
      width={width}
      {...props}
    />
  );
};

export default Image;
