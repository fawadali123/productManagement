/**
 * Created by fawad.ali on 8/21/2015.
 */
(function(){
    "user strict"
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                        ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm  = this;
        productResource.query(
            function (data) {
                vm.products = data;
            });

       vm.showImage = false;
        vm.toggleImage = function()
        {
            vm.showImage = !vm.showImage;
        }
    }
}());