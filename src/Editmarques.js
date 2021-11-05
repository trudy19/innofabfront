import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, IconButton, InputBase, makeStyles } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import "./addmarque.css"
import { editMarques, saveMarques } from './redux/actions/marqueAction';




  

export default function EditMarque(props) {


  const [nom, setNom] = React.useState('');
  const dispatch = useDispatch();


  const handlesubmit = (event) => {
    setNom(event.target.value);
    console.log(nom)
  };
  const editMarque = () => {
    dispatch(editMarques(editdata.code, nom))
  }


  const MyLink = props => <Link to="/" {...props} />
  const [editdata, setEditdata] = React.useState('');

  useEffect(() => {
    if (props.history.location != null) {
      setEditdata(props.history.location.state?.data)
      console.log(editdata)
    }
  }, [editdata])
  return (
    <div className="page-edit">

      <div className="page-edit-form">
        <h1 className="title">Modifier une marque</h1>

        <Box className="edit-container" sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Accordion className="container_accordion" sx={{ width: "100%", alignContent: "flex-end", background: '#232341', border: 'solid 1px #38375a' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ color: "white", pl: 3 }}>Information Génerales </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ color: '#fff', padding: 5, textAlign: "left" }}>

              <Box
                className="brand-input"
                component="form"
                noValidate
                fullWidth
                autoComplete="off"
                sx={{ display: 'flex', alignItems: 'center', mb: 4, background: '#232341', border: 'solid 1px #38375a', borderRadius: 15 }}
              >
                <Box sx={{ p: '15px 0 15px 20px', color: '#8882b6', flex: '0 0 auto' }}>Code    <Box sx={{ display: 'inline-block', ml: '55px' }}>|</Box></Box>
                {editdata != null ? <InputBase
                  sx={{  p: '3px 15px 0px' }}
                  placeholder={editdata.code}
                  inputProps={{ 'aria-label': editdata.code 
                }}
                  disabled
                  className="buttondisabled"
                  fullWidth
                  onChange={handlesubmit}
                >

                </InputBase> : <div></div>}

              </Box>
              <Box
                className="brand-input"
                component="form"
                noValidate
                autoComplete="off"
                fullWidth
                sx={{ display: 'flex', alignItems: 'center', background: '#232341', border: 'solid 1px #38375a', borderRadius: 15 }}
              >
                <Box sx={{ p: '15px 0 15px 20px', color: '#8882b6', flex: '0 0 auto' }}>Marque    <Box sx={{ display: 'inline-block', ml: '55px' }}>|</Box></Box>
                <InputBase
                
                  sx={{ color: '#fff', p: '3px 15px 0px' }}
                  inputProps={{ 'aria-label': 'Recherche' ,defaultValue: editdata.nom,
                }}
                  fullWidth
                  key={editdata.nom}
                  onChange={handlesubmit}
                  defaultValue={editdata.nom}
                >

                </InputBase>

              </Box>
            </AccordionDetails>

          </Accordion>

        </Box>
      </div>
      <Box sx={{ display: "flex", justifyContent: 'flex-end' }} >

        <Button className="return-button" variant="text" component={MyLink} startIcon={<KeyboardBackspaceIcon />}>
          retour
        </Button>
        <Button className="save-button" variant="text" onClick={editMarque} component={MyLink} startIcon={<CheckIcon />}>
          Enregistrer
        </Button>

      </Box>
    </div>
  );
}