import React from "react";
/* import { assetPrefix } from "../../next.config"; */

interface ImageProps {
  source: string;
  title: string;
  className?: string;
  format?: string;
  width?: string | number;
  height?: string | number;
  folder?: string;
  prefix?: string;
}

const assetPrefix = "../";

const Image: React.FC<ImageProps> = ({
  source,
  title,
  className,
  format,
  width,
  height,
  folder,
  prefix,
}) => {
  const disableContextMenu = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ): void => {
    e.preventDefault();
  };
  return (
    <picture className={`image${className || ""}`}>
      {/* Desktop */}
      <source
        type="image/webp"
        srcSet={`${assetPrefix}${prefix || ""}img/${
          folder || ""
        }desktop/${source}@1x.webp 1x, 
                ${assetPrefix}${prefix || ""}img/${
          folder || ""
        }desktop/${source}@2x.webp 2x, 
                ${assetPrefix}${prefix || ""}img/${
          folder || ""
        }desktop/${source}@4x.webp 4x`}
        media="(min-width: 1025px)"
      />
      {/* Tablet */}
      <source
        type="image/webp"
        srcSet={`${assetPrefix}${prefix || ""}img/${
          folder || ""
        }tablet/${source}@1x.webp 1x, 
                ${assetPrefix}${prefix || ""}img/${
          folder || ""
        }tablet/${source}@2x.webp 2x`}
        media="(max-width: 1024px)"
      />
      {/* Mobile */}
      <source
        type="image/webp"
        srcSet={`${assetPrefix}${prefix || ""}img/${
          folder || ""
        }mobile/${source}@1x.webp 1x, 
               ${assetPrefix}${prefix || ""}img/${
          folder || ""
        }mobile/${source}@2x.webp 2x`}
        media="(max-width: 768px)"
      />
      <img
        onContextMenu={disableContextMenu}
        alt={title}
        width={width || "100%"}
        height={height || "100%"}
        src={`${assetPrefix}${prefix || ""}img/${
          folder || ""
        }desktop/${source}@1x.${format || "png"}`}
        srcSet={`${assetPrefix}${prefix || ""}img/${
          folder || ""
        }desktop/${source}@1x.${format || "png"} 1x, 
                ${assetPrefix}${prefix || ""}img/${
          folder || ""
        }desktop/${source}@2x.${format || "png"} 2x, 
                ${assetPrefix}${prefix || ""}img/${
          folder || ""
        }desktop/${source}@4x.${format || "png"} 4x`}
      />
    </picture>
  );
};

export default Image;
