import { notFound } from 'next/navigation';

import Container from '../../../components/container';
import CurrentPost from '../../../components/currenPost';
import CommentsAccordion from '../../../components/commentsAccordion';

import { getPost } from '../../../api/postService';
import { getUser } from '../../../api/userService';
import { getComments } from '../../../api/commentService';
import { objectIsEmpty } from '../../../utils/general';
import { RouteByIdType } from '../../../types/routes';
import { PostType, UserType, CommentType } from '../../../types/data';

export const generateMetadata = async ({ params }: RouteByIdType) => {
  const { id } = await params;
  const currentPost: PostType = await getPost(id);

  return {
    title: currentPost.title,
    description: 'Post main information with comments and link to author profile',
  };
};

const PostPage = async ({ params }: RouteByIdType) => {
  const { id } = await params;
  const currentPost: PostType = await getPost(id);
  const currentUser: UserType = await getUser(String(currentPost.userId));
  const currentComments: CommentType[] = await getComments(currentPost.id);

  if (objectIsEmpty(currentPost)) {
    notFound();
  }

  return (
    <Container>
      <CurrentPost
        title={currentPost.title}
        body={currentPost.body}
        userId={currentUser.id}
        userName={currentUser.username ?? currentUser.name}
      >
        <CommentsAccordion comments={currentComments} />
      </CurrentPost>
    </Container>
  );
};

export default PostPage;
