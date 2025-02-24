import styles from './styles.module.scss';
import { ChildrenType } from '../../types/components';

const Container = ({ children }: ChildrenType) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
