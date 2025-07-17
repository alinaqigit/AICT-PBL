//original script (discarded)
// const hamburger = document.getElementById("Hamburger");
// const hamburgerNavList = document.getElementById("HamburgerNavList");
// const closeButton = document.getElementById("closeButton");

// hamburger.addEventListener("click", () => {
//     hamburgerNavList.style.display = "flex";
// });

// closeButton.addEventListener("click", () => {
//     hamburgerNavList.style.display = "none";
// });
// document.addEventListener("click", (event) => {
//     const isClickInside = hamburgerNavList.contains(event.target) || hamburger.contains(event.target);

//     if (!isClickInside) {
//         hamburgerNavList.style.display = "none";
//     }
// });

//second updated version (discarded)

// const hamburger = document.getElementById("Hamburger");
// const hamburgerNavList = document.getElementById("HamburgerNavList");
// const closeButton = document.getElementById("closeButton");

// function openMenu() {
//     hamburgerNavList.classList.remove("hidden");

//     // Allow reflow before adding open (triggers transition)
//     requestAnimationFrame(() => {
//         hamburgerNavList.classList.add("open");
//     });
// }

// function closeMenu() {
//     hamburgerNavList.classList.remove("open");

//     // Wait for transition to end before hiding
//     hamburgerNavList.addEventListener("transitionend", function handleTransition() {
//         hamburgerNavList.classList.add("hidden");
//         hamburgerNavList.removeEventListener("transitionend", handleTransition);
//     });
// }

// hamburger.addEventListener("click", (e) => {
//     e.stopPropagation(); // prevent it from triggering the document click
//     openMenu();
// });

// closeButton.addEventListener("click", (e) => {
//     e.stopPropagation(); // prevent bubbling
//     closeMenu();
// });

// // Close on click outside
// document.addEventListener("click", (event) => {
//     const isClickInside = hamburgerNavList.contains(event.target) || hamburger.contains(event.target);
//     const isOpen = hamburgerNavList.classList.contains("open");

//     if (!isClickInside && isOpen) {
//         closeMenu();
//     }
// });

//current version (active)

const hamburger = document.getElementById("Hamburger");
const hamburgerNavList = document.getElementById("HamburgerNavList");
const closeButton = document.getElementById("closeButton");

console.log("hamburger:", hamburger);
console.log("hamburgerNavList:", hamburgerNavList);
console.log("closeButton:", closeButton);

function openMenu() {
    console.log("Opening menu...");
    
    // Ensure it's displayed so animation can run
    hamburgerNavList.style.display = "flex";
    
    // Remove hidden right away
    hamburgerNavList.classList.remove("hidden");

    // Trigger animation
    requestAnimationFrame(() => {
        hamburgerNavList.classList.add("open");
        console.log("Menu should now be open");
    });
}

function closeMenu() {
    console.log("Closing menu...");
    
    hamburgerNavList.classList.remove("open");

    hamburgerNavList.addEventListener("transitionend", function handler() {
        hamburgerNavList.classList.add("hidden");

        // Set display to none manually AFTER transition
        hamburgerNavList.style.display = "none";

        hamburgerNavList.removeEventListener("transitionend", handler);
        console.log("Menu fully hidden");
    });
}


hamburger.addEventListener("click", (e) => {
    console.log("Hamburger clicked");
    e.stopPropagation();
    openMenu();
});

closeButton.addEventListener("click", (e) => {
    console.log("Close button clicked");
    e.stopPropagation();
    closeMenu();
});

document.addEventListener("click", (event) => {
    const isClickInside = hamburgerNavList.contains(event.target) || hamburger.contains(event.target);
    const isOpen = hamburgerNavList.classList.contains("open");

    console.log("Clicked somewhere:", event.target);
    if (!isClickInside && isOpen) {
        console.log("Clicked outside, closing menu");
        closeMenu();
    }
});
