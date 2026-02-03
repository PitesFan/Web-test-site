const content = {
 title: "Our cats",
 info:  "Meow, meow, meow, meow",
 sectionName: "Cats pictures",
 imageLinks: [
  "cat1.jpg",
  "cat2.jpg",
  "cat3.jpg",
 ],
};

const heading1 = document.getElementById("heading1");
const paragraph = document.getElementById("paragraph");
heading1.innerText = content.title;
paragraph.innerText = content.info;

const header = document.getElementById("header");
const headerH2 = header.getElementsByTagName("h2")[0];
headerH2.innerText = content.sectionName;


