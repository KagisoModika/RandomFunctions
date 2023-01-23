function createCheckDigit(membershipId) {
    let result = addition(membershipId);

    while (result > 9) {
        result = addition(result);
    }
    
    return result;
  }

  function addition(strMembershipId) {
    return strMembershipId.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  
  console.log(createCheckDigit("55555"));