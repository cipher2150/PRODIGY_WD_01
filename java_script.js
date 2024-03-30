window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navigation');
    if (window.scrollY > 50) { 
      navbar.style.backgroundColor = '#555'; 
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  
  window.addEventListener('scroll', function() {
    var card = document.getElementById('container');
    if (window.scrollY > 50) { 
      card.style.backgroundColor = '#ffffff';
    } else {
        card.style.backgroundColor = '#f6f5f5';
    }
  });
  