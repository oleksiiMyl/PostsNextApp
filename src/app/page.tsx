import type { Metadata } from 'next';

import Container from '../components/container';
import List from '../components/list';
import ListItem from '../components/list/listItem';
import Title from '../components/title';
import PostCard from '../components/postCard';
import Link from '../components/link';
import { getPosts } from '../api/postService';
import { PostType } from '../types/data';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'Check our posts and dive into details to get more info',
};

const Posts = async () => {
  const posts: PostType[] = await getPosts();

  return (
    <Container>
      <Title>Posts</Title>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <PostCard title={post.title}>
              <Link href={`/post/${post.id}`} primary>
                Details
              </Link>
            </PostCard>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Posts;
