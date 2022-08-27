import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
const HomeList = ({actions,state}) => {
    const data=state.source.get('/');
  return (<>
    <Global styles={css`
    .content1{
        width:500px;
        position:absolute;
        top:210px;
        color:white;
        font-family:Arial;
        margin-left:20px;
    }
    .category{
        font-size:11px;
    }
    .link{
        font-size:18px;
        text-transform: capitalize;
        width:360px;
        color:white;
    }
    .link:hover{
        cursor:pointer;
    }
    .author{
        font-size:11px;
    }
    .image-2{
        width:320px;
    }
    .header{
        grid-column-start:1;
        grid-column-end:3;
    }
    .advertisement{
        grid-column-start:1;
        grid-column-end:5;
        margin-left:50px;
        margin-top:30px;
    }
    `}/>
    <Container>
        {data.items.map((item,i)=>{
                 const post=state.source[item.type][item.id];
                 const attachment=state.source.attachment[post.featured_media];
                 const author=state.source.author[post.author]
                 const category=state.source.category[post.categories[0]];
                 const link=decodeURI(item.link).split('/');
                 const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
                 console.log('p.',link[1])
                 if(i===0){
                    return ( <Children key={i} className='header'>
                        {/* ads https://www.newspitara.com/wp-content/uploads/2021/11/corhaz3.png */}
                        
                            <Image src={attachment['source_url']}></Image>
                            <div className='content1'>
                                <p className='category'>{category.name}</p>
                                <Link href={post.link+post.id}>
                                  <h1 className='link'>{link}</h1>
                                </Link>
                                <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div> 
                        
                        </Children>)
                 }else if(i>=1 && i<=2){
                    return(<>
                    <Children key={i} >
                        <img  src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' className='image-2'/>
                        <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                        <Link href={post.link+post.id}>
                        <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'16px',width:'270px'}}>{content}</h1>
                        </Link>
                        <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                    </Children></>)
                 }
                 else if(i===4){
                    return(<>
                        <Children key={item.id} className='advertisement'>
                         <p style={{fontSize:'12px',marginLeft:'400px'}}>-Advertisement-</p>
                         <img src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg' style={{width:'1000px'}}/>
                        </Children>
                        <Children key={i} >
                            <img  src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' className='image-2'/>
                            <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                            <Link href={post.link+post.id}>
                             <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'16px',width:'270px'}}>{content}</h1>
                            </Link>
                            <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                        </Children>
                    </>)
                 }
                  else if(i>4 && i<=7){
                     return(                        <Children key={i} >
                         <img  src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' className='image-2'/>
                         <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                         <Link href={post.link}>
                         <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'16px',width:'270px'}}>{link}</h1>
                         </Link>
                         <p className='author'>{author ? author.name :''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                     </Children>)
                }
                else{
                    return;
                 }

        })

        }
    </Container>
   </>)
}
export default connect(HomeList)

const Container=styled.div`
position:relative;
left:230px;
top:80px;
overflow:hidden;
width:1180px;
height:auto;
display:grid;
grid-template-columns:auto auto auto auto;
grid-template-rows:auto auto auto;
grid-gap:15px;
`
const Children=styled.div`
overflow-wrap: break-word;
overflow: hidden;
`
const Image=styled.img`
width:500px;
filter: brightness(80%);
height:300px;
overflow:hidden;
&:hover{
    transform:scale(1.1);
    cursor:pointer;
}
`