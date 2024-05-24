const quotes=[
  "Let yourself be gutted. Let it open you. Start there.",
  "You can become strong and powerful and beautiful.",
  "I like criticism. It makes you strong.",
  "People do not lack strength, they lack will.",
  "You are strong enough to make it through. I believe in you.", 
  "You may have to fight a battle more than once to win it.” – Margaret Thatcher",
  "You are amazing and strong and brave and wonderful. Remember that today.",
  "The struggle you’re in today is developing the strength you need for tomorrow.",
  "You can’t really be strong until you can see a funny side to things.” – Ken Kesey",
  "Smile and let everyone know that today you are a lot stronger than you were yesterday.",
  "Try to look at your weakness and convert it into your strength. That’s success.” – Zig Ziglar",
  "Nobody can hurt me without my permission.” – Mahatma Gandhi",
  "You’re were given this life because you’re strong enough to live it.",
  "Tough times never last, but tough people do.” – Robert H. Schuller"
]
const usedind=new Set()
const quoteelement=document.getElementById("quote")
function qgen(){
  if(usedind.size >=quotes.length){
    usedind.clear()
  }
  while(true){
  const randind=Math.floor(Math.random()*quotes.length)
  if(usedind.has(randind)) continue
    
    const quote=quotes[randind]
    quoteelement.innerHTML=quote;
    usedind.add(randind)
    break
  
  }
}
