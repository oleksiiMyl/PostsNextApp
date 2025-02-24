// Update cache every 10 min
export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 600 },
  });
  const data = await response.json();
  return data;
};

// Without cache
export const getPost = async (postId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    cache: 'no-store',
  });
  const data = await response.json();
  return data;
};
