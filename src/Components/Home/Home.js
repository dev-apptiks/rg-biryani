import React from "react";
import "./Home.css";
//import useMediaQuery from '@material-ui/core/useMediaQuery';
//import { makeStyles} from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
    
//   }));

const Home =()=>{
    
    return (
        <div>
            <div>
            <img className="Homeimg" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="home-img"/>
            <img className="Homesubimage" src="https://logodix.com/logo/1138780.jpg" alt="Home-subimg"/>
            </div>
            <h1 className="h1">Raju Gari Biryani Adda</h1>
            <p><span style={{color:"blue"}}>RG Biryani</span>•Takeout, Fast Food•4.4(1,400+ ratings)</p>
        </div>
    )
}

export default Home;