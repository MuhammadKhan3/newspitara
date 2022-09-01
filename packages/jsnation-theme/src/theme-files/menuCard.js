import React from 'react'
import { Global,css,connect,styled } from 'frontity'
import Link from './link';
const menuCard = ({state,actions,menus,setmenu}) => {
    // const [data,setdata]=React.useState([]);
    const [routes,setroutes]=React.useState('');
    const [post,setpost]=React.useState([]);
    const [len,setlen]=React.useState(0);
    const [start,setstart]=React.useState(0);
    const [end,setend]=React.useState(4);
    
    const [attachment,setattachment]=React.useState([]);
    
    React.useEffect(async ()=>{
        if(menus==='FASHION'){
            console.log('run.')
            await actions.source.fetch('/category/fashion');
            const data=state.source.get('/category/fashion');
            const dat=data.items.slice(start,end)
            setpost(dat);
            setroutes('/category/fashion')
        }
    },[menus])

    const menu=[
        ['All','/category/news'],
        ['Recipes','/category/news/recipes'],
        ['Travel','/category/news/travel'],
        ['Video','/category/news/video'],
    ]
    const getdata=async (route)=>{
        setroutes(route)
        setstart(0);
        setend(4);
        await actions.source.fetch(route);
        const data=state.source.get(route);
        const dat=data.items.slice(start,end)
        setpost(dat);
    }

    const incrementhandler=async()=>{
        let data=state.source.get(routes);
        console.log('start',start)
        if(start+8<data.total){ 
        if((start+4)%12===0 && data.total>start+4){
            await actions.source.fetch(data.next);
        }
        data=state.source.get(routes);
        const dat=data.items.slice(start+4,end+4)
        setstart(start+4);
        setend(end+4);       
        setpost(dat);
       }
    }
    const decrementhandler=async ()=>{
        let data=state.source.get(routes);
        if(start>0){
        if((start+4)%12===0 && data.total>start+4){
            await actions.source.fetch(data.next);
        }
        data=state.source.get(routes);
        const dat=data.items.slice(start-4,end-4)
        setstart(start-4);
        setend(end-4);       
        setpost(dat);
        }

    }
    console.log(menus==='NEWS .')
  return (<>
    <Global styles={css`
    .left{
        height:30px;
        width:25px;
        background-color:blue;
        color:black;
        opacity:0.5;
    }
    .left:hover{
        opacity:1;
    }
    .right{
        height:30px;
        width:25px;
        margin-left:4px;
        background-color:blue;
        color:black;
        opacity:0.5;
    }
    .right:hover{
        opacity:1;
    }
    @keyframes example {
        0%   {opacity:0}
        50%  {opacity:0.7;}
        100% {opacity:1;}
      }
    `}/>
    {(menus==='NEWS' || menus==='FASHION') && <>
    <Container onMouseLeave={()=>{setmenu('')}}>
            {menus==='NEWS' &&
        <InnerContainer>
            <Menu>
                {menu.map((m,i)=>{
                    return <Link href={m[1]}><List key={i} onMouseEnter={()=>{getdata(m[1])}}>{m[0]}</List></Link>
                })}
            </Menu>
        </InnerContainer>
            }
        <PostContainer>
            {post && post.map((item,i)=>{
                const post=state.source[item.type][item.id];
                const attachment=state.source.attachment[post.featured_media];
                const author=state.source.author[post.author]
                const image={...attachment};
                const link=item.link.split('/');
                
                if(i===4){ 
                    return ;
                }
                return <Post key={i}>
                    <Image src={image['source_url']}/>
                    <p>{link[1]}</p>
                    <span style={{fontSize:'11px'}}>{author.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</span>
                </Post>
            })}
        </PostContainer>
        <Icon>
            {post.length>0 &&<>
            <svg onClick={decrementhandler}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="left bi bi-arrow-left-short" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" fill="white"></path> </svg>
            <svg onClick={incrementhandler}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="right bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" fill="white"></path> </svg>
            </>}
        </Icon>
    </Container>
    </>}  
  </>
  )
}

export default connect(menuCard);

const Container=styled.div`
background-color:white;
width:990px;
height:300px;
position:fixed;
left:30rem;
top:6.5rem;
border:1px solid #D3D3D3;
z-index:1000;
display:flex;
flex-position:row;
animation-name: example;
animation-duration: 2s;
`
const InnerContainer=styled.div`
display:flex;
flex-direction:column;
border-right:1px solid #D3D3D3;
margin:0px;
width:120px;
height:300px;
padding:0px;
position:relative;
top:0px;
`


const Menu=styled.ul`
list-style-type:none;
margin:0px;
padding:0px;
margin-top:6px;
margin-left:24px;
font-size:12px;
font-weight:bold;
`
const List=styled.li`
list-style-type:none;
margin:0px;
padding:0px;
margin-top:7px;
&:hover {
    cursor:pointer;
    color:#4169E1;
}
`
const PostContainer=styled.div`
padding:15px;
display:flex;
flex-direction:row;
justify-content: space-between;
`

const Post=styled.div`
margin-left:10px;
width:200px;
`
const Image=styled.img`
width:200px;
height:140px;
`
const Icon=styled.div`
display:flex;
flex-direction:row;
position:absolute;
left:140px;
top:260px;
`