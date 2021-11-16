function test(){
    console.log("hello!!!")
}

function pick(func, args){
    args = args || [];
    return this[func].apply(this, args);
  }


function callLibrary(){
    return "Whoo hoo! Made it to the bbMOD!!";
  }