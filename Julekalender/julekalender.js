function setup() {
    let divVis = document.getElementById("vis");
    let lukene = Array.from(document.querySelectorAll(".luke"));
    lukene.forEach( e => e.addEventListener("click", visLuke);
    
    function visLuke(e) {
      let t = e.target;
      let nr = Number(t.innerHTML);
      divVis.style.backgroundImage = `url("bilde${nr}.jpg")`;
      divVis.style.opacity = "1.0";
      setTimeout(() =>  divVis.style.opacity = "0.0", 2000);
    }
  }