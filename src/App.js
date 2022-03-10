import React,{Component} from "react";
import Category from "./Components/Category/Category";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header"
import Products from "./Components/Products/Products";
import AppBar from './Components/AppBar/GAppBar'

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
