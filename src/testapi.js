import { useState } from "react";

const TEST = () =>{

    const [data, SetData] = useState([])

    async function getData(){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const result = await response.json();
            SetData(result)
        }
         catch(error){
            console.error('Error',error)
         }
    }

    getData();
    
    return(
        <div>
            {data.map((d)=>(
                <div key={d.id}>
                    <h1>{d.title}</h1>
                    <h4>{d.userId}</h4>
                </div>

            ))}
        </div>
    )

}

export default TEST;