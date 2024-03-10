// Home.jsx
import React from 'react';
import Navbar from './Navbar';
import img1 from "./assets/asset 1.png"
import img2 from "./assets/asset 2.png"
import img3 from "./assets/asset 3.png"
import img4 from "./assets/asset 4.png"
import img5 from "./assets/asset 5.png"
import img6 from "./assets/asset 6.png"
import img7 from "./assets/asset 7.png"
import img8 from "./assets/asset 8.svg"
import img9 from "./assets/asset 9.png"
import img10 from "./assets/asset 10.svg"
import img11 from "./assets/asset 11.svg"
import img12 from "./assets/asset 12.svg"
import img13 from "./assets/asset 13.svg"
import img14 from "./assets/asset 14.svg"
import img15 from "./assets/asset 15.svg"
import img16 from "./assets/asset 16.svg"
import img17 from "./assets/asset 17.svg"
import img18 from "./assets/asset 18.png"
import img19 from "./assets/asset 19.png"
import img20 from "./assets/asset 20.png"
import img21 from "./assets/asset 21.png"
import img22 from "./assets/asset 22.png"
import img23 from "./assets/asset 23.png"
import img24 from "./assets/asset 24.png"
import img25 from "./assets/asset 25.png"
import img26 from "./assets/asset 26.png"
import img27 from "./assets/asset 27.svg"
import img28 from "./assets/asset 28.svg"
import img29 from "./assets/asset 29.svg"
import img30 from "./assets/asset 30.png"
import img31 from "./assets/asset 31.svg"
import img32 from "./assets/asset 32.svg"
import img33 from "./assets/asset 33.svg"
import img34 from "./assets/asset 34.jpeg"
import img35 from "./assets/asset 35.jpeg"
import img36 from "./assets/asset 36.jpeg"
import img37 from "./assets/asset 37.jpeg"
import img38 from "./assets/asset 38.png"
import img39 from "./assets/asset 39.png"

import './Home.css';

