<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="">
 
<p>Input something in the input box:</p>
<p>Name : <input type="text" ng-model="name22" placeholder="Enter name here"></p>
<h1>Hello {{name22}}</h1>
</div>
<div ng-app="a">
 
<p>Input something in the input box:</p>
<p>Name: <input type="text" ng-model="name"></p>
<p ng-bind="name"></p>

</div>
</body>
</html>
