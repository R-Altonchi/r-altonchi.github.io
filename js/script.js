const blob = document.getElementById("blob");

function updatePointerEvent() {
    if (window.innerWidth > 1500) {
        document.body.onpointermove = event => {
            const { clientX, clientY } = event;
        
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
        };
    } else {
        document.body.onpointermove = null; // Remove event listener if width <= 900px
    }
}

// Run check initially
updatePointerEvent();

// Run check when window resizes
window.addEventListener("resize", updatePointerEvent);
