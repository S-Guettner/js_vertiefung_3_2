let fontSize = document.getElementById("fontSize")
let fontFamily = document.getElementById("fontFamily")
let textInput = document.getElementById("textInput")
let outputText = document.getElementById("outputText")


let changeFontsSize = () =>{
    /* prevents page from reloading */
    event.preventDefault();
    /* text */
    outputText.innerHTML = textInput.value;
    /* font size */
    fontSizeOutput = fontSize.value;
    outputText.style.fontSize = `${fontSizeOutput}`+ "px";
    /* font family */
    fontFamilyOutput = fontFamily.value;
    outputText.style.fontFamily = `"${fontFamilyOutput}"`; 
}