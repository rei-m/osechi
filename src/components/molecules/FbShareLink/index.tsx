import React from 'react';
import * as fbIcon from '@src/images/fb_icon.png';

export type Props = {
  url: string;
  alt?: string;
  size?: number;
  className?: string;
};

export const FbShareLink = ({
  url,
  alt = `Facebookでシェアする`,
  size = 24,
  className,
}: Props) => {
  return (
    <a
      href={`https://www.facebook.com/share.php?u=${url}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
    >
      <img
        src={fbIcon}
        alt={alt}
        style={{
          width: size,
          height: size,
        }}
      />
    </a>
  );
};

export default FbShareLink;
