import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Home from "./components/HomePage"
import Project from "./components/Projects"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path={"/projects/*"} element={<Project/>}/>
                <Route path={"/*"} element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)