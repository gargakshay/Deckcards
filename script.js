const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["diamonds", "hearts", "spades", "clubs"];
let deck = new Array();
const cardDrawer = new Array();
const NUMBER_OF_DRAW_CARD = 5;

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}

function renderDeck()
{
	document.getElementById('deck').innerHTML = '';
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}

function moveRandomItemsToArray(arr1, arr2, length) {
  const minLength = Math.min(arr1.length, length);
  for(let i = 0; i < minLength; i++) {
    let index = Math.floor(Math.random() * arr1.length);
    arr2.unshift(arr1[index]);
    arr1.splice(index, 1);
  }

  if (!arr1.length) {
    arr1.splice(0, 0, ...arr2);
    arr2.splice(0, arr2.length);
  }
}

function drawCards() {
  moveRandomItemsToArray(deck, cardDrawer, NUMBER_OF_DRAW_CARD);
  document.getElementById('cardDrawer').innerHTML = '';
	for(var i = 0; i < cardDrawer.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + cardDrawer[i].Suit;

		value.innerHTML = cardDrawer[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("cardDrawer").appendChild(card);
  }
  renderDeck();

  renderButtonText();
}

function renderButtonText() {
  if (deck.length) {
    document.getElementById('drawBtn').innerText = "Draw Cards";
  } else {
    document.getElementById('drawBtn').innerText = "Reset";
  }
}

window.onload = load;