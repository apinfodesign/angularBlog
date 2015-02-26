
var blog = angular.module('blog', []);

var submitComment = angular.module('submitExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);


blog.controller('recentPostsCtrl', function ($scope) {
  
  $scope.text = "";
  $scope.title = "";

  $scope.posts = [

    {'postTitle': 'Nexus S',
     'postAuthor': 'Bill',
     'postTime' :  '1/12/2015',
     'postContent': 'I love phones.',
     'orderProp' : '3'
 },

 	{'postTitle': 'Boeing 747',
     'postAuthor': 'Jack',
     'postTime' :  '1/14/2015',
     'postContent': 'I love airplanes.',
     'orderProp' : '1'
 },

  {'postTitle': 'Mustang',
     'postAuthor': 'Jill',
     'postTime' :  '1/10/2015',
     'postContent' : 'I love cars.',
     'orderProp' : '2'
 },

  {'postTitle': 'Elephants',
     'postAuthor': 'Mike',
     'postTime' :  '1/18/2015',
     'postContent' : 'I love animals.',
     'orderProp' : '4'
 }, 

  ];
});

