function CardService() {

    function newDeck(){
        var deck = new Deck();
        return deck;
    }

    function Deck(){
        var deck = this;
        this.cards = [];
        this.dealt = [];

        deck.phrases.forEach(function (phrase) {
            deck.colors.forEach(function(color){
                var card = new Card(phrase, color);
                deck.cards.push(card);
            })
        });
        
        deck.shuffle();
    }

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


    function Card(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }

    return Service;


}