const mybtn = document.getElementById("mybtn")
mybtn.addEventListener("click", () => {
    const p = document.querySelector(".para")
    p.style.color = "aqua"
    p.style.transform = "rotate(180deg)"
})