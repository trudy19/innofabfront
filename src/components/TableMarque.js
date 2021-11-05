import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";




export default function TableMarque(props) {
  const MyLink = props => <Link to="/edit" {...props} />

  let history = useHistory();


  useEffect(() => {


  }, [props])

  const editpageClick = (e, row) => {
    console.log("row")
    history.push({
      pathname: '/edit',
      state: {
        data: row,
      },
    });

    console.log(row)
  }


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  };
  return (
    <div className="table">
      <TableContainer className="marques" component={Paper}>
        <Table sx={{ minWidth: 650  }} aria-label="simple table">
          <TableHead sx={{ 'tr': { border: '1px solid #373367' }, 'th': { 'border-bottom': '1px solid #292745' } }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Code</TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">Marque</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.marques != null && props.marques.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow onClick={(e) => editpageClick(e, row)}
                key={row.code}
                sx={{ 'td, th': { border: 0 } }}
              >
                <TableCell sx={{ color: "#fff" }} component="th" scope="row">
                  {row.code}
                </TableCell>
                <TableCell sx={{ color: "#fff" }} align="right">{row.nom}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination   page={page} rowsPerPage={rowsPerPage} handleChangeRowsPerPage={handleChangeRowsPerPage} handleChangePage={handleChangePage}></Pagination>
    </div>
  );
}