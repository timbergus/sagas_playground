import { GET_USER } from '../action-types';

const usersInitialState: UsersProps = {
  users: [],
};

export default function users(
  state = usersInitialState,
  action: { type: string; payload: UserProps[] } = { type: '', payload: [] }
) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        users: [...payload],
      };
    default:
      return state;
  }
}
