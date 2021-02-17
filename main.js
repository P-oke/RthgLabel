const gweight = document.getElementsByClassName("gross-weight")[0];
const filldensity = document.getElementsByClassName("fill-density")[0];

function Showresult() {

  const partnumber = document.getElementById("cylinder-options");
  const aweight = Number(document.getElementById("agent-weight").value);
  const cweight = Number(document.getElementById("cylinder-weight").value);
  const result = aweight + cweight;
  gweight.innerHTML = `Gross weight: ${result} Kg`;

  if (partnumber.options[partnumber.selectedIndex].value === "8" && aweight<=8 ) {
    
    const result = aweight / 8;
    filldensity.innerHTML = `Fill density: ${result} Kg/L`;
   
  } else if (aweight>8) {
    filldensity.innerHTML="Fill density: Enter a valid Agent weight"
  }
 
  if (partnumber.options[partnumber.selectedIndex].value === "16"  && aweight<=16) {
    const result = aweight / 16;
    filldensity.innerHTML = `Fill density: ${result} Kg/L`;

  }
  else if (aweight>16) {
    
  
    filldensity.innerHTML="Fill density: Enter a valid Agent weight"
  }
 
  if (partnumber.options[partnumber.selectedIndex].value === "32" && aweight<=32) {
    const result = aweight / 32;
    filldensity.innerHTML = `Fill density: ${result} Kg/L`;
  }
  else if (aweight>32) {
   
    filldensity.innerHTML=`Fill density: Enter a valid Agent weight`
  }

  if (partnumber.options[partnumber.selectedIndex].value === "52" && aweight<=52) {
    const result = aweight / 52;
    filldensity.innerHTML = `Fill density: ${result} Kg/L`;
  }
  else if (aweight>52) {
    
  
    filldensity.innerHTML="Fill density: Enter a valid Agent weight"
  }

  if (partnumber.options[partnumber.selectedIndex].value === "106" && aweight<=106) {
    const result = aweight / 106;
    filldensity.innerHTML = `Fill density: ${result} Kg/L`;
  }
  else if (aweight>106) {
    
    filldensity.innerHTML="Fill density: Enter a valid Agent weight"
  }

  if (partnumber.options[partnumber.selectedIndex].value === "147" && aweight<=147) {
    const result = aweight / 147;
    filldensity.innerHTML = `Fill density: ${result} Kg/L`;
  }
  else if (aweight>147) {
    
   
    filldensity.innerHTML="Fill density: Enter a valid Agent weight"
  }
  
  if (partnumber.options[partnumber.selectedIndex].value === "180" && aweight<=180) {
    const result = aweight / 180;
    filldensity.innerHTML = `Fill density: ${result} Kg/L`;
  }
  else if (aweight>180) {
    
    filldensity.innerHTML="Fill density: Enter a valid Agent weight"
  }

}

function Reset(){
   filldensity.innerHTML=`Fill density:`
  gweight.innerHTML=`Gross weight:`
  const aweightreset=document.getElementById("agent-weight")
  aweightreset.value=""
  const cweightreset = document.getElementById("cylinder-weight")
  cweightreset.value=""
}

