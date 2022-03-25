const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeNameInput");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;


  fetch(url)
    .then((res) => {
      if (res.status != 200) {
        alert("Pokemon not found :(");
        setPokeImage("./images/imgDefault.png");
        setName("????");
        setType("typeDefault");
        setHeight("???");
        setWeight("???");
        setHP(150);
        setAttack(150);
        setDefense(150);
        setSpAttack(150);
        setSpDefense(150);
        setSpeed(150);
        
        return;
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if(data!=null){
        if (data.id>=100) {
          setNumber("#"+data.id);
        }else if (data.id>=10) {
          setNumber("#0"+data.id);
        }else{
          setNumber("#00"+data.id);
        }
          if(data.sprites.other.dream_world.front_default==null){
            setPokeImage(data.sprites.front_default);
          }else{
            setPokeImage(data.sprites.other.dream_world.front_default);
          }
          
          setName(data.name);
          setType(data.types[0].type.name);
          setHeight(data.height/10+" m");
          setWeight(data.weight/10+" kg");
          setHP(data.stats[0].base_stat);
          setAttack(data.stats[1].base_stat);
          setDefense(data.stats[2].base_stat);
          setSpAttack(data.stats[3].base_stat);
          setSpDefense(data.stats[4].base_stat);
          setSpeed(data.stats[5].base_stat);
        
        
      }

      
      
    });
}

const setNumber = (num) => {
  const number=document.getElementById("number");
  number.innerHTML=num;
}

const setPokeImage = (image) => {
    const pokeImage = document.getElementById("pokeImg");
    pokeImage.src = image;
    pokeImage.style.width="100px";
}

const setName = (name) => {
  const pokeName=document.getElementById("name");
  pokeName.innerHTML=name;
}

const setType = (type) => {
  const pokeType=document.getElementById("type");
  pokeType.src=`./images/${type}.png`;
}

const setHeight = (height) => {
  const pokeHeight=document.getElementById("height");
  pokeHeight.innerHTML=height;
}

const setWeight = (weight) => {
  const pokeWeight=document.getElementById("weight");
  pokeWeight.innerHTML=weight;
}

const setBar = (number) => {
  let maxBaseStat= 150;
  return (number/maxBaseStat)*100;
}


const setHP = (hp) => {
  let percent = setBar(hp);
  const pokeHP=document.getElementById("hp");
  pokeHP.style.width=percent+"%";
  
}
const setAttack = (attack) => {
  let percent = setBar(attack);
  const pokeAttack=document.getElementById("atk");
  pokeAttack.style.width=percent+"%";
}
const setDefense = (defense) => {
  let percent = setBar(defense);
  const pokeDefense=document.getElementById("def");
  pokeDefense.style.width=percent+"%";
}
const setSpAttack = (spAttack) => {
  let percent = setBar(spAttack);
  const pokeSpAttack=document.getElementById("satt");
  pokeSpAttack.style.width=percent+"%";
}

const setSpDefense = (spDefense) => {
  let percent = setBar(spDefense);
  const pokeSpDefense=document.getElementById("sdef");
  pokeSpDefense.style.width=percent+"%";
}

const setSpeed = (speed) => {
  let percent = setBar(speed);
  const pokeSpeed=document.getElementById("spd");
  pokeSpeed.style.width=percent+"%";
}