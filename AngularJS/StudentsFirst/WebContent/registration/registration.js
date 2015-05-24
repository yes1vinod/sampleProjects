{
	var studentFirsthtml = angular.module('student-first-ng1', ['ngAnimate']);
    studentFirsthtml.controller('registrationController',function($scope,$timeout){
    	$scope.email;
    	$scope.studentsName ;
    	$scope.saved=false;
    
    	
    	$scope.registerStudentClick=function registerStudentClick(){
    		console.log($scope.email);
    		console.log($scope.studentsName);
    		$scope.showMessage = true;
    		$scope.saved = false;	
    		$scope.msg = "Record Successfully Created";	
    		$("body").css("cursor", "wait");
    		//Call REST-API to call the service
    		
    		
    	      // Simulate 2 seconds loading delay
    	      $timeout(function() {

    	        // Loadind done here - Show message for 3 more seconds.
    	        $timeout(function() {
    	          $scope.showMessage = false;
    	          $("body").css("cursor", "default");
    	      	$scope.email="";
    	    	$scope.studentsName="" ;
    	        }, 6000);

    	      }, 1);
    	      
    	};
    	
    
    	
    	
    } );
	
}