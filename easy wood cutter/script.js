function getint(id){
    return parseInt(document.getElementById(id).value);
}
function wood(v,msg){
    debugger
    if( v % 3 == 0){
        msg = "YES";
    }
    else{
        msg = "NO";
    }
    return v , msg;
}
function easy(){
    debugger
    let b = getint("number");
    let msg = wood(b);
    document.getElementById("dis").innerHTML = msg;
}