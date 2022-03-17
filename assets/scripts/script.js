const front = "card-front"
const back = "card-back"

let techs = ['bootstrap',
  'css',
  'electron',
  'firebase',
  'html',
  'javascript',
  'jquery',
  'mongo',
  'node',
  'react'];

  creatCards(techs)
  function creatCards(techs){
  let cards = [];

  for (let tech of techs){
    cards.push(createPair(tech));
  }

  return cards.flatMap(pair => pair);

}

function createPair(tech){
  return [{
      id: createId(tech),
      icon: tech,
      flipped: false,
  },{
      id: createId(tech),
      icon: tech,
      flipped: false,
  }]
}

function createId(tech){
  return tech + parseInt(Math.random() * 1000)
}