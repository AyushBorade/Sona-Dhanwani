document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };

    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbzRvsm1IFXTMksxjLcVNfpKs1A249PFwklt7L3HUbLDUbFwQ9aS4ooXTrtRI7zulpph/exec"; // Replace with your Web App URL

    try {
      let response = await fetch(googleScriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        document.getElementById("myform").reset();
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  });
