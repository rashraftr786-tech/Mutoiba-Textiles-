import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.saveCustomer = async function () {
  await addDoc(collection(db, "customers"), {
    name: name.value,
    phone: phone.value,
    address: address.value,
    balance: 0
  });
  alert("Customer Added");
};
