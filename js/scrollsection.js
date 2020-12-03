let context = document.querySelector("#vz-context");
let solution = document.querySelector("#vz-solution");
let process = document.querySelector("#vz-process");
let data = document.querySelector("#vz-data");
let objectives = document.querySelector("#vz-objectives");
let ideation = document.querySelector("#vz-ideation");

window.addEventListener("scroll",()=>{
    var windo = window.pageYOffset;
  if(context.offsetTop <= windo && solution.offsetTop > windo){
      console.log("Context");
  }
  else if(solution.offsetTop <= windo && process.offsetTop > windo){
      console.log("Solution");
  }
  else if(process.offsetTop <= windo && data.offsetTop > windo){
      console.log("Process");
  }
  else if(data.offsetTop <= windo && objectives.offsetTop > windo){
      console.log("Data");
  }
  else if(objectives.offsetTop <= windo && ideation.offsetTop > windo){
      console.log("Objectives");
  }
  else {
    console.log("Home");
}
});