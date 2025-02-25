import Image from 'next/image';
import { notFound } from 'next/navigation';

import Container from '../../../components/container';
import UserContent from '../../../components/user/content';
import UserAvatar from '../../../components/user/avatar';
import UserDetails from '../../../components/user/details';
import List from '../../../components/list';
import ListItem from '../../../components/list/listItem';
import ImageWrap from '../../../components/imageWrap';
import Link from '../../../components/link';

import { getUser, getUsers } from '../../../api/userService';
import { objectIsEmpty } from '../../../utils/general';
import { RouteByIdType } from '../../../types/routes';
import { UserType } from '../../../types/data';

import UserIcon from '../../../../public/users-icon.jpg';

export async function generateStaticParams() {
  const users: UserType[] = await getUsers();

  return users.map((user) => ({
    id: String(user.id),
  }));
}

export const generateMetadata = async ({ params }: RouteByIdType) => {
  const { id } = await params;
  const currentUser: UserType = await getUser(id);

  return {
    title: currentUser.name,
    description: `Profile page of ${currentUser.name}|${currentUser.username}`,
  };
};

const UserPage = async ({ params }: RouteByIdType) => {
  const { id } = await params;

  const user: UserType = await getUser(id);

  if (objectIsEmpty(user)) {
    notFound();
  }

  return (
    <Container>
      <UserContent>
        <UserAvatar>
          <ImageWrap withBorder>
            <Image src={UserIcon} alt="user avatar" />
          </ImageWrap>
        </UserAvatar>
        <UserDetails>
          <h3>{user.name}</h3>
          <List>
            <ListItem>
              <span>
                <strong>Username: </strong>
                {user.username}
              </span>
            </ListItem>
            <ListItem>
              <span>
                <strong>Email: </strong>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </span>
            </ListItem>
            <ListItem>
              <span>
                <strong>Phone: </strong>
                {user.phone}
              </span>
            </ListItem>
            <ListItem>
              <span>
                <strong>Website: </strong>
                {user.website}
              </span>
            </ListItem>
          </List>
          <Link href="/">Return to all posts</Link>
        </UserDetails>
      </UserContent>
    </Container>
  );
};

export default UserPage;
