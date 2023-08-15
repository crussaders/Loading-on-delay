document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadButton');
  
    loadButton.addEventListener('click', function() {
      // Display the loading animation
      const loaderWrapper = document.createElement('div');
      loaderWrapper.className = 'loader-wrapper';
      const loader = document.createElement('div');
      loader.className = 'loader';
      loaderWrapper.appendChild(loader);
      document.body.appendChild(loaderWrapper);
  
      // Simulate loading delay
      setTimeout(function() {
        // Remove the loading animation
        document.body.removeChild(loaderWrapper);
  
        // Redirect to another page after 3000ms (3 seconds)
        window.location.href = 'redirected_page.html';
      }, 3000);
    });
  });
  