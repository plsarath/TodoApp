(function(angular){



var tdApp = angular.module("TDApp",[]);
tdApp.controller("TodoController",['$scope','$log','$rootScope',function($scope,$log,$rootScope){

var ctrl=this;
ctrl.todos=[
{id:1,todoName:"Groceries",todoDate:new Date('03-01-2017'),todoNotes:"Pick the groceries"},
{id:2,todoName:"Pick Up Kids",todoDate:new Date('03-02-2017'),todoNotes:"Pick the kids from Class"}
];

ctrl.newTodoName = '';
ctrl.newTodoDate = '';
ctrl.newTodoNotes = '';

ctrl.addTodo=function()
{
    var newtodo={};
    newtodo.id=ctrl.todos[(ctrl.todos).length-1].id+1;
    newtodo.todoName=ctrl.newTodoName;
    newtodo.todoDate=ctrl.newTodoDate;
    newtodo.todoNotes=ctrl.newTodoNotes;

    ctrl.todos.push(newtodo);
}

ctrl.showTodo=function(todo){

$rootScope.$broadcast("notes",todo)

}

}]);

tdApp.controller("NotesController",['$scope','$log','$rootScope',function($scope,$log,$rootScope){

var nCtrl=this;
$scope.$on("notes",function(event,todo){

nCtrl.todonotes=todo.todoNotes;

})

}]);


})(angular);