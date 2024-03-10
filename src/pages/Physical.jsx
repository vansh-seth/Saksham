import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Navbar from './Navbar';
import './Vision1.css';

function Physical() {
  return (
    <div>
      <Navbar/>
      <div className="outer-div-1">
      <div className="inner-box-left" style={{ backgroundColor: 'transparent' }}>
        <h2>About the Physical Disability</h2>
        <p>Living with a physical disability presents a myriad of day-to-day challenges that can significantly impact one's quality of life. Simple tasks like navigating through inaccessible environments, using public transportation, or even reaching items on high shelves can become daunting obstacles. The lack of accommodations in public spaces often leads to feelings of exclusion and frustration. Additionally, individuals with physical disabilities may encounter social barriers, such as prejudice and discrimination, which can affect their self-esteem and sense of belonging. Managing healthcare needs, dealing with limited mobility, and facing financial constraints further exacerbate the daily struggles. Despite these challenges, people with physical disabilities demonstrate resilience and determination, striving to overcome obstacles and advocate for a more inclusive and accessible society.</p>
    </div>

      </div>
      <div className="outer-box-1">
        
          <h2>Transportation Services</h2>
        <div className="trans-vision">
          <div className="features-card-vision img-1 flex-vision">
            <a href="https://www.wheelchairgetaways.com/" target="_blank">

          <img style={{width: '200px'}}  src={"data:image/png;base64,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"} alt=""/>
            </a>
          <h3>Weel Chair Get Away</h3>
          </div>
          <div className="features-card-vision img-1 flex-vision">
          <a href="https://www.lyft.com/" target="_blank">
              
          <img style={{width: '200px'}}  src={"data:image/png;base64,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"} alt=""/>
              </a>
          <h3>Lyft</h3>
          </div>
          <div className="features-card-vision img-1 flex-vision">
          <a href="https://accessibledispatch.com/driver/" target="_blank">
              
          <img style={{width: '200px'}} src={"data:image/jpeg;base64,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"} alt=""/>
              </a>
          <h3>Accessible Dispatchs</h3>
          </div>


        </div>
          <h2>Job Oppurtunities</h2>
        <div className="container-vision">
          <div className="features-card-vision flex">
                    <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAPCAMAAACGJ/w5AAAAkFBMVEX////0u7/yrLL3ztHzsrffAAD86+y/v7+ampv88PH0vsL41dfiACjyrrTExMTo6OhmZmcgICRWVlja2tqhoaL64+TukprjETHlPVDmSFnqcXz52tzQ0NC3t7eJiYo9PT+AgIGSkpN0dHVEREasrK02NjnhABPoW2nxo6nsgovti5PnUWDkJT3paXXhAB3reoV3MWINAAABTklEQVQoka2Q6XKCMBSFT0LYEoi4JCjgUkRFLPr+b9cbtOPYdkZ+9A7M3fi4Zw50qHU4qXQYhsB8vdYIJ4Ce411sNttsV2VZFH2g3kbRBlP6wyx6CwL7NZDVTRNOpsOdQ1RVs8VYcKd19QC3WV3vx4AHBw5Ss/1iscNUj5TqzKjIG+J104w25z8j/pH/bn+H599zW7zOj95LKyVj7nVTRmHgJVRIuiCgaMEUlZSCnD6hXhk2rJObtfnJ2muLwFp79o3Ky85ePpEu0a9o5DMce9uBwNPSdkbQbHVCboCLALoCUggPS6kSOh74ECsUlsqbDQbxBF7ddSHSuEyQlwSmBN6Mb8r4GzRPsHiCCantz6ZEmeNK4JID58L4gvM0l+r4AEnqHYz9tm05meP8KfqU8y6BIJclwZ4HxilSQ6aQIA7D4CnnsoIcNgHooY2r2ReDmxfG0w76NAAAAABJRU5ErkJggg=="} alt=""/>
                    <h3>Tech Mahindra</h3>
                    <p>Technology roles: Software Engineer, Test Engineer, UI/UX Designer</p>
                    
          </div>
                <div className="features-card-vision flex">
                    <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBEQACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABQYEB//EAC8QAAEDAwMCBAQHAQAAAAAAAAIBAwQABRESITETQQYUInEyNVHBQmFigZGSoRX/xAAYAQEBAQEBAAAAAAAAAAAAAAAABAMFAv/EADERAAIBAgIGCQMFAAAAAAAAAAABAgMREiEEE4GRocEiMUFhcoKisdEyUmJCUWOSsv/aAAwDAQACEQMRAD8A9xoBQCgFAKAUAoBQCgFAKAUAoBQHn11WdClH5p6VHRwyVvqX0G0JM9kUeK69HVzj0Un5G+Zz54ovPLad/krwtpx07grvX1/Nh1aNPOvTxnt+9Y6yhrb5Wt9vK5pgqYO3eTIa3CeRDBemSCFMkjN+AsJ+eBqieqp/WkvI/kyjjl9N/wCxRtVxlmkm1EXUeJs0FFurbjwmifCmBRU91zip69GCtVXV4Wka05yzhzJch+XEeJmTLksvBjIOeIG0VPdFGqYwhON4pNeB/Ji3KLs36jTXa8Nr4ebfbfZE5KIIqM4G8L+LS4uyqmF4qCjQeuwtdXc3wKqlVau9+vvIFqKdNlgkV+VIFsxJxG74DiCOe6IPFWVlThHpJLyNcyeGOTyz2ljxiD5PRugEwk0Fny7Mc8bpz1ftU2huNnittcl7Gukp3VuXM0Y58omy50fRM8fxUPaVdhgoq3ZrKxQvQkqb9OJCRV98LXZkqDXSw75nOjrOy+6JZ8Ki6s585rcxHdPpWUxHDfvhW98+9SaW44UoWt3OXM3oXxPFfbbkc13jyn78622M0QMhRDCNFIE9Kdy9X+V7ozjGjd23yvwyPNSMnUsr8DhYauMkmIpDdGxQl3OLD0jnnbf6dkraTpQTmsL2zM0pytHP0ljwcEgZElXwmCigOPMMxwTleOl96m0xxaja2xyfubaNe7vfhyId7N+4TDSc0MhGjMW+r4fdc0jnhC1b8Jv3qvR4xpxTg7X/ADS5GFWTnLpf5ZRS7XT/AJOtH3daPdP5K78OnjRqzj9XHasNRR1trZW+9e9uBprZ4L39L9iTbnZFrMztzSRiNEQla8OPDlP7VVUjCqkp52/kj8GMJOH05eVlOzW98Tk3npRW3UBwkNLQTTxGqLvhSyvtjepa9WNlRztl+pNextSg86mW6xyQEOVf40uUwBvk6Kk8VidbLbb41L0+9a1bQoOEXl+2NPh2niDcqik+vwtGgi2NiNep0wY0MUUFVtQh4PJfFk8+rvthOailpEpUowu9+W7sKY0lGblZbjNWZx+3yR8i0MfqkIudLw883qTPCrq2557V0K8Y1IdN3t+afCxLTk4Po5eVno9cU6QoBQCgFAKAUAoBQCgFAKAUAoD/2Q=="} alt=""/>
                    <h3>IBM</h3>
                    <p>Technology roles: Software Developer, Quality Assurance Engineer, Systems Engineer
                    </p>
                </div>
                <div className="features-card-vision flex">
                    <img src={"https://www.goodreturns.in/img/2023/10/accenture-1697111699.jpg"} alt=""/>
                    <h3>Accenture</h3>
                    <p>Technology roles: Software Engineer, Data Analyst, Cybersecurity Analyst</p>
                    
                </div>
                <div className="features-card-vision flex">
                    <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAsCAMAAAAHH4uhAAABlVBMVEX////o5usAADkGAD0AADfm4+mWjaOclaj08/UlAEu8t8TeWT8aka77/P3h8uQANn35/PjR1+MAADIAADwUAEIQAECvqblCWJdMYJswEVJNO2dvYoIfAEdjXZ50b6f+9/L/9eP33drr9vVOorrs8vjL2euh084AmIg3rqKky9gwgMZ+qdZmvLM2mbTd6PNFisq3xNnP6t4Ao2diwJp9xb3K5uOlwN9imc8AU5kYW5xhg7KR0LQvZqKNz50nU40QRoZ4yIoxslUAmVOYrMllc5QAGV+Gx2pmuzwArD2IvM1adJ8fPXBKXoW7364AI2N9iaSYobWYz4IACG8AC1qGmrkAACTT6su03s2Fe5QAKnc/KF0AH3MvSpBgU3V6hrCqp8augKfRtsv/7s7Ge6Lq0N3+8MH82buPPoOlbJz6wJ7eg4n93Fv+1YPPlLOgAFq/nrrHToD+55n+2UT3mF3VV2C1Q4H+0AD+tQDqoJTknJ+9ZJOZVY7ktcb3gwC3AFT+z2b4qXzOKDn6tXPab3T0bQDvta3idWPTSf3JAAAD+klEQVRIiZWWjV/aRhjHnwCBIxjwFLNKwBjKdFobo2tt1Ra6qX3Bzu6FbawTcTST0g3q2rrWiqit9u/ec3eQzkZgez5wdznum9/z/O4SBegeafxmLl/GLvN5j2WemJj8AmBqYGAKMtPTV/4HODM5iVpXr2bAmp6dBbBstS8zN/8lZnrteud64YYF1s3Fpb7g8vy8Z85evHWrL6guz3knlxZtANodit6OuuNBdGcKq8t0JrKxXNdC73x1uzOcQXcGBpg37Qkay8a6akbvCMXlNFy/hhZlQL2xgBXSfortSH99rsylmyusUykBmVywfDDqFnc+MjbQvMVGq2trF2R79x4nB++LGwxOwIMHsCC8ycby2Epr6+sPveA3d4UW5+bS6RmwLJi1KMvTzjIlsrG+8ahPmR83c2UJmCdk9Vt0drUrF/2Ote3tVIWLhe/RkkcbP0jswrY/IWgQPiYaxaTT6QnLumLhQ0ULeAO6wapTs7nY1nkw8aPsqv7E2p+FaAE3AQRE+SnIxs7vpqS4Q74v7tkr4PqHWJ+aixVA+iWXywJoGgIhVFJCKg0REqJKMYQCiiYFMXOlGGReruItC5zJM3vzWGpxiEDQrwOEExAckuXA40DYn5RAD4eHSqAPx0cCyBMbMr/GkCmwY0NsBKlPgdFwUpV9Gt5AkuOPJVBGdNDjGiGKv6iqegDzyUlAUTpTKCOy+dkm+prUqU8bVkI+wkHkAUojoCexLw6jAJ8qU9japHCJIflLGAD6qD4KiVIiAQIMMXvDmCoD/VIbXPGCSjIcBC2Z1AQYTypScKQoQDpckmnCT0BNkXaqK26q4MMaiC+ASTFz4olAwJ9QoeRn+xAK+Hx+dJQoQFIpNKfsmgP8TqKRFeaRrCmdCdwpTWFLt3/DMssgpcbwzNhjW+67xA1hDsB4BZtKZ/aJg+xzPACpFKfHxrxgICTA31m7I47cE/bQV5/y9PCDYMrzApESmOc4R/GQG0bNNJ+ZqOfUcanMYRW5skeRReUP1v7JcWR5V2+g6PNqlbmieh6rT6K20xnVd4G7yeqUWeOJv14IAW5LxTBegmnCK9Op42Vzz2Fy1YPqthd88TdHjNftPGvw5g3si/fhXuMtM6F6cPDUCxoV7xwP0gTnLX/Mt6tVp1eBxuHOvy93WyxbUB314hcyq+xIqNYM2KlxV9X3+1Bv8QL3Gntd/wQcvT7qDI9PASIRME9etSecxl6ja57j7Q1sx9kZgOkm10tR5HmBSbutJmr2xKB2eOiZa7Zard4URuXwHdpy7Pq6/94Ep9Xa7QvyOD5Fb4xIxGDuoD1Os/+/KyLf05foTSRyBuTk5Nl/Y0SwY2t8+IAdMT0//gPP1Jc7MkLfcAAAAABJRU5ErkJggg=="} alt=""/>
                    <h3>Wipro</h3>
                    <p>Technology roles: Java Developer, Network Engineer, Data Scientist</p>
                    
                </div>          
        </div>
      </div>
    </div>
  );
}

export default Physical;