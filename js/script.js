//for typewriter for name............................
let i = 0;
let txt = "Adarsh P Nair";
let speed = 100;
let typeWriterName = () => {
  if (i < txt.length) {
    document.getElementById("name-typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriterName, speed);
  }
};
typeWriterName();
