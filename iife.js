var y =(function(){
    function marks(maths,science)
    {
        return maths + science;
    }
    function student(m,s)
    {
        return marks(m,s)
    }
    return student;
})();

console.log(y);
console.log(y(10,20));
//can be used to diff the public and private functions
// return the public function
// declare a var and assign all public functions to it and reurn the variable
// Alternatively, we can pass the values al line 11, and