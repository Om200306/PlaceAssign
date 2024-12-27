import axios from "axios"
import { Head } from "./header";
import { useEffect, useState } from "react";

export function Events(){

     let[data,setData]=useState("");

     let user=localStorage.getItem("event");
     
         useEffect(()=>{
     
             axios.get("https://hackerthon-events-default-rtdb.asia-southeast1.firebasedatabase.app/events.json")
             .then((res)=>{
                 setData(res.data)
             })
             .catch((err)=>{
                 console.log(err)
             })
              
         },[data])


         function hendleAdd(e){

            e.preventDefault();

            let obj={
                company:e.target[0].value,
                topic:e.target[1].value,
                startDate:e.target[2].value,
                endDate:e.target[3].value
            }

            axios.post("https://hackerthon-events-default-rtdb.asia-southeast1.firebasedatabase.app/events.json",obj)
            .then((res)=>{
                alert("Event Added")
            })
            .catch((err)=>{
                console.log(err)
            })

         }

         function delEvent(id){
          
            console.log(id);
            

                axios.delete(`https://hackerthon-events-default-rtdb.asia-southeast1.firebasedatabase.app/events/${id}.json`)
                .then((res)=>{
                   alert("Event Deleted")
                })
                .catch((err)=>{
                    console.log(err)
                })
         }

    return(
        <div>
         <div>
                <Head/>
        </div>

        <div>
             {user && (
                <>
                <div>
                   
                <form className="flex flex-col gap-4 relative top-5 bottom-5 p-4 w-6/12 m-auto border-solid border-2 border-pink-500 rounded-md">
                <h1 className="text-xl text-center font-mono p-2 font-bold">Add Events</h1>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="text" placeholder="Company Name"/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="text" placeholder="Topics"/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="date" placeholder="Start Date"/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="date" placeholder="End Date"/>

                    <button className="border-solid border-2 text-white bg-pink-500 rounded-md p-1" type="submit">Submit</button>
                    </form>
                </div>
                </>
             )}

        </div>

        <div className="w-11/12 m-auto flex flex-wrap justify-center mt-5 gap-4 relative top-4">
            {
                Object.entries(data).map(([id,ele])=>{
                           return(
                            <div className="border-solid border-2 border-black p-4 rounded-md" key={id}>
                                <p><b>Company Name</b> :{ele.company}</p>
                                <p> <b>Topic</b> :{ele.topic}</p>
                                <p><b>Start Date</b> :{ele.startDate}</p>
                                <p><b>End Date </b> :{ele.endDate}</p>

                                <button className="border-2 border-solid  rounded-md mt-1 bg-pink-500 text-white p-1" onClick={()=>delEvent(id)}>Delete</button>
                            </div>
                           )
                })
            }
        </div>

        </div>
    )
}