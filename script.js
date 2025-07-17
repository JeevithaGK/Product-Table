const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const form = document.getElementById("productForm");
const table = document.getElementById("productTable");

addBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
cancelBtn.onclick = () => modal.style.display = "none";

form.onsubmit = function(event) {
  event.preventDefault();

  const pname = document.getElementById("pname").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;
  const category = document.getElementById("category").value;
  const rating = document.getElementById("rating").value;

  const row = table.insertRow();
  row.innerHTML = `
    <td><input type="checkbox"></td>
    <td><img src="https://via.placeholder.com/50" width="50" /></td>
    <td>${pname}</td>
    <td>₹${price}</td>
    <td>${desc}</td>
    <td>${category}</td>
    <td>${renderStars(rating)} ${rating}</td>
  `;

  form.reset();
  modal.style.display = "none";
};