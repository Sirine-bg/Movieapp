import React from 'react';
import {useHistory} from 'react-router-dom';



function Trailer3(items) {
    let history = useHistory();
    return (
        <div>  
             <br/>
             <h1 style= {{color:'hotpink'}}> Description and the Trailer of the movie </h1>

             <div>
             <p style={{margin: '20px'}}> A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense. ... However, his perfect life will crumble like a pack of cards when Doria finds himself locked up in a hotel room next to a dead body, standing accused of first-degree murder.</p> 
         <iframe width="727" height="409" src="https://www.youtube.com/embed/epCg2RbyF80" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           <br/>
             </div>

           <button onClick={()=> history.push('/')}>
              Go to home page
          </button>
        </div>
    )
}
export default  Trailer3