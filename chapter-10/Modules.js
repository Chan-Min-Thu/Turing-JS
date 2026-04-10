function api(){
    console.log("Api is called.");
    internal();
}
function internal(){
    console.log("Internal api called.")
}

export { api };