const settings = {
  "name": "newspitara",
  "state": {
    "frontity": {
      "url": "https://www.newspitara.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name:'jsnation-theme',
      theme: {
        menu:[] ,
      //   isMenuOpen: false,
      //   featuredImage: {
      //     showOnList: true,
      //     showOnPost: false
      //   }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.newspitara.com",
          "head_tags": [
            {
              "tag": "title",
              "content": "Hello world! - My Site"
            },
            {
              "tag": "meta",
              "attributes": {
                "name": "robots",
                "content": "width=device-width; initial-scale=1.0"
              }
            },
            {
              "tag": "link",
              "attributes": {
                "rel": "canonical",
                "href": "<http://mysite.com/hello-world/>"
              }
            }
          ],
          // ,
          "news": "/category/news",
          "fashion":"/category/fashion",
          'recipes':'/category/news/recipes',
          'travel':'category/news/travel',
          'video':'category/news/video',
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
