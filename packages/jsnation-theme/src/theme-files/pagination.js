import React,{useState} from 'react'
import Link from './link';
import { styled,css,connect } from 'frontity';

const Pagination = ({state}) => {
    const [page,setpage]=useState([]);
    // React.useEffect(async ()=>{
    //     await actions.source.fetch('/')
    //     setdata(data.items);
    // },[])
    const data=state.source.get('/category/news/');
    const home=state.source.get('/');
    for (let index = 0; index < data.totalPages; index++) {
        page.push(<p style={{padding:'5px',paddingLeft:'8px',paddingRight:'8px',backgroundColor:'#4169E1',color:'white',width:'fit-content'}}>{index+1}</p>)
    }
  return (
  <Container>
    <InnerOne>
        <PostContainer>
            <Posts>
            {data && data.items.map((item,i)=>{
                const post=state.source[item.type][item.id];
                const attachment=state.source.attachment[post.featured_media];
                const author=state.source.author[post.author];
                const category=state.source.category[post.categories[0]];
                const link=decodeURI(item.link).split('/');
                const content=post.content.rendered.split('<p>')[1].split('</p>')[0];            
                    
                        return ( <Children key={i} style={{width:'330px'}} >                                                
                            <Image src={`${attachment ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}`} style={{width:'330px',transform:'scale(1)'}}/>
                                <div style={{position:'relative',color:'white'}}>
                                    <p style={{fontSize:'0.7rem',color:'#4169E1'}}>{category.name}</p>
                                    <Link href={link}>
                                        <h1 css={css`&:hover{text-decoration:underline;}`} style={{color:'black',marginTop:'5px',fontSize:'15px',width:'20rem',textTransform: 'capitalize'}}>{link}</h1>
                                    </Link>
                                    <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                </div>                         
                            </Children>)
            })}
            </Posts>
            <Paginate >
                {page}
                <p style={{marginLeft:'610px',fontSize:'11px',color:'gray'}}>Page {data.page} of {data.totalPages}</p>
            </Paginate>
            
        </PostContainer>
        <AdsContainer>
            <Text>-Advertisement-</Text>
            <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg'></AdImage>
        </AdsContainer> 
    </InnerOne>
    <InnerTwo>
        <h1 style={{fontSize:'16px',borderLeft:'3px solid #4169E1',paddingLeft:'5px'}}>MUST READ</h1>
        <RightPost >
                {home && home.items.map((item,i)=>{
                    const post=state.source[item.type][item.id];
                    const attachment=state.source.attachment[post.featured_media];
                    const author=state.source.author[post.author];
                    const category=state.source.category[post.categories[0]];
                    const link=decodeURI(item.link).split('/');
                    const content=post.content.rendered.split('<p>')[1].split('</p>')[0];            
                    console.log(post)
                        if(i===0){
                            return ( <Children key={i} style={{width:'270px',height:'310px',overflow:'hidden',marginTop:'10px'}} >                                                
                                <Image src={`${attachment ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}`} style={{width:'290px',height: '150px',objectFit: 'fill',transform: 'scale(1.4)'}}/>
                                    <div style={{position:'relative',top:'30px',color:'white'}}>
                                        <p style={{fontSize:'0.7rem',color:'#4169E1'}}>{category.name}</p>
                                        <Link href={link}>
                                            <h1 css={css`font-size:10px,&:hover{text-decoration:underline;}`} style={{color:'black',marginTop:'5px',fontSize:'15px',width:'20rem',textTransform: 'capitalize'}}>{link}</h1>
                                        </Link>
                                        <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div>                         
                                </Children>)
                        }else if(i>=1 && i<2){
                            return(<>
                            <ImageContainer>
                               <Advert>- Advertisement -</Advert>
                               <ImageOne src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz2.png'/>
                           </ImageContainer>
                           <Children key={i} style={{width:'350px',height:'120px',overflow:'hidden'}} >                                                
                                <Image src={`${attachment ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}`} style={{width:'75px',height: '65px',objectFit: 'fill',transform: 'scale(1.4)',float:'left'}}/>
                                    <div style={{position:'relative',float:'left',left:'20px'}}>
                                        <p style={{fontSize:'0.6rem',color:'#4169E1'}}>{category.name}</p>
                                        <Link href={link}>
                                            <h1 css={css`font-size:10px,&:hover{text-decoration:underline;}`} style={{color:'black',marginTop:'5px',fontSize:'11px',width:'10rem',textTransform: 'capitalize'}}>{content}</h1>
                                        </Link>
                                        <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div>                         
                            </Children>
                           </>)
                        }else if(i>=2 && i<=3){
                            return (<Children key={i} style={{width:'350px',height:'120px',overflow:'hidden'}} >                                                
                            <Image src={`${attachment ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}`} style={{width:'75px',height: '65px',objectFit: 'fill',transform: 'scale(1.4)',float:'left'}}/>
                                <div style={{position:'relative',float:'left',left:'20px'}}>
                                    <p style={{fontSize:'0.6rem',color:'#4169E1'}}>{category.name}</p>
                                    <Link href={link}>
                                        <h1 css={css`font-size:10px,&:hover{text-decoration:underline;}`} style={{color:'black',marginTop:'5px',fontSize:'11px',width:'10rem',textTransform: 'capitalize'}}>{content}</h1>
                                    </Link>
                                    <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author ? author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                </div>                         
                            </Children>)
                        }
                })}
                </RightPost>
        </InnerTwo>
  </Container>
  )
}

export default connect(Pagination);

const Container=styled.div`
position:relative;
height:100%;
width:100%;
max-width:1000px;
margin-left:250px;
display:grid;
grid-template-columns:auto auto;
grid-template-rows:auto auto auto auto auto;
grid-row-gap:10px;
`

const PostContainer=styled.div``;

const InnerOne=styled.div``;
const InnerTwo=styled.div``;

const Posts=styled.div`
display:grid;
grid-template-columns:auto auto;
grid-template-rows:auto auto auto auto auto;
grid-row-gap:10px;
width:700px;
height:auto;
`
const RightPost=styled.div`
display:grid;
grid-template-columns:auto;
grid-template-rows:auto;
width:400px;
height:auto;
`

const Children=styled.div`

`
const Image=styled.img`
width:400px;
height:180px;
// overflow:hidden;
// &:hover{
//     transform:scale(1.1);
//     cursor:pointer;
// }
`

const ImageContainer=styled.div`
position:relative;
width:fit-content;
`

const ImageOne=styled.img`
width:240px;
margin-top:4px;
`

const Advert=styled.p`
font-size:10px;
margin-left:80px;
color:gray;
`
const Paginate=styled.div`
margin-top:10px;
display:flex;
flex-direction:row;
`;

const Page=styled.h1``;

const AdsContainer=styled.div`
width:auto;
display:block;
position:relative;
top:50px;
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
width:700px
`