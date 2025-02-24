export const getComments = async (postId: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  const data = await response.json();
  return data;
};
