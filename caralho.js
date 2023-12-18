var vm = function () {
    var self = this;
    self.farmers = ko.observableArray([]);
    self.uniqueProducts = ko.observableArray([]);
    self.currentLayout = ko.observable('layout1');
    self.all_products = ko.observableArray([
      {"name": "Maçãs", "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/280px-Red_Apple.jpg"},
      {"name": "Tomates", "link": "https://tomatesdooeste.pt/images/tomate2.png"},
      {"name": "Morangos", "link": "https://fruteveg.pt/cdn/shop/products/morango_grande.jpg?v=1614794190"},
      {"name": "Cenouras", "link": "https://pecadefruta.com/wp-content/uploads/2020/10/Cenoura-1.jpg"},
      {"name": "Batatas", "link": "https://www.liderfrutas.com/images/products/411558117924.jpg"},
      {"name": "Abóboras", "link": "https://www.nfrutas.com/cdn/shop/products/abobora_18990_l.jpg?v=1589479591"},
      {"name": "Melões", "link": "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/6510bf60175e9443f373de7c96877a52.jpg"},
      {"name": "Milho", "link": "https://nutrinews.com/wp-content/uploads/2020/10/milho-aves.jpg"},
      {"name": "Uvas Chardonnay", "link": "https://revistaadega.uol.com.br/media/chardonnay_franca.png"},
      {"name": "Uvas Merlot", "link": "https://cdn.dooca.store/624/posts/merlot.jpg"},
      {"name": "Uvas Cabernet Sauvignon", "link": "https://revistaadega.uol.com.br/media/uploads/cabernet-sauvignon-03_medium.jpg"},
      {"name": "Uvas de Mesa", "link": "https://m.planfor.pt/Donnees_Site/Produit/Images/7834/videira-de-uva-de-mesa-rosa_PT_500_0023324.jpg"},
      {"name": "Barris de Vinho", "link": "https://lojadosbarris.com/imagens/produtos/big_1588082761.jpg"},
      {"name": "Espinafre Orgânico", "link": "https://assets.vtex.app/unsafe/1020x930/center/middle/https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F22855732%2Fespinafre-organico-direto-da-serra-unidade-1.jpg%3Fv%3D1775747533"},
      {"name": "Couve", "link": "https://cdn.awsli.com.br/600x450/1304/1304130/produto/51576994/67281a95eb.jpg"},
      {"name": "Alface", "link": "https://th.bing.com/th/id/OIP.ccW3KlOsX6z5RCA4BC3aAQAAAA?rs=1&pid=ImgDetMain"},
    ]);
    // Replace this data with your actual farmer data
    self.farmers = [
      {
        "name": "Eva Greenfield",
        "photo": "https://img.freepik.com/premium-photo/agriculture-farmer-background_519183-4463.jpg",
        "products": [
          {
            "name": "Maçãs",
            "price": 2.5,
            "quantity": "alqueires"
          },
          {
            "name": "Tomates",
            "price": 3.0,
            "quantity": "quilos"
          },
          {
            "name": "Morangos",
            "price": 4.0,
            "quantity": "cestos"
          },
          {
            "name": "Cenouras",
            "price": 1.5,
            "quantity": "molhos"
          },
          {
            "name": "Batatas",
            "price": 2.0,
            "quantity": "quilos"
          }
        ],
        "location": "Green Valley",
        "specialty": "Agricultura Orgânica Certificada",
        "approved": "aprovado"
      },
      {
        "name": "Oliver Sunflower",
        "photo": "https://th.bing.com/th/id/OIP.mpAeM6DNRm9I9I7IBtGyBgHaE8?w=612&h=408&rs=1&pid=ImgDetMain",
        "products": [
          {
            "name": "Morangos",
            "price": 4.0,
            "quantity": "cestos"
          },
          {
            "name": "Abóboras",
            "price": 1.8,
            "quantity": "cada"
          },
          {
            "name": "Melões",
            "price": 3.5,
            "quantity": "cada"
          },
          {
            "name": "Milho",
            "price": 2.0,
            "quantity": "espigas"
          },
          {
            "name": "Cenouras",
            "price": 1.5,
            "quantity": "molhos"
          }
        ],
        "location": "Sunny Acres",
        "specialty": "Apicultura e Abóboras",
        "approved": "aprovado"
      },
      {
        "name": "Grace Vineyard",
        "photo": "https://th.bing.com/th/id/OIP.IijlI6jYTodzJIDERtOUXAHaFj?w=1024&h=768&rs=1&pid=ImgDetMain",
        "products": [
          {
            "name": "Uvas Chardonnay",
            "price": 8.0,
            "quantity": "caixotes"
          },
          {
            "name": "Uvas Merlot",
            "price": 7.5,
            "quantity": "caixotes"
          },
          {
            "name": "Uvas Cabernet Sauvignon",
            "price": 9.0,
            "quantity": "caixotes"
          },
          {
            "name": "Uvas de Mesa",
            "price": 6.0,
            "quantity": "molhos"
          },
          {
            "name": "Barris de Vinho",
            "price": 12.0,
            "quantity": "cada"
          }
        ],
        "location": "Vineyard Hills",
        "specialty": "Uvas de Vinho Premium",
        "approved": "aprovado"
      },
      {
        "name": "Sammy Greensmith",
        "photo": "https://th.bing.com/th/id/OIP.KjM6dnHodWEJQmmfJw5OqQHaE7?rs=1&pid=ImgDetMain",
        "products": [
          {
            "name": "Espinafre Orgânico",
            "price": 2.0,
            "quantity": "feixes"
          },
          {
            "name": "Couve",
            "price": 1.5,
            "quantity": "molhos"
          },
          {
            "name": "Alface",
            "price": 2.0,
            "quantity": "cabeças"
          },
          {
            "name": "Rabanetes",
            "price": 1.2,
            "quantity": "molhos"
          },
          {
            "name": "Pepinos",
            "price": 1.8,
            "quantity": "cada"
          }
        ],
        "location": "Greenside Farm",
        "specialty": "Folhas Verdes Frescas",
        "approved": "não aprovado"
      },
      {
        "name": "Miguel Citrus",
        "photo": "https://asa.crs.org/wp-content/uploads/2019/10/1-1024x682.jpg",
        "products": [
          {
            "name": "Laranjas",
            "price": 4.0,
            "quantity": "dúzias"
          },
          {
            "name": "Limões",
            "price": 3.5,
            "quantity": "dúzias"
          },
          {
            "name": "Toranjas",
            "price": 5.0,
            "quantity": "dúzias"
          },
          {
            "name": "Tangerinas",
            "price": 4.5,
            "quantity": "dúzias"
          },
          {
            "name": "Laranjas Vermelhas",
            "price": 6.0,
            "quantity": "dúzias"
          }
        ],
        "location": "Citrus Grove",
        "specialty": "Frutas Cítricas",
        "approved": "aprovado"
      },
      {
        "name": "Isabella Blossom",
        "photo": "https://blogdomax.net/uploads/2019/05/20/15/posts/10614.jpg",
        "products": [
          {
            "name": "Lavanda",
            "price": 2.5,
            "quantity": "feixes"
          },
          {
            "name": "Margaridas",
            "price": 3.0,
            "quantity": "bouquets"
          },
          {
            "name": "Tulipas",
            "price": 4.0,
            "quantity": "bouquets"
          },
          {
            "name": "Cravos",
            "price": 3.5,
            "quantity": "bouquets"
          },
          {
            "name": "Lavanda",
            "price": 2.5,
            "quantity": "feixes"
          }
        ],
        "location": "Floral Fields",
        "specialty": "Arranjos Florais Artesanais",
        "approved": "aprovado"
      }
    ];


    console.log("Farmers Data:", self.farmers);
    // Other parts of your ViewModel...
    // You may need to update the search function accordingly
    self.searchFarmers = function () {
        // Handle search logic based on the filteredFarmers
        console.log("Searched Farmers:", self.filteredFarmers());
        // ... (Other logic)
    };


    var allProducts = [];
    var uniqueProducts = new Set();
    
    self.farmers.forEach(function(farmer) {
       farmer.products.forEach(function(product) {
           if (!uniqueProducts.has(product.name)) {
               allProducts.push(product);
               uniqueProducts.add(product.name);
           }
       });
    });

    console.log(uniqueProducts)

    // Other functions and properties...
};


var viewModel = new vm();
viewModel.currentLayout = ko.observable('layout1');


// Apply bindings when the document is ready
$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
