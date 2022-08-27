import React,{useState,useEffect} from 'react'
import TextSlider from './textSlider'
import { styled,connect,css } from 'frontity'
import Link from './link';
import Ads from './Ads';
import Pagination from './pagination';
import Footer from './footer';
import UpFun from './scrollUp';

const TravelPage = ({state,actions}) => {
    const [data,setdata]=useState([]);
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

    React.useEffect(async ()=>{
        await actions.source.fetch('/')
        const data=await state.source.get('/');
        setdata(data.items);
        setactive(true)
    },[])
    console.log(scrollPosition);
  return (
  <Container>
      <TextSlider/>
      <Content>
        <Heading>TRAVEL</Heading>
        <Paragraph>RECEPIES</Paragraph>
        <Paragraph>TRAVEL</Paragraph>
        <Paragraph>VIDEO</Paragraph>

      </Content>
      <PostContainer>

        <Posts>
        {active && data.map((item,i)=>{
            const post=state.source[item.type][item.id];
            const attachment=state.source.attachment[post.featured_media];
            const author=state.source.author[post.author];
            const category=state.source.category[post.categories[0]];
            const link=decodeURI(item.link).split('/');
            const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
            console.log('con',content)
            console.log('url',decodeURI(post.link))
            
                    if(i===0){
                     return ( <Children key={i}  style={{width:'550px'}} >                                            
                           <Image src={attachment['source_url']} style={{width:'550px'}}/>
                            <div style={{position:'absolute',marginLeft:'10px',top:'210px',color:'white'}}>
                                <p style={{fontSize:'0.7rem',marginTop:'5px'}}>{category.name}</p>
                                <Link href={link}>
                                    <h1 style={{color:'white',fontSize:'18px',marginTop:'5px',width:'30rem',textTransform: 'capitalize'}}>{link}</h1>
                                </Link>
                                
                                <p style={{fontSize:'12px',marginTop:'5px'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>                         
                        </Children>)
                   }else if(i===1){
                       return ( <Children key={i} style={{width:'550px'}}>                                                
                        <Image src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' style={{width:'550px'}}/>
                            <div style={{position:'absolute',marginLeft:'10px',top:'220px',color:'white'}}>
                                <p style={{fontSize:'0.7rem'}}>{category.name}</p>
                                <Link href={link}>
                                    <h1 style={{color:'white',marginTop:'5px',fontSize:'18px',width:'30rem',textTransform: 'capitalize'}}>{link}</h1>
                                </Link>
                                <p style={{fontSize:'12px',marginTop:'5px'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>                         
                        </Children>)
                   }
                   else if(i>=2 && i<=4){
                       return ( <Children key={i} style={{width:'370px'}} css={css`&:hover{text-decoration:underline;}`}>                                                
                        <Image src={`${attachment ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}`} style={{width:'350px',transform:'scale(1)'}}/>
                            <div style={{position:'relative',marginLeft:'10px',color:'white'}}>
                                <p style={{fontSize:'0.7rem',color:'black'}}>{category.name}</p>
                                <Link href={link}>
                                    <h1 style={{color:'black',marginTop:'5px',fontSize:'18px',width:'20rem',textTransform: 'capitalize'}}>{link}</h1>
                                </Link>
                                <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>                         
                        </Children>)
                   }
                   else{
                     return;
                   }
            
        })}
        </Posts>
      </PostContainer>
        <AdsContainer>
            <Text>-Advertisement-</Text>
            <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg'></AdImage>
        </AdsContainer> 
        <Pagination/>
        <Footer/>
        <UpFun/>
  </Container>
  )
}

export default connect(TravelPage);

const AdsContainer=styled.div`
width:auto;
display:block;
position:relative;
top:50px;
left:300px;
width:fit-content;
height:200px;
`


const Text=styled.div`
margin-left:320px;
font-size:10px;
margin-left:420px;
`;
const AdImage=styled.img`
height:auto;
width:800px
`

const Container=styled.div`
position:relative;
height:100%;
width:100%;
`
const Content=styled.div`
// display:block;
position:relative;
top:70px;
left:680px;
max-width:190px;`;

const Heading=styled.h1`
font-size:2.4rem;
margin-left:20px;
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
const PostContainer=styled.div`
background-color:#F2F2F2;
// postion:relative;
// top:660px;
margin-top:100px;
padding:20px;
`
const Posts=styled.div`
position:relative;
left:300px;
display:flex;
flex-direction:row;
flex-wrap: wrap;
gap:10px;
width:1200px;
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