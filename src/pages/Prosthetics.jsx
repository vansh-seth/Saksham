import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Navbar from './Navbar';
import './Prosthetics.css';



const Prosthetics = ()=>{
    return (
      <div class="container">
        <Navbar/>
    <article class="card">
        <header class="card-header"> My Prosthetic / Status </header>
        <div class="card-body">
            <h6>Prosthetic ID: OD45345345435</h6>
            <article class="card">
                <div class="card-body row">
                    <div class="col"> <strong>Estimated Delivery time:</strong> <br/>15 mar 2024 </div>
                    <div class="col"> <strong>Prosthetic Provider:</strong> <br/> IVY HOSPITAL, | <i class="fa fa-phone"></i> +1598675986 </div>
                    <div class="col"> <strong>Status:</strong> <br/> Measurements completed </div>
                    <div class="col"> <strong>Tracking #:</strong> <br/> BD045903594059 </div>
                </div>
            </article>
            <div class="track">
                <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order confirmed</span> </div>
                <div class="step active"> <span class="icon"> <i class="fa fa-user"></i> </span> <span class="text"> Measurment Completed</span> </div>
                <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> Prosthetic Made </span> </div>
                <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Rehabilitation</span> </div>
            </div>
            <hr/>
            <ul class="row">
                <li class="col-md-4">
                    <figure class="itemside mb-3">
                        <div class="aside"><img src="https://shop.ottobock.us/store/medias/1K10-01-1200x1200.jpg?context=bWFzdGVyfHJvb3R8NTY2OTEyfGltYWdlL2pwZWd8aGM0L2gxZS84Nzk4NTYyOTQzMDA2LmpwZ3xmNzE0YjNjNGYzNGQ2YzNjYTU2ZGM3MTEzY2Y4ZWRkYTM3MjIxNTBkMzI4YjlmMTdmYjRjMjljZDAwZTQ3YTMx" class="img-sm border"/></div>
                        <figcaption class="info align-self-center">
                            <p class="title"> Ottobock  Dynamic Foot<br/> Maximum weight capcity: 90kg <br/>Heel Height: 5cm+-5mm<br/>Size: 14-21cm </p> <span class="text-muted"> </span>
                        </figcaption>
                    </figure>
                </li>
                <li class="col-md-4">
                    <figure class="itemside mb-3">
                        <figcaption class="info align-self-center">
                            <p class="title">Payment Details <br/> Payment Complete: Rs. 90,000</p> <span class="text-muted">Payment Due: Rs. 1,20,000 </span>
                        </figcaption>
                    </figure>
                </li>
                <li class="col-md-4">
                    <figure class="itemside mb-3">
                        <figcaption class="info align-self-center">
                            <p class="title">Next Appointment: <br/> Estimated Date: 12 mar 2024</p> <span class="text-muted">Agende: First fitting </span>
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <hr/>
        </div>
    </article>
</div>
    )
  };


export default Prosthetics
