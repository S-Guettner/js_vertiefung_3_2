let fontSize = document.getElementById("fontSize")
let fontFamily = document.getElementById("fontFamily")
let textInput = document.getElementById("textInput")
let outputText = document.getElementById("outputText")


let changeFontsSize = () =>{
    /* prevents page from reloading */
    event.preventDefault();
    outputText.innerHTML = textInput.value;
    fontSizeOutput = fontSize.value;
    outputText.style.fontSize = `${fontSizeOutput}`+ "px";
    fontFamilyOutput = fontFamily.value;
    outputText.style.fontFamily = `"${fontFamilyOutput}"`; 
    console.log(outputText.style.fontFamily);
}