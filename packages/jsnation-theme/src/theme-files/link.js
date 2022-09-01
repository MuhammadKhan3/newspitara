import React from 'react'
import {connect} from 'frontity'

const Link=({href,actions,children,color})=>{

return (
<div style={{display:'inline'}}>
    <a href={href}
    onClick={(e)=>{
        e.preventDefault();
        actions.router.set(href);
        // window.location.reload();
    }}
    style={{textDecoration:'none',color:color ? color : 'black',margin:'0px',width:'0px',height:'0px',padding:'0px'}}
    >
        {children}
    </a>

</div>)
}
export default connect(Link);