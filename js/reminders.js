import { collection, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const list = document.getElementById("list");

const snap = await getDocs(collection(db, "customers"));
snap.forEach(doc => {
  const c = doc.data();
  if (c.balance > 0) {
    const msg = `Dear ${c.name}, your pending balance at Mutoiba Textiles is ₹${c.balance}. Kindly clear it.`;

    list.innerHTML += `
      <p><b>${c.name}</b> – ₹${c.balance}<br>
      <a href="sms:+91${c.phone}?body=${encodeURIComponent(msg)}">📩 SMS</a>
      |
      <a href="https://wa.me/91${c.phone}?text=${encodeURIComponent(msg)}">💬 WhatsApp</a>
      </p>
    `;
  }
});
