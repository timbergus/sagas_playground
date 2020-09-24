import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';

import { getUsersRequest } from './redux/reducers/users';

const createClasses = makeStyles({
  table: {
    margin: '0 auto',
    marginTop: 80,
    width: 800,
  },
  notification: {
    margin: '0 auto',
    marginTop: 80,
    textAlign: 'center',
    padding: 20,
    width: 800,
  },
});

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: { users: UsersProps }) => state.users
  );
  const classes = createClasses();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <Paper elevation={3} className={classes.notification}>
        Loading!
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper elevation={3} className={classes.notification}>
        {error}
      </Paper>
    );
  }

  return (
    <>
      {users.length > 0 ? (
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Paper elevation={3} className={classes.notification}>
          There are no user to show!
        </Paper>
      )}
    </>
  );
}

export default App;
