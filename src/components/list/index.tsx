import { ChildrenType } from '../../types/components';
import styles from './styles.module.scss';

const List = ({ children }: ChildrenType) => <ul className={styles.list}>{children}</ul>;

export default List;
