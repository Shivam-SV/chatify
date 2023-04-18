String.prototype.titleCase = function(){
    let str = this;
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
