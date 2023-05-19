"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "Another film", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?
let memberId187 = academyMembers.find(function (member) {
  return member.memID == 187;
});
console.log(`${memberId187.name}, ID: ${memberId187.memID}`);






console.log(`=========
Who has been in at least 3 films?`);
// Who has been in at least 3 films?


//Class solution 
//----------------
// function findMembersWithAtLeast3Films () {
//   return academyMembers.filter(function (member) {
//     return member.films.length >= 3;
//   });
// }
// console.log(findMembersWithAtLeast3Films());
//----------------

//My solution
let membersWith3Films = academyMembers.filter(function (member) {
  return member.films.length >= 3;
});
for (const member of membersWith3Films) {
  console.log(member.name);
}


console.log("=========");
// Who has a name that starts with "Bob"?
let membersWithNameBob = academyMembers.filter(function (member) {
  return member.name.includes("Bob");
});

for (const member of membersWithNameBob) {
  console.log(member.name);
}

console.log("=========");
// HARDER: Which Academy Members have been in a film
// that starts with "A"

let membersInFilmA = academyMembers.filter(function (member) {
  return member.films.find(function (film) {
    return film.startsWith("A");
  });
});

for (const member of membersInFilmA) {
  console.log(member.name);
  console.log(member.films);
}
