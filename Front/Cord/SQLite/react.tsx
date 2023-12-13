import { useState } from 'react';
import axios from 'axios';
function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    async function getData() {
        try {
            const response = await axios.post('http://localhost:3001/contacts', { name, email });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async function readData() {
        try {
            const response = await axios.get('http://localhost:3001/contacts');
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
  return (
    <div className="App">
        <input type="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <button id="addData" onClick={getData}>Add Contact</button>
        <button id="readData" onClick={readData}>Get Contacts</button>
    </div>
  );
}

export default App;
