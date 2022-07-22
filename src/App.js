//import logo from './logo.svg';
import './App.css';
import { ref, listAll, getDownloadURL} from "firebase/storage";
import {useState, useEffect} from "react";
import {storage} from "./firebase";

 function App() {
  
  const fileref = ref(storage, "images/")
  const [imageurl, setimageurls] = useState([]);

  useEffect(() =>{
    listAll(fileref).then((response) => {
      response.items.forEach((items)=>{
        getDownloadURL(items).then((url) =>{
          setimageurls((prev) => [...prev , url]);
        });
      });
    });
  }, [])

  return (
    <div className='App'>
      <div className='container'>
      {imageurl.map((url) => {
        return <img src={url} alt='errors'/>;
      })}
    </div>
    </div>
  );
}

export default App;
