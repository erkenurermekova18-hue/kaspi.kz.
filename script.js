// Tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

// Save inputs
document.querySelectorAll("input[data-key]").forEach(input => {
  input.value = localStorage.getItem(input.dataset.key) || "";
  input.oninput = () => {
    localStorage.setItem(input.dataset.key, input.value);
  };
});

// Upload image
const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

const savedImg = localStorage.getItem("docImage");
if (savedImg) {
  const img = document.createElement("img");
  img.src = savedImg;
  preview.appendChild(img);
}

upload.onchange = () => {
  const file = upload.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("docImage", reader.result);
    preview.innerHTML = <img src="${reader.result}">;
  };
  reader.readAsDataURL(file);
};