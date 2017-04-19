/* =================================================== */
/**
 * Class: declare a new class Greeter. 
 * This class has three members: a property called greeting, a constructor, and a method greet.
 */
/*================================================== */



/**
 * The Greeter class is base class which showing animal properties and behavior
	* @class Greeter
	* @constructor
**/
class Cricket {
  private _playerName : string;

  constructor(playerName : string) {
    this._playerName = playerName
  }

  batting() {
    return `The player who is batting is ${this._playerName}`;
  }

  bowling(){
    return `The player who is bolling is ${this._playerName}`;
  }
};

let batting = new Cricket("Sachin");
console.log(batting.batting());
let bowling = new Cricket("Lee")
console.log(bowling.bowling());





 //Point to remember
 //=================
 
 //You’ll notice that in the class when we refer to one of the members of the class we prepend this.. This denotes that it’s a member access.