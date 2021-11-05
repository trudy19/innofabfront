import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';


const StyledBox = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
    },
}));


export default function Pagination(props) {

    const [resultsByPage, setResultsByPage] = React.useState('');
    const handleResultsByPage = (event) => {
        setResultsByPage(event.target.value);
    };



    return (
        <StyledBox fullWidth>
            <TablePagination
                sx={{ color: '#fff' }}
                fullWidth
                component="div"
                count={100}
                page={props.page}
                onPageChange={props.handleChangePage}
                rowsPerPage={props.rowsPerPage}
                onRowsPerPageChange={props.handleChangeRowsPerPage}
            
            />
        </StyledBox>
    );
}