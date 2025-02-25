import NextLink from 'next/link';
import classNames from 'classnames';
import { LinkType } from '../../types/components';

import styles from './styles.module.scss';

const Link = ({ href, children, primary }: LinkType) => (
  <NextLink
    href={href}
    className={classNames(styles.link, {
      [`${styles.linkPrimary}`]: primary,
    })}
  >
    {children}
  </NextLink>
);

export default Link;
