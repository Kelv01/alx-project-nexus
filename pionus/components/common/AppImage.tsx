import Image, { ImageProps } from "next/image";

type AppImageProps = ImageProps & {
  variant?: "card" | "hero" | "avatar";
};

import React from "react";

function AppImage({ variant = "card", ...props }: AppImageProps) {
  const sizesMap = {
    card: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
    hero: "100vw",
    avatar: "64px",
  };

  return (
    <Image
      {...props}
      loading={props.loading ?? "lazy"}
      sizes={props.sizes ?? sizesMap[variant]}
    />
  );
}

export default AppImage;
