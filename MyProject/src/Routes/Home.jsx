import { Link } from "react-router-dom";
import { useState } from "react";
import { Center } from "@chakra-ui/react";

const Home = ()=>{
    const [data, setData] = useState({
        name : "",
        category : "",
        difficulty : "",
        numberquestions : 5,
    });



    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData((prev)=>({...prev, [name]: value}));

    }

    const StartQuiz = (e)=>{
        e.preventDefault();
        console.log("Quiz Started");
        alert(`Started Quiz for ${data.name} and ${data.category}`)
    }


    const categories = [
        {id: 1, name: "General knowledge"},
        {id: 2, name: "Entertainment"},
        {id: 3, name: "Science & Nature"},
        {id: 4, name: "Mythology"},
        {id: 5, name: "Sports"},
        {id: 6, name: "Geography"},
        {id: 7, name: "Politics"},
        {id: 8, name: "Art"},
        {id: 9, name: "Animals"},
        {id: 10, name: "Vehicals"}
    ]

    const difficulties = ["Easy", "Medium", "Hard"]

    return(
        <>
        <div style={{ backgroundColor: "lavender", border: "1px solid black", width: "100%", height: "100%"}}>
            <h1  style={{
                textAlign: "center",
                color: "lavender",
                padding: "100px",
                margin: "1px",
                paddingBottom: "50px",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(https://plus.unsplash.com/premium_photo-1664443577580-dd2674e9d359?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
            }}>Setup Your Quiz</h1>
            


            <div style={{
                backgroundImage: "url(https://media.istockphoto.com/id/1349783208/photo/question-mark.jpg?s=2048x2048&w=is&k=20&c=rwBodTHcq6ofe_GoCRQDfrX6-tTnOuH3Ek-mo_Sjxys=)",
                height: "100%",
                padding: "100px",
            }}
                >

            <form onSubmit={StartQuiz}>
                <div style={{
                    padding: "20px",
                    color: "red",
                    marginLeft: "30%"

                }}>
                    <label>
                        <strong>Name: </strong>
                    </label>
                    <input value={data.name} placeholder="Write your Name" type="text" name="Name" onChange={handleChange} />
                </div>


                <div style={{
                    padding: "20px",
                    color: "red",
                    marginLeft: "30%"
                }}>
                    <label>
                        <strong>Category:  </strong>
                    </label>
                    <select
                      name = "category"
                      value={data.category}
                      onChange={handleChange}
                    >
                        <option>Select a Category</option>
                        {
                            categories.map((ele)=>(
                                <option key={ele.id} value={ele.name}>{ele.name}</option>
                            ))
                        }
                    </select>
                </div>


                <div style={{
                    padding: "20px",
                    color: "red",
                    marginLeft: "30%"
                }}>
                    <label>
                        <strong>Difficulty:  </strong>
                    </label>
                    <select
                    name = "category"
                    value={data.difficulty}
                    onChange={handleChange}
                    >
                        <option>Select Level</option>
                        {
                            difficulties.map((ele)=>(
                                <option>{ele}</option>
                            ))
                        }
                    </select>
                    
                </div>

                <div style={{
                    padding: "20px",
                    color: "red",
                    marginLeft: "30%"
                }}>
                    <label>
                        <strong>Number Of Questions:  </strong>
                    </label>
                    <input onChange={handleChange} placeholder="select number" type="number" value={data.numberquestions}/>
                    
                </div>


                <div style={{
                    padding: "20px",
                }}>
                    <button style={{
                        color: "lavender",
                        backgroundColor: "black",
                        border: "1px solid red",
                        padding: "5px",
                        borderRadius: "10px",
                        marginLeft: "30%"
                    }}
                    type="submit">Start Quiz</button>
                </div>
            </form>
            </div>


        </div>
        </>
    )
}

export default Home;