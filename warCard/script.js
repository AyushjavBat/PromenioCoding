const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card{
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }

    showCard(){
        return `Suit:${this.suit} Rank:${this.rank} Value:${this.value}`;
    }      
}

class Deck{
    constructor(){
        this.cards = [];
    }

    createDeck(){
        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
                
    shuffleDeck(){
        for(let i = 0; i < 52; i++){
            let tempCard = this.cards[i];
            let randomIndex = Math.floor(Math.random() * 52);
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = tempCard;
        }
    }
}

class Player{
    constructor(name){
        this.playerName = name;
        this.playerScore = 0;
        this.playerHand = [];
    }
}

class Game{
    constructor(){
        this.players = [];
    }

    dealHands(playerOne, playerTwo){
        this.players.push(new Player(playerOne));
        this.players.push(new Player(playerTwo));
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();
        this.players[0].playerHand = newDeck.cards.slice(0, 26);
        this.players[1].playerHand = newDeck.cards.slice(26, 52);
    }

    playHands(){
        for(let i = 0; i < 26; i++){
            if(this.players[0].playerHand[i].value > this.players[1].playerHand[i].value){
                console.log(`${playerOne} beats ${playerTwo}! Points given to ${playerOne}.` );
                this.players[0].playerScore++;   
            }
    
            else if(this.players[0].playerHand[i].value < this.players[1].playerHand[i].value){
                console.log(`${playerTwo} beats ${playerOne}! Points given to ${playerTwo}.`)
                this.players[1].playerScore++;    
            }
    
            else if(this.players[0].playerHand[i].value === this.players[1].playerHand[i].value){
                console.log('Players Passes. No points awarded to either player')
            }
        }
    } 
    
    declareWinner(){
        for (let i = 0; i < 26; i ++){
            if(this.players[0].playerScore > this.players[1].playerScore) {
                console.log(`${playerOne} wins! Final scores: ${this.players[0].playerScore} - ${this.players[1].playerScore}`);
            }
            
            else if(this.players[0].playerScore < this.players[1].playerScore) {
                console.log(`${playerTwo} wins! Final scores: ${this.players[0].playerScore} - ${this.players[1].playerScore}` );
            }

            else {
                console.log('Pass');
            }
        }
    }
}

let playerOne = 'Ayush';
let playerTwo = 'Bat';


let newGame = new Game();
newGame.dealHands('Ayush', 'Bat');
newGame.playHands();
newGame.declareWinner();
console.log(newGame.players);