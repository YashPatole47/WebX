var mymodule = angular.module("exp", []);
mymodule.controller("mycontroller", function ($scope) {
$scope.fname = "";
$scope.lname = "";
$scope.ut1_u1 = "";
$scope.ut1_u2 = "";
$scope.ut1_u3 = "";
$scope.ut2_u1 = "";
$scope.ut2_u2 = "";
$scope.ut2_u3 = "";
$scope.fullname = function () {
return $scope.fname + " " + $scope.lname;
}
$scope.totalmarksut1 = function () {
$scope.ut1_u3 = $scope.ut1_u1 + $scope.ut1_u2;
return $scope.ut1_u3;
}
$scope.totalmarksut2 = function () {
$scope.ut2_u3 = $scope.ut2_u1 + $scope.ut2_u2;
return $scope.ut2_u3;
}
});