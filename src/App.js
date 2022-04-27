 
import styles from  './App.css';
import {useState, useEffect} from 'react';
import axios from "axios"

 function App() {
  const allApi = [
    "https://api.spacexdata.com/v3/launches?limit=100",
    "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true",
    "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true",
    "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014"
  ]
  
  const [data, setData1] = useState([]);
  const [api, setApi] = useState(0);
   axios.get(allApi[api]).then( res=>{
      
      setData1(res.data);
    })
    return (
    <div className="container">
     
    <main className="main">
      <h1 className="title">
        SpaceX Launch Programs
      </h1>

      <div className="his">
        <div className="first">
          <h1 className="filters">Filters</h1>
          <h2>Launch Year</h2>
          <div className="buttons">

            <button>2006</button>
            <button>2007</button>
            <button>2008</button>
            <button>2009</button>
            <button>2010</button>
            <button>2011</button> 
            <button>2012</button>
            <button>2013</button>
            <button onClick={() => setApi(3)}>2014</button>
            <button>2015</button>
            <button>2016</button>
            <button>2017</button>
            <button>2018</button>
            <button>2019</button>
            <button>2020</button>

          </div>
          <h2>Successful Launch</h2>
          <div className="buttons">
            <button onClick={() => setApi(1)}>True</button>
            <button onClick={() => setApi(0)}>False</button>
          </div>
          <h2>Successful Launch</h2>
          <div className="buttons">
            <button onClick={() => setApi(2)}>True</button>
            <button onClick={() => setApi(1)}>False</button>
          </div>

        </div>
        <div className="grid">
           {data.map((e)=>{
            return(
              
              <div className="card" key={e.flight_number}>
          <div className="image">
            <img  src={e.links.mission_patch_small} width={190} height={200} layout="responsive" alt="Image" />
          </div>
          <h3>{e.mission_name} </h3>
          <h3>Mission Ids: {e.mission_id} </h3>
          <h3>Launch Year: {e.launch_year} </h3>
          <h3>Successful Launch: {e.launch_success.toString()} </h3>
          <h3>Successful Landing: {e.rocket.first_stage.cores[0].landing_intent.toString()}</h3>
          </div>
          );
          
        })}
           

      </div>
      </div>
    </main>

    <footer className="footer">
      <a>
        Developed by Dulkifal
      </a>
    </footer>
  </div>

  );
          }

export default App;
