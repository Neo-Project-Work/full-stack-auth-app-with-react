import React, { useEffect, useState,  } from "react";
import axios from "axios";

export default function GuestComponent() {
    const [message, setMessage] = useState("");
    // const [isPending, setIsPending] = useState(false);

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://nodejs-auth-app-0dzk.onrender.com/guest-endpoint",
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, [])
    

    return (
        <div>
        <h1 className="text-center">Guest Site</h1>
  
        {/* displaying our message from our API call */}
        {/* {isPending && <div className="loading-text">Loading...</div>} */}
        <h3 className="text-center text-danger">{message}</h3>
      </div>
    )
}