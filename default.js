function original() {
    console.log(this);

}
function fake(){

}
original();
//Every 'this' is a window
//F