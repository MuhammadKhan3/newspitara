import React from 'react'
import { connect,styled,css,Global,Head } from 'frontity';
import Switch from "@frontity/components/switch";
import Link from './link';
import Header from './header';
import HeaderText from './headerText';
import Home from './home';
import News from './news';
import FashionPage from './fashionPage';
import WorldPage from './worldPage';
import SportPage from './sportPage';
import TechPage from './techPage';
import Photography from './photography';
import Recipes from './recipes';
import ArtPage from './artPage';
import TravelPage from './travelPage';
import HealthPage from './healthPage';
import VideoPage from './videoPage';
import PostDetail from './postDetail';
import Post from './post';
import Search from './search';
const Root = ({state}) => {
  const data = state.source.get(state.router.link);
  console.log(data)
    return (
      <>
      <Head>
        <title>New</title>
        {/* <meta name="description" content={state.frontity.description} /> */}
        <html lang="en" />
      </Head>
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
      
      <Global
      styles={css`html{
        height:100%;
        width:100%;
        margin:0;
        padding:0;
       }`}
      />
      <body style={{width:'100%',minHeight:'100vh',boxSizing:'border-box'}}>
      <Container>
       <HeaderText/>
        <Switch>
          {data.route==='/' &&<Home when={data.isHome}/>}
          {data.route==='/category/news/' &&<News when={data.isCategory}/>}
          {data.route==='/category/fashion/' && <FashionPage when={data.isCategory}/>}
          {data.route==='/category/world/' && <WorldPage when={data.isCategory}/>}
          {data.route==='/category/sport/' && <SportPage when={data.isCategory}/>}
          {data.route==='/category/tech/' && <TechPage when={data.isCategory}/>}
          {data.route==='/category/photography/' && <Photography when={data.isCategory}/>}
          {data.route==='/category/news/recipes/' && <Recipes when={data.isCategory}/>}
          {data.route==='/category/news/travel/' && <TravelPage when={data.isCategory}/>}
          {data.route==='/category/arts/' && <ArtPage when={data.isCategory}/>}
          {data.route==='/category/health/' && <HealthPage when={data.isCategory}/>}
          {data.route==='/category/news/video/' && <VideoPage when={data.isReady}/>}
          <Search when={data.isSearch}/>
          <Post when={data.isReady}/>

          {/* <Post/> */}


        </Switch>    
      </Container> 
      </body> 
      </>
    );
  };
export default connect(Root);

const Container=styled.div`
// max-width:100%;
`