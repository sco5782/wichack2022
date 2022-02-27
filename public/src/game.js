function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("div1").style.boxShadow = "3px 5px 8px 2px #ffd700";
    document.getElementById("div1").style.border = "0.3rem solid #ffd700";
  }