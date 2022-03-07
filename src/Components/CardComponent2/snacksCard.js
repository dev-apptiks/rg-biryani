

import Grid from "@material-ui/core/Grid";
import CardDisplay from '../CardComponent/CardDisplay'
import snacksCardJson from './snacksCard.json'

const Snacks =()=>{

    const renderBody = () => {
        const list=[];
       return snacksCardJson.map((obj)=>{
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

    return(
        <div>

        <Grid container>
          {renderBody()}
          </Grid>
        
        </div>
    )

}
export default Snacks