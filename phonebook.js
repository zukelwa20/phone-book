function PhoneBook() {
    const userList = []
    const addNumber = (name, number) => {
        if(name && number) {
            userList.push({ name, number})
        }
    }
    
    const getNumber = (name) => {
        const user = userList.find((userObj) => {
            return userObj.name == name;
        })
        return user.number
    }

    const getNumbers = () => {
        return userList;
    }

    return {
        addNumber,
        getNumber,
        getNumbers
    }
}