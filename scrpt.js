let birinchson = +prompt("1-sonni kiriting:");
let ikkinchson = +prompt("2-sonni kiriting:");
let ishoralar = prompt("Amalni kiriting \n  + \n  - \n  * \n /");

let konkultor;

if (ishoralar === "+") {
  konkultor = birinchson + ikkinchson;
} else if (ishoralar === "-") {
  konkultor = birinchson - ikkinchson;
} else if (ishoralar === "*") {
  konkultor = birinchson * ikkinchson;
} else if (ishoralar === "/") {
  konkultor = birinchson / ikkinchson;
} else {
  konkultor = "Noto'g'ri,faqar \n+,\n-,\n*,\n/, shularni kiriting";
}

alert("Natija: " + konkultor);
