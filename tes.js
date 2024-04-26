const teser = require('tesseract.js');
const fileInput = document.getElementById('myFile');
fileInput.addEventListener('change', (e) => {
  const fileInfo = e.target.files[0];
    console.log(`Файл: ${fileInfo.name}`);
});

teser.recognize("test-image.js", 'rus', {
    logger: e => {
        console.log(e)
    }
})
    .then(out => {
        let text = out.data.text.replace(/\n/g, ' ');
        console.log('вот что я прочитал :', text);
    })