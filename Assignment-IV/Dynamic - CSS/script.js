

document.getElementById("colorchange").onclick = function() {
    const color = document.getElementById("colorbox").value; // Get the value from the textbox
    document.getElementById("text-container").style.color = color; // Change the text color
};

// Change font size based on range input
document.getElementById("fontsize").oninput = function() {
    const fontSize = this.value + 'px'; // Get the value and append 'px'
    document.getElementById("text-container").style.fontSize = fontSize; 
};


// Toggle bold
document.getElementById("bold").onclick = function() {
    const textContainer = document.getElementById("text-container");
    textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";
};

// Toggle italic
document.getElementById("italic").onclick = function() {
    const textContainer = document.getElementById("text-container");
    textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
};

// Toggle underline
document.getElementById("underline").onclick = function() {
    const textContainer = document.getElementById("text-container");
    textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
};

// Change font family from dropdown
document.getElementById("list").onchange = function() {
    const fontFamily = this.value;
    document.getElementById("text-container").style.fontFamily = fontFamily;
};

// Get CSS properties
document.getElementById("getstyle").onclick = function() {
    const textContainer = document.getElementById("text-container");
    const color = textContainer.style.color || "inherit";
    const fontSize = textContainer.style.fontSize || "inherit";
    const fontFamily = textContainer.style.fontFamily || "inherit";
    const fontWeight = textContainer.style.fontWeight || "normal";
    const fontStyle = textContainer.style.fontStyle || "normal";
    const textDecoration = textContainer.style.textDecoration || "none";

    const cssProps = `color: ${color}; font-size: ${fontSize}; font-family: ${fontFamily}; font-weight: ${fontWeight}; font-style: ${fontStyle}; text-decoration: ${textDecoration};`;
    document.getElementById("css-props").textContent = cssProps;
};
