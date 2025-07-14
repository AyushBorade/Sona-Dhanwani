document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let newEntry = { name, email, message, timestamp: new Date().toISOString() };

  let binId = "your-bin-id"; // Replace with your actual Bin ID
  let apiKey = "your-api-key"; // Replace with your JSONBin API key

  try {
      // Get existing data
      let response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
          headers: { "X-Master-Key": apiKey }
      });
      let jsonData = await response.json();

      // Append new entry
      jsonData.record.push(newEntry);

      // Save updated data
      await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "X-Master-Key": apiKey
          },
          body: JSON.stringify(jsonData.record)
      });

      alert("Form submitted successfully!");
      document.getElementById("contactForm").reset();
  } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
  }
});