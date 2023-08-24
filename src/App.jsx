import React, { useEffect } from 'react';
import './App.css'
localStorage.setItem("a",0)

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      console.log(data);
      if(localStorage.getItem("a") == 0){
        document.getElementById('h').style.opacity = 0
        document.getElementById('h').innerText = data.activity
        document.getElementById('h').style.opacity = 1
        localStorage.setItem("a",1)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    function butt(){
      localStorage.setItem("a",0)
      document.getElementById('h').style.opacity = 0
      setTimeout(() => {
        fetchData()
      }, 500);
    }
    const btn =document.getElementById("btn")
    btn.addEventListener("click",butt)
  };

  //credit of this app goes to the api owner, this app was just made for educational purposes
  return (
    <div className="App">
      <br></br>
      <center>
      <h2>Bored ?</h2>
      <h3>Try this !</h3>
      </center>
      <div id='whattodo'>
      <h1 id='h' className='h'>Text</h1>
      <center><button className='btn' id='btn'>Roll</button></center>
      </div>
    </div>
  );
}

export default App;
