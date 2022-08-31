import { connect, styled,css } from 'frontity';
import React from 'react'
import Footer from './footer';
import Link from './link';
import TextSlider from './textSlider'

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
        <Image src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz3.png'></Image>
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
                    return ( <Children key={i} className='header'>
                        {/* ads https://www.newspitara.com/wp-content/uploads/2021/11/corhaz3.png */}
                            <img src={typeof attachment==='object' ? attachment['source_url']:'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} width='300px' height='220px'></img>
                            <div className='content1'>
                                <p style={{fontSize:'11px'}}>{category.name}</p>
                                <Link href={post.link+post.id}>
                                  <h1 style={{fontSize:'14px' ,width:'300px'}} css={css`&:hover{text-decoration:underline;}`}>{link}</h1>
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
      <div style={{display:'flex',flexDirection:'row',marginTop:"200px",marginLeft:'350px'}}>
      <p style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>1 ?1:''}</p>                
                <p style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',marginLeft:'5px'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>2 ?2:''}</p>
                <p style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',marginLeft:'5px'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>4 ?'...':''}</p>                
                <p style={{padding:'5px',color:'#4169E1',paddingLeft:'8px',paddingRight:'8px',border:'1px solid #4169E1',width:'fit-content',marginLeft:'5px'}} css={css`&:hover{cursor:pointer;}`}>{data.totalPages>5 ?5:''}</p>                

                {/* {data.next &&
                  <svg onClick={nexthandler}  xmlns="http://www.w3.org/2000/svg" width="1rem" height="16" fill="currentColor" className="right bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" fill="white"></path> </svg>} */}
                <p style={{position:'relative',display:'inline',left:'340px',top:'10px',fontSize:'11px',color:'gray'}}>Page {data.page} of {data.totalPages}</p>
      </div>
      <AdsContainer style={{top:'50px'}}>
        <Text>-Advertisement-</Text>
        <Image src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz3.png' width='1000px'></Image>
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
`

const Container=styled.div`
width:fit-content;
`
const SearchContainer=styled.div`
position:relative;
top:80px;
left:65%;
width:fit-content;
`
const Heading=styled.h1`
font-size:12px;
`
const MainSearch=styled.div`
background-color:#F8F8F8;
position:relative;
top:100px;
padding:30px;
width:1000px;
left:30%;
`
const Input=styled.input`
padding:10px;
margin-left:15%;
border:1px solid 	#C0C0C0;
width:560px;
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
const Text=styled.p`
margin-left:480px;
font-size:10px;
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
`

const Children=styled.div``