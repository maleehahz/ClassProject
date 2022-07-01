import { Link } from "react-router-dom"
import '../styles.css'

function Header() {
    return (
        <>
            <nav id="mainLinks">
                <Link to={"/"}> Home </Link> | 
                <Link to={"/projects"}> Projects </Link>
            </nav>
        </>
    )
}

// function ProjectHeader() {
//     return (
//         <>
//             <nav>
//                 <Link to={"/"}>Projects</Link>
//                 <Link to={"/1"}>Nasa Homework</Link>
//                 <Link to={"/2"}>Grid Layout</Link>
//                 <Link to={"/3"}>P5</Link>
//                 <Link to={"/4"}>D3</Link>
//             </nav>
//         </>
//     )
// }

export default Header