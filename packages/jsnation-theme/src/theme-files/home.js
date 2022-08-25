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
        <TravelList/>
        <Ads/>
        <Sports/>
        <Ads top={'460px'}/>
        <VideoList top={'3700px'}/>
        <Footer top={'1200px'}/> 
    </Container>
  )
}

export default connect(Home)

const Container=styled.div`
// width:100%;
width:100%;
`