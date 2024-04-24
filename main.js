
const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.ebayimg.com/images/g/UTMAAOSwLjdh5GFU/s-l1600.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/38713.png"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLp_aRmZP0gKWzCggji4q1M_dO8JcgktJokqNWZaSDBQ&s"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://media.pitchfork.com/photos/5cf6a62d13c07d3e4115dc87/master/pass/Valee.jpeg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://c8.alamy.com/comp/2GPC82G/fun-3d-cartoon-dinosaur-with-a-mask-2GPC82G.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9UTgfzv0DD3r4AUPS9zBuBGnQgX6AGIWrQ&s"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://www.opawz.com/cdn/shop/products/34862585aa2f2021a589e5498d824f5f_800x.jpg?v=1666099096"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaC4qLNKdewJ-sWejSti4RmsO_WK8IIyFBxxjdWinxUQ&s"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkhJj5UMBtzmYWUzWhyj7sm-oZgUbr7J3Y8wSxEOmvQ&s"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/736x/cb/6f/5f/cb6f5f5bcfb521eacaef153e9cc5247e.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/736x/92/ca/10/92ca106ab21e2a899837e7299501907d.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://cdn12.picryl.com/photo/2016/12/31/cat-red-funny-animals-522479-1024.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://m.media-amazon.com/images/I/61hQilm4HhL._AC_UF894,1000_QL80_.jpg"
    }

  ];

const targetingApp = document.querySelector("#app");

const cardsOnDom = (array) => {
let domString = "";
for (const pet of array)  {
  domString += 
  `<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h2 class="card-title">${pet.name}</h2>
    <img src=${pet.imageUrl}>
    <h5 class"color-title">${pet.color}</h5>
    <p class="card-text">${pet.specialSkill}</p>
    <h5 class"animal-type">${pet.type}</h5>
    <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
  </div>
</div>`

targetingApp.innerHTML= domString
}}

const filter = (array, type) => {
  const petArray = [];
  for (const pet of array) {
    if (pet.type === type) {
      petArray.push(pet);
    }
  }
  
  return petArray;
}
const dogButton = document.querySelector("#dogs");
const catButton = document.querySelector("#cats");
const dinoButton = document.querySelector("#dinos");
const petsButton = document.querySelector("#pets")

cardsOnDom(pets)

dogButton.addEventListener("click", () => {
  const dogs = filter(pets, "dog")
  cardsOnDom(dogs);
});

catButton.addEventListener("click", () => {
  const cats = filter(pets, "cat")
  cardsOnDom(cats);
});

dinoButton.addEventListener("click", () => {
  const dinos = filter(pets, "dino")
  cardsOnDom(dinos);
});

petsButton.addEventListener("click", () => {
  cardsOnDom(pets);
});


const form = document.querySelector("form")

const createPet = (e) => {
  e.preventDefault();
  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    image: document.querySelector("#image").value

  };
   pets.push(newPetObj);
   console.log("pets", pets);
   cardsOnDom(pets)
  //  domString = ""
  //  targetingApp.innerHTML += domString
    form.reset();
    
  };

  form.addEventListener("submit", createPet);

  const app = document.querySelector("#app");

// 2. Add an event listener to capture clicks

app.addEventListener('click', (e) => {
  // console.log(e.target.id);
  
// 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11
    const [, id] = e.target.id.split("--");

// 4. add logic to remove from array
    // .findIndex is an array method
    const index = team.findIndex(e => e.id === Number(id));

    // .splice modifies the original array
    team.splice(index, 1);

// 5. Repaint the DOM with the updated array
    cardsOnDom(team);
  }
});

const startApp = () => {
  cardsOnDom(team);
  // events(); // ALWAYS LAST
}


startApp();



 

  
  
