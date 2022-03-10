import React,{Component} from "react";
import Category from "./Components/Category/Category";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header"
import AppBar from './Components/AppBar/GAppBar'
import Products from "./Components/Products/Products"
import Image from './Components/Image';

class App extends Component{
    
    render(){
        return(
            <div>
                {/* <Header/> */}
                <AppBar/>
                {/* <Home/> */}
                {/* <Category/> */}
                {/* <Products/> */}

            </div>                
        )
    }
}

export default App;
