import { useState } from "react";
import Banner from "./banner";
import Displayed from "./displayed";
import Home from "./home";
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState();
    const [item, setItem] = useState();
    const [items, setItems] = useState([]);
    const [page, setPage] = useState();
    
    // Fetch a message from FastAPI
    const fetchMessage = async () => {
        try {
        const response = await axios.get('http://localhost:3000/api/nominees');
        setMessage(response.data.Hello);
        } catch (error) {
        console.error('Error fetching message:', error);
        }
    };
    
    // Create a new item via FastAPI
    const createItem = async (item) => {
        try {
        const response = await axios.post('http://127.0.0.1:8000/api/nominee/', Item);
        console.log('Item created:', response.data);
        fetchItems(); // Optionally update the items list after creation
        } catch (error) {
        console.error('Error creating item:', error);
        }
    };

    // Fetch all items from FastAPI
    const fetchItems = async () => {
        try {
        const response = await axios.get('http://127.0.0.1:8000/nominees/');
        setItems(response.data);
        } catch (error) {
        console.error('Error fetching items:', error);
        }
    };
    
  
    return(
        <>
        <Banner setPage={setPage} />
        {page ? <Displayed selectedPage={page} nomineeList={items} addnominee={createItem}/> : <Home setPage={setPage} />};
        </>
    );
};

export default App;