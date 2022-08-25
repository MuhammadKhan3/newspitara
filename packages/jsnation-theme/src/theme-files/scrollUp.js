import { styled } from 'frontity';
import React,{useEffect,useState} from 'react'

const UpFun = () => {
const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
const scrollup=()=>{
    window.scrollTo({top:0,  behavior: "smooth"})
}
    console.log(scrollPosition)
  return (<>
  {scrollPosition>527 &&
    <Container onClick={scrollup}>
      <svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d=" M 165 565C 165 565 465 265 465 265C 484 245 516 245 535 265C 535 265 835 565 835 565C 855 584 856 616 836 636C 816 656 784 655 765 635C 765 635 500 371 500 371C 500 371 235 635 235 635C 221 650 200 655 181 647C 162 639 150 621 150 601C 150 587 155 574 165 565C 165 565 165 565 165 565"/></svg>
    </Container>
  }
  
  </>)
}

export default UpFun

const Container=styled.div`
position:fixed;
left:1539px;
top:700px;
color:white;
fill:white;
background-color:#4169E1;
padding:4px;
z-index:9999;
&:hover{
    pointer:cursor;
}
`