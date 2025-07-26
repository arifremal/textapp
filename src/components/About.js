import React, { useState } from 'react'

function About() {

    const [myStyle,setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        font:'poppins'
    })
    const [btn,setbtn] = useState(' Enable Dark Mode')
    //   const HandleChange=()=>{
    //    let s = {
           
    //     color: 'white',
    //     backgroundColor: 'black',
    //     font:'poppins'
    //     }
    //     setMyStyle (s)
    // }

    const toggleStyle =()=>{
        if(myStyle.color == 'white'){
            setMyStyle({
                       color: 'black',
        backgroundColor: 'white',

            })
            setbtn(' Enable Dark Mode')
        } else{
            setMyStyle({
                 color: 'white',
        backgroundColor: 'black',

            })
            setbtn(' Enable Light Mode')
        }

    }
    
  return (
  
   <div className="container" style={myStyle}>
    <div className="accordion  accordion-flush" style={myStyle} id="accordionFlushExample">
        <h1 className='my-3'>About Us</h1>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
 <div className="container m-3">
     <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btn}</button>
 </div>
</div>
   </div>
  )
}

export default About