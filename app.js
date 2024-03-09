const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-from-left')
        }
        else {
            entry.target.classList.remove('show-from-left')
        }
    });
})
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-from-left2')
        }
        else {
            entry.target.classList.remove('show-from-left2')
        }
    });
})

let indivArt1 = document.querySelectorAll(".art1");
indivArt1.forEach((art) => {
    observer1.observe(art);
})
let indivArt2 = document.querySelectorAll(".art2");
// setTimeout(() => {
    indivArt2.forEach((art) => {
        observer2.observe(art);
    })
// }, 500);


let likes = document.querySelectorAll(".likes");

let likedArr = [false, false, false, false, false, false, false, false];

likes.forEach((like, index) => {
    like.addEventListener("click", () => {
        likedArr[index] = !likedArr[index];
        if (likedArr[index]) {
            like.innerHTML = "<i class='bx bxs-heart' style='color:#ff2121' ></i>";
        }
        else like.innerHTML = "<i class='bx bx-heart' ></i>";

    })
})