//we use this functions in other files using export and import
let add=(a,b)=>{
    return a+b;
}
let sub=(a,b)=>{
    return a-b;
}       
let mul=(a,b)=>{
    return a*b;
}   
let div=(a,b)=>{
    return a/b;
}

module.exports = { add ,sub ,mul ,div};
//we can also use export default to export a single function