document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
      alert("Будь ласка, заповніть всі поля");
      event.preventDefault();
      return false;
    }
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Будь ласка, введіть правильний email");
      event.preventDefault();
      return false;
    }
  
    return true;
  });
  