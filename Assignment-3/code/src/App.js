import React from 'react';
import logo from './logo.svg';
import './App.css';
var candidateInfo= {
  Name:"Alan Ford",
  employeeId:"00005152",
  Phone:" 6251654",
  ApplicationStatus:"In Prgogress",
  Door:"Mark",
  Time:"10:30 (25-05-2016)",
  AppointmentOn: "10:30 (25-05-2016)",
  email:" alan.ford@gmail.nl",
  Image:'https://www.w3schools.com/howto/img_avatar.png',
  Title:"Junior Engineer",
  Description:"hi i am professional candidate",
}

var arrow="<"
function App() {
  return (
    <div className="site-container">
      <div className="first">
        <label>{arrow}</label>
        <div className="nameId">
          <label>{candidateInfo.Name}</label>
          <strong>{candidateInfo.employeeId}</strong>
        </div>
        <button>print</button>
      </div>
      <div className="customer-info">
        <div>
        <strong>Appointment On</strong>
        <label>{candidateInfo.AppointmentOn}</label>
        </div>
        <div>
        <strong>Email:</strong>
        <label>{candidateInfo.email}</label>
        </div>
        <div>
        <strong>Phone:</strong>
        <label>{candidateInfo.Phone}</label>
        </div>
      </div>
      <div className="order-info">
        <div className="status">
          <strong id="left">Status</strong>
          <ul>
            <li>{candidateInfo.ApplicationStatus}</li>
          </ul>
        </div>
        <div className='door'>
          <strong>Door</strong>
          <label>{candidateInfo.Door}</label>
        </div>
        <div className='door'>
          <strong>Time</strong>
          <label>{candidateInfo.Time}</label>
        </div>
      </div>
      <div className="product-list">
        <input type="checkbox"></input>
        <img src={candidateInfo.Image} alt="imageofcand" width="100" height="100"></img>
        <div className='info'>
          <h3>{candidateInfo.Title}</h3>
          <p>{candidateInfo.Description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
