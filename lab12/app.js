//task1
console.log("task1");

function UpperCase(str) {
    let regex = /^[A-Z]/;
    if (regex.test(str)) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase symbols";
    }
  }
  
  console.log(UpperCase("regexp"));
  console.log(UpperCase("RegExp"));
  
  //task2
  console.log("Task2");

  function checkEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  console.log(checkEmail("Qmail2@gmail.com"));
  
  //task3
  console.log("Task3");

  let regex = /[dD]b+[dD]/i;
  let text = "cdbBdbsbz";
  let match = text.match(regex);
  
  if (match) {
    let fullMatch = match[0];
    let bMatch = fullMatch.slice(1, -1);
    let nextD = fullMatch.slice(-1);
  
    console.log(fullMatch);
    console.log(bMatch);
    console.log(nextD);
  }

  //task4
console.log("task4");

  let regex2 = /(\w+)\s+(\w+)/;
  let text2 = "Java Script";
  let swappedText = text2.replace(regex2, "$2, $1");
  
  console.log(swappedText);
  
  //task5
  console.log("task5");

  function validateBankCardNumber(cardNumber) {
    let regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
  }
  
  console.log(validateBankCardNumber("9999-9999-9999-9999"));
  console.log(validateBankCardNumber("1234-5678-9123-5643"));
  console.log(validateBankCardNumber("1234-5678-9012"));
  console.log(validateBankCardNumber("9999999999999999"));
  
  //task6
  console.log("task6");

  function checkEmail(email) {
    let regex =
      /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    return regex.test(email);
  }
  
  console.log(checkEmail("my_mail@gmail.com"));
  console.log(checkEmail("#my_mail@gmail.com"));
  console.log(checkEmail("my_ma--il@gmail.com"));
  
  //task7
  console.log("task7");
  
  function checkLogin(login) {
    let regex = /^[a-zA-Z][a-zA-Z0-9.]*$/;
    let numbers = login.match(/\d+(\.\d+)?/g);
    return regex.test(login) && numbers !== null;
  }
  
  console.log(checkLogin("ee1.1ret3"));
  console.log(checkLogin("ee1*1ret3"));