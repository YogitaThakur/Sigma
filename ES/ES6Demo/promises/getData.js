app.controller("usersCtrl",["$scope","$http",function($scope,$http){
    $scope.name="usercontroller";
    console.log("in user ctrl");

    $http({

        method: 'GET',
        
        url: 'https://jsonplaceholder.typicode.com/users'
        
        }).then(function success(response) {
        
        $scope.data = response.data;
        
        $scope.statusval = response.status;
        
        $scope.statustext = response.statusText;
        
        $scope.headers = response.headers();
        
        }, function error(response) {
        
        });

}])