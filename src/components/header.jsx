import React from 'react'
import styled from 'styled-components'
import pica from '../assets/pica.png'

const Container = styled.div`
  width: 100px;
  background-color: #191A1D;

  .main {
    width: 1835px;
    height: 720px;
    position: relative;
    text-align: center;
  }

  .pic {
    width: 100%;
    height: 600px;
    position: relative;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
  }

  .h2 {
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 70px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }

  .span1 {
    color: aqua;
    font-family: 'Courier New', Courier, monospace;
    font-size: 70px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }

  .h4 {
    margin-top: -70px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }

  .span2 {
    color: aqua;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }





  @media (max-width: 768px) {
    /* Add your media query styles here */
    width: 439px;
    padding: 20px;

    .main {
      width: 100%;
      height: auto;
      text-align: center;
    }

    .text {
      margin-left: -120px;
      margin-top: -150px;
      left: 50%;
      transform: translateX(-50%);
    }

    .pic {
      height: 400px;
    }

    .h2 {
      font-size: 40px;
    }

    .span1 {
      font-size: 40px;
    }

    .h4 {
      margin-left: 50px;
      margin-top: -40px;
      font-size: 12px;
    }

    .span2 {
      font-size: 12px;
    }
  }
`;

  







export const header = () => {
  return (
   <Container>
    <div className="main">
      <img className="pic" src={pica} alt=""/>
      <div className="text">
        <h2 className='h2'>VECTOR<span className='span1'>UX</span></h2>
        <h4 className='h4'>we ideate, create<span className='span2'> & </span>innovate</h4>
      </div>

    </div>
   </Container>
  )
}
export default header