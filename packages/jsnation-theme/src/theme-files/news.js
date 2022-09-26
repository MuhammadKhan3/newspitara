import React,{useState,useEffect} from 'react'
import TextSlider from './textSlider'
import { styled,connect,css, Global } from 'frontity'
import Link from './link';
import Ads from './Ads';
import Pagination from './pagination';
import Footer from './footer';
import UpFun from './scrollUp';
import { device } from './device';

const News = ({state,actions}) => {
    // const [data,setdata]=useState([]);
    const [active,setactive]=useState(false);
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

    actions.source.fetch('/category/news');
    const data=state.source.get('/category/news');
  return (<>
  <Global
  styles={`
  .posts{

  }

  .merge-grid{
    @media ${device.laptop}{
        grid-column:span 3;
    }
    @media ${device.tablet}{
        grid-column:span 3;
    }
  }
  .merge-grid1{
    @media ${device.laptop}{
     grid-column:span 3;
    }
    @media ${device.tablet}{
        grid-column:span 3;
    }
  }
  .merge-grid2{
    @media ${device.laptop}{
        grid-column:span 2;
        width:33%;
    }
    @media ${device.tablet}{
        grid-column:span 2;
        width:33%;
    }
  }
  .children-one{
    width:550px;    
    @media ${device.laptop}{width:80%;}
    @media ${device.tablet}{width:80%;}
     @media ${device.mobile}{width:100%;}
  }
  .children-two{
    width:550px;    
    @media ${device.laptop}{width:80%;}
    @media ${device.tablet}{
        width:80%;
    }

     @media ${device.mobile}{width:100%;} 
  }
  .children-three{
    width:370px; 
    &:hover{text-decoration:underline;}
    @media ${device.mobile}{width:100%;}
    @media ${device.laptop}{
        width:90%;
    }
    @media ${device.tablet}{
        width:90%;
        // height:25vh;
    }
  }
  .children-image-one{
    width:550px;     
    @media ${device.laptop}{width:87%;}
    @media ${device.tablet}{width:87%;}
     @media ${device.mobile}{width:100%;}   
   }
  .children-image-two{
    width:550px; 
    @media ${device.laptop}{width:87%;}
    @media ${device.tablet}{width:67%;}
    @media ${device.mobile}{width:100%;} 
   }
  .chlidren-image-three{
    width:350px;
    transform:scale(1); 
    @media ${device.mobile}
    {
        width:40%;
        height:15vh;
        float:left;
    }
    @media ${device.laptop}{
        width:60%;
    }
    @media ${device.tablet}{
        width:60%;
        height:10vh;
    }
  }
  .children{
    @media ${device.laptop}{width:47%;}
    @media ${device.tablet}{
        width:47%;
    }
  }
  .image-one{

  }
  `}
  />
  <Container>
      <TextSlider/>
      <Content>
        <Heading>News</Heading>
        <Paragraph>RECEPIES</Paragraph>
        <Paragraph>TRAVEL</Paragraph>
        <Paragraph>VIDEO</Paragraph>
      </Content>
      <PostContainer>

        <Posts>
        {typeof data.items==='object' ? data.items.map((item,i)=>{
            const post=state.source[item.type][item.id];
            const attachment=state.source.attachment[post.featured_media];
            const author=state.source.author[post.author];
            const category=state.source.category[post.categories[0]];
            
            const link=decodeURI(item.link).split('/');
            const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
            
                    if(i===0){
                     return ( <Children key={i}  className='children-one merge-grid' >                                            
                            <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} className='children-image-one'  />
                            <div style={{position:'absolute',marginLeft:'10px',top:'210px',color:'white'}}>
                                <p style={{fontSize:'0.7rem',marginTop:'5px'}}>{category.name}</p>
                                <Link href={post.link+post.id}>
                                    <h1 style={{color:'white',fontSize:'18px',marginTop:'5px',width:'30rem',textTransform: 'capitalize'}}>{link}</h1>
                                </Link>
                                <p style={{fontSize:'12px',marginTop:'5px'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>                         
                        </Children>)
                   }
                   else if(i===1){
                       return ( <Children className='children-two merge-grid1' key={i} >                                                
                        <Image  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} className="children-image-two"/>
                            <div style={{position:'absolute',marginLeft:'10px',top:'220px',color:'white'}}>
                                <p style={{fontSize:'0.7rem'}}>{category.name}</p>
                                <Link href={post.link+post.id}>
                                    <h1 style={{color:'white',marginTop:'5px',fontSize:'18px',width:'30rem',textTransform: 'capitalize'}}>{link}</h1>
                                </Link>
                                <p style={{fontSize:'12px',marginTop:'5px'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>                         
                        </Children>)
                   }
                   else if(i>=2 && i<=4){
                       return ( <Children className='children-three merge-grid2' key={i}  >                                                
                           <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}  className="chlidren-image-three"/>
                            <div css={css`position:relative;marginLeft:10px;color:white;@media ${device.mobile}{float:left; width:57%;height:auto; margin-left:5px; }`}>
                                <p style={{fontSize:'0.7rem',color:'#4169E1'}}>{category.name}</p>
                                <Link href={post.link+post.id}>
                                    <h1 css={css`color:black;margin-top:5px;font-size:18px;width:20rem;text-transform: capitalize;  &:hover{text-decoration:underline;} @media ${device.mobile}{font-size:15px;font-weight:500;width:100%;} `}>{link}</h1>
                                </Link>
                                <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>                         
                        </Children>)
                   }
                   else{
                     return;
                   }
            
        }):''}
        </Posts>
      </PostContainer>
        <AdsContainer>
            <Text>-Advertisement-</Text>
            <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg'></AdImage>
           <AdImage1 src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz4.png'/>
        </AdsContainer>  
         <Pagination/>
        <Footer mobileTop={'120px'}/>
        <UpFun/>
  </Container>
  </>)
}

export default connect(News);



const Container=styled.div`
position:relative;
height:100%;
width:100%;
@media ${device.mobile}{
    width:98%;
}
`
const PostContainer=styled.div`
background-color:#F2F2F2;
// postion:relative;
// top:660px;
margin-top:100px;
padding:20px;
@media ${device.tablet}{
    width:100%;
}
@media ${device.laptop}{
    width:100%;
}
@media ${device.mobile}{
    // in-top:100px;
    margin-top:150px;
    padding:0px;
}
`
const Posts=styled.div`
position:relative;
left:300px;
display:flex;
flex-direction:row;
flex-wrap:  wrap;
gap:10px;
width:1200px;

@media ${device.laptop}{
    display:inline-grid;
    
    grid-template-columns:16% 16% 16% 16% 16% 16%;
    grid-template-rows:auto auto;
    grid-gap:20px;
    left:10px;
    width:90%;
    // flex-wrap:nowrap;
}
@media ${device.tablet}{
    left:10px;
    display:inline-grid;
    
    grid-template-columns:12% 12% 12% 12% 12% 12%;
    grid-template-rows:auto auto;
    grid-gap:20px;
    left:10px;
    width:90%;
    width:100%;

}
@media ${device.mobile}{
    left:0px;
    width:100%;
}
`
const AdsContainer=styled.div`
width:auto;
position:relative;
top:10px;
left:300px;
width:50%;
height:200px;
@media ${device.mobile}{
    // position:static;
    // overflow:hidden;
    display:inline-block;
    margin-top:10px;
    width:100%;
    height:auto;
    left:0px;
}
@media ${device.laptop}{
    left:10%;
    width:60%;
}
@media ${device.tablet}{
    left:10%;
    width:60%;

}
`


const Text=styled.div`
margin-left:320px;
font-size:10px;
margin-left:420px;
width:fit-content;
@media ${device.mobile}{
    margin-left:40%;
}
@media ${device.laptop}{
    left:50%;
}
@media ${device.tablet}{
    left:50%;
}
`;

const AdImage1=styled.img`
display:none;
@media ${device.mobile}{
    display:block;
    width:70%;
    margin-left:15%;
}


`
const AdImage=styled.img`
height:auto;
width:800px;
display:block;
@media ${device.mobile}{
    width:200px;
    height:150px;
    display:none;
}
@media ${device.laptop}{
    display:block;
    width:70%;
}
@media ${device.tablet}{
    display:block;
    width:70%;
    // margin-left:15%;
}
`



const Content=styled.div`
// display:block;
position:relative;
top:70px;
left:680px;
max-width:190px;
@media ${device.laptop}{
    left:30%;
}
@media ${device.tablet}{
    left:30%;
}
@media ${device.mobile}{
    left:30%;
    top:120px;
}
`;

const Heading=styled.h1`
font-size:2.4rem;
margin-left:50px;
`
const Paragraph=styled.p`
font-size:0.7rem;
display:inline;
background-color:black;
color:white;
margin-left:10px;
padding:2px;
&:hover{
    background-color:#4169E1;
    cursor:pointer;
}
`


const Children=styled.div`
position:relative;
overflow-wrap: break-word;
overflow: hidden;
`
const Image=styled.img`
width:600px;
filter: brightness(80%);
height:300px;
overflow:hidden;
&:hover{
    transform:scale(1.1);
    cursor:pointer;
}
`