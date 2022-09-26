import React from 'react'
import {styled,css,connect,Global } from 'frontity'
import TextSlider from './textSlider'
import CoronaBar from './coronaBar'
import HomeList from './HomeList'
import TechnologyList from './technology'
import TravelList from './travel'
import Ads from './Ads'
import Sports from './sport'
import FashionList from './fashion'
import VideoList from './video'
import Footer from './footer'
import UpFun from './scrollUp'
import Loader from './loader'
const Home = ({state}) => {
  const data = state.source.get(state.router.link);
  return (
    <Container>
        <Loader when={data.isFetching}/>
        <UpFun/>
        <TextSlider/>         
        <CoronaBar/>
        <HomeList/>  
         <TechnologyList/>
        <TravelList/>
        <Ads  top={'30px'} mobileTop={'10px'}/>  
        <Sports/>
        <Ads top={'430px'} mobileTop={'70px'} /> 
        <VideoList top={'4600px'} mobileTop={'5430px'}/>   
        <Footer top={'20px'} mobileTop={'50px'}/>      
    </Container>
  )
}

export default connect(Home)

const Container=styled.div`
width:100%;
`