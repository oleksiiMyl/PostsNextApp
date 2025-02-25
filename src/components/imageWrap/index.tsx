import classNames from 'classnames';

import { ImageWrapType } from '../../types/components';
import styles from './styles.module.scss';

const ImageWrap = ({ children, withBorder, lg }: ImageWrapType) => (
  <div
    className={classNames(styles.imageWrap, {
      [`${styles.imageWrapWithBorder}`]: withBorder,
      [`${styles.imageWrapLg}`]: lg,
    })}
  >
    {children}
  </div>
);

export default ImageWrap;
