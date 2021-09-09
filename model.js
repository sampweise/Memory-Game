
const model = {
    grid: document.querySelector('.grid'),

    cardsChosen: [],

    cardsChosenId: [],

    cardsWon: [],

    resultDisplay: document.querySelector('#result'),

    cardArray : [
        {
            name: 'fries',
            img: 'image/fries.png'
        },
        {
            name: 'fries',
            img: 'image/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        }
    ],

    //Creating the game board
    createBoard: function() {
        for(let i = 0; i<this.cardArray.length; i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            console.log(this.grid)
            this.grid.appendChild(card)
            
        }
    },

    //Checks for matches
    checkForMatch: function() {
        var cards = document.querySelectorAll('img')
        const optionOneId = this.cardsChosenId[0]
        const optionTwoId = this.cardChosenId[1]
        if(cardsChosen[0] === cardsChosen[1])
        {
            alert("You found a match")
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            this.cardsWon.push(cards)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
        }
        this.cardsChosen = []
        this.cardsChosenId = []
        
    },

    //FlipCard Function
    flipCard: function() {
        var cardId = this.grid.getAttribute('data-id')
        this.cardsChosen.push(mdoel.cardArray[cardId].name)
        this.cardsChosenId.push(cardId)
        this.grid.setAttribute('src', cardArray[cardId].img)
        if(this.cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }
}