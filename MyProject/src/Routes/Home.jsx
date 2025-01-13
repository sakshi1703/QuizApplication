import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
        <div>
            <h1>Setup Your Quiz</h1>
            <form>
                <div>
                    <input placeholder="Write your Name" type="text" name="Name" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Home;