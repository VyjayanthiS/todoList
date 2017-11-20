
var main =angular.module('main',[]).
controller('ctrl1',function($scope, $http){

$http.get('https://jsonplaceholder.typicode.com/users').then(function(response){

$scope.posts=response.data;


},function(error){
console.log(error);

});

$scope.view=function(){
	window.location="todoList.html";
	}




});

angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'Task 1', done:true},
      {text:'Task 2', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
  });





