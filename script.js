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

// Add images
const heroImages = document.getElementById("heroImages");
// const image = document.createElement("img");
// image.setAttribute("src", content.imageLinks[0]);
// heroImages.appendChild(image);

for(let i = 0; i < content.imageLinks.length; i++) {
 const imgSrc = content.imageLinks[i];
 const img = document.createElement("img");
 img.setAttribute("src", imgSrc);
 heroImages.appendChild(img);
}





