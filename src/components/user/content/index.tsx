import styles from './styles.module.scss';
import { ChildrenType } from '../../../types/components';

const UserContent = ({ children }: ChildrenType) => (
  <div className={styles.userContent}>{children}</div>
);

export default UserContent;
