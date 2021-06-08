let elem;

let aElems = document.getElementsByTagName("a");
for(let i = 0; i < aElems.length; i++) {
    aElems[i].addEventListener("click", (e) => {
        if(!aElems[i].hasAttribute("target")) {
            e.preventDefault();
            fadeOut(600, () => {
                var old_element = aElems[i];
                var new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);
                new_element.click();
            });
        }
    });
}

function setupFader(fadeIn) {
    elem = document.createElement("div");
    elem.id = "fader";
    setStyle(elem,{
        width:"100vw",
        height:"100vh",
        top:"0",
        left:"0",
        position:"fixed",
        background:"#F4F1DE",
        zIndex:"1000",
        transform:`translateX(${fadeIn?"0%":"100vw"})`,
        color:"red"
    });

    document.body.appendChild(elem);
}

function fadeOut(time, cb) {
    elem.style.transition= `ease ${time}ms`;
    elem.style.transform="translateX(0%)";
    setTimeout(cb,time+200);
}

function fadeIn(time, cb) {
    elem.style.transition= `ease ${time}ms`;
    elem.style.transform="translateX(-100%)";
    setTimeout(cb,time);
}

function setStyle( obj, propertyObject )
{
    for (var property in propertyObject) {
        obj.style[property] = propertyObject[property];
    }
}
