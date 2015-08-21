/**
 * Created by fawad.ali on 8/21/2015.
 */
(function() {
        "use strict"
       var app = angular
            .module("productResourceMock",
                    ["ngMockE2E"]);
    app.run(function($httpBackend) {
            var products = [
                {"productId":1,
                    "productName":"Wheatable",
                    "productCode":"BS-322",
                    "description":"BS-322",
                    "releaseDate":"Oct 12,1984",
                    "imageUrl":"images/biscuit.jpg",
                    "price":9.95
                },
                {"productId":2,
                    "productName":"HeadPhones",
                    "productCode":"HD-345",
                    "description":"Beat audio headphone",
                    "releaseDate":"Jan 12,12015",
                    "imageUrl":"images/headphone.jpg",
                    "price":9.95
                },
                {"productId":3,
                    "productName":"Mouse",
                    "productCode":"MS-333",
                    "description":"A4Tech Wirless Mouse",
                    "releaseDate":"Feb 12,2013",
                    "imageUrl":"images/mouse.jpg",
                    "price":9.95
                },
                {"productId":4,
                    "productName":"Lptop",
                    "productCode":"HP-4530",
                    "description":"HP Probook laptop",
                    "releaseDate":"Jan 01,2010",
                    "imageUrl":"images/laptop.jpg",
                    "price":9.95
                }
            ];
            var productUrl = "/api/products";
            $httpBackend.whenGET(productUrl).respond(products);
        }
    )
    }());