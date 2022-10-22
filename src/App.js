import './App.css';

import React from 'react'
import background from "./background.jpg";
import { ImCross } from 'react-icons/im';

const App = () => {
 
  const browse=()=>{
    document.getElementById("handle").click();
  }
  
  const toggle=()=>{
  browse()
    console.log("hi");
  }
 
  return (
    <div className='hero'>
      <div className='main'>

        <div className='leftMain'>
          <div className='imgbox'>
            <img src={background} alt="logo" />
          </div>
        </div>
        <div className='rightMain'>
          <div className='cross'>
            <ImCross />
          </div>
          <div className='content'>
            <h1>Register your Product</h1>
          </div>
          <div className='formMain'>
            <form>
              <div className='box'>
                <div className='box1'>
                  <p>Category</p>
                  <select name="category" id="cat" >
                    <option value="" selected disabled hidden>Select Category</option>
                    <option value="javascript">Car</option>
                    <option value="php">Bike</option>
                    <option value="java">Cycle</option>
                    <option value="golang">Truck</option>
                  </select>
                </div>
                <div className='box1'>
                  <p>Model</p>
                  <select name="model" id="mod" >
                    <option value="" selected disabled hidden>Select Model</option>
                    <option value="b1">Base Model</option>
                    <option value="b2">New Model</option>
                    <option value="b3">Super Model</option>
                  </select>
                </div>
              </div>
              <div className='box'>
                <div className='box1'>
                  <p>Serial number<span>*</span></p>
                  <input type="text" name="serial" />
                </div>
                <div className='box1'>
                  <p>Date of Invoice</p>
                  <input type="date" id="birthday" name="calender" />
                </div>
              </div>
              <div className='box' style={{display:"block"}}>
                <div className='box2'>
                  <p>Upload File</p>
                  <div className='drag'>
                    <p>Drag files here or&nbsp;<span onClick={toggle} style={{color:"red",cursor:"pointer"}}>browse</span></p>
                    <input onClick={browse} id="handle"  type="file" hidden></input>
                  </div>
                </div>
              </div>
              <div className='box' style={{display:"block"}}>
                <div className='box2'>
                  <button type='Submit'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}



export default App;
