import classNames from 'classnames';

import { ImageWrapType } from '../../types/components';
import styles from './styles.module.scss';

const ImageWrap = ({ children, withBorder, size }: ImageWrapType) => (
  <div
    className={classNames(styles.imageWrap, {
      [`${styles.imageWrapWithBorder}`]: withBorder,
      [`${styles.imageWrap}${size}`]: size,
    })}
  >
    {children}
  </div>
);

export default ImageWrap;
