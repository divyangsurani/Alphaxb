function saveScreenshot() {
    var tweetContainer = document.getElementById('result');
  
    // Use html2canvas to capture the tweet container and convert it into an image
    html2canvas(tweetContainer, { logging: true, letterRendering: 1, allowTaint: false,  useCORS: true } ).then(function(canvas) {
      // Create a temporary link element to download the image
      var link = document.createElement('a');
      link.download = 'x-screenshot.png';
      link.href = canvas.toDataURL();
      
      // Trigger a click on the link to download the image
      link.click();
    });
  }
  