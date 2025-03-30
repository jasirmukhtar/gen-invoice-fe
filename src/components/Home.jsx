import axios from 'axios';
import { useEffect, useState } from 'react';
function Home() {

    const BASE_URL = 'http://localhost:8080/api/home';
    const [message, setMessage] = useState('');

    useEffect(()=>{

        axios.get(BASE_URL).
        then(response => {

            setMessage(response.data)

        }).catch(error => {
            console.error("Error fetching response")
        });
        

    }, [])


    

    return <div>
        <p>{message}</p>
    </div>
  
}

export default Home;