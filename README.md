# ♻️ Recycle Game
*Created: July 2025 — CIS 376 SUM 2025 · Block 02 Project*



## 🎯 Objective
Drag–and–drop mini-game that teaches recycling habits:

1. Enter your player name.
2. Press **Play!** – a plastic bottle appears.
3. Drag the bottle onto the **one** correct recycle bin (random each round).
4. Score increments for a correct drop, decrements for a miss.
5. Reset or play again as many times as you like.



## 🌐 Resources Used
- [W3Schools](https://www.w3schools.com/)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)



## 💡 Inspiration
I wanted to encourage good habits for keeping our planet clean. This project was inspired by the idea that small actions, like sorting recyclables, can make a big difference for Earth’s future.



## 💻 Code Spotlight
```js
function setKittysHouse(){
  gameTargets = document.getElementsByClassName('gameTargets');
  // randomly pick 0–2 for the recycle bin
  winningHouse = Math.floor(Math.random() * gameTargets.length);

  // wipe previous classes
  Array.from(gameTargets).forEach(el => el.classList.remove('recycle','trash'));

  // label targets: one recycle, two trash
  Array.from(gameTargets).forEach((el, idx) => {
    el.classList.add(idx === winningHouse ? 'recycle' : 'trash');
  });
}
```
**Why this is cool**

This game uses arrays to randomize where the recycle bin and trash cans appear each round; this makes the game less predictable. 

