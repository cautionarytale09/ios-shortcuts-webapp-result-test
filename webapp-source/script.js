function setView(viewElementId){
  let viewport = document.getElementById("view");
  let viewElement = document.getElementById(viewElementId);
  console.log(viewElementId)

  viewport.innerHTML = viewElement.innerHTML;
}

function result(value){
   navigator.clipboard.writeText("SHORTCUTS-WEBAPP-RESULT=" + value);
}

function result_with_prompt(value){
  result(value);
  setView("prompt-done");
}

setView("main-page");