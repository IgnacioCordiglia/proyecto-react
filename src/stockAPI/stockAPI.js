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
        category: "Remera",
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
        title: "Rem. Aston Martin",
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
        title: "Gorra Ferrari 75 años",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/5282c2b10163e8ba8cda83e29106eff98f75f640e928869c6ad3f4b7d859e8e177480.jpeg",
        price: 2000,
        detail: "Gorra Ferrari Amarilla y Negra MD10",
        stock: 10,
        category: "Gorra",
        team: "Ferrari",     
    },

    {
        id: 10,
        title: "Gorra Ferrari Roja",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/6c56d797d24cc9b478d2d0ce6e55c2cbb0c920b584c9f1a1b3d7a84324717b3077480.jpeg",
        price: 2000,
        detail: "Gorra Ferrari Roja y Negra MD1 2022",
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
        detail: "Gorra Red Bull Negra y Azul MD4",
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
        title: "Gorra Mercedes",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/1e1538455d410bf0e75788fd447e7d8344a56646040e1108c5f716818df6fe7777480.jpeg",
        price: 2000,
        detail: "Gorra Mercedes Negra y Blanca M6",
        stock: 10,
        category: "Gorra",
        team: "Mercedes",     
    },

    {
        id: 15,
        title: "Buzo Ferrari 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/04/17fabc4c-7cfc-410f-a117-5c53ac9c9b2a.jpg",
        price: 6500,
        detail: "Buzo Canguro Rojo Ferrari 2022",
        stock: 10,
        category: "Buzo",
        team: "Ferrari",     
    },

    {
        id: 16,
        title: "Buzo Mercedes 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/05/ece16c49-995c-4e40-877c-ae0d9088cd4d.jpg",
        price: 6500,
        detail: "Buzo Canguro Negro Mercedes 2022",
        stock: 10,
        category: "Buzo",
        team: "Mercedes",     
    },

    {
        id: 17,
        title: "Buzo Red Bull 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/04/7f84e3d2-6aa8-4e9a-b934-310954f366a4.jpg",
        price: 6500,
        detail: "Buzo canguro Red Bull 2022",
        stock: 10,
        category: "Buzo",
        team: "Red Bull",     
    },

    {
        id: 18,
        title: "Chomba Haas 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-25-at-8.56.13-PM.jpeg",
        price: 5000,
        detail: "Chomba Azul Estampada Haas 2022",
        stock: 10,
        category: "Remera",
        team: "Haas",     
    },

    {
        id: 19,
        title: "Remera Williams 2022",
        img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/07/453fdb2e-b833-4ca0-8043-bf191290ac78.jpg",
        price: 3000,
        detail: "Chomba Azul Estampada Williams 2022",
        stock: 10,
        category: "Remera",
        team: "Williams",     
    },

];


export function getBestSellers() {
    let bestSellers = data.filter(function(x) { return x.id <5});
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

export function getTeam(team) {
    let teamList = data.filter(function(x) {return x.team === team});
    return new Promise((resolve) => {
        setTimeout(()=> resolve(teamList),1500);
    });
}


export function getItems() {
    return new Promise((resolve) => {
        setTimeout(()=> resolve(data),1500);
    });
}

export function getItemById(idParams) {
    return new Promise((resolve, reject) => {
      let item = data.find((item) => {
        return item.id === Number(idParams);
      });
      setTimeout(() => {
        if (item === undefined)
          reject(new Error("No se pudo encontrar el item."));
        else {
          resolve(item);
        }
      }, 1500);
    });
  }