let sum = function(a, b, c) {
    
        return {
            getSumTwo: function() {
                return a+b;
            },

            getSumThree: function() {
                return a+b+c;
            }
        }
}

let store = sum(1, 4, 5);
console.log(store.getSumTwo());
console.log(store.getSumThree());

let store1 = sum(3, 4, 5);
console.log(store1.getSumTwo());
console.log(store1.getSumThree());
