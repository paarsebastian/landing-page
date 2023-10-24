// Home page
const homeHiddenRight = document.querySelector(".home-hidden-right")
const homeHiddenLeft= document.querySelector(".home-hidden-left")
homeHiddenRight.classList.remove(".home-hidden-right") 
homeHiddenRight.classList.add("show")
homeHiddenLeft.classList.remove(".home-hidden-left") 
homeHiddenLeft.classList.add("show")


// For every hidden element
// Add hidden to the parent element and its children will fly in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            
            const hiddenElements = entry.target.querySelectorAll(".hide")
            console.log(hiddenElements)
            
            hiddenElements.forEach((element) => {
                element.classList.remove("hide")
                element.classList.add("show")
            })

            observer.unobserve(entry.target)
        }
    })
})

const hiddenElements = document.querySelectorAll(".watch")

hiddenElements.forEach((el) => {
    observer.observe(el)
})

console.log(hiddenElements)