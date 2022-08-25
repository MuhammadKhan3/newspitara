import React from 'react'
import { styled,Global,css,connect } from 'frontity'
import { device } from './device';
const CoronaBar = () => {
  return (<>
    <Global styles={css`
     .state{
        font-size:13px;
        color:black;
     }
     .state1{

        margin-left:56px;
        color:black; 
        font-size:15px;

     }
     .state2{
        font-size:15px;
        color:black;
        margin-left:34px;        
     }
    `}
    />
    <Container>
        <Heading>India <span style={{fontWeight:'500',fontSize:'0.81rem'}}>COVID-19 Statistics</span></Heading>
        <InnerContainer>
            <Children>
              <p>44,339,429</p>
              <p className='state1'>CONFIRMED CASES</p>
            </Children>
            <Children>
              <p>527,332</p> 
              <p className='state2'>TOTAL DEATHS</p>
            </Children>
            <Children>
              <p>99,879</p> 
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
top:4.06rem;
left:14.37rem;
font-size:0.8rem;
width:100%;
max-width:74.37rem;
font-size:0.6rem;

@media ${device.laptop} {
  height:100%;
  display:inline-block;
  font-size:0.2rem;
  // margin-left:30px;
  width: calc(100% - 300px);
}
  
`
const Heading=styled.p`
position:absolute;
top:1.5rem;
left:15.625rem;
font-weight:bold;
@media ${device.laptop} {
  position:relative;
  display:inline;
  font-size:0.4rem;
  left: calc(250px - 200px);
}
`
const InnerContainer=styled.div`
position:relative;
left:38.81rem;
width:300px;
color:#4169E1;
display:grid;
grid-template-columns:11.875rem 11.875rem  11.875rem;
grid-template-rows:auto auto ;
box-sizing:border-box;
font-family:Calibri;
font-weight:200;
font-size:2.375rem;
`

const Children=styled.div`
margin-left:1rem;
width:11.87rem;
`