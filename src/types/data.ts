export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
};

export type CommentType = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
