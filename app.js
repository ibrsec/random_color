const body = document.querySelector("body");
const clickBtn = document.querySelector("button.click");
const mouseOverBtn = document.querySelector("button.mouse-over");
const inputColor = document.querySelector("input");
const colorValue = document.querySelector("p");
const copyBtn = document.querySelector("button.copy-btn");
const copySpan = document.querySelector("button.copy-btn span");

//color generator
const generateRandomColor = ()=>{
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#'+ randomColor;
 }

//inital coilor adjustments
inputColor.value = generateRandomColor();
colorValue.textContent = inputColor.value;
body.style.backgroundColor = inputColor.value;

//click button event
clickBtn.onclick = () => {
    inputColor.value = generateRandomColor();
    body.style.backgroundColor = inputColor.value;


    colorValue.style.color = "black"
    copySpan.innerHTML = "Copy";
    copyBtn.style.color = "black"
    copyBtn.style.backgroundColor = "white";


}

//mouse over button event
mouseOverBtn.onmouseover = () => {
    inputColor.value = generateRandomColor();
    body.style.backgroundColor = inputColor.value;

    colorValue.style.color = "black"
    copySpan.innerHTML = "Copy";
    copyBtn.style.color = "black"
    copyBtn.style.backgroundColor = "white";
}



//copy event
copyBtn.onclick  = function() {
    console.log('testt');
    // Metni seç
    const textToCopy = colorValue;
    const range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Panoya kopyala
    document.execCommand("copy");

    // Seçimi temizle
    window.getSelection().removeAllRanges();

    // Kullanıcıyı bilgilendir 
    colorValue.style.color = "green"
    copySpan.innerHTML = "Copied";

    copyBtn.style.cssText += 
    "-webkit-text-stroke-width: 1px;    -webkit-text-stroke-color: white;";

    copyBtn.style.backgroundColor = inputColor.value;
    
  }
 