const canvas =document.getElementById('canvas');

const ctx= canvas.msGetRegionContent('2d');
ctx.fillText("Canvas text!", 100, 50)