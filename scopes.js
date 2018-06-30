var z;
function main() {
    var x = 2; //functional scope:- will be hoisted above the code.
    if (true) {
        let y = 3; //block scope
    }

    function set() {

    }

    function get() {

    }
    z=get;
}
function hello()
{

}
main();
z();
hello();
// main() is window.main() because scope is global
//declaration of variables, function declaration is done by compiler
// To access the function get outside its scope, declare a var z, assign the value 'get', and then call the function z()