// Deaf.jsx
import Navbar from './Navbar';
import React from 'react';
import './Deaf.css';

function Deaf() {
  return (
    <div className="Deaf">
        <Navbar/>
      <header>
        <h1>Deaf or Hard of Hearing Assistance</h1>
      </header>
      <main>
        <section className="news">
          <h1 ALIGN='CENTER' className='headingh'></h1>
   <section className="cont" align='center'>
    <div className="profilea">
        <div className="profile-image profile1">jaypee university</div>
        

        <h3 ALIGN="CENTER" className="h"></h3>
        
        <p className="TEXT">CONTACT:9876456745</p>
     <p className="TEXT">LOCATION:KANDAGHAT</p>
     <p className="TEXT">Jaypee university</p>
     <br/>
     
     
    <a href="" className="style">  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; view more &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</a>
    

    </div>
    </section>
        </section>
        <section className="nearby">
          <h2>Eateries/Hotels Nearby</h2>
          {/* Nearby eateries/hotels content goes here */}
        </section>
        <section className="schools">
          <h2>Schools/Coaching/Tuitions</h2>
          {/* Schools/coaching/tuitions content goes here */}
        </section>
        <section className="disabilities">
          <h2>Learn About Disabilities</h2>
          {/* Information about disabilities goes here */}
        </section>
        <section className="transport">
          <h2>Transport Service</h2>
          {/* Information about transport service goes here */}
        </section>
        <section className="emergency">
          <h2>Emergency Helplines</h2>
          {/* Emergency helplines information goes here */}
        </section>
      </main>
      <footer>
        <p>About Us</p>
      </footer>
    </div>
  );
}

export default Deaf;
