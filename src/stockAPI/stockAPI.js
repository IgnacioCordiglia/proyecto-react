const data = [
    {
        id: 1,
        title: "Remera Alfa Romeo",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/2022-scaled.jpg",
        price: 3000,
        detail: "Remera estampada Alfa Romeo 2022",
        stock: 10,
        category: "Remera",
        team: "Alfa Romeo",     
    },

    {
        id: 2,
        title: "Remera Alpha Tauri",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2021/10/REPLICA-1-scaled.jpg",
        price: 3000,
        detail: "Remera estampada Alpha Tauri 2022",
        stock: 10,
        cateogory: "Remera",
        team: "Alpha Tauri",     
    },

    {
        id: 3,
        title: "Remera Alpine",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/azul-marino-scaled.jpg",
        price: 3000,
        detail: "Remera estampada Alpine 2022",
        stock: 10,
        category: "Remera",
        team: "Alpine",     
    },

    {
        id: 4,
        title: "Remera Ferrari",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2021/09/REMERA-FERRARI-3-scaled.jpg",
        price: 3000,
        detail: "Remera estampada Ferrari 2022",
        stock: 10,
        category: "Remera",
        team: "Ferrari",     
    },

    {
        id: 5,
        title: "Remera Aston Martin",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/aston-martin-2022.jpg",
        price: 3000,
        detail: "Remera estampada Aston Martin 2022",
        stock: 10,
        category: "Remera",
        team: "Aston Martin",     
    },

    {
        id: 6,
        title: "Remera McLaren",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/mc-laren-2022.jpg",
        price: 3000,
        detail: "Remera estampada McLaren 2022",
        stock: 10,
        category: "Remera",
        team: "McLaren",     
    },

    {
        id: 7,
        title: "Remera Mercedes",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/mercedes-2022.jpg",
        price: 3000,
        detail: "Remera estampada Mercedes 2022",
        stock: 10,
        category: "Remera",
        team: "Mercedes",     
    },

    {
        id: 8,
        title: "Remera Red Bull",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/redbull-2022.jpg",
        price: 3000,
        detail: "Remera estampada Red Bull 2022",
        stock: 10,
        category: "Remera",
        team: "Red Bull",     
    },
    
    {
        id: 9,
        title: "Gorra Ferrari Amarilla",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/5282c2b10163e8ba8cda83e29106eff98f75f640e928869c6ad3f4b7d859e8e177480.jpeg",
        price: 2000,
        detail: "Gorra Ferrari Amarilla MD10",
        stock: 10,
        category: "Gorra",
        team: "Ferrari",     
    },

    {
        id: 10,
        title: "Gorra Ferrari",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/6c56d797d24cc9b478d2d0ce6e55c2cbb0c920b584c9f1a1b3d7a84324717b3077480.jpeg",
        price: 2000,
        detail: "Gorra Ferrari roja MD1",
        stock: 10,
        category: "Gorra",
        team: "Ferrari",     
    },

    {
        id: 11,
        title: "Gorra Red Bull 33",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/06/14.jpg",
        price: 2000,
        detail: "Gorra Red Bull - Verstappen 33",
        stock: 10,
        category: "Gorra",
        team: "Red Bull",     
    },

    {
        id: 12,
        title: "Gorra Red Bull Negra",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/06/16b.jpg",
        price: 2000,
        detail: "Gorra Red Bull negra MD4",
        stock: 10,
        category: "Gorra",
        team: "Red Bull",     
    },

    {
        id: 13,
        title: "Gorra Mercedes 44",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/06/15.jpg",
        price: 2000,
        detail: "Gorra Mercedes - Hamilton 44",
        stock: 10,
        category: "Gorra",
        team: "Mercedes",     
    },

    {
        id: 14,
        title: "Gorra Mercedes Negra",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/1e1538455d410bf0e75788fd447e7d8344a56646040e1108c5f716818df6fe7777480.jpeg",
        price: 2000,
        detail: "Gorra Mercedes Negra M6",
        stock: 10,
        category: "Gorra",
        team: "Mercedes",     
    },

    {
        id: 15,
        title: "Buzo Ferrari 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/04/17fabc4c-7cfc-410f-a117-5c53ac9c9b2a.jpg",
        price: 6500,
        detail: "Buzo Ferrari 2022",
        stock: 10,
        category: "Buzo",
        team: "Ferrari",     
    },

    {
        id: 13,
        title: "Buzo Mercedes 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/05/ece16c49-995c-4e40-877c-ae0d9088cd4d.jpg",
        price: 6500,
        detail: "Buzo canguro Mercedes 2022",
        stock: 10,
        category: "Buzo",
        team: "Mercedes",     
    },

    {
        id: 14,
        title: "Buzo Red Bull 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/04/7f84e3d2-6aa8-4e9a-b934-310954f366a4.jpg",
        price: 6500,
        detail: "Buzo canguro Red Bull 2022",
        stock: 10,
        category: "Buzo",
        team: "Red Bull",     
    },

];


export function getBestSellers() {
    let bestSellers = data.filter(function(x) { return x.id <33});
    return new Promise((resolve) => {
        setTimeout(()=> resolve(bestSellers),1500);
    });
}

export function getCategory(category) {
    let categoryList = data.filter(function(x) { return x.category === category});
    return new Promise((resolve) => {
        setTimeout(()=> resolve(categoryList),1500);
    });
}


export function getItems() {
    return new Promise((resolve) => {
        setTimeout(()=> resolve(data),1500);
    });
}
