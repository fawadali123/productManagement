/**
 * Created by fawad.ali on 8/21/2015.
 */
(function () {
    "use strict"
    angular
        .module("common.services")
        .factory("productResource",
        ["$resource",
            productResource]);

    function productResource($resource){
        return $resource("/api/products/:productId")
    }
}());