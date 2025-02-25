'use client';

import { useEffect } from 'react';

import Image from 'next/image';

import ErrorContent from '../components/errorContent';
import ImageWrap from '../components/imageWrap';
import Title from '../components/title';
import Button from '../components/button';

import ErrorIcon from '../../public/error-icon.png';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleReset = () => {
    reset();
  };

  return (
    <ErrorContent>
      <ImageWrap lg>
        <Image src={ErrorIcon} alt="not found" priority />
      </ImageWrap>
      <Title>Something went wrong!</Title>
      <Button onClick={handleReset}>Try again</Button>
    </ErrorContent>
  );
}
