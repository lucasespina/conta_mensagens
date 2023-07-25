document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
  
    if (!file) {
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const fileContent = event.target.result;
      const lines = fileContent.split('\n').length;
      document.getElementById('result').innerText = `A conversa tem ${lines} mensagen(s).`;
    };
  
    reader.readAsText(file);
  });
  