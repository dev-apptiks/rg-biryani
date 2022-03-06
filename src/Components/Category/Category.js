import React,{useState} from "react";
import cardData from "../CardComponent/cardData.json"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import CardDisplay from "../CardComponent/CardDisplay";
import Grid from "@material-ui/core/Grid";

const Category=()=> {
    const [value,setValue]=useState(0);
  const renderBody = () => {
        const list=[];
       return cardData.map((obj)=>{
            if(!list.includes(obj.category)){
                list.push(obj.category);
            return (
                <>
                <Grid item xs={12} md={12} lg={12} style={{fontSize:"25px",fontWeight:"bold",fontFamily: "DD-TTNorms",margin:"2px"}}>
                  {obj.category}
                  </Grid>
                     <Grid item xs={12} md={6} lg={6}>
                         <CardDisplay data={obj}/>
                     </Grid>
                </>  
            )
            }
            return (
                     <Grid item xs={12} md={6} lg={6}>
                       <CardDisplay data={obj}/>
                       </Grid>
            )    
        })
  }
  const handleTabs=(event, value)=>{
        setValue(value);
  }
  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          indicatorColor="primary"
          textColor="black"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          value={value}
          onChange={handleTabs}
        >
          <Tab value={value} index={0} label="Biryani"  >Details 1</Tab>
          <Tab value={value} index={1} label="Starters" > Details 2</Tab>
          <Tab value={value} index={2} label="Snacks"  > Details 3</Tab>
        </Tabs>
      </AppBar>
      <Grid container>
      {renderBody()}
      </Grid>
    </div>
  );
}

export default Category;