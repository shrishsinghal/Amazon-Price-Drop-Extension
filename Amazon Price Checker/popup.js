let app=angular.module("amazonextension", ['ui.router']);
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/login.html',
      controller: 'logger'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/signup.html',
      controller: 'logger'
    })
    .state('welcome', {
      url: '/welcome',
      templateUrl: '/welcome.html',
      controller: 'logger'
    })

  $urlRouterProvider.otherwise('login');
}]);
var user;
var pass;
var data={
    user,
	  pass
}

app.controller('logger', ['$scope', '$state', function($scope, $state) {
    $scope.username = 'test1234';
    $scope.password = 'pass1234';

    $scope.makedata = function(usernameSent,passwordSent) {
        $scope.username = usernameSent;
        data.user=usernameSent;
        data.pass=passwordSent;
        console.log(data);
        
    };



    $scope.makesignup = function(usernameSent,passwordSent) {
      $scope.username = usernameSent;
      data.user=usernameSent;
      data.pass=passwordSent;
      console.log(data);

      
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                "email": usernameSent,
                "password": passwordSent
            }
        })
    }).then(res=>{
      return res.json();
    }).then((res1)=>{
        console.log(res1);
    });


    };

    $scope.makelogin = function(usernameSent,passwordSent) {
      $scope.username = usernameSent;
      data.user=usernameSent;
      data.pass=passwordSent;
      console.log(data);

      
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                "email": usernameSent,
                "password": passwordSent
            }
        })
    }).then(res=>{
      return res.json();
    }).then((res1)=>{
        console.log(res1);
    });


    };

    $scope.changestate=function(){
      $state.go('signup');
    };
    $scope.gologin=function(){
      $state.go('login');
    };


    $scope.changewelcome=function(){
      $state.go('signup');
    };

}]);