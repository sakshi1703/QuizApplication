
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <nav style={{
            position: "fixed",
        }}>
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/leaderboard">LeaderBoard</Link>
        </nav>
    )
}
export default Navbar;