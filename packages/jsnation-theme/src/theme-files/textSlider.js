import React from 'react'
import { styled,Global,css,connect } from 'frontity';
import Link from './link';
import { device } from './device';
const TextSlider = ({state,actions}) => {
  let [index,setindex]=React.useState(0);
  const [animate,setanimation]=React.useState('running');
  React.useEffect(()=>{
    const timer= setInterval(()=>{

            if(index>=5){
        
              setindex(0)
             }else{
                 setindex(index++)
            }

        },1000)

        return(()=>{
            clearInterval(timer);
        })
    },[index])

    const incrementhandler=()=>{
        if(index>=5){
            setindex(0);
            return;
        }else{
            setindex(index++)
        }
    }
    const decrementhandler=()=>{
        if(index<=0){
            return;
        }else{
            setindex(index--);
        }
    }
    actions.source.fetch('/')
    let data= state.source.get('/')

  return (<>
  <Global styles={css`
    @keyframes animate{
        0% {left:80px;}
        1% {position:relative;left:-10px;opacity:0.8;}
        4% {position:relative;left:-20px;opacity:0;}
        8% {position:relative;opacity:1;}
        12% {position:relative;opacity:1;}
        14% {left:80px;}
        16% {position:relative;left:-10px;opacity:0.8;}
        20% {position:relative;left:-20px;opacity:0;}
        20% {position:relative;opacity:1;}
        26% {position:relative;opacity:1;}
        28% {left:80px;}
        32% {position:relative;left:-10px;opacity:0.8;}
        36% {position:relative;left:-20px;opacity:0;}
        40% {position:relative;opacity:1;}
        44% {position:relative;opacity:1;}
        48% {left:80px;}
        52% {position:relative;left:10px;opacity:0.8;}
        56% {position:relative;left:20px;opacity:0;}
        60% {position:relative;opacity:1;}
        64% {position:relative;opacity:1;}
        68% {left:80px;}
        72% {position:relative;left:10px;opacity:0.8;}
        76% {position:relative;left:20px;opacity:0;}
        80% {position:relative;opacity:1;}
        84% {position:relative;opacity:1;}
        88% {left:80px;}
        92% {position:relative;left:-10px;opacity:0.8;}
        96% {position:relative;left:-20px;opacity:0;}
        84% {position:relative;opacity:1;}
       }
    .textanimate{
        font-size:0.8rem;
        margin-left:5rem;
        width:auto;
        max-width:50rem;
        // animation:   animate 3s infinite  ease-in-out;
        animation-name:animate;
        animation-iteration-count: infinite;
        animation-delay:2s;
        animation-duration:12s;
    }

  `}/>
    <Container>
        <Heading>LATEST NEWS</Heading>
        {typeof data.items==='object'?
        <Link href={data.items[index].link}>
           <p className='textanimate'>{decodeURI(data.items[index].link).split('/')[1]}</p>
        </Link>:''}
        <Icon>
            <svg onClick={decrementhandler}  xmlns="http://www.w3.org/2000/svg" width="1rem" height="16" fill="currentColor" className="left bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" fill="white"></path> </svg>
            <svg onClick={incrementhandler}  xmlns="http://www.w3.org/2000/svg" width="1rem" height="16" fill="currentColor" className="right bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" fill="white"></path> </svg>
        </Icon>
    </Container>
    </>)
}

export default connect(TextSlider);

const Container=styled.div`
display:inline;
position:relative;
top:2.5rem;
// left:26.25rem;
display:flex;
flex-direction:row;
width:80rem;
max-width:50rem;
@media ${device.mobile} {
    display:none;
}
`
const Heading=styled.h1`
font-size:0.7rem;
font-weight: 800;
font-family: Arial;
`

const Icon=styled.div`
position:absolute;
left:43.75rem;
top:-6px;
`