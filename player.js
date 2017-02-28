//basic player layout

function Player(name) = {
  this.playerName = name;
  this.maxHealth = 64; // 1/4 of a carpet square = 4pts (extra to account for armor)
  this.currHealth = 16;
  this.equip = [item, item];
  this.inventory = [item, item, item, item, item];
  this.questStep = 1; //just increase this as you go through the game
}

var newPlayer = new Player(inputName);


Player.prototype.addItem(item, quantity) {
  //pick up item
   if (player.inventory.length === 5) {
     //tell player inventory full
   } else (
     //add item to inventory
   )
}
