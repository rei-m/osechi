import React from 'react';
import * as twIcon from '@src/images/tw_icon.png';

export type Props = {
  url: string;
  text: string;
  alt?: string;
  size?: number;
  className?: string;
};

export const TwShareLink = ({
  url,
  text,
  alt = `Facebookでシェアする`,
  size = 24,
  className,
}: Props) => {
  return (
    <a
      href={`https://twitter.com/share?url=${url}&amp;text=${text}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
    >
      <img
        src={twIcon}
        alt={alt}
        style={{
          width: size,
          height: size,
        }}
      />
    </a>
  );
};

export default TwShareLink;
