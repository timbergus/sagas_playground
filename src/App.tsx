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

import { CustomTableRow } from './components/custom-table-row';

import { getUsers } from './redux/actions/users';

import './App.css';

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
  const users = useSelector(
    (state: { users: UsersProps }) => state.users.users
  );
  const classes = createClasses();

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: '0',
          name: 'John',
          surname: 'Doe',
          age: 40,
        },
      ])
    );
  }, [dispatch]);

  return (
    <>
      {users.length > 0 ? (
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Surname</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <CustomTableRow key={user.id} user={user} />
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
