import { useState, useEffect } from 'react'
import '../app.css'
import axios from 'axios'

const Home = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get("http://localhost:3002/all-entries/");
          // Check if the fetched data is an array before setting the state
          setEntries(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  
    console.log(entries.data);
    return (
        <>
        {entries.map((item) => (
        <div className="container" key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.room}</p>
          <p>{item.content}</p>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))}
        </>
    );
}
 
export default Home;