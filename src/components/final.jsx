import React from 'react'
import styled from  "styled-components"
import ambi from '../assets/ambi.png'
// import v1 from '../assets/v1.svg';
// import v2 from '../assets/v2.svg';
// import v3 from '../assets/v3.svg';


const Container=styled.div`
width: 100%;
height: 100%;
background: #191A1D;

.main_div{
    display: flex;
}
.body{
  margin: 0;
  padding: 0;
  border: none;
}
.div1{
   font-size: 80px;
    width: 100%;
    height: 500px;
    display: flex;
}
.div2{
    width: 50%;
    height: 500px;
}
.v3{
    margin-top: 230px;
    width: 100px;
    margin-left:-15px;
}
.v1{
    height: 400px;
    margin-top: 100px;
    width: 300px;
    margin-left:200px;
}
.v2{
    margin-top: 90px;
    width: 100px;
    margin-left:-35px;
}
.one{
    margin-top:144px;
    margin-left:-300px;
}
.two{
    margin-top: 180px;
    margin-left: -350px;
}
.h1{
    margin-top:200px;
   margin-left:-300px ;
   color: #FFF;
font-family: Lato;
font-size: 70px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin-top: 180px;
margin-left:-450px;
}
.h3{
    color: #FFF;
font-family: Lato;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: -60px;
margin-left: -390px;
}
.three{
    width: 500px;
    margin-left:-500px;
    margin-top: 380px;
    height: 100px;
}
.four{
    width: 200px;
    margin-top: 380px;
    margin-left: 10px;
    height: 100px;
}
.txt{
    color: rgba(255, 255, 255, 0.52);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 500;
line-height: normal; 
margin-left:-670px;
margin-top: 410px;
}
.txt1{
    color: #FFF;
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: -140px;
margin-top: 410px;
}
.txt3{
    color: #FFF;
font-family: Montserrat;
font-size: 65px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 40px;
}
.span{
    color: #63E7DA;
    font-style: italic;
    font-family: Satisfy;
}
.txt4{
    color: #D9D9D9;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 40px;
margin-right: 100px;
}
.txt5{
    color: #63E7DA;
font-family: Montserrat;
font-size: 45px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 40px;
}
.txt6{
    color: #FFF;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 1000px;
margin-top:200px;
}
.span1{
    color: #63E7DA;
font-family: Satisfy;
font-size: 40px;
font-style: italic;
font-weight: 400;
line-height: normal;
}

@media (max-width: 400px) {
    width: 100%;
height: 750px;
background: #191A1D;
    .div1{
        margin-left: -40px;
        width: 140px;
    }
    .main_div{
        
        background-color:#191A1D;
        width: 100px;
        margin-right: 0px;
        margin-top: -280px;
        margin-left: 120px;
    }

    .v1{
        height: 120px;
        width: 200px;
        margin-left: 0px;
    
    }
   
    .h1{
        font-size: 40px;
        margin-left: -50px;
        margin-top: 200px;
    }
    .h3{
        font-size: 20px;
        margin-left: -350px;
        margin-top: -30px;
    }
    .three{
        width: 190px;
        margin-left: -350px;
        margin-top: 320px;
    }
    .txt{
        font-size: 20px;
        margin-left: -330px;
        margin-top: 359px;
    }
    .four{
        width: 80px;
        margin-left: -150px;
        margin-top: 320px;
    }
    .txt1{
        font-size: 20px;
        margin-left: -10px;
        margin-top: 349px;
    }
    .txt3{
        font-size: 20px;
        margin-left: 20px;
        margin-top: 100px;
    }
    .txt4{
        font-style: oblique;
        font-size: 10px;
        margin-right: 50px;
        /* margin-top: 30px; */
        margin-left: 28px;
    }
    .txt5{
        font-size: 15px;
        margin-top: 50px;
        margin-left: 15px;
    }
    .txt6{
        font-size: 20px;
        margin-left: 120px;
        margin-top: 30px;
        height: 100px;

    }
    .top{
        width: 500px;
    }
    .div2{
        width: 500px;
        margin-top: 150px;
        margin-left: -200px;
    }
    .div22{
        width:300px;
    }
}

`;
const Five = () => {
  return (
    <Container>
        <div className='top'>
        <div className="main_div">
            <div className="div1">
            <div className="div11"><img className="v1" src={ambi} alt=""/></div> 
            {/* <div className="div12"><img className="v3" src={v3} alt=""/></div>
            <div className="div13"><img className="v2" src={v2} alt=""/></div> */}
            {/* <div className="div14"><svg className='one' xmlns="http://www.w3.org/2000/svg" width="374" height="118" viewBox="0 0 374 118" fill="none">
<g filter="url(#filter0_d_167_232)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M369.664 0L3.99951 109.396L105.402 82.0469L186.32 58.6049L300.013 23.442L369.664 0Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_167_232" x="-0.000488281" y="0" width="373.665" height="117.396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_167_232"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_167_232" result="shape"/>
</filter>
</defs>
</svg></div> */}
{/* <div className="div15"><svg className='two' xmlns="http://www.w3.org/2000/svg" width="374" height="118" viewBox="0 0 374 118" fill="none">
<g filter="url(#filter0_d_167_232)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M369.664 0L3.99951 109.396L105.402 82.0469L186.32 58.6049L300.013 23.442L369.664 0Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_167_232" x="-0.000488281" y="0" width="373.665" height="117.396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_167_232"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_167_232" result="shape"/>
</filter>
</defs>
</svg></div>
<div className="div16"><h1 className='h1'>VECTOR UX</h1>
<h3 className='h3'>we ideate, innovate and create</h3></div>
<div className="div17"><svg className='three' xmlns="http://www.w3.org/2000/svg" width="836" height="114" viewBox="0 0 836 114" fill="none">
<path d="M1 50C1 22.938 22.938 1 50 1H786C813.062 1 835 22.938 835 50V113H50C22.938 113 1 91.062 1 64V50Z" stroke="white" stroke-width="2"/>
</svg></div>
<div className="div17"><svg className='four' xmlns="http://www.w3.org/2000/svg" width="312" height="114" viewBox="0 0 312 114" fill="none">
<path d="M0 50C0 22.3858 22.3858 0 50 0H262C289.614 0 312 22.3858 312 50V64C312 91.6142 289.614 114 262 114H0V50Z" fill="#63E7DA"/>
</svg></div>
<div className="div18"><h1 className='txt'>write a message</h1></div>
<div className="div18"><h1 className='txt1'>send</h1></div> */}

            </div>
            <div className="div2">
        <div className="div21"><h1 className='txt3'>Let’s <span className='span'>talk</span> something special.</h1></div>
<div className="div22"><h1 className='txt4'><p>We seek to push the limitations of creativity to create high-engaging,user-friendly and memorable interactive experiences.</p></h1></div>
        
<div className="div23"><h1 className='txt5'>vectorux0@gmail.com</h1></div></div>

        </div>
        <div className="div100"><h1 className='txt6'>Let’s <span className='span1'>connect</span> there</h1></div>
        </div>
    </Container>
  )
}

export default Five