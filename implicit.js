var fruit={
    name:'apple',
    getName: function () {
        return this;
    }
}
console.log(fruit.name);
console.log(fruit.getName());
//the value of 'this' is the value left of '.'
