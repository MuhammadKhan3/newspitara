import React from 'react'
import { styled,Global,css,connect } from 'frontity'
import { device } from './device';
const CoronaBar = () => {
  return (<>
    <Global styles={css`
     .state{
        font-size:13px;
        color:black;
        width:fit-content;
        @media ${device.mobile}{
          margin-left:calc(100%-30px);
          max-width:40%;
          width:100px;
          font-size: 7px;        
          font-weight: 300 ;
          text-transform: uppercase;
        }
     }
     .state1{
        margin-left:3.5rem;
        color:black; 
        font-size:15px;
        @media ${device.mobile}{
          margin-left:0.5rem;
          max-width:100px;
          font-size: 7px;        
          font-weight: 300 ;
          text-transform: uppercase;
        }
     }
     .state2{
        font-size:15px;
        color:black;
        margin-left:2.125rem;
        @media ${device.mobile}{
          margin-left:1rem;
          width:object-fit;
          max-width:100px;
          font-size: 7px;        
          font-weight: 300 ;
          text-transform: uppercase;
        }        
     }
    `}
    />
    <Container>
        <Heading>India <span style={{fontWeight:'500',fontSize:'0.81rem'}}>COVID-19 Statistics</span></Heading>
        <InnerContainer>
            <Children>
              <p style={{width:'50%'}} css={css`@media ${device.mobile}{font-family: Roboto ;font-size: 18px ;font-weight: 300 ;}`}>44,339,429</p>
              <p className='state1'>CONFIRMED CASES</p>
            </Children>
            <Children>
              <p style={{width:'50%'}} css={css` @media ${device.mobile}{font-family: Roboto ;font-size: 18px ;font-weight: 300 ;}`}>527,332</p> 
              <p className='state2'>TOTAL DEATHS</p>
            </Children>
            <Children css={css`width:fit-content;`}>
              <p style={{width:'50%'}} css={css`@media ${device.mobile}{font-family: Roboto !important;font-size: 18px ; ;font-weight: 300 !important;}`}>99,879</p> 
              <p className='state'>TOTAL ACTIVE CASES</p>
            </Children>
        </InnerContainer>
    </Container></>)
}

export default connect(CoronaBar);

const Container=styled.div`
background-color:#F2F2F2;
height:4.375rem;
position:relative;
margin-top:4.06rem;
left:14.37rem;
font-size:0.8rem;
width:100%;
display:block;

max-width:74.37rem;
font-size:0.6rem;
@media ${device.laptop}{
left:1%;
width:98%;
}
@media ${device.tablet}{
 left:10px; 
 width:98%;
}
@media ${device.mobile} {
  width:98%;
  top:6rem;
  left:0px;
}

  
`
const Heading=styled.p`
position:absolute;
top:1.5rem;
left:15.625rem;
font-weight:bold;
@media ${device.tablet}{
  left:2rem;
}

@media ${device.laptop}{
  left:2rem;
}
@media ${device.mobile} {
  left:1rem;
  font-size:15px;
  max-width:100px;
  display:inline;
}
`
const InnerContainer=styled.div`
position:relative;
left:40.81rem;
width:500px;
color:#4169E1;
display:grid;
grid-template-columns:11.875rem 11.875rem  11.875rem;
grid-template-rows:auto auto ;
box-sizing:border-box;
font-family:Calibri;
font-weight:200;
font-size:2.375rem;
@media ${device.laptop}{
  left:25%;
}
@media ${device.tablet}{
  left:25%;
}
@media ${device.mobile}{
  position:absolute;
  grid-template-columns:5rem 5rem 5rem;
  grid-column-gap: 3%;
  left: 30%;
  width:150px;
  top:1rem;
}

`

const Children=styled.div`
margin-left:1rem;
width:11.87rem;
@media ${device.mobile}{
font-size:20px;
width:60%;
}
`