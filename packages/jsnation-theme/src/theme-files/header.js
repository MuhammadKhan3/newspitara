import React,{useState,useEffect} from 'react'
import { connect,styled,Global,css } from 'frontity'
import Link from './link'
import SubMenu from './subMenu'
import MenuCard from './menuCard'
import { device } from './device'
import SearchBox from './searchBox'

const Header = ({actions,state}) => {

    const [menustate,setmenu]=React.useState('');
    const [search,setsearch]=React.useState(false);
    const menu=[
        ["HOME", "/"],
        ["NEWS", "/category/news/"],
        ["FASHION", "/category/fashion/"],
        ["WORLD", "/category/world/"],
        ["SPORT", "/category/sport/"],
        ["TECH", "/category/tech/"],
        ["PHOTOGRAPHY", "/category/photography/"],
        

        // ["Recepies", "category/news/recipes"],
        // ["Travel","/category/news/travel"],
        // ["Arts","category/arts"],
        // ["Health","category/health"],
        // ["Video","category/news/video"],
      ];
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
      const scrollup=()=>{
          window.scrollTo({top:0,  behavior: "smooth"})
      }

      React.useEffect(async()=>{
        // await actions.source.fetch(`${/category/news/recipes}?per_page${4}`);
        // await actions.source.fetch(`${/category/news/video}?per_page${4}`);
        // await actions.source.fetch(`${/category/news/travel}?per_page${4}`);
      },[])
      const searchhandler=()=>{
        setsearch(!search);
      }
      console.log(scrollPosition)
  return (
    <>
    <Global styles={css`
     .logo{
        width:15.625rem;
        heigth:5.625rem;
        display:inline-block;
        float:left;
        margin-left:13.75rem;
        z-index:-9999;
     }
     .active{
        background-color:#4169E1;
        color:white;
     }
     .searchLogo{
        width:1.2rem;
        &:hover{
            color:blue;
            cursor:pointer;
        }
     }
     .header-2{
       position:fixed;
       top:0;
       background-color:white;
       z-index:9999;
       width:98.8rem;
       padding:5px;
       box-shadow: 0px 2px 8px #f5f5f5;
       border-bottom:1px solid white;
     }
     .menu-2{
      position:relative;
      top:1.2rem;
     }
     `}/>
    <Container> 
    <img src='   https://www.newspitara.com/wp-content/uploads/2021/11/72579877_116985066377732_1378794148236099584_n-1-e1637308004260.jpg' className='logo'/>
        <Menu>        
            {menu.map((m,i)=>{
                return <Link  key={i} href={m[1]}><List onMouseEnter={()=>{setmenu(m[0])}} className={state.router.link===m[1] ? 'active':''}> {m[0]}</List></Link>
            })}
            <More  onMouseEnter={()=>{setmenu('MORE');console.log('enter')}}>MORE</More>
            <Search onClick={searchhandler}>            
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="searchLogo bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
            </Search>
        </Menu>
    </Container>
    {scrollPosition>234 &&
    <div className='header-2'> 
        <img src='   https://www.newspitara.com/wp-content/uploads/2021/11/72579877_116985066377732_1378794148236099584_n-1-e1637308004260.jpg' className='logo'/>
        <div className='menu-2'> 
            <Menu>        
                {menu.map((m,i)=>{
                    return <Link  key={i} href={m[1]}><List onMouseEnter={()=>{setmenu(m[0])}} className={state.router.link===m[1] ? 'active':''}> {m[0]}</List></Link>
                })}
                <More  onMouseEnter={()=>{setmenu('MORE')}}>MORE</More>
                <Search onClick={searchhandler}>            
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="searchLogo bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                </Search>
            </Menu>
        </div>
    </div>
    }

    <MenuCard menus={menustate}  setmenu={setmenu}/>
    {menustate==='MORE' && <SubMenu setmenu={setmenu}/>}
    {search &&<SearchBox/>}

    </>)
}
export default connect(Header);

const Container=styled.div`
position:relative;
left:30px;
top:20px;
width:1500px;

@media ${device.laptop} {
  width:calc(1500px -600px); 
}
`

const Menu=styled.ul`
display:flex;
flex-direction:row;
list-style-type:none;
`
const List=styled.li`
margin-left:0.625rem;
font-weight: 800;
font-size:0.8125rem;
padding:0.3125rem;
&:hover {
background-color:#4169E1;
color:white;
cursor:pointer;}

@media ${device.laptop} {
  font-size:0.6rem;
}
`
const More=styled.li`
margin-left:20px;
font-weight: 800;
font-size:0.8125rem;
padding:0.3125rem;
background-color:#4169E1;
color:white;
&:hover {
    cursor:pointer;
}
@media ${device.laptop} {
  font-size:0.6rem;
}
`
const Search=styled.div`
// position:relative;
// top:10px;
// display:block
margin-left:15.625rem;
@media ${device.laptop} {
  margin-left:(100% - 100px);
}
`

