// Declarando variáveis
const encryptButton = document.getElementById("encryptButton");
const decryptButton = document.getElementById("decryptButton");
const outputCopyButton = document.getElementById("outputCopyButton")

// Função que retorna o texto criptografado
encryptButton.onclick = () => {
    let inputText = document.getElementById("inputText").value;
    const outputArea = document.getElementById("outputTextArea");
    const outputAreaImage = document.getElementById("outputImage");
    const outputAreaTitle = document.getElementById("outputTitle");
    const outputAreaText = document.getElementById("outputText");
    const outputAreaButton = document.getElementById("outputCopyButton");

    // Método que codifica o texto baseado na tabela ASCII com base 64 
    let encryptedText = btoa(inputText);

    outputAreaImage.style.display = "none";
    outputAreaTitle.style.display = "none";
    outputAreaText.style.fontSize = "1.5rem";
    outputAreaText.style.lineHeight = "36px";
    outputArea.style.justifyContent = "space-between";
    outputArea.style.textAlign = "start";
    outputAreaButton.removeAttribute("hidden");

    outputAreaText.innerHTML = encryptedText;
}

// Função que retorna o texto descriptografado
decryptButton.onclick = () => {
    let inputText = document.getElementById("inputText").value;
    const outputArea = document.getElementById("outputTextArea");
    const outputAreaImage = document.getElementById("outputImage");
    const outputAreaTitle = document.getElementById("outputTitle");
    const outputAreaText = document.getElementById("outputText");
    const outputAreaButton = document.getElementById("outputCopyButton");

    // Método que descodifica o texto
    let decryptedText = atob(inputText);

    outputAreaImage.style.display = "none";
    outputAreaTitle.style.display = "none";
    outputAreaText.style.fontSize = "1.5rem";
    outputAreaText.style.lineHeight = "36px";
    outputArea.style.justifyContent = "space-between";
    outputArea.style.textAlign = "start";
    outputAreaButton.removeAttribute("hidden");

    outputAreaText.innerHTML = decryptedText;
}

// Função que retorna um texto copiado
outputCopyButton.onclick = () => {
    const outputAreaText = document.getElementById("outputText");
    navigator.clipboard.writeText(outputAreaText.innerHTML).then(() => {
        alert("Copiado para área de transferência.");
    })
}