import React,{Component} from "react";
import Category from "./Components/Category/Category";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header"
import Products from "./Components/Products/Products"
import Image from './Components/Image';

class App extends Component{
    
    render(){
        return(
            <div>
                <Header/>
                <Home/>
                {/* <Category/> */}
                <Products/>
                <Image/>
            </div>                
        )
    }
}

export default App;
