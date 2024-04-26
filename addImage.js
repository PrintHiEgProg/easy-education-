const fileInput = document.getElementById('myFile');
fileInput.addEventListener('change', (e) => {
  const fileInfo = e.target.files[0];
    console.log(`Файл: ${fileInfo.name}`);
});