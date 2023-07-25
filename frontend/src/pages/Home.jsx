import { useState, useEffect } from 'react'
import '../app.css'
import axios from 'axios'

const Home = () => {
    const [entries, setEntries] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get("http://localhost:3002/all-entries/");
          setEntries(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [refresh]);
  
    console.log(entries.data);
    return (
        <>
        {/* {entries.map((item) => (
        <div className="container" key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.room}</p>
          <p>{item.content}</p>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))} */}
        </>
    );
}
 
export default Home;