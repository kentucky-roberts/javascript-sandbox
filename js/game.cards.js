function CardService(){
    var service = {
        newDeck: newDeck,
        Deck: Deck,
        Card: Card
    };

    // create new deck Object
    function newDeck(){
        var deck = new Deck();
        return deck;
    }

    function Deck(){
        var deck = this;
        this.cards = [];
        this.dealt = [];

        deck.suits.forEach(function (suit) {
            deck.ranks.forEach(function(rank){
                var card = new Card(rank, suit);
                deck.cards.push(card);
            })
        });

        deck.shuffle();
    }

    Deck.prototype.phrases = ['Donkey Punch', 'Rusty Trombone', 'Stage 5 Clinger', 'Doggy Style'];

    Deck.prototype.deal = function(){
        var card = this.cards.shift();
        return card;
    };

    Deck.prototype.shuffle = function () {
        /**
         * Knuth Shuffle Implementation
         * https://github.com/coolaj86/knuth-shuffle
         */
        var currentIndex = this.cards.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    };


} // CardService