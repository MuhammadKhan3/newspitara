import React from 'react'
import { connect,styled,css,Global } from 'frontity';
import Link from './link';
import Header from './header';
import { device } from './device';
const axios = require("axios");

const HeaderText = ({hide,sethide}) => {
  const [weather,setweather]=React.useState({});
  const [hamburger,sethamburger]=React.useState(false);
      //  Date
  let date=new Date();
  date=date.toLocaleString('en-US', {timeZone: 'Europe/London',
  weekday:'long',
  month:'long',
  day:'numeric',
  year:'numeric'
  });
  // close Date


  const options = {
    method: 'POST',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=98f866d20b9bc5e26125259afcb625c2',    
  };

  React.useEffect(()=>{
    axios.request(options).then(function (response) {
      setweather(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },[])

  return (<>
  
  <Global styles={css`
       * {
        margin:0;
        padding:0;
        box-sizing:border-box
       }
       html {
        font-family:sans-serif;
        background-color:white;
       }
       .icon{
        width:8px;
        heigth:20px;
        float:left;
        display:inline-block;
        margin-top:6px;
        cursor:pointer
       }
       .icon:hover{
        fill:blue
       }
       .icon-general{
        width:14px;
        margin-top:6px;
        margin-left:10px;
        cursor:pointer;
        float:left
       }
       .icon-general:hover{
        fill:blue
       }
       .icon-person{
        width:14px;
        float:left;
        display:inline;
        margin-top:6px;
        cursor:pointer;
       }
       .icon-person:hover{
        fill:blue
       }
       .sign{
         cursor:pointer;
         width:140px;
         position: relative;
         display:inline;
         left: 50px;
        //  margin-left:120px;
        //  margin-left:15px !important;
        @media ${device.mobile}{
          display:none;
        }
       }
       .sign:hover{
        width:140px;
        // margin-left:80px;
        color:blue;
        fill:blue
       }

       @media only screen and (max-width: 900px) {
        }
      `}/>
      <Container>

        <ChildOne>
           <ChildOneInner>
            <span style={{
              fontSize:'0.6rem',
              marginLeft:'12.5rem'
            }}>
              <img style={{position:'relative',top:'10px'}} src={typeof weather.weather==='object' && `http://openweathermap.org/img/w/${weather.weather['0'].icon}.png`} width="25" height="25"/> 
              {typeof weather.main ==='object' && Math.ceil(weather.main['temp']-273.15)}
              ,London
            </span>
            <span style={{
                  fontSize:'0.6rem',
                  marginLeft:'2rem'
            }}>
              {date}
            </span>
           </ChildOneInner>
           <ChildTwoInner>
               {/* Facebook Icon */}
               <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
               {/* Instagram Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" className='icon-general bi bi-instagram'  viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>
               {/* Twitter Icon*/}
               <svg xmlns="http://www.w3.org/2000/svg" className='icon-general bi bi-twitter'  fill="currentColor" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>
               {/* Youtube Icon*/}
               <svg xmlns="http://www.w3.org/2000/svg" className='icon-general bi bi-youtube' fill="currentColor"  viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>             
               <div className='sign'>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className='icon-person bi bi-person-fill'   viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>                  
                  <p style={{fontSize:'11px',display:'inline',position:'relative',top:'3px'}}>Signin/ Join</p>                  
               </div>
           </ChildTwoInner>
        </ChildOne>
        <br/>
        <ChildTwo>
          <Header  hide={hide} sethide={sethide}/>
        </ChildTwo>
      </Container>
    </>
  )
}

export default connect(HeaderText)



const Container=styled.div`
background-color:white;
width:96%;
`
const ChildOne=styled.div`
background-color:white;
width:100%
height:50px;
display:flex;
flex-direction:row;
flex-basis:13rem;
// @media ${device.mobile} {
//   display:none;
// }
`
const ChildOneInner=styled.div`
float:left;
margin-top:6px;
width:30%;
@media ${device.mobile}{
  display:none;
}
`
const ChildTwoInner=styled.div`
width:20%;
margin-left:50rem;
// position:relative;
// margin-top:80px;

@media ${device.mobile}{
display:none;  
}
`


const ChildTwo=styled.div`
background:#FAFAFA;
display:block;
width:1583px;
// max-width:auto;
margin:0 auto;
height:60px;
@media ${device.mobile}{
background:white;
width:93%;
// width0%;
}
`