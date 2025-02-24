import styles from './styles.module.scss';
import { ChildrenType } from '../../../types/components';

const UserDetails = ({ children }: ChildrenType) => (
  <div className={styles.userDetails}>{children}</div>
);

export default UserDetails;
