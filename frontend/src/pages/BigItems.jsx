import { useState, useEffect } from "react";
import axios from "axios";
import AddItem from "../components/AddItem";

const BigItems = () => {
  const [entries, setEntries] = useState([]);
  const [refresh, setRefresh] = useState(true);
  let valueField = "bigStuff"

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

  const deleteEntry = async (entryID) => {
    try {
        const {data} = await axios.delete(`http://localhost:3002/delete-entry/${entryID}`)
        setRefresh(prev => !prev)
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div className="big-container">
    <AddItem setRefresh={refresh} pageValue={valueField}/>
      <h1>Big Items</h1>
      <div className="entries-container">
      {entries.map((item) => {
        if (item.category === "bigStuff") {
            return (
                <div className="card" key={item._id}>
                <img className="post-image" src={item.image?.url}/>
                <h3>{item.title}</h3>
                <p>{item.room}</p>
                <p>{item.content}</p>
                <button onClick={()=>deleteEntry(item._id)}>Delete</button>
                <button>Edit</button>
              </div>
            )
        } else {
            return null;
        }
      })}
      </div>
        </div>
  );
};

export default BigItems;
