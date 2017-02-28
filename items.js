//basic object layout for items
//for now, items will have 2 possible slots, 1 (weapon) and 2 (item). Possible to eventually add multiple other slots (hands, feet, head etc)



var items = [{
  name: "Sword";
  slot: 1;
  damage: 10;
  armor: 0;
  altText: "it's a sword"; //alt text on hover?
  image: "sword.png"; //makes sense to reference this here
  stackable: false; //probably best to set this now, potions etc would be true
  value: 10; //gold value
  special: function() //heyo it's a method. Useful for magic items later
}, {
  name: "Reflective Vest";
  slot: 2;
  damage: 0;
  armor: 10;
  altText: "Don't get hit by cars"; //alt text on hover?
  image: "reflectiveVest.png"; //makes sense to reference this here
  stackable: false; //probably best to set this now, potions etc would be true
  value: 10; //gold value
  special: function() //heyo it's a method. Useful for magic items later
}]
