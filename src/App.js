import React from "react";
import { Container } from '@material-ui/core';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";


const App = () => {
    
    return (
        <Container maxWidth='lg'>
            <NavBar/>
            <Home/>
        </Container>
    )
}

export default App;