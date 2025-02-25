import Link from '../link';
import { CurrentPostType } from '../../types/components';

import styles from './styles.module.scss';

const CurrentPost = ({ userId, userName, title, body, children }: CurrentPostType) => (
  <div className={styles.currentPost}>
    <h2 className={styles.currentPostTitle}>{title}</h2>
    <p className={styles.currentPostBody}>{body}</p>
    <p className={styles.currentPostAuthor}>
      Author:
      <Link href={`/user/${userId}`} primary>
        {userName}
      </Link>
    </p>
    <div className={styles.currentPostComments}>{children}</div>
    <Link href="/">Return to all posts</Link>
  </div>
);

export default CurrentPost;
