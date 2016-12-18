!function(){
	"use strict";function e(e){
	e.message="",e.dishes="",e.checkLunch=function(){
		var o="",c=e.dishes.trim();
		if(""==c)o="Please enter data!",e.color="red";
		else{
			for(var n=c.split(","),r=0,s=0;s<n.length;s++)""!=n[s].trim()&&r++;
			3>=r?(o="Enjoy!",e.color="green"):(o="That's Too much man!",e.color="red")
			}
		e.message=o}
    }
		angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]
}();
