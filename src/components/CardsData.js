const Cardsdata = [
     {
            id: 1,
            rname: "OnePlus Smartphone",
            imgdata: "https://images.unsplash.com/photo-1673718423582-f3378102c0d7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "Premium, Smartphones, Gadgets",
            somedata: "750 + purchases made recently",
            price: 26390,
            rating: "4.8",
            qnty: 0
        },
        {
            id: 2,
            rname: "Samsung Galaxy Smartphone",
            imgdata: "https://images.unsplash.com/photo-1721864429288-f77b22fdc9ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "Smartphones, Tablets, Accessories",
            somedata: "640 + purchases made recently",
            price: 33999,
            rating: "4.7",
            qnty: 0
        },
        {
            id: 3,
            rname: "Smartwatch",
            imgdata: "https://images.unsplash.com/photo-1696688713460-de12ac76ebc6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "Wearables, Smartwatches, Fitness Tech",
            somedata: "430 + purchases made recently",
            price: 4599,
            rating: "4.6",
            qnty: 0
        },
        {
            id: 4,
            rname: "Hp Laptop",
            imgdata: "https://images.unsplash.com/photo-1663354027456-ce6a7e07d212?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "Laptops, Desktops, Accessories",
            somedata: "580 + purchases made recently",
            price: 85980,
            rating: "4.7",
            qnty: 0
        },
        {
            id: 5,
            rname: "VR Headset",
            imgdata: "https://plus.unsplash.com/premium_photo-1665203595406-6c4d281a9a14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "VR, AR, Gaming Gear",
            somedata: "360 + purchases made recently",
            price: 4399,
            rating: "4.5",
            qnty: 0
        },
        {
            id: 6,
            rname: "Hi Alexa",
            imgdata: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "Smart Home Devices, Assistants, Security",
            somedata: "270 + purchases made recently",
            price: 4949,
            rating: "4.4",
            qnty: 0
        },
        {
            id: 7,
            rname: "HeadPhones",
            imgdata: "https://plus.unsplash.com/premium_photo-1680346528789-0ffcc13f5ebf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "Headphones, Speakers, Audio Gear",
            somedata: "490 + purchases made recently",
            price: 5998,
            rating: "4.6",
            qnty: 0
        },
        {
            id: 8,
            rname: "Sony Camera",
            imgdata: "https://images.unsplash.com/photo-1606986601547-a4d886b671b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "DSLRs, Mirrorless, Lenses",
            somedata: "310 + purchases made recently",
            price: 227999,
            rating: "4.8",
            qnty: 0
        },
        {
            id: 9,
            rname: "Black Airpods",
            imgdata: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "High-End Headphones, Speakers, Airpods",
            somedata: "495 + purchases made recently",
            price: 4599,
            rating: "4.8",
            qnty: 0
        },
        {
            id: 10,
            rname: "Marshall Speaker",
            imgdata: "https://images.unsplash.com/photo-1502556112530-246c3be76309?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "High-End Headphones, Speakers, Airpods",
            somedata: "495 + purchases made recently",
            price: 14999,
            rating: "4.8",
            qnty: 0
        },
        {
            id: 11,
            rname: "HD IPad",
            imgdata: "https://images.unsplash.com/photo-1612367990403-73ef3e67bc4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "Premium Gadgets, Smartphones, Tablets",
            somedata: "720 + purchases made recently",
            price: 30900,
            rating: "4.8",
            qnty: 0
        },
        {
            id: 12,
            rname: "Gaming Console",
            imgdata: "https://images.unsplash.com/photo-1630512633843-043c3c6da96f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address: "Gaming Consoles, VR Headsets, Accessories",
            somedata: "415 + purchases made recently",
            price: 3105,
            rating: "4.7",
            qnty: 0
        }  ,     
];

export default Cardsdata;