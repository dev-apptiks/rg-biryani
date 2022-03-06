import React from 'react';
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./Header.css"

const useStyles = makeStyles((theme) => ({
    button: {
         },
    h1:{
        color: "rgb(235, 23, 0)"
    }
  }));

const Header=()=>{
    const classes = useStyles();
    const [Menu, setMenu] = React.useState("");

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  return (
      <div className="Header">
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Menu</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Menu}
          label="Menu"
          onChange={handleChange}
        >
          <MenuItem value={10}>Biryani</MenuItem>
          <MenuItem value={20}>Starters</MenuItem>
          <MenuItem value={30}>Snacks</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <h3 className="h3">RG Biryani</h3>
    <div>
    <Button variant="contained" color="default" className={classes.button}>Login</Button>
    <Button variant="contained" color="default" className={classes.button}>Sign Up</Button>
    </div>
    </div>
  );

}

export default Header;
