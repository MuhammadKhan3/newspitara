import React,{useState,useEffect} from 'react'
import TextSlider from './textSlider'
import { Global,styled,connect,css } from 'frontity'
import Link from './link';
import Ads from './Ads';
import Pagination from './pagination';
import Footer from './footer';
import UpFun from './scrollUp';
import { device } from './device';

const FashionPage = ({state,actions}) => {
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
        actions.source.fetch('/category/fashion/')
        const data=state.source.get('/category/fashion/');
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
        <Heading>FASHION</Heading>
        <div css={css`@media ${device.mobile}{margin-left:10%;}`}>
            
        <Paragraph>ARTS</Paragraph>
        <Paragraph style={{backgroundColor:'#4169E1'}} >FASHION</Paragraph>
        <Paragraph>HEALTH</Paragraph>
        <Paragraph>NEWS</Paragraph>
        <Paragraph>PHOTOGRAPHY</Paragraph>
        <Paragraph>SPORT</Paragraph>
        <Paragraph>TECH</Paragraph>
        <Paragraph>WORLD</Paragraph>
        </div>
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
        <Footer mobileTop={'150px'}/>
        <UpFun/>
  </Container>
  </>
  )
}

export default connect(FashionPage);

const Container=styled.div`
position:relative;
height:100%;
width:100%;
@media ${device.mobile}{
    width:100%;
}
`
const PostContainer=styled.div`
background-color:#F2F2F2;
// postion:relative;
// top:660px;
margin-top:20px;
padding:20px;
@media ${device.mobile}{
    // margin-top:100px;
    margin-top:20px;
    padding:0px;
}
`
const Posts=styled.div`
position:relative;
left:300px;
display:flex;
flex-direction:row;
flex-wrap: wrap;
gap:10px;
width:1200px;

@media ${device.mobile}{
    left:0px;
    width:100%;
}
`
const AdsContainer=styled.div`
width:auto;
display:block;
position:relative;
top:50px;
left:300px;
width:fit-content;
height:200px;
@media ${device.mobile}{
    top:10px;
    width:100%;
    height:auto;
    left:0px;
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
`



const Content=styled.div`
// display:block;
// position:relative;
margin-top:70px;
margin-left:680px;
max-width:190px;
@media ${device.mobile}{
    margin-left:10%;
    margin-top:120px;
}
`;

const Heading=styled.h1`
font-size:2.4rem;
margin-left:150px;
@media ${device.mobile}{
    margin-left:50%;
}
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
@media ${device.mobile}{
    font-size:0.5rem;
    margin-left:5px;
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