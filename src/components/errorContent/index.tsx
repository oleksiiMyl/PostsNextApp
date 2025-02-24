import { ChildrenType } from '../../types/components';

import styles from './styles.module.scss';

const ErrorContent = ({ children }: ChildrenType) => {
  return <div className={styles.errorContent}>{children}</div>;
};

export default ErrorContent;
