import '../styles.css'
import { Link, Routes, Route } from "react-router-dom"
import Description from "./Description"
import One from "./h1/h1"
import Two from "./h2/h2"
import Three from "./h3/h3"
import Four from "./h4/h4"

function Project() {
    return (
        <>
            <nav id="projLink">
                <Link to={"1"}> Nasa Homework </Link> |
                <Link to={"2"}> Grid Layout </Link> |
                <Link to={"3"}> P5 </Link> |
                <Link to={"4"}> D3 </Link>
            </nav>
            <Routes>
                <Route path="1" element={<One/>}/>
                <Route path="2" element={<Two/>}/>
                <Route path="3" element={<Three/>}/>
                <Route path="4" element={<Four/>}/>
                <Route path="*" element={<Description/>}/>
            </Routes>
        </>
    )
}

export default Project