console.log("Komponent")
function add(a){
    return function(b){
        return a+b;
    }
}
function minus(a) {
  return function (b) {
    return a - b;
  };
}
