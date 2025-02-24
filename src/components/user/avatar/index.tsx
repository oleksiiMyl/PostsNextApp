import styles from './styles.module.scss';
import { ChildrenType } from '../../../types/components';

const UserAvatar = ({ children }: ChildrenType) => (
  <div className={styles.userAvatar}>{children}</div>
);

export default UserAvatar;
