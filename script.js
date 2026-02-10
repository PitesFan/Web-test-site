fetch("data.json")
    .then(res => {
     return res.json();
    })
    .then(data => {
     console.log(data);
     addData(data);
    });

function addData(content) {
 console.log(content);

 document.title = content.title;

 const logo = document.getElementById("logo");
 logo.innerText =content.logo;

 const heading1 = document.getElementById("heading1");
 heading1.innerText = content.title;

 const paragraph = document.getElementById("paragraph");
 paragraph.innerText = content.info;

 const header = document.getElementById("header");
 const headerH2 = header.getElementsByTagName("h2")[0];
 headerH2.innerText = content.sectionName;

 // Add images
 const heroImages = document.getElementById("heroImages");
 // const image = document.createElement("img");
 // image.setAttribute("src", content.imageLinks[0]);
 // heroImages.appendChild(image);

 for (let i = 0; i < content.imageLinks.length; i++) {
  const imgSrc = content.imageLinks[i];
  const img = document.createElement("img");
  img.setAttribute("src", imgSrc);
  heroImages.appendChild(img);
 }
}





