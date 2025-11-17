'use client';

import { useState } from 'react';
import Image from 'next/image';

export function ImageWithSkeleton({ src, alt, className, ...props }: React.ComponentProps<typeof Image>) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-muted rounded" />
      )}
      <Image
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
