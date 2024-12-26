import { Head } from "./header";


export function Home(){
    return(
        <div>
            <Head/>

            <div className="relative top-9">
                <div className="w-11/12 m-auto">
                    <h1 className="text-2xl text-center font-mono p-2">The Hackathon Event App is your ultimate companion for a seamless and engaging hackathon experience. From effortless event registration and team management to real-time updates and project submissions, this app caters to both participants and organizers. It provides tools for collaboration, networking, and access to essential resources, while also streamlining judging and feedback processes. Whether you're innovating, competing, or managing, the Hackathon Event App ensures a smooth and productive journey for everyone involved.</h1>
                </div>
                          
                <div className="w-11/12 m-auto flex justify-center relative top-7">
                    <button className="border-2 border-solid border-pink-500 text-pink-500 p-2 rounded-lg">Start Event</button>
                </div>
            </div>
        </div>
    )
}