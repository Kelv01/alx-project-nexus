import Image, { ImageProps } from "next/image";

type AppImageProps = ImageProps & {
  variant?: "card" | "hero" | "avatar";
};

function AppImage({ variant = "card", ...props }: AppImageProps) {
  const sizesMap = {
    card: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
    hero: "100vw",
    avatar: "128px",
  };

  if (variant === "avatar") {
    return (
      <Image
        {...props}
        width={props.width ?? 128}
        height={props.height ?? 128}
        sizes="128px"
        className={`rounded-full object-cover ${props.className ?? ""}`}
      />
    );
  }

  return (
    <Image
      {...props}
      loading={props.loading ?? "lazy"}
      sizes={props.sizes ?? sizesMap[variant]}
    />
  );
}

export default AppImage;
