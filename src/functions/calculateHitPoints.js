export default (mod, hitDice) => {
  const max = /^\d+d\d+$/i.test(hitDice) ? hitDice.match(/\d+/g) : [];
  let acc = mod;

  if (max.length === 2) {
    const numOfDice = max[0];
    const diceType = max[1];

    for (let i = 0; i < numOfDice; i++) {
      acc += Math.floor(Math.random() * Math.floor(diceType));
    }
  }

  return acc;
};
