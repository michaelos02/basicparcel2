export function aMessage(){
  google.script.run
      .withSuccessHandler(onSuccess)
      .withFailureHandler(showError)
      .pick('callLibrary');
}

function onSuccess(theText){
    document.getElementById('result').innerHTML = theText;
  }
    
function showError(err){
    console.log(err);
    document.getElementById('result').innerHTML = "The error is " + err;
  }