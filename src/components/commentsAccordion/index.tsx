import { CommentsAccordionType } from '../../types/components';
import styles from './styles.module.scss';

const INPUT_ID = 'ACCORDION';

const CommentsAccordion = ({ comments }: CommentsAccordionType) => {
  const commentsCount = comments.length;

  return (
    <div className={styles.comments}>
      <input type="checkbox" className={styles.commentsInput} id={INPUT_ID} />
      <label htmlFor={INPUT_ID} className={styles.commentsLabel}>
        Comments ({commentsCount})
      </label>
      <div className={styles.commentsContent}>
        <ul className={styles.commentsList}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.commentsListItem}>
              <h4 className={styles.commentsName}>{comment.name}</h4>
              <span className={styles.commentsAuthor}>
                by: <strong>{comment.email.split('@')[0]}</strong>
              </span>
              <p className={styles.commentsBody}>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsAccordion;
