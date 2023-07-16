import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const Container=styled.div`
width: 100%;
    background-color: #3C3C3C;
    padding: 5px;
    position: relative;

    .main-nav{
      background-color:  #3C3C3C;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .link{
      display: flex;
    }
    .link1{
      margin-right: 40px;
      color: white;
    }
    .icon{
      color: white;
      display: none;
    }
    @media screen and (max-width: 700px) {
      .icon{
        display: flex;
        color: whitesmoke;
      }
      .link{
        display: none;
      }
    }

    .side_nav{
      width: 300px;
      height: 100vh;
      background-color: #0c0c0c;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(${props => props.value?"-300px":"0px"});
      transition: all 1.5s ease-in-out;
      z-index: 1;
    }
    .logo_side{
      font-style: oblique;
      font-size: 30px;
     font-weight: bold;
    }
    .side1{
      color: white;

    }
`;
export const navigation = () => {
  const [state, setstate] = useState(true);
  return (
   <Container value={state}>
    <div className='main-nav'>
        <div className='logo'></div>
        <div className="link">
       
          <div className="link1">home</div>
          <div className="link1">about</div>
          <div className="link1">contact</div>
        </div>
        <div className="icon" onClick={()=>setstate(!state)}>
        <i class="fa-solid fa-bars"></i> 
        
        </div>
    </div>
    <div className="side_nav">
      <div className="logo_side"></div>
      <div className="link_side">
    <div className="side1">home</div>
          <div className="side1">about</div>
          <div className="side1">contact</div>
          </div>
    </div>
   </Container>
  )
}
export default navigation