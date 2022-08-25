const FashionHandler = {
    name: 'categories',

    priority: 10,

    pattern: '/category',

    func: async ({link, libraries, state}) => {
        console.log('Being handled') /*I should see this on console*/
        const response = await libraries.source.api.get({
            endpoint: '/category/fashion'
        })
        console.log('res')

        const categories = await response.json()
        console.log('link..',categories)
        Object.assign(state.source.data[link], {
           categories: categories
        })
    }
}

export default FashionHandler