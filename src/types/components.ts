import { ReactElement } from 'react';

export type ChildrenType = {
  children: ReactElement | ReactElement[];
};

export type PostCardType = {
  title: string;
  children: ReactElement;
};

export type CurrentPostType = {
  userId: number;
  userName: string;
  title: string;
  body: string;
  children: ReactElement;
};

export type LinkType = {
  children: string;
  href: string;
  variant?: 'Primary';
};

export type CommentsAccordionType = {
  comments: {
    postId: number;
    id: number;
    name: string;
    body: string;
    email: string;
  }[];
};

export type ImageWrapType = {
  children: ReactElement;
  withBorder?: boolean;
  size?: 'Lg';
};

export type ButtonType = {
  children: string;
  [restProps: string]: any;
};
