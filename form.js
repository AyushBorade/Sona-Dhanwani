document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const jsonObject = {};
  formData.forEach((value, key) => (jsonObject[key] = value));

  fetch(
    "https://script.google.com/macros/s/AKfycbzqvWh4TemSi4P1pUXyI-T70qu_VJaKla-sUiKZxWtzCu7yp60OIIPlT2cIOVXhzcnN/execs",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonObject),
    }
  )
    .then((response) => response.text())
    .then((data) => alert("Form submitted successfully!"))
    .catch((error) => alert("Error: " + error));
});
