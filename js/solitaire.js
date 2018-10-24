
const SUITS = {
	HEART: 0,
	DIAMOND: 1,
	SPADE: 2,
	CLUB: 3
}

class Card {
	constructor(num, suit, hidden){
		this.num = num;
		this.suit = suit;
		//We should test to see if the or statement is needed 
		this.hidden = hidden || false;
	}

}

class Stack {
	constructor() {
		this.items = [];
	}

	push(card){
		this.items.push(card);
	}

	pop(){
		if (this.items.length == 0){
			console.log("Ooop, something happened");
			//Is this needed?
			//Probably not
			return 0;
		}
		return this.items.pop();
	}

	peek(){
		return this.items[this.items.length - 1];
	}

	isEmpty(){
		return this.items.length == 0
	}
}

class Foundation extends Stack{
	constructor(suit){
		super();
		this.suit = suit;
	}

	push(card){
		//logic for making sure the cards can be placed
		//Then we make a call to the stack push
		if(card.suit == this.suit){
			if(this.isEmpty() && card.num == 0){
				super.push(card);
			} 
			if(this.peek().num == (card.num-1)) {
				super.push(card);
			}
		} else {
			console.log("WRONG SUIT");
		}
	}
	pop(){
		//Again logic
		//then parent pop
		super.pop();
	}
}

//The seven piles which have either 1-7 cards at beginning
//and can be emptied out at some point
//Should we define the tableau to have its number
//Or should that be part of the game logic?
class Tableau extends Stack {
	//Should we maybe pass in the cards as part of the construction?
	constructor(){
		super();
		//this.cards_shown = [];
		//cards_shown.push(this.pop());
	}
	push(card){
		if(this.peek().num == (card.num-1)){
			super.push(card);
		}
		else {
			console.log("Can't add the card to the open stack");
		}
	}

}

//Defining for single card Hand right now
//Also called Stock, but that is too similar to Stack
class Hand extends Stack {

}

class Waste extends Stack {

}

var f = new Foundation(SUITS.HEART);

//not defining hidden 
baseHeart = new Card(0, SUITS.HEART);
baseSpade = new Card(0, SUITS.SPADE);
aceHeart = new Card(1, SUITS.HEART);

console.log(baseHeart.suit);
f.push(baseSpade);
console.log(f.isEmpty());
f.push(baseHeart);
f.push(aceHeart);
console.log(f.peek());

//One issue that I see being kinda problematic 
//Is when you move one stack to the next, we can't peek
//to the next card, as it isn't fully valid yet

class Board {
	constructor(){
	}

}