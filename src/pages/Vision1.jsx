import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Navbar from './Navbar';
import './Vision1.css';

function Vision1() {
  const [redirectUrl, setRedirectUrl] = useState("");
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  console.log(transcript)
  const pages = ["home", "sign in", "sign up"];
  const urls = {
    home: "/Home",
    "sign in": "/Signin",
    "sign up": "/Signup",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Speech recognition not supported</div>;
  }

  let redirectComponent = null;

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      window.location.href = urls[redirectUrl]; // Redirect using window.location
    } else {
      redirectComponent = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  const handleClick = () => {
    const text = "About the Vision Impairement ...... Vision impairment can significantly impact an individual's day-to-day life, presenting myriad challenges. Simple tasks like reading labels, navigating unfamiliar environments, or even recognizing faces become daunting. Basic mobility becomes an ordeal as they rely heavily on canes or guide dogs. Participating in activities requiring visual cues, such as sports or watching television, becomes inaccessible without assistance or adaptations. Moreover, accessing printed material often necessitates specialized formats, limiting educational and professional opportunities. Social interactions may also suffer due to the inability to make eye contact or read non-verbal cues effectively. Overall, vision impairment imposes constant hurdles that require adaptive strategies and societal support to overcome...........Transportation Services...........Uber Assist..........Be My Eyes..........Access A Ride...............Job Oppurtunities..................Enable India....................Hiring in IT related jobs..............National Association for the Blind..........Voice recogniser........BarrierBreak..........Offshore Accessibility testing..........Saksham Trust..........Teaching Jobs";
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  }

  return (
    <div>
      <Navbar/>
      
      <div className="outer-div">
        <div className="inner-box-left" style={{backgroundColor: "transparent"}}>
          <h1>Visually Impaired</h1>
        </div>
        <div className="inner-box-right">
          {redirectComponent}
          <p id="transcript">Transcript: {transcript}</p>
          <br/>
          <div className="button-div">
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={handleClick}>Text to speech</button>
          </div>
        </div>

      </div>
      <div className="outer-box-1">
        <div>
          <h2>About the Vision Impairement</h2>
          <p>
            Vision impairment can significantly impact an individual's day-to-day life, presenting myriad challenges. Simple tasks like reading labels, navigating unfamiliar environments, or even recognizing faces become daunting. Basic mobility becomes an ordeal as they rely heavily on canes or guide dogs. Participating in activities requiring visual cues, such as sports or watching television, becomes inaccessible without assistance or adaptations. Moreover, accessing printed material often necessitates specialized formats, limiting educational and professional opportunities. Social interactions may also suffer due to the inability to make eye contact or read non-verbal cues effectively. Overall, vision impairment imposes constant hurdles that require adaptive strategies and societal support to overcome.
          </p>
        </div>
          <h2>Transportation Services</h2>
        <div className="trans-vision">
          <div className="features-card-vision flex-vision">
            <a href="https://www.uber.com/au/en/ride/assist/" target="_blank">

          <img src={"https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/sites/370/2015/10/uber-ldn-assist-blog-960x540-r2.png"} alt=""/>
            </a>
          <h3>Uber Assist</h3>
          </div>
          <div className="features-card-vision flex-vision">
          <a href="https://www.bemyeyes.com/" target="_blank">
              
          <img src={"https://assets-global.website-files.com/5a5decba6b273e0001a4c1bb/5da42fb8ab57bdb110bba274_New_logo_cover.png"} alt=""/>
              </a>
          <h3>Be My Eyes</h3>
          </div>
          <div className="features-card-vision flex-vision">
          <a href="https://new.mta.info/accessibility/access-a-ride" target="_blank">
              
          <img src={"https://pbs.twimg.com/profile_images/1567589195874459648/V5JPY-R6_400x400.jpg"} alt=""/>
              </a>
          <h3>Access A Ride</h3>
          </div>


        </div>
          <h2>Job Oppurtunities</h2>
        <div className="container-vision">
          <div className="features-card-vision flex">
                    <img src={"https://s3.amazonaws.com/live.enableindia.org/logo.svg"} alt=""/>
                    <h3>Enable India</h3>
                    <p>Hiring in IT related jobs</p>
                    
          </div>
                <div className="features-card-vision flex">
                    <img src={"https://scontent.fluh3-2.fna.fbcdn.net/v/t39.30808-1/350799075_1096021141199147_8107632009888677078_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ez7SSHKSkRMAX89Ldqg&_nc_ht=scontent.fluh3-2.fna&oh=00_AfDn0XU0gBoAYi5ccxiQNwlWDgRJTo2dACuf_2sE3beFQQ&oe=65F07621"} alt=""/>
                    <h3>National Association for the Blind</h3>
                    <p>Voice recogniser</p>
                </div>
                <div className="features-card-vision flex">
                    <img src={"data:image/png;base64,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"} alt=""/>
                    <h3>BarrierBreak</h3>
                    <p>Offshore Accessibility testing</p>
                    
                </div>
                <div className="features-card-vision flex">
                    <img src={"https://scontent.fluh3-2.fna.fbcdn.net/v/t39.30808-1/347001920_267617632334072_7671308303983491521_n.jpg?stp=c35.31.258.258a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sJDsMc-U5WEAX9ooMTv&_nc_ht=scontent.fluh3-2.fna&oh=00_AfAmCsOQEkymPmba_pGrRDQY1NCQ2EONLMFcJa7Epgcb5A&oe=65F0A589"} alt=""/>
                    <h3>Saksham Trust</h3>
                    <p>Teaching Jobs</p>
                    
                </div>          
        </div>
      </div>
    </div>
  );
}

export default Vision1;
