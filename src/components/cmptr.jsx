import React from 'react'
import styled from  "styled-components"
import picb from '../assets/picb.png';


const Container=styled.div`
 width: 100%;
margin:0;
padding: 0;

.main_div{
  background: #191A1D;
  margin-bottom:-200px;
  width: 100%;
  height: 250px;
}
.body{
  margin: 0;
  padding: 0;
  border: none;
}
.lap{
  width: 600px;
  height: 600px;
  margin-top: -250px;
  margin-left:1200px
}
.hr1{
  width: 100%;
  height: 3px;
  border: 0 none;
  margin-top: 0px;
  background-color: #63E7DA;
}
.hr2{
  width: 100px;
  height: 12px;
  border: 0 none;
  margin-top: 0px;
  background-color: #63E7DA;
  margin-left: 70px;
  margin-top:-15px;
}
.hr3{
  width: 300px;
  height: 12px;
  border: 0 none;
  margin-top: 0px;
  background-color: #63E7DA;
  margin-left: 250px;
  margin-top:-20px;
}
.h1{
  background: linear-gradient(90deg, #FFF 0%, #515151 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: Atma;
font-size: 70px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top:-160px;
margin-left: 70px;

}

/* 
@media (max-width: 1200px) {
    .lap {
      margin-left: 600px;
    }

    .h1 {
      margin-left: 0;
    }
  } */

  @media (max-width: 768px) {
    width: 100%;
margin:0;
padding: 0;
    
    .lap {
      width: 200px;
      height: 220px;
     margin-left: 180px;
     margin-top: -120px;
    }

    .hr2 {
      margin-left: 50px;
    }

    .hr3 {
      width: 40px;
      margin-left: 150px;
    }

    .h1 {
      font-size: 30px;
      margin-top: -100px;
      margin-left: 30px;
    }
   
  }









`;

const Third = () => {
  return (
    <Container>
      <div className='hi'></div>
       <div className="main_div">
        <div><hr className='hr1' />
        <hr className='hr2' />
        <hr className='hr3' /></div>
       <img  className="lap" src={picb} alt="" />
       {/* <div className="div2">What we offer?</div> */}
       </div>
     
       <h1 className="h1">What we offer? </h1>

    </Container>
  )
}

export default Third