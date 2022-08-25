import React from 'react'
import { styled,Global,css,connect } from 'frontity';
import Link from './link';
const SearchBox = ({actions,state}) => {
  const [post,setpost]=React.useState([])
  const [flag,setflag]=React.useState(false);
  const [route,setroute]=React.useState('');
  

  const searchhandler=async (e)=>{
    await actions.source.fetch(`/?s=${e.target.value}`)
    let data=await state.source.get(`/?s=${e.target.value}`);
    console.log(data.items)
    setflag(true)
    await data.items.forEach(item => {
      setpost(c=>[...c,item]);      
    });
    setroute(`/?s=${e.target.value}`)
  }
  const routehandler=()=>{
    actions.router.set(route);
  }

  return (<>    
    <Global styles={css`
    .rightarrow{
      width:25px;
      position:relative;
      left:8px;
      top:11px;
      display:inline;
    }
    .searchText{
      display:inline;
      position:relative;
      top:4px;
      left:8px;
    }
    .view{
      padding:5px;
      margin-left:240px;
      font-size:14px;
      color:#4169E1;
    }
    .image{
      width:80px ;
      height:70px !important;
      display:inline;
      float:left;
    }
    .link{
      display:inline;
      width:90px;
      float:left;
      font-size:12px;
      margin-left:5px;
      margin-top:3px;
      // font-weight:bold;
    }
    .author{
      font-size:11px;
      width:auto;
    }
    .date{
      font-size:9px;

    }
    .view:hover{
      cursor:pointer;
    }
    @keyframes example {
      0%   {opacity:0}
      50%  {opacity:0.7;}
      100% {opacity:1;}
    }
    `}/>
    <Container>
      <Input type='text' onChange={searchhandler}/>      
      <Button>
        <span className='searchText'>Search</span>
        <svg   xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="rightarrow bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" fill="white"></path> </svg>
      </Button>
    
    {post.length>0 &&<>
      <InnerContainer>
        {post.map((item,i)=>{
                
                const post=state.source[item.type][item.id];
                const attachment=state.source.attachment[post.featured_media];
                const author=state.source.author[post.author]
                const link=decodeURI(item.link).split('/');

            if(i>5){
              return ;
            }
          return <Children key={i}>
            <img src={attachment ? attachment['source_url']:'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_324x400.png'} className='image'/>
            <Link href={item.link}><p  className='link'>{link[1]}</p></Link>
            <br/>
            <span className='author'>{author ? author.name :''} <span className='date'>{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</span></span>
          </Children>
        })}
      </InnerContainer>
      <hr/>
      <p className='view' onClick={routehandler}>View all results</p>
      </>}
    </Container>
    </>)
}

export default connect(SearchBox);

const Container=styled.div`
background-color:white;
width:590px;
min-height:120px;
height:auto;
box-shadow: 2px 2px 2px 2px #D3D3D3;
position:relative;
z-index:88;
border:1px solid #D3D3D3;
left:850px;
top:20px;
animation-name: example;
animation-duration: 2s;
`
const Input=styled.input`
border:none;
position:absolute;
left:0px;
top:50px;
margin:0px;
padding:0px;
margin-left:13px;
border-bottom: 2px solid #D3D3D3;
outline:none;
width:480px;
padding-bottom:5px;
`
const Button=styled.div`
position:absolute;
left:480px;
top:32px;
margin:0px;
padding:0px;
background-color:#4169E1;
color:white;
border:none;
margin-left:10px;
font-size:15px;
width:80px;
height:40px;
display:block;

&:hover{
  background-color:black;
  pointer:cursor
}
`
const InnerContainer=styled.div`
display: grid;
padding-bottom:10px;
grid-gap: 10px;
grid-template-columns: auto auto;
grid-template-rows: auto auto auto;
margin-top:100px;
justify-content: space-around;
`
const Children=styled.div`
width:200px;
display:grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
`