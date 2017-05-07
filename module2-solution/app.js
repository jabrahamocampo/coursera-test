(function () {
'use strict';

var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Cake",
    quantity: "3"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var list1 = this;
    list1.all = false;

    //list1.items = shoppingList;
    list1.items=ShoppingListCheckOffService.getItems();
    //console.log(list1.items);



    list1.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.addItem2(itemIndex);
        ShoppingListCheckOffService.removeItem(itemIndex);


        //console.log(list1.items.length);
        if (ShoppingListCheckOffService.size() === 0) {
            list1.all = true;
        }
        console.log(ShoppingListCheckOffService.size());
        console.log(list1.all);
    }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;
    list2.all = false;

    if (ShoppingListCheckOffService.size2() > 0) {
            //list2.all = false;
        }

    list2.items = ShoppingListCheckOffService.getItems2();

    list2.all = ShoppingListCheckOffService.viewcheck();


    console.log(list2.all);
    //console.log(list2.all);
    /*
    list1.itemName = "";
    list1.itemQuantity = "";

    list1.addItem = function () {
        ShoppingListCheckOffService.addItem(list1.itemName, list1.itemQuantity);
        console.log(list1.items);
    }*/

}

function ShoppingListCheckOffService() {
    var service = this;

  // List of shopping items
  var items = [
               {
                    name: "Milk",
                    quantity: "2"
                  },
                  {
                    name: "Donuts",
                    quantity: "200"
                  },
                  {
                    name: "Cookies",
                    quantity: "300"
                  },
                  {
                    name: "Chocolate",
                    quantity: "5"
                  },
                  {
                    name: "Cake",
                    quantity: "3"
                  }
               ];
  var items2 = [];
  var check = false;

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.addItem2 = function (itemIdex) {
    items2.push(items[itemIdex]);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getItems2 = function () {
    return items2;
  };

  service.size = function () {
    return items.length;
  };

  service.size2 = function () {
    return items2.length;
  };

  service.viewcheck = function(){
    return check;
  }
}

})();
