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
import { fetchMarques, filterMarques } from './redux/actions/marqueAction';
import { useDispatch, useSelector } from 'react-redux';
import ToolBar from './components/Toolbar';
import TableMarque from './components/TableMarque';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const StyledBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));


export default function BasicTable() {
  const [saveSort, setSaveSort] = React.useState('');
  const handleSaveSort = (event) => {
    setSaveSort(event.target.value);
  };
  const [sort, setSort] = React.useState('');
  const handleSort = (event) => {
    console.log(typeof (event.target.value))

    setSort(event.target.value);
    if (event.target.value == 1) {
      console.log("1")

      dispatch(filterMarques(marques));

      console.log("1")

    }
  };

  const list = useSelector(state => state.marque);
  const { marques,success } = list;

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(fetchMarques());

  }, [])

  const MyLink = props => <Link to="/add" {...props} />


  return (
    <div className="page-list">
      <h2 className="title">Gestion des marques</h2>
      <ToolBar marques={marques} handleSort={handleSort} handleSaveSort={handleSaveSort}></ToolBar>
      <div className="elements-count">{marques != undefined && <span> {marques.data.length}</span>} éléments affichés</div>
      <div className="marques-container">
        <TableMarque marques={marques}></TableMarque>
      </div>
      <Box sx={{ justifyContent: "flex-end" ,display:"flex",  }}>
        <Button className="addBrand" variant="text" component={MyLink} startIcon={<AddIcon />}>
          Ajouter une marque
        </Button>
      </Box>
    </div>
  );
}