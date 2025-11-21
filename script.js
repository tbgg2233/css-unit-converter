function convertCSS() {
    const cssInput = document.getElementById('cssInput').value;
    const factor = parseInt(document.getElementById('factor').value);

    const convertedCSS = cssInput.replace(/(\d*\.?\d+)vw/g, (match, value) => {
        const vwValue = parseFloat(value);
        const pxValue = vwValue * factor / 100;
        return `${pxValue}px`;
    });

    document.getElementById('cssOutput').value = convertedCSS;
}

function copyToClipboard() {
    const output = document.getElementById('cssOutput');
    output.select();
    document.execCommand('copy');
}

// Convert automatically on load
window.onload = convertCSS;
