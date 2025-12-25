// customers.js
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("saveCustomerBtn")?.addEventListener("click", async () => {
  try {
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const balance = Number(document.getElementById("customerBalance").value || 0);

    if (!name || !phone) {
      alert("Name and phone are required");
      return;
    }

    await addDoc(collection(db, "customers"), {
      name,
      phone,
      balance,
      createdAt: new Date()
    });

    alert("Customer saved successfully ✅");

    customerName.value = "";
    customerPhone.value = "";
    customerBalance.value = "";

  } catch (e) {
    console.error(e);
    alert(e.message);
  }
});
