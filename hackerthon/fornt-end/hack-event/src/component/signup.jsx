import { useNavigate } from "react-router-dom";
import axios from "axios";

 export function SignUp(){

    let navigate=useNavigate();

         function hendleSubmit(e){

             e.preventDefault();

             let obj={
                 name:e.target[0].value,
                 email:e.target[1].value,
                 password:e.target[2].value,
                 age:e.target[3].value,
                 gender:e.target[4].value
             }
    

             axios.post("https://book-store-d61c2-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",obj)
                      .then((res)=>{
                       alert("User created successfully")
                       navigate("/login");

                    })
                      .catch((err)=>console.log(err))

        
         }

    return(
        <div className="flex justify-center h-screen">
            <div className="w-4/12 m-auto relative top-6 border-solid border-2 border-pink-500 p-4 rounded-lg">
                <h1 className="text-3xl font-bold text-center text-pink-500">Sign Up</h1>

                <div>

                    <form className="flex flex-col gap-4 relative top-4 p-4" onSubmit={hendleSubmit}>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="text" placeholder="Name" required/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="text" placeholder="Email" required/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="password" placeholder="Password" required/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="number" placeholder="age" required/>

                    <select name="gender" id="gender" className="border-solid border-2 border-pink-500 rounded-md p-2" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <button type="submit" className="border-solid border-2 text-white bg-pink-500 rounded-md p-1">Sing Up</button>

                    </form>

                </div>
                <button onClick={()=>navigate("/login")} className="text-m p-3">Already have Account.</button>
            </div>
        </div>
    )
}