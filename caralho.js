var vm = function () {
    var self = this;
    self.farmers = ko.observableArray([]);
    // Replace this data with your actual farmer data
    self.farmers = fazendas = [
      {
          "name": "Eva Greenfield",
          "photo": "https://img.freepik.com/premium-photo/agriculture-farmer-background_519183-4463.jpg",
          "products": [
              {"name": "Maçãs", "price": 2.5, "quantity": "alqueires", "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/280px-Red_Apple.jpg"},
              {"name": "Tomates", "price": 3.0, "quantity": "quilos", "photo": "https://tomatesdooeste.pt/images/tomate2.png"},
              {"name": "Morangos", "price": 4.0, "quantity": "cestos", "photo": "https://fruteveg.pt/cdn/shop/products/morango_grande.jpg?v=1614794190"},
              {"name": "Cenouras", "price": 1.5, "quantity": "molhos", "photo": "https://pecadefruta.com/wp-content/uploads/2020/10/Cenoura-1.jpg"},
              {"name": "Batatas", "price": 2.0, "quantity": "quilos", "photo": "https://www.liderfrutas.com/images/products/411558117924.jpg"}
          ],
          "location": "Green Valley",
          "specialty": "Agricultura Orgânica Certificada",
          "approved": "aprovado"
      },
      {
          "name": "Oliver Sunflower",
          "photo": "https://th.bing.com/th/id/OIP.mpAeM6DNRm9I9I7IBtGyBgHaE8?w=612&h=408&rs=1&pid=ImgDetMain",
          "products": [
              {"name": "Morangos", "price": 4.0, "quantity": "cestos", "photo": "https://fruteveg.pt/cdn/shop/products/morango_grande.jpg?v=1614794190"},
              {"name": "Abóboras", "price": 1.8, "quantity": "cada", "photo": "https://www.nfrutas.com/cdn/shop/products/abobora_18990_l.jpg?v=1589479591"},
              {"name": "Melões", "price": 3.5, "quantity": "cada", "photo": "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/6510bf60175e9443f373de7c96877a52.jpg"},
              {"name": "Milho", "price": 2.0, "quantity": "espigas", "photo": "https://nutrinews.com/wp-content/uploads/2020/10/milho-aves.jpg"},
              {"name": "Cenouras", "price": 1.5, "quantity": "molhos", "photo": "https://pecadefruta.com/wp-content/uploads/2020/10/Cenoura-1.jpg"},
              {"name": "Batatas", "price": 2.0, "quantity": "quilos", "photo": "https://www.liderfrutas.com/images/products/411558117924.jpg"}
          ],
          "location": "Sunny Acres",
          "specialty": "Apicultura e Abóboras",
          "approved": "aprovado"
      },
      {
          "name": "Grace Vineyard",
          "photo": "https://th.bing.com/th/id/OIP.IijlI6jYTodzJIDERtOUXAHaFj?w=1024&h=768&rs=1&pid=ImgDetMain",
          "products": [
              {"name": "Uvas Chardonnay", "price": 8.0, "quantity": "caixotes", "photo": "https://revistaadega.uol.com.br/media/chardonnay_franca.png"},
              {"name": "Uvas Merlot", "price": 7.5, "quantity": "caixotes", "photo": "https://cdn.dooca.store/624/posts/merlot.jpg"},
              {"name": "Uvas Cabernet Sauvignon", "price": 9.0, "quantity": "caixotes", "photo": "https://revistaadega.uol.com.br/media/uploads/cabernet-sauvignon-03_medium.jpg"},
              {"name": "Uvas de Mesa", "price": 6.0, "quantity": "molhos", "photo": "https://m.planfor.pt/Donnees_Site/Produit/Images/7834/videira-de-uva-de-mesa-rosa_PT_500_0023324.jpg"},
              {"name": "Barris de Vinho", "price": 12.0, "quantity": "cada", "photo": "https://lojadosbarris.com/imagens/produtos/big_1588082761.jpg"},
              {"name": "Batatas", "price": 2.0, "quantity": "quilos", "photo": "https://www.liderfrutas.com/images/products/411558117924.jpg"}
          ],
          "location": "Vineyard Hills",
          "specialty": "Uvas de Vinho Premium",
          "approved": "aprovado"
      },
      {
          "name": "Sammy Greensmith",
          "photo": "https://th.bing.com/th/id/OIP.KjM6dnHodWEJQmmfJw5OqQHaE7?rs=1&pid=ImgDetMain",
          "products": [
              {"name": "Espinafre Orgânico", "price": 2.0, "quantity": "feixes", "photo": "https://assets.vtex.app/unsafe/1020x930/center/middle/https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F22855732%2Fespinafre-organico-direto-da-serra-unidade-1.jpg%3Fv%3D1775747533"},
              {"name": "Couve", "price": 1.5, "quantity": "molhos", "photo": "https://cdn.awsli.com.br/600x450/1304/1304130/produto/51576994/67281a95eb.jpg"},
              {"name": "Alface", "price": 2.0, "quantity": "cabeças", "photo": "https://frutlove.com/cdn/shop/products/alface-frisada_1024x.jpg?v=1618241010"},
              {"name": "Rabanetes", "price": 1.2, "quantity": "molhos", "photo": "https://agriloja.pt/wp-content/uploads/2023/04/6-passos-para-cultivar-os-seus-rabanetes-agriloja-2.jpg"},
              {"name": "Pepinos", "price": 1.8, "quantity": "cada", "photo": "https://www.infoescola.com/wp-content/uploads/2010/08/pepino_769056490.jpg"},
              {"name": "Batatas", "price": 2.0, "quantity": "quilos", "photo": "https://www.liderfrutas.com/images/products/411558117924.jpg"}
          ],
          "location": "Greenside Farm",
          "specialty": "Folhas Verdes Frescas",
          "approved": "não aprovado"
      },
      {
          "name": "Miguel Citrus",
          "photo": "https://asa.crs.org/wp-content/uploads/2019/10/1-1024x682.jpg",
          "products": [
              {"name": "Laranjas", "price": 4.0, "quantity": "dúzias", "photo": "https://alimentacaosaudavel.dgs.pt/activeapp2020/wp-content/uploads/2015/09/laranja.png"},
              {"name": "Limões", "price": 3.5, "quantity": "dúzias", "photo": "https://www.agroportal.pt/wp-content/uploads/2021/09/lemons-2039830_640-640x375.jpg"},
              {"name": "Toranjas", "price": 5.0, "quantity": "dúzias", "photo": "https://static.tuasaude.com/media/article/cl/eg/toranja_58200_l.jpg"},
              {"name": "Tangerinas", "price": 4.5, "quantity": "dúzias", "photo": "https://upload.wikimedia.org/wikipedia/commons/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg"},
              {"name": "Laranjas Vermelhas", "price": 6.0, "quantity": "dúzias", "photo": "https://nutritotal.com.br/pro/wp-content/uploads/2021/11/Laranja-destacada.png"}
          ],
          "location": "Citrus Grove",
          "specialty": "Frutas Cítricas",
          "approved": "aprovado"
      },
  ];
      

    self.search = ko.observable('');

    self.filteredFarmers = ko.computed(function () {
        var searchTerm = self.search().toLowerCase().trim();

        if (!searchTerm) {
            return self.farmers;
        }

        return self.farmers.filter(function (farmer) {
            // Filter farmers based on the search term
            var farmerName = farmer.name.toLowerCase();
            var products = farmer.products.map(function (product) {
                return product.name.toLowerCase();
            });

            return farmerName.includes(searchTerm) || products.includes(searchTerm);
        });
    });


    console.log("Farmers Data:", self.farmers);
    // Other parts of your ViewModel...
    // You may need to update the search function accordingly
    self.searchFarmers = function () {
        // Handle search logic based on the filteredFarmers
        console.log("Searched Farmers:", self.filteredFarmers());
        // ... (Other logic)
    };

    // Other functions and properties...
};

// Apply bindings when the document is ready
$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
