const form = document.getElementById("uploadForm");
const preview = document.getElementById("preview");

form.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const res = await fetch('https://distinguished-enthusiasm-production.up.railway.app/api/generate', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();

    if (res.ok && data.videoUrl) {
      preview.src = data.videoUrl;
      preview.style.display = "block";
    } else {
      alert("Error: " + (data.error || "Unknown error"));
    }
  } catch (err) {
    alert("Network error: " + err.message);
  }
};
