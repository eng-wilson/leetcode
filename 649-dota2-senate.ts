function predictPartyVictory(senate: string): string {
  const rQueue: number[] = [];
  const dQueue: number[] = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      rQueue.push(i);
    }
    if (senate[i] === "D") {
      dQueue.push(i);
    }
  }

  let i = 0;

  while (rQueue.length > 0 && dQueue.length > 0) {
    if (rQueue[i] < dQueue[i]) {
      let newValue = rQueue[i] + senate.length;
      rQueue.shift();
      dQueue.shift();
      rQueue.push(newValue);
    } else {
      let newValue = dQueue[i] + senate.length;
      rQueue.shift();
      dQueue.shift();
      dQueue.push(newValue);
    }
  }

  if (dQueue.length) {
    return "Dire";
  } else {
    return "Radiant";
  }
}

console.log(predictPartyVictory("DDRRR"));
