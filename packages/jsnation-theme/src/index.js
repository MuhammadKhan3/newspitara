import Root from './theme-files'
import NewsHandler from './handlers/newshandlers';
import FashionHandler from './handlers/fashionhandlers';
import RecipeHandler from './handlers/recipeHandler';
export default {
  name: "jsnation-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {

    }
  },
  actions: {
    theme: {
      init: ({libraries}) =>
        libraries.source.handlers.push(NewsHandler,FashionHandler),
      beforeSSR: async ({state, actions}) =>{
        console.log('ne',state.source.news)
        await actions.source.fetch('/category/news')
        await actions.source.fetch(state.source.fashion)
        await actions.source.fetch('/')

        // await actions.source.fetch('/category/news/recipes')

        // await actions.source.fetch("/menu")

        
        /*postsPage is /blog, same as the handler's pattern*/
         /*postsPage is /blog, same as the handler's pattern*/
      }
      }
  },
  libraries:{
    // source:{
    //   handlers:[{
    //     pattern:'/category/news/video',
    //     func:({state,link,params})=>{
    //       console.log('link',link)
    //       state.source.data["/category/news/video"].isReady = true;
    //     }
    //   }]
    // },
    html2react:{

    },
  },

};
