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
const Home = () => {
  return (
    <Container>
        <UpFun/>
        <TextSlider/>         
        <CoronaBar/>
        <HomeList/> 
        <TechnologyList/>
        {/* <TravelList/>
        <Ads  top={'100px'} mobileTop={'2400px'}/>
        <Sports/>
        <Ads top={'480px'} mobileTop={'2500px'} />
        <VideoList top={'3700px'} mobileTop={'4950px'}/>
        <Footer top={'1300px'} mobileTop={'3280px'}/>     */}
    </Container>
  )
}

export default connect(Home)

const Container=styled.div`
width:100%;
`