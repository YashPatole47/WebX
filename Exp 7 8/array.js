var mymodule = angular.module("tx1",[]);
mymodule.controller("mycontroller",function($scope){
        $scope.arr=["xyz","pqr","abc"];

        $scope.subject=[
            {name:"maths", marks:90},
            {name:"admt", marks:80},
            {name:"SE", marks:100}
        ]
    })