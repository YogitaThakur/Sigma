var app=angular.module("myApp",[]);
app.controller("getDataCtr",['$scope','$http',function($scope,$http){   //sequencing matters
    $scope.name="getDataCtr";
    console.log("inside getuser ctl")
    $http.get("https://jsonplaceholder.typicode.com/users").then(
        function(res,err){
            console.log("res=>"+res.data);
            $scope.data=res;
           
        }
    )
}])
    // $http({method: 'GET',url: 'https://jsonplaceholder.typicode.com/users'})
    // .then(function success(response) {
    
    // $scope.data = response.data;
    
    // $scope.statusval = response.status;
    
    // $scope.statustext = response.statusText;
    
    // $scope.headers = response.headers();
    
    // }, function error(response) {
    
    // });

    // }])

    //method1
    /*
 $http({method:"GET",url:"https://jsonplaceholder.typicode.com/users"})
  .then(function(res){
      $scope.data=res.data;
      return $scope.data;
      console.log("data=>"+data)
  },function(res){
      return res;
  })

    */

//method2

      // $http.get("https://jsonplaceholder.typicode.com/users").then(
    //     function(res,err){
    //         console.log("res=>"+res);
    //         $scope.appdata=res;
           
    //     }
    // )