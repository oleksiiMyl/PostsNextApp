import styles from './styles.module.scss';
import { ButtonType } from '../../types/components';

const Button = ({ children, ...restProps }: ButtonType) => (
  <button className={styles.button} type="button" {...restProps}>
    {children}
  </button>
);

export default Button;
