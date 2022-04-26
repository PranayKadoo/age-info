import React,{useState} from "react";
import "./User.css";
import AddUser from "./AddUser";
const User = () =>{
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[userData,setUserData] = useState([]);
    const nameHandler = (event) =>{
    if(name.length<100){
      setName(event.target.value);
    }
    }
    const ageHandler = (event) =>{
    if(age>=0){
        setAge(event.target.value)
    }
      }
    const submitHandler = (event) =>{
        event.preventDefault();
        const userInput ={
            name:name,
            age:age,
        }
        setUserData(prevData=>{return[userInput,...prevData]});
        setName('');
        setAge('');
    }
    const userList =userData.map((user)=>{
        return <li key={user.name+user.age}>Name:{user.name}, Age:{user.age}</li>
      })
    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div className="input__name">
                    <label>Username:</label>
                    <input type="text" value={name} onChange={nameHandler}/>
                </div>
                <div className="input__age">
                    <label>Age:</label>
                    <input type="number" value={age} onChange={ageHandler}/>
                </div>
                <button type="submit">Add User</button>
            </form>
            <div className="addUser">
                <AddUser userList={userList}/>
            </div>
        </React.Fragment>
    )
}
export default User;