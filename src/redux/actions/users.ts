import { GET_USER } from '../action-types';

export const getUsers = (users: UserProps[]) => ({
  type: GET_USER,
  payload: users,
});
