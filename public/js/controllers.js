var blog = angular.module('blog', []);

  blog.controller('recentPostsCtrl', function ($scope){
  
  $scope.title;
  $scope.text;
  $scope.author;
  $scope.posts = [];


function initialize (author){
   return author;
  };

$scope.author = initialize("bill");
 

  $scope.submit = function(){
      var post = new Post($scope.title, $scope.text, $scope.author);
      $scope.posts.push(post);
      $scope.title = "";
      $scope.text  = "";
      $scope.author = "";
    }; 

function Post(title, text, author){
  this.postTitle= title;
  this.postText=text;
  this.postAuthor=author;
  this.postTimeStamp=new Date();
 };


 


// var userSubmission = 
//     {'postTitle': $scope.title,
//      'postAuthor': '',
//      'postTime' :  '',
//      'postContent': $scope.text,
//      'orderProp' : '',
//      'userID': ''}


  // $scope.posts = [

  //   {'postTitle': 'Nexus S',
  //    'postAuthor': 'Bill',
  //    'postTime' :  '1/12/2015',
  //    'postContent': 'I love phones.',
  //    'orderProp' : '3'
  //   },

 	// {'postTitle': 'Boeing 747',
  //    'postAuthor': 'Jack',
  //    'postTime' :  '1/14/2015',
  //    'postContent': 'I love airplanes.',
  //    'orderProp' : '1'
  // },

  // {'postTitle': 'Mustang',
  //    'postAuthor': 'Jill',
  //    'postTime' :  '1/10/2015',
  //    'postContent' : 'I love cars.',
  //    'orderProp' : '2'
  // },

  // {'postTitle': 'Elephants',
  //    'postAuthor': 'Mike',
  //    'postTime' :  '1/18/2015',
  //    'postContent' : 'I love animals.',
  //    'orderProp' : '4'
  // }, 

  // ];


});

