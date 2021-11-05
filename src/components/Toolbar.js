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
import { useDispatch } from 'react-redux';
import { rechercheMarque } from '../redux/actions/marqueAction';



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


export default function ToolBar(props) {

  const [recherche, setRecherche] = React.useState('');


  const dispatch=useDispatch();



  const search=(e)=>{
    dispatch(rechercheMarque(props.marques,recherche))

    e.preventDefault();
  }





  const handlesubmit = (event) => {
    setRecherche(event.target.value);
    
  };
  return (
    <StyledBox className="toolsbar" sx={{ display: 'flex' }}>
      <Box
        className="search"
        component="form"
        noValidate
        autoComplete="off"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', background: '#3c3957', borderRadius: 15 }}
      >
        <IconButton  sx={{ p: '10px' }} aria-label="search"  onClick={search} >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: '#fff' }}
          placeholder="Recherche"
          inputProps={{ 'aria-label': 'Recherche' }}
          onChange={handlesubmit}
        />
      </Box>

      <Box className="sort">
        <FormControl fullWidth sx={{ background: "#333058", borderRadius: 15, height: 49, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          <IconButton sx={{ p: '10px', color: '#fff' }} aria-label="sort">
            <FilterAltIcon />
          </IconButton>
          <Select
            labelId="sort-label"
            id="sort-select"
            sx={{ color: "#fff", height: 49 }}
            label="Sort"
            onChange={props.handleSort}
            fullWidth
            defaultValue={-1}
          >
            <MenuItem selected disabled value={-1} sx={{ color: "#fff" }}>
              Appliquer un filtre
            </MenuItem>
            <MenuItem value={1} sx={{ color: "#fff" }}>A-Z</MenuItem>
            <MenuItem value={2} sx={{ color: "#fff" }}>Filtre 2</MenuItem>
            <MenuItem value={3} sx={{ color: "#fff" }}>Filtre 3</MenuItem>
          </Select>
        </FormControl>

      </Box>

      <Box className="saved-sort">

        <FormControl fullWidth sx={{ background: "#211f3b", border: "1px solid #333058", borderRadius: 15, height: 49, flexDirection: 'row' }}>
          <Select
            labelId="saved-sort-label"
            id="saved-sort-select"
            sx={{ color: "#fff", height: 49 }}
            label="saved-Sort"
            displayEmpty
            onChange={props.handleSaveSort}
            fullWidth
            border={0}
            defaultValue={-1}
          >
            <MenuItem selected disabled value={-1} sx={{ color: "#fff" }}>
              Filtres enregistrés
            </MenuItem>
            <MenuItem value={1} sx={{ color: "#fff" }}>Filtre 1</MenuItem>
            <MenuItem value={2} sx={{ color: "#fff" }}>Filtre 2</MenuItem>
            <MenuItem value={3} sx={{ color: "#fff" }}>Filtre 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </StyledBox>
  );
}