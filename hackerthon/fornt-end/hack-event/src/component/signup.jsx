
import axios from "axios";

 export function SignUp(){

         function hendleSubmit(e){

             e.preventDefault();

             let obj={
                 name:e.target[0].value,
                 email:e.target[1].value,
                 password:e.target[2].value
             }
    

             axios.post("http://127.0.0.1:3000/hack/signup",obj)
                      .then((res)=>{
                        console.log(res)
                    } 
                    )
                      .catch((err)=>console.log(err))

        
         }

    return(
        <div className="flex justify-center h-screen">
            <div className="w-4/12 m-auto relative top-6 border-solid border-2 border-pink-500 p-4 rounded-lg">
                <h1 className="text-3xl font-bold text-center text-pink-500">Sign Up</h1>

                <div>

                    <form className="flex flex-col gap-4 relative top-4 p-4" onSubmit={hendleSubmit}>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="text" placeholder="Name"/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="text" placeholder="Email"/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="password" placeholder="Password"/>

                    <button type="submit" className="border-solid border-2 text-white bg-pink-500 rounded-md p-1">Sing Up</button>

                    </form>
                </div>
            </div>
        </div>
    )
}