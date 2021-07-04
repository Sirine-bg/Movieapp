import React from 'react';
import {useHistory} from 'react-router-dom';



function Trailer(movie) {
    let history = useHistory();
    return (
        <div>  
             <br/>
             <h1 style= {{color:'hotpink'}}> Description and the Trailer of the movie </h1>
            
              <div>
              <p style={{margin: '20px'}}> Jasmine Bryant (Bresha Webb) is a public defender who constantly takes plea deals in small town Virginia. Her husband Jordan (Matthew Law) is a police officer who is feeling down after one of his recent victims jumps off a roof to her death. Jasmine is given a new case by her boss Rory (Tyler Perry) to defend Grace Waters (Crystal Fox) the woman accused of murdering her husband Shannon DeLong (Mehcad Brooks). Grace insists that she is guilty and will agree to a plea deal if she goes to a prison close by her son Malcolm (Walter Fauntleroy). Jasmine is troubled by the details of the case, including the fact that Shannon's body was never found. Rory is not pleased that Jasmine wants to try the case because the department does not have the budget for a trial, in addition to the media frenzy.</p>
             <br/>

         <iframe width="727" height="409" src="https://www.youtube.com/embed/mNixVHejlc0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         
        </div>
             
          
          

           <button onClick={()=> history.push('/')}>
              Go to home page
          </button>
        </div>
    )
}
export default  Trailer