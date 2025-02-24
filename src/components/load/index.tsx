import styles from './styles.module.scss';

const LOADING = 'loading';

const Load = () => (
  <div className={styles.load}>
    {LOADING.split('').map((symbol) => (
      <div className={styles.loadSymbol} key={symbol}>
        {symbol}
      </div>
    ))}
  </div>
);

export default Load;
