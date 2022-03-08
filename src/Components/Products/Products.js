import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BiryaniCard from '../CardComponent2/biryaniCard';
import Staters from '../CardComponent2/statersCard';
import Snacks from '../CardComponent2/snacksCard';
import Grid from "@material-ui/core/Grid";
import GenericCard from '../CardComponent2/GenericCard';
import biryandCardJson from '../CardComponent2/biryaniCard.json';
import StatersJson from '../CardComponent2/statersCard.json';
import SnacksJson from '../CardComponent2/snacksCard.json';
import KababJson from '../CardComponent2/kabab.json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getStatersComponent = () => {

    return StatersJson.map((obj) => (
      <Grid item xs={12} md={6} lg={6}>
        <GenericCard data={obj} />
      </Grid>
    ))
  }

  const getSnacksComponent = () => {

    return SnacksJson.map((obj) => (

      <Grid item xs={12} md={6} lg={6}>
        <GenericCard data={obj} />
      </Grid>
    ))
  }
  const getKababComponent =()=>{
            
      return  KababJson.map((obj)=>(
                
            <Grid item xs={12} md={6} lg={6}>
              <GenericCard data={obj} />
            </Grid>
             
        ))

  }
  const genComponent = () => {
    return biryandCardJson.map((obj) => {

      return (
        <Grid item xs={12} md={6} lg={6}>
          <GenericCard data={obj} />
        </Grid>
         )
    }
    
    )
  }



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Biryani" {...a11yProps(0)} />
          <Tab label="Staters" {...a11yProps(1)} />
          <Tab label="Snacks" {...a11yProps(2)} />
          <Tab label="Kabab" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container>
          {genComponent()}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container>
          {getStatersComponent()}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container>
          {getSnacksComponent()}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Grid container>
          {getKababComponent()}

        </Grid>
      </TabPanel>

    </div>
  );
}
