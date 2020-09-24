type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

type UsersProps = {
  users: UserProps[];
  loading: boolean;
  error: string;
};
