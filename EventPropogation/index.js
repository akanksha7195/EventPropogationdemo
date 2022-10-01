document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent called");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent called");
    e.stopPropagation();
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child called");
  },
  false
);
