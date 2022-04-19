import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  title?: string;
  alt?: string;
  w: number;
  h: number;
  src: string;
  mr?: number;
  ml?: number;
}

const ImageContainer: React.FC<Props> = ({
  title,
  alt,
  w,
  h,
  src,
  mr,
  ml,
}) => {
  return (
    <div
      style={{
        width: `${w}px`,
        height: `${h}px`,
        position: "relative",
        marginLeft: `${ml}px`,
        marginRight: `${mr}px`,
      }}
    >
      <Image
        src={src}
        alt={alt ?? "simple icon"}
        title={title ?? "simple icon"}
        layout="fill"
      />
    </div>
  );
};

export default ImageContainer;
