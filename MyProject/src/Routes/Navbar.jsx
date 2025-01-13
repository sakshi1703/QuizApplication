
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <nav style={{
            position: "fixed",
            padding: "20px",
            color: "red",
            backgroundColor: "lavender",
            width: "100%",
            textAlign: "right",
            
        }}>
            <Link  style={{padding: "10px"}} to="/">Home</Link>
            <Link style={{padding: "10px"}} to="/quiz">Quiz</Link>
            <Link style={{padding: "10px", paddingRight: "50px"}} to="/leaderboard">LeaderBoard</Link>
        </nav>
    )
}
export default Navbar;