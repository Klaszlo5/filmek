var filmek = JSON.parse(fulm);

function init() {
  kiir();
}

function kiir() {
  let file = "json.json";
  console.log(file);
  fetch(file)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.filmek),
        data.mov.forEach((elem) => {
          mov.push(elem);
        });
      beolvas(mov);
      megjelenit(mov);
    })
    .catch((err) => {
      console.log(err);
    });
}

function megjelenit(id) {
  return document.getElementById("filmek", id);
}

function beolvas(id) {
  console.log(id);
  let txt = "";
  for (let i = 0; i < id.length; i++) {
    txt += "<div>";
    txt += `<h1>${id[i].nev}</h1>`;
    txt += `<h2>${id[i].menny}</h2>`;
    txt += `<img src=${id[i].kep}>`;
    txt += `<p>${id[i].leiras}</p>`;
    txt += "</div>";
  }
  ID("filmek").innerHTML = txt;
}
