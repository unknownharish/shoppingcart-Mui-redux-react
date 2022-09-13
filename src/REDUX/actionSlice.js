import { createSlice, current } from '@reduxjs/toolkit'

let initstate = {

    products: [
        { image: 'https://ugosports.co.uk/wp-content/uploads/2021/01/Adidas-hoodie-mens-grey.jpg', name: 'ugosports', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'M', type: 'hoodie' },
        { image: 'https://cdn.cliqueinc.com/posts/275162/best-brown-leather-pants-275162-1576277836380-main.1080x0c.jpg?interlace=true&quality=70', name: 'leather-pants', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'L', type: 'pant' },
        { image: 'https://n4.sdlcdn.com/imgs/i/k/d/Indian-Terrain-100-Percent-Cotton-SDL317035510-1-e3777.jpg', name: 'Cotton T-shirt', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'S', type: 'T-shirt' },
        { image: 'https://www.hiboox.com/wp-content/uploads/2020/10/red-shirt.jpg', name: 'Wardobe', color: 'mehroon', stock: 'in stock', price: 150, qty: 1, size: 'M', type: 'T-shirt' },
        { image: 'https://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-jd12-t-shirt-red-t-shirts.jpg', name: 'mens-nike-jd12-t-shirt', color: 'red', stock: 'in stock', price: 200, qty: 1, size: 'L', type: 'T-shirt' },
        { image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4026ef0cc7c4844b9d335306aa30fe5c/b7699336-c9fd-4d9c-8724-fb7e4daa7f06.jpg', name: 'Raiders', color: 'black', stock: 'in stock', price: 140, qty: 1, size: 'L', type: 'hoodie' },
        { image: 'https://waliicorners.com/wp-content/uploads/2019/11/SingleRoad-Streetwear-Hoodies-Men-2019-Patchwork-Hoodies-Hip-Hop-Pullover-Mens-Fashion-Male-Tops-Hoodie-Men.jpg', name: 'SingleRoad', color: 'yellow', stock: 'in stock', price: 250, qty: 1, size: 'M', type: 'hoodie' },
        { image: 'https://cdnc.lystit.com/photos/2012/04/14/carhartt-green-carhartt-aviation-pant-product-1-3252414-997321064.jpeg', name: 'carhartt-green', color: 'grey', stock: 'in stock', price: 180, qty: 1, size: 'M', type: 'pant' },
        { image: 'https://content.backcountry.com/images/items/1200/MAM/MAMU53L/MAR_D2.jpg', name: 'Mamut-skytree', color: 'blue', stock: 'in stock', price: 160, qty: 1, size: 'S', type: 'pant' },
    ],
    condition: [
        { image: 'https://ugosports.co.uk/wp-content/uploads/2021/01/Adidas-hoodie-mens-grey.jpg', name: 'ugosports', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'M', type: 'hoodie' },
        { image: 'https://cdn.cliqueinc.com/posts/275162/best-brown-leather-pants-275162-1576277836380-main.1080x0c.jpg?interlace=true&quality=70', name: 'leather-pants', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'L', type: 'pant' },
        { image: 'https://n4.sdlcdn.com/imgs/i/k/d/Indian-Terrain-100-Percent-Cotton-SDL317035510-1-e3777.jpg', name: 'Cotton T-shirt', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'S', type: 'T-shirt' },
        { image: 'https://www.hiboox.com/wp-content/uploads/2020/10/red-shirt.jpg', name: 'Wardobe', color: 'mehroon', stock: 'in stock', price: 150, qty: 1, size: 'M', type: 'T-shirt' },
        { image: 'https://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-jd12-t-shirt-red-t-shirts.jpg', name: 'mens-nike-jd12-t-shirt', color: 'red', stock: 'in stock', price: 200, qty: 1, size: 'L', type: 'T-shirt' },
        { image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4026ef0cc7c4844b9d335306aa30fe5c/b7699336-c9fd-4d9c-8724-fb7e4daa7f06.jpg', name: 'Raiders', color: 'black', stock: 'in stock', price: 140, qty: 1, size: 'L', type: 'hoodie' },
        { image: 'https://waliicorners.com/wp-content/uploads/2019/11/SingleRoad-Streetwear-Hoodies-Men-2019-Patchwork-Hoodies-Hip-Hop-Pullover-Mens-Fashion-Male-Tops-Hoodie-Men.jpg', name: 'SingleRoad', color: 'yellow', stock: 'in stock', price: 250, qty: 1, size: 'M', type: 'hoodie' },
        { image: 'https://cdnc.lystit.com/photos/2012/04/14/carhartt-green-carhartt-aviation-pant-product-1-3252414-997321064.jpeg', name: 'carhartt-green', color: 'grey', stock: 'in stock', price: 180, qty: 1, size: 'M', type: 'pant' },
        { image: 'https://content.backcountry.com/images/items/1200/MAM/MAMU53L/MAR_D2.jpg', name: 'Mamut-skytree', color: 'blue', stock: 'in stock', price: 160, qty: 1, size: 'S', type: 'pant' },
    ],

    mycart: [],
    price: 0

}


const myReducer = createSlice({
    name: 'cart',
    initialState: initstate,
    reducers: {

        filterByName: (state, action) => {
            state.condition = state.products.filter((arrow) => arrow.type === action.payload);

            // console.log(name)
        },

        filterBySize: (state, action) => {

            // if (state.condition.length == 0) {

            // }
            // else {

            //     state.condition = state.condition.filter((arrow) => arrow.size === action.payload);
            // }
            state.condition = state.products.filter((item) => item.size === action.payload);

        },

        filterByKeyword: (state, action) => {

            // state.condition = state.products.filter((arrow) => arrow.size === action.payload);
            let newc = state.condition.filter((arrow) => {


                let searchstr = action.payload.toLowerCase();
                let itemname = arrow.name.toLowerCase();

                if (itemname.includes(searchstr)) {
                    return arrow
                }

            });

            // console.log(newc)
            state.condition = newc

        },

        addToCart: (state, action) => {

            let totalPrice = 0;
            const incart = state.mycart.find(item => item.name === action.payload.name ? true : false)
            if (incart) {


                state.mycart = state.mycart.map(item => {


                    if (item.name == action.payload.name) {
                        item.qty = parseInt(action.payload.qty)    //adjust qty
                        totalPrice += item.qty * item.price
                        return item                       // add to cart
                    }
                    else {
                        totalPrice += item.qty * item.price  // calculate price
                        return item
                    }
                })


            } else {
                state.mycart = [action.payload, ...state.mycart]   // add to cart
                state.mycart.map(item => totalPrice += item.qty * item.price)   // calculate price

            }

            state.price = totalPrice
        },

        removeFromCart: (state, action) => {
            let totalPrice = 0;


            state.mycart = state.mycart.filter((item) => item.name !== action.payload.name);
            state.mycart.map(item => totalPrice += item.qty * item.price)   // calculate price
            state.price = totalPrice


        },

        reset: (state, action) => {
            state.condition = [
                { image: 'https://ugosports.co.uk/wp-content/uploads/2021/01/Adidas-hoodie-mens-grey.jpg', name: 'ugosports', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'M', type: 'hoodie' },
                { image: 'https://cdn.cliqueinc.com/posts/275162/best-brown-leather-pants-275162-1576277836380-main.1080x0c.jpg?interlace=true&quality=70', name: 'leather-pants', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'L', type: 'pant' },
                { image: 'https://n4.sdlcdn.com/imgs/i/k/d/Indian-Terrain-100-Percent-Cotton-SDL317035510-1-e3777.jpg', name: 'Cotton T-shirt', color: 'black', stock: 'in stock', price: 30, qty: 1, size: 'S', type: 'T-shirt' },
                { image: 'https://www.hiboox.com/wp-content/uploads/2020/10/red-shirt.jpg', name: 'Wardobe', color: 'mehroon', stock: 'in stock', price: 150, qty: 1, size: 'M', type: 'T-shirt' },
                { image: 'https://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-jd12-t-shirt-red-t-shirts.jpg', name: 'mens-nike-jd12-t-shirt', color: 'red', stock: 'in stock', price: 200, qty: 1, size: 'L', type: 'T-shirt' },
                { image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4026ef0cc7c4844b9d335306aa30fe5c/b7699336-c9fd-4d9c-8724-fb7e4daa7f06.jpg', name: 'Raiders', color: 'black', stock: 'in stock', price: 140, qty: 1, size: 'L', type: 'hoodie' },
                { image: 'https://waliicorners.com/wp-content/uploads/2019/11/SingleRoad-Streetwear-Hoodies-Men-2019-Patchwork-Hoodies-Hip-Hop-Pullover-Mens-Fashion-Male-Tops-Hoodie-Men.jpg', name: 'SingleRoad', color: 'yellow', stock: 'in stock', price: 250, qty: 1, size: 'M', type: 'hoodie' },
                { image: 'https://cdnc.lystit.com/photos/2012/04/14/carhartt-green-carhartt-aviation-pant-product-1-3252414-997321064.jpeg', name: 'carhartt-green', color: 'grey', stock: 'in stock', price: 180, qty: 1, size: 'M', type: 'pant' },
                { image: 'https://content.backcountry.com/images/items/1200/MAM/MAMU53L/MAR_D2.jpg', name: 'Mamut-skytree', color: 'blue', stock: 'in stock', price: 160, qty: 1, size: 'S', type: 'pant' },
            ];

            state.price = 0;
            // state.mycart = [];
        }
    },
})


export const { filterByName, filterBySize, filterByKeyword, addToCart, removeFromCart, reset } = myReducer.actions

export default myReducer.reducer