function Home() {
  return (
    <>
    <Navbar/>
    <div className='space'>
    
    </div>
    <header>
        <div className="container header-section flex">
            <div className="header-left">
                <h1>Saksham</h1>
                <p>One stop solution your all problems</p>
            </div>
            <div className="header-right">
                <img src={"https://www.onmanorama.com/content/dam/mm/en/news/campus-reporter/images/2019/1/14/wheelchair-spinal-injury.jpg.transform/845x440/image.jpg"} alt=""/>
            </div>
        </div>
    </header>

    <section className="companies-section">
        <div className="container">
            <div className="small-bold-text companies-header">Here are some of the people we have helped </div>
            <div className="logos flex">
                <img className="logo" src={"https://wecapable.com/wp-content/uploads/2017/05/divyang-meaning.jpg"} alt="" />
                <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuC8RaunPszqBKiv0hM3wgZlehMnkx6boK5w&usqp=CAU"} alt="" />
                <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9WtDgB89xWim30Vz2HzSzuxYrIBOZr9pjg&usqp=CAU"} alt="" />
                <img className="logo" src={"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/06/21/695883-yog-daycmdivyang-1-1.jpg"} alt="" />
                <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDABRhP2By3msp-UwiEOkaNB-IEBezLVrLA&usqp=CAU"} alt="" />
                <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rIzSvCtBZfdplecg05Pgh4bv9u3imf_Kiw&usqp=CAU"} alt="" />
                <img className="logo" src={"data:image/jpeg;base64,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"} alt="" />
                <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ydO3tXCCfT_3OQmATQH8tNAGo0-m1IlCGg&usqp=CAU"} alt="" />
                <img className="logo" src={"data:image/jpeg;base64,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"} alt="" />
                <img className="logo" src={"data:image/jpeg;base64,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"} alt="" />
                 
            </div>
        </div>
    </section>

    <section className="features-section">
        <div className="container">
            <div className="features-header">
                <h2>User Testmonial</h2>
            </div>
            <div className="features-area flex">
                <div className="features-card flex">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGX6nHfbg0FhvKUFWy7Ot_d5sc5A7LAPGWA&usqp=CAU"} alt=""/>
                    <h3>Divansh singh</h3>
                    <p>Your website's intuitive design and clear navigation options have been a game-changer for me as a visually impaired user.</p>
                </div>

                <div className="features-card flex">
                    <img src={"https://static.toiimg.com/photo/msid-60320551,width-96,height-65.cms"} alt=""/>
                    <h3>Kartikey</h3>
                    <p>The use of alt text for images and transcripts for videos has made it possible for me to fully engage with your platform.</p>
                    
                </div>
                <div className="features-card flex">
                    <img src={"https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230307095912.jpg"} alt=""/>
                    <h3>Parth arora</h3>
                    <p>I was finally able to receive my prosthetic arm thanks to the streamlined service</p>
                </div>
                <div className="features-card flex">
                    <img src={"https://wecapable.com/wp-content/uploads/2018/06/bharat-kumar.jpg"} alt=""/>
                    <h3>Dinesh Deman</h3>
                    <p>Your website has fostered a supportive and inclusive online community where disabled individuals like myself feel welcomed and valued. </p>
                    
                </div>
                <div className="features-card flex">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJY9hJCJOVroDNEd4jncmS0EDh4LNufKFzlA&usqp=CAU"} alt=""/>
                    <h3>Aditya kapoor</h3>
                    <p>I have found the perfect doctor to treat my depression! Happier now</p>
                    
                </div>
                <div className="features-card flex">
                    <img src={"https://img.indiafilings.com/learn/wp-content/uploads/2019/04/12004450/National-Fund-for-Persons-with-Disabilities.jpg"} alt=""/>
                    <h3>vadansh som</h3>
                    <p>Glad to have found this site! Finding a prosthetic arm for my mother became so much easier!</p>
                    
                </div>

            </div>
        </div>
    </section>

    <section className="big-feature-section">
        <div className="container flex big-feature-container">
            <div className="feature-img">
                <img src={img18} alt=""/>
            </div>
            <div className="feature-desc flex">
                <h4>Enabling a</h4>
                <h3>New Lease of Life</h3>
                <p>Disabled friendly locations suggested by the disabled, for the disbaled</p>
            </div>
        </div>
    </section>
    <section className="big-feature-section">
    <div className="container flex big-feature-container" style={{ flexDirection: 'row-reverse' }}>

            <div className="feature-img">
                <img src={img21} alt=""/>
            </div>
            <div className="feature-desc flex">
                <h4>Seamless guide to</h4>
                <h3>Empower The Community</h3>
                <p>Find ways to enable the disabled by donating, volunteering and raising funds.</p>
            </div>
        </div>
    </section>
    <section className="big-feature-section">
        <div className="container flex big-feature-container">
            <div className="feature-img">
                <img src={img24} alt=""/>
            </div>
            <div className="feature-desc flex">
                <h4>Creating</h4>
                <h3>Employment Opportunities</h3>
                <p>By finding jobs tailor made for each individual.</p>
            </div>
        </div>
    </section>

    <section className="examples-section">
        <div className="container">
            <div className="examples-header">
                <h2>One platform, endless possibilities</h2>
            </div>
            <div className="examples-area flex">
                <a href="" className="examples-card">
                    <h3 className="card-text">Can user complete a task in my software interface?</h3>
                </a>
                <a href="" className="examples-card">
                    <h3 className="card-text">Can user find important pages on my website?</h3>
                </a>
                <a href="" className="examples-card">
                    <h3 className="card-text">Is my website's intended audience clear?</h3>
                </a>
                <a href="" className="examples-card">
                    <h3 className="card-text">Do visitors understand what a page is about?</h3>
                </a>
            
            </div>
        </div>
    </section>


    

    <div className="subfooter">
        <div className="container flex subfooter-container">
                <a href="" className="hover-links">Privacy Policy</a>
                <a href="" className="hover-links">Terms & Conditions</a>
                <a href="" className="hover-links">Security Information</a>
                <a href="" className="hover-links"><i className="fa-brands fa-facebook fa-xl"></i></a>
                <a href="" className="hover-links"><i className="fa-brands fa-twitter fa-xl"></i></a>
        </div>
        <div className="container flex subfooter-container">
            <a  className="hover-links" href="https://www.instagram.com/vasu_bhatia16" target="_blank"><i  className="fa-brands fa-instagram fa-xl"></i></a>
            <a  className="hover-links" href="https://www.linkedin.com/in/vasubhatia16/" target="_blank"><i className="fa-brands fa-linkedin fa-xl"></i></a>
            <a  className="hover-links" href="https://github.com/VasuBhatia16" target="_blank"><i className="fa-brands fa-github fa-xl"></i></a>
        </div>
    </div>

    </>
  );
}

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Great service! I'm very satisfied with the product.",
      author: "John Doe"
    },
    {
      id: 2,
      text: "Excellent support team. They helped me every step of the way.",
      author: "Jane Smith"
    },
    {
      id: 3,
      text: "Amazing experience. Would highly recommend to others.",
      author: "Bob Johnson"
    }
  ];

  return (
    <div className="testimonials-container">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          <p>{testimonial.text}</p>
          <p>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
