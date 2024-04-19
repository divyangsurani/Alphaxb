const html = document.getElementById('html');
const preview = document.getElementById('preview').contentWindow.document;

html.addEventListener('keyup', e => {
  preview.open();
  preview.write(e.target.value);
  preview.close();
});