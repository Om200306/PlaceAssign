

export function Head(){
    return(
        <div className="bg-pink-500 p-2 text-white">

              <div className="flex justify-between font-mono w-11/12 m-auto">

                   <div>
                            <h1 className="text-2xl bg-black p-2 rounded-lg">Hackerthon</h1>
                   </div>

                   <div className="flex gap-8">
                         
                   <button>Events</button>
                   <button>About us</button>

                   </div>

                   <div className="flex gap-4">

                    <button className="border-2 border-solid border-white p-2 rounded-lg">SignUp</button>
                    <button className="border-2 border-solid border-white p-2 rounded-lg">LogIn</button>

                   </div>

              </div>

        </div>
    )
}