const form = document.querySelector("form");
const usersContainer = document.querySelector(".userContainer");

function displayUser({ age, name }) {
  return `
  <div class="field">
  <div class="avatar">
    <p>${abbrevName(name)}</p>
  </div>
  <div class="display">
    <div class="data">
      <p>Name:</p><p class = "name">${name}</p>
    </div>
    <div class="data">
      <p>age:</p><p class = "age">${age} year${age > 1 ? "s" : ""} old </p>
    </div>
    </div>
  </div>`;
}
function abbrevName(name) {
  return name
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join(".");
}

function displayUsers(persons) {
  return persons.length? persons.map(displayUser).join("") : renderMessage("Oops! No User Found");
}

usersContainer.innerHTML = displayUsers(users);

function compareName(name, searchTerms) {
  return name.toLowerCase().includes(searchTerms.toLowerCase());
}

function shouldResolve() {
  return Math.random() < 0.85; // Probablity of success... (Failure scenario)
}

function searchUsers(name, age) {
  // Method #2 : Using Object Methods
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (shouldResolve()) {
        resolve(
          users.filter(
            (user) =>
              (!name || compareName(user.name, name)) &&
              (!age || compareName(user.age, age))
          )
        );
      } else {
        reject([]);
      }
    }, 1000)
  );
}

function renderMessage(message) {
  return `<div class="message">${message}</div>`;
}

usersContainer.innerHTML = displayUsers(users);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  usersContainer.innerHTML = renderMessage("Searching Message users...");
  searchUsers(e.target.name.value, +e.target.age.value)
    .then((result) => {
      usersContainer.innerHTML = displayUsers(result);
    })
    .catch((e) => {
      usersContainer.innerHTML = renderMessage(
        "Error loading users! Please try again"
      );
    });
});

// for (let i = 0; i < users.length; i++) {
//   const avatarBackground = document.getElementById("avatar");

//   const getRandomNumber = (maxNum) => {
//     return Math.floor(Math.random() * maxNum);
//   };

//   const getRandomColor = () => {
//     const h = getRandomNumber(360);
//     const s = getRandomNumber(100);
//     const l = getRandomNumber(100);

//     return `hsl(${h}deg, ${s}%, ${l}%)`;
//   };

//   const setAvatarColor = () => {
//     const randomColor = getRandomColor();
//     avatarBackground[i].style.color = randomColor;
//   };
// }
// setAvatarColor();
// Search function

// Method 1;
// let isIncluded = true;

// const result = [];

// for (let i = 0; i < users.length; i++) {
//   let user = users[i];
//   if (name && user.name !== name) {
//     isIncluded = false;
//   }
//   if (age && user.age !== age) {
//     isIncluded = false;
//   }
//   if (isIncluded) {
//     result.push(user);
//   }
//}

// Method 1 (optimized)
// const result = [];

// for (let i = 0; i < users.length; i++) {
//   let user = users[i];
//   if ((!name || user.name == name) && (!age || user.age == age)) {
//     result.push(user);
//   }
// }
// return result

// function displayUsers(person) {
//   let template = "";
//   for (let i = 0; i < person.length; i++) {
//     template += displayUser(person[i]);
//   }
//   return template;
// }
