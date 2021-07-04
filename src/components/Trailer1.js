import React from 'react';
import {useHistory} from 'react-router-dom';



function Trailer1(items) {
    let history = useHistory();
    return (
        <div>  
             <br/>
             <h1 style= {{color:'hotpink'}}> Description and the Trailer of the movie </h1>
            

             <div>
             <p style={{margin: '20px'}}> MIRAGE combines a murder thriller with a time-travel, alternate-universe story in which Vera (Adriana Ugarte), a happily married woman, moves into a new house with her husband, David (Alvaro Morte), and young daughter, Gloria (Luna Fulgencio). A nurse now, Vera left medical school to raise her daughter.</p>
             <iframe width="727" height="409" src="https://www.youtube.com/embed/3NCOwTBWYdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

             </div>
             



           <button onClick={()=> history.push('/')}>
              Go to home page
          </button>
        </div>
    )
}
export default  Trailer1