import React from 'react';

export type Props = {
  href: string;
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export const SocialShareLink = ({
  href,
  src,
  alt,
  size = 24,
  className,
}: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: size,
          height: size,
        }}
      />
    </a>
  );
};

export default SocialShareLink;
