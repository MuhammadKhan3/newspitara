import { connect, styled,css } from 'frontity';
import React from 'react'
import Footer from './footer';
import Link from './link';
import TextSlider from './textSlider'
import { device } from './device';

const Search = ({state,actions}) => {  
  
  const page=[]
  const data=state.source.get(state.router.link);
  const search=state.router.link.split('=');
  const [key,setkey]=React.useState(search[1]);  
  // for (let index = 0; index < data.totalPages; index++) {
  //    if(index<3){
  //     page.push(<Link href={`${data.link}page/${index+1}`}><p style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',marginLeft:'5px'}} css={css`&:hover{cursor:pointer;}`}>{index+1}</p></Link>)
  //   }else if(index==3){
  //     page.push(<p style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',marginLeft:'5px'}} css={css`&:hover{cursor:pointer;}`}>...</p>)
  //   }else if(index===4){
  //     page.push(<Link href={`${data.link}page/${totalPages}`}><p style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',marginLeft:'5px'}} css={css`&:hover{cursor:pointer;}`}>{totalPages}</p></Link>)
  //   }else{
  //     break;
  //   }
  // }

  const searchhandler=(e)=>{
    setkey(e.target.value)
  }
  const clickhandler=()=>{
    actions.router.set(`?s=${key}`);
  }
  return (<>
  <TextSlider/>
  <Container>
      <SearchContainer>
        <Heading>Search results for</Heading>
        <Heading style={{fontSize:'40px',marginLeft:'30px',width:'fit-content'}}>{search[1]}</Heading>
      </SearchContainer>
      <MainSearch >
        <Input onChange={searchhandler} value={key} type='text'/>
        <Button onClick={clickhandler}>Search</Button>
      </MainSearch>
      <AdsContainer>
            <Text>-Advertisement-</Text>
            <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg'></AdImage>
           <AdImage1 src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz4.png'/>
      </AdsContainer>  
      
      <Posts >
      {typeof data.items==='object' && data.items.map((item,i)=>{
                 const post=state.source[item.type][item.id];
                 const attachment=state.source.attachment[post.featured_media ?post.featured_media :0];
                 const author=state.source.author[post.author]
                 const category=state.source.category[post.categories[0]];
                 const link=decodeURI(item.link).split('/');
                 const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
                 console.log(i)
                 if(i>=0 && i<9){
                    return ( <Children key={i} className='header' css={css`width:96%;`}>
                            <img src={typeof attachment==='object' ? attachment['source_url']:'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css`width:300px;height:220px; @media ${device.mobile}{width:45%;height:35vh;float:left;}`}></img>
                            <div className='content1' css={css`@media ${device.mobile}{float:left;width:46%;margin-left:5px;}`}>
                                <p style={{fontSize:'11px'}}>{category.name}</p>
                                <Link href={post.link+post.id}>
                                  <h1  css={css`font-size:14px;width:300px; &:hover{text-decoration:underline; }@media ${device.mobile}{width:90%;}`}>{link}</h1>
                                </Link>
                                <p style={{fontSize:'12px'}}>{author ? author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>
                            
                        </Children>)
                 }
                 else{
                   return;
                  }
                })}
      </Posts>
      <div css={css`display:flex;flex-direction:row;margin-top:200px;margin-left:350px; @media ${device.mobile}{margin-left:30px;}`}>  
      <p  onClick={()=>{actions.router.set(`/page/1/?s=${data.searchQuery}`)}}style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>page ?1:''}</p>                
      {data.page>1 &&
      <p  onClick={()=>{actions.router.set(data.link)}}style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',backgroundColor:'lightblue'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>page ?data.page:''}</p>                
      }  
      {data.next &&
      <p  onClick={()=>{actions.router.set(data.next)}} style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>page+1 ?data.page+1:''}</p>                
      }
      <p style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',marginLeft:'5px'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>4 ?'...':''}</p>                
      {data.next &&
      <p onClick={()=>{actions.router.set(`/page/${data.totalPages}/?s=${key}`)}} style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',marginLeft:'5px'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>5 ?data.totalPages:''}</p>                
      }

                {/* {data.next &&<svg onClick={nexthandler}  xmlns="http://www.w3.org/2000/svg" width="1rem" height="16" fill="currentColor" className="right bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" fill="white"></path> </svg>} */}
                <p css={css`position:relative;display:inline;left:340px;top:10px;font-size:11px;color:gray; @media ${device.mobile}{display:none;}`}>Page {data.page} of {data.totalPages}</p>
      </div>
      <AdsContainer css={css`top:10px; @media ${device.mobile}{}`}>
            <Text>-Advertisement-</Text>
            <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg'></AdImage>
           <AdImage1 src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz4.png'/>
      </AdsContainer>  
  </Container>
  <Footer top='100px'/>
  </>)
}

export default connect(Search)



const AdsContainer=styled.div`
position:relative;
top:150px;
left:30%;
@media ${device.mobile}{
    width:100%;
    margin-top:10%;
    left:0px;
}
`




const AdImage1=styled.img`
display:none;
@media ${device.mobile}{
    display:block;
    width:70%;
    margin-left:15%;
}
`
const Text=styled.p`
margin-left:480px;
font-size:10px;
@media ${device.mobile}{
  margin-left:40%;
  margin-top:20px;
}
`
const AdImage=styled.img`
height:auto;
width:800px;
display:block;
margin-left:10%;
@media ${device.mobile}{
    width:200px;
    height:150px;
    display:none;
}
`

const Container=styled.div`
width:fit-content;
@media ${device.mobile}{
  width:96%;
}
`
const SearchContainer=styled.div`
position:relative;
top:80px;
left:65%;
width:fit-content;
@media ${device.mobile}{
  top:140px;
  left:42%;
  width:fit-content;
}
`
const Heading=styled.h1`
font-size:12px;
width:auto;
`
const MainSearch=styled.div`
background-color:#F8F8F8;
position:relative;
top:100px;
padding:30px;
width:1000px;
left:30%;
@media ${device.mobile}{
  left:0px;
  top:180px;
  width:100%;
}
`
const Input=styled.input`
padding:10px;
margin-left:15%;
border:1px solid 	#C0C0C0;
width:560px;
@media ${device.mobile}{
  width:60%;
  font-size:18px;
}
`

const Button=styled.button`
padding:10px;
background-color:#4169E1;
color:white;
border:none;
padding-left:15px;
padding-right:15px;

`
const Image=styled.img`
width:660px;
height:80px;
margin-left:200px;
`

const Posts=styled.div`
position:relative;
top:170px;
left:340px;
width:1000px;
height:100%;
display:grid;
grid-template-columns:auto auto auto;
grid-template-rows:auto auto auto;
@media ${device.mobile}{
  grid-template-columns:auto;
  grid-template-rows:auto;
  left:30px;
  width:96%;

}
`

const Children=styled.div`
@media ${device.mobile}{
  margin-top:10px;
}
`