import { ChildrenType } from '../../../types/components';
import styles from './styles.module.scss';

const ListItem = ({ children }: ChildrenType) => {
  return <li className={styles.listItem}>{children}</li>;
};

export default ListItem;
