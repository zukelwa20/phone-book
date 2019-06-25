function PhoneBook() {
    const userList = [];

    function addNumber(name, number) {
        if (name || number) {
            userList.push({name, number});
        }
    }

    function getNumber(name) {
          return userList.find((obj) => {
              return obj.name == name;
          }).number;         
    }

    function getNumbers() {
        return userList;
    }

    return {
        addNumber,
        getNumber,
        getNumbers
    }
}
