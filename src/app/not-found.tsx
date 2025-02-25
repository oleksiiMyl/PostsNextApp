import Image from 'next/image';
import Link from 'next/link';

import ErrorContent from '../components/errorContent';
import ImageWrap from '../components/imageWrap';
import Title from '../components/title';

import icon404 from '../../public/404.png';

const NotFound = () => (
  <ErrorContent>
    <ImageWrap lg>
      <Image src={icon404} alt="not found" priority />
    </ImageWrap>
    <Title>Not Found</Title>
    <Link href="/">Return to all Posts</Link>
  </ErrorContent>
);

export default NotFound;
