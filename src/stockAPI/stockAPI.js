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
        title: "Gorra Ferrari",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/6c56d797d24cc9b478d2d0ce6e55c2cbb0c920b584c9f1a1b3d7a84324717b3077480.jpeg",
        price: 2000,
        detail: "Gorra Ferrari",
        stock: 10,
        category: "Gorra",
        team: "Ferrari",     
    },

    {
        id: 6,
        title: "Gorra Red Bull 33",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/06/14.jpg",
        price: 2000,
        detail: "Gorra Red Bull - Verstappen 33",
        stock: 10,
        category: "Gorra",
        team: "Red Bull",     
    },

    {
        id: 7,
        title: "Buzo Mercedes 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/05/ece16c49-995c-4e40-877c-ae0d9088cd4d.jpg",
        price: 6500,
        detail: "Buzo canguro Mercedes 2022",
        stock: 10,
        category: "Buzo",
        team: "Mercedes",     
    },

    {
        id: 8,
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
    let bestSellers = data.filter(function(x) { return x.id < 5});
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
