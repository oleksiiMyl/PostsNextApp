import { PostCardType } from '../../types/components';
import styles from './styles.module.scss';

const PostCard = ({ title, children }: PostCardType) => (
  <div className={styles.postCard}>
    <h3 className={styles.postCardTitle}>{title}</h3>
    {children}
  </div>
);

export default PostCard;
