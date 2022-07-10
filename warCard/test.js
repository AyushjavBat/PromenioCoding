let expect = chai.expect;

describe('Game Functions', function() {                                        
    describe('#showPlayerCards', function() {                                   
        it('should show a card when called', function(){             
            let x = new Card('Diamonds', '3',  3);                            
            expect(x.showCard()).to.equal('Suit: Diamonds, Rank: 3, Value:3');                                   
        });
    }); 
});          

    