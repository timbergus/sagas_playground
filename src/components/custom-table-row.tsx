import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

type TableRowProps = {
  user: UserProps;
};

export const CustomTableRow: React.FC<TableRowProps> = ({ user }) => {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.surname}</TableCell>
      <TableCell>{user.age}</TableCell>
    </TableRow>
  );
};
