var model = []
var solvedModel = [];

var initModel = function () {
  for(let i = 1; i<17; i++){
    model.push("" + i);
    solvedModel.push("" + i);
  }
  shuffle(model);
  return model;
}

var render = function (model) {
  var el = document.getElementById("root");
  var fc = el.firstChild;
  while(fc){
    el.removeChild(fc);
    fc = el.firstChild;
  }
  for(var i in model){
    var div = document.createElement("div");
    var id = "id_" + model[i];
    div.id=id;
    if(id == "id_16"){
      div.className = "whiteTile";
    } else {div.className = "tile";}
    div.innerHTML=id.substring(3);
    div.addEventListener("click", switchTiles);
    el.appendChild(div);
  }
}

var initBoard = function () {
  var model = initModel();
  render(model);
}

var fillDescription = function () {
  var el = document.getElementById("description");
  el.innerHTML = "Welcome to the 16 Square Game! Click tiles to rearrange them into proper order. To win the game, all tiles must be in order with the white tile last. Good luck!"
}

var switchTiles = function () {
  var index = model.indexOf(this.id.substring(3));
  var white = model.indexOf("16");
  if(validMove(index, white)){
    model[index] = "16";
    model[white] = this.id.substring(3);
    render(model);
    if(gameWon()){endGame();}
  } else {}
}

var validMove = function (index, white) {
  if(index == 5 || index == 6 || index == 9 || index == 10){
    if(index + 4 == white || index - 4 == white || index - 1 == white || index + 1 == white){
      return true;
    }
    else{return false;}
  }
  else if(index == 0){
    if(index + 4 == white || index + 1 == white){
      return true;
    }
    else{return false;}
  }
  else if(index == 3){
    if(index + 4 == white || index - 1 == white){
      return true;
    }
    else{return false;}
  }
  else if(index == 12){
    if(index - 4 == white || index + 1 == white){
      return true;
    }
    else{return false;}
  }
  else if(index == 15){
    if(index - 4 == white || index - 1 == white){
      return true;
    }
    else{return false;}
  }
  else if(index == 1 || index == 2){
    if(index + 4 == white || index - 1 == white || index + 1 == white){
      return true;
    }
    else{return false;}
  }
  else if(index == 4 || index == 8){
    if(index + 4 == white || index - 4 == white || index + 1 == white){
      return true;
    }
    else{return false;}
  }
  else if(index == 7 || index == 11){
    if(index + 4 == white || index - 4 == white || index - 1 == white){
      return true;
    }
    else{return false;}
  }
  else{
    if(index - 4 == white || index - 1 == white || index + 1 == white){
      return true;
    }
    else{return false;}
  }
}

/**
 * Shuffles array in place. ES6 version.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    var index_of_white = a.indexOf("16");
    if(index_of_white == 15){return a;}
    else{
      a[index_of_white] = a[15];
      a[15] = "16";
    }
}

var gameWon = function() {
  for(let i=0; i<16; i++){
    if(model[i] != solvedModel[i]){
      return false;
    }
  }
  return true;
}

var endGame = function(){
  var el = document.getElementById("root");
  var fc = el.firstChild;
  while(fc){
    el.removeChild(fc);
    fc = el.firstChild;
  }
  var div = document.createElement("div");
  div.className = "victory";
  el.appendChild(div);
}
