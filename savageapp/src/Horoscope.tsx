import React, {useState} from 'react';
import logo from './logo.svg';
import TextBox from './TextBox';
import './App.css';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from "axios";

function Horoscope() {

const [sun, setSun] = useState("");    
const [moon, setMoon] = useState("");  
const [rising, setRising] = useState(""); 
const [horoscope, setHoroscope] = useState([]); 

const requestHoroscope = () => {
   const toSend = {
       sun : sun,
       moon : moon,
       rising : rising

   };

   let config = {
       headers: {
           "Content-Type": "application/json",
           'Access-Control-Allow-Origin': '*',
       }
   }

   axios.post('http://localhost:4567/horoscope', toSend, config)
   .then(response => {
       console.log(response.data);
       //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
       //Note: It is very important that you understand how this is set up and why it works!
       setHoroscope(response.data['horoscope']);
   })
   .catch(error => {
       console.log(error);
   });
}



  return (
    <div>
        <TextBox label={"Sun Sign"} change={setSun}></TextBox>
        <TextBox label={"Moon Sign"} change={setMoon}></TextBox>
        <TextBox label={"Rising Sign"} change = {setRising}></TextBox>
        <AwesomeButton type="primary" onPress={requestHoroscope}>Submit</AwesomeButton>
        <ul>
            {horoscope.map(item => <p>{item}</p>)}
        </ul>
    </div>
  );
}

export default Horoscope;