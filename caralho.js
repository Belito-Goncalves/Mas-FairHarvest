var vm = function () {
    var self = this;
    self.farmers = ko.observableArray([]);
    // Replace this data with your actual farmer data
    self.farmers = [
        {
          "name": "Eva Greenfield",
          "photo": "https://img.freepik.com/premium-photo/agriculture-farmer-background_519183-4463.jpg",
          "products": [
            {
              "name": "Organic Apples",
              "price": 2.5,
              "quantity": "bushels"
            },
            {
              "name": "Heirloom Tomatoes",
              "price": 3.0,
              "quantity": "pounds"
            },
            {
              "name": "Strawberries",
              "price": 4.0,
              "quantity": "baskets"
            },
            {
              "name": "Carrots",
              "price": 1.5,
              "quantity": "bunches"
            },
            {
              "name": "Potatoes",
              "price": 2.0,
              "quantity": "pounds"
            }
          ],
          "location": "Green Valley",
          "specialty": "Certified Organic Farming",
          "approved": "approved"
        },
        {
          "name": "Oliver Sunflower",
          "photo": "https://th.bing.com/th/id/OIP.mpAeM6DNRm9I9I7IBtGyBgHaE8?w=612&h=408&rs=1&pid=ImgDetMain",
          "products": [
            {
              "name": "Strawberries",
              "price": 4.0,
              "quantity": "baskets"
            },
            {
              "name": "Zucchini",
              "price": 1.8,
              "quantity": "each"
            },
            {
              "name": "Honeydew Melons",
              "price": 3.5,
              "quantity": "each"
            },
            {
              "name": "Corn",
              "price": 2.0,
              "quantity": "ears"
            },
            {
              "name": "Carrots",
              "price": 1.5,
              "quantity": "bunches"
            }
          ],
          "location": "Sunny Acres",
          "specialty": "Beekeeping and Pumpkins",
          "approved": "approved"
        },
        {
          "name": "Grace Vineyard",
          "photo": "https://th.bing.com/th/id/OIP.IijlI6jYTodzJIDERtOUXAHaFj?w=1024&h=768&rs=1&pid=ImgDetMain",
          "products": [
            {
              "name": "Chardonnay Grapes",
              "price": 8.0,
              "quantity": "crates"
            },
            {
              "name": "Merlot Grapes",
              "price": 7.5,
              "quantity": "crates"
            },
            {
              "name": "Cabernet Sauvignon Grapes",
              "price": 9.0,
              "quantity": "crates"
            },
            {
              "name": "Table Grapes",
              "price": 6.0,
              "quantity": "bunches"
            },
            {
              "name": "Wine Barrels",
              "price": 12.0,
              "quantity": "each"
            }
          ],
          "location": "Vineyard Hills",
          "specialty": "Premium Wine Grapes",
          "approved": "approved"
        },
        {
          "name": "Sammy Greensmith",
          "photo": "https://th.bing.com/th/id/OIP.KjM6dnHodWEJQmmfJw5OqQHaE7?rs=1&pid=ImgDetMain",
          "products": [
            {
              "name": "Organic Spinach",
              "price": 2.0,
              "quantity": "bundles"
            },
            {
              "name": "Kale",
              "price": 1.5,
              "quantity": "bunches"
            },
            {
              "name": "Lettuce",
              "price": 2.0,
              "quantity": "heads"
            },
            {
              "name": "Radishes",
              "price": 1.2,
              "quantity": "bunches"
            },
            {
              "name": "Cucumbers",
              "price": 1.8,
              "quantity": "each"
            }
          ],
          "location": "Greenside Farm",
          "specialty": "Fresh Leafy Greens",
          "approved": "not approved"
        },
        {
          "name": "Miguel Citrus",
          "photo": "https://asa.crs.org/wp-content/uploads/2019/10/1-1024x682.jpg",
          "products": [
            {
              "name": "Oranges",
              "price": 4.0,
              "quantity": "dozens"
            },
            {
              "name": "Lemons",
              "price": 3.5,
              "quantity": "dozens"
            },
            {
              "name": "Grapefruits",
              "price": 5.0,
              "quantity": "dozens"
            },
            {
              "name": "Tangerines",
              "price": 4.5,
              "quantity": "dozens"
            },
            {
              "name": "Blood Oranges",
              "price": 6.0,
              "quantity": "dozens"
            }
          ],
          "location": "Citrus Grove",
          "specialty": "Citrus Fruits",
          "approved": "approved"
        },
        {
          "name": "Isabella Blossom",
          "photo": "https://blogdomax.net/uploads/2019/05/20/15/posts/10614.jpg",
          "products": [
            {
              "name": "Lavender",
              "price": 2.5,
              "quantity": "bundles"
            },
            {
              "name": "Daisies",
              "price": 3.0,
              "quantity": "bouquets"
            },
            {
              "name": "Tulips",
              "price": 4.0,
              "quantity": "bouquets"
            },
            {
              "name": "Carnations",
              "price": 3.5,
              "quantity": "bouquets"
            },
            {
              "name": "Lavender",
              "price": 2.5,
              "quantity": "bundles"
            }
          ],
          "location": "Floral Fields",
          "specialty": "Artisan Flower Arrangements",
          "approved": "approved"
        }
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
