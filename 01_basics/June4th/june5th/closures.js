let greet; // This will hold our closure function

    function saveDetails() {
      const name = document.getElementById('username').value;

      // This function captures "name" and remembers it
      greet = function() {
        alert("Welcome back, " + name + "!");
      };

      alert("Name saved! Now click 'Greet Me'.");
    }