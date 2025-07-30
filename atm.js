let upin = 6354;
let avlbal = 40000;

function checkBal() {
  alert(`Available balance: ₹${avlbal}`);
}

function deposit() {
  let amount = prompt("Enter your deposit amount:");
  amount = Number(amount);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid deposit amount.");
  } else {
    avlbal += amount;
    alert(`Deposited successfully: ₹${amount}`);
    checkBal();
  }
}

function withdraw() {
  let amount = prompt("Enter amount to withdraw:");
  amount = Number(amount);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid withdrawal amount.");
  } else if (amount <= avlbal) {
    avlbal -= amount;
    alert(`Successfully withdrawn: ₹${amount}`);
    alert(`After withdrawal, balance: ₹${avlbal}`);
  } else {
    alert("Insufficient balance.");
  }
}

function atm() {
  let enterAtm = prompt("Are you entering the ATM? (yes/no):");
  if (enterAtm === null || enterAtm.toLowerCase() !== 'yes') {
    alert("Thank you for visiting ATM.");
    return;
  }

  let accNo = prompt("Enter account number:");
  let pin = prompt("Enter PIN:");
  pin = Number(pin);

  if (pin !== upin) {
    alert("Invalid PIN.");
    return;
  }

  while (true) {
    let choice = prompt(
      "Choose an option:\n" +
      "1. Check Balance\n" +
      "2. Deposit\n" +
      "3. Withdraw\n" +
      "4. Exit"
    );

    if (choice === null) {
      alert("Thank you for visiting ATM.");
      break;
    }

    switch (choice) {
      case "1":
        checkBal();
        break;
      case "2":
        deposit();
        break;
      case "3":
        withdraw();
        break;
      case "4":
        alert("Thank you for visiting ATM.");
        return;
      default:
        alert("Invalid option. Please choose 1, 2, 3, or 4.");
    }
  }
}


setTimeout(atm, 100);
