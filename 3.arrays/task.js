function compareArrays(arr1, arr2) {
    if (
      arr1.length === arr2.length &&
      arr1.every((item, index) => item === arr2[index])
    ) {
      return true;
    }
    return false;
  }

  function getUsersNamesInAgeRange(users, gender){
  let result = users.filter(users => users.gender === gender).map(users => users.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);
  return result;
  }
