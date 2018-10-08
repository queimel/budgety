var budgetController = (function(){

    var Expense = function( id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function( id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

})();

var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    }
})();

var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function(){
        // 1. obtener los datos del campo
        var input = UIController.getInput();

        // 2. agregar el item al budget controller

        // 3. agregar el item a la UI

        // 4. calcular el budget

        // 5. mostrar el budget en la UI
    }

    return {
        init: function(){
            console.log('La App se inicializo.');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();