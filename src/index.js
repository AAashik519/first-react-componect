import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Cards'
import './index.css'
import Sdata from './Sdata'

// console.log(Sdata[1].sname)

 var card =(value)=> {
     return(
        <Card 
        imgsrc={value.imgsrc}
        title={value.title}
        sname={value.sname}
        link={value.link} 
        />
     );
}

ReactDOM.render(
    <>
        <h1 className='heading-style'>List of best 5 netflix series</h1>
 
        {Sdata.map(card)}

    </>
    , document.getElementById('root')
);



