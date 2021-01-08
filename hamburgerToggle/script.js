const nav = document.getElementById("nav");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});


// toggle will allow you to remove and add if not added to particular id or you can say class kind of if true then false if false then true thing.
