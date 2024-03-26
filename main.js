

    let usersArr = [
        { firstName: "Fadeyi", secondName: 'Oluwaseun', age: 25, sex: "Male", maritalStatus: 'Single', occupation: 'Software Dev', skinColor: 'Brown', hobbies: 'Gaming', country: "Nigeria" },
        { firstName: "Kolapo", secondName: 'Ishola', age: 34, sex: "Male", maritalStatus: 'Married', occupation: 'Real Estate', skinColor: 'Red', hobbies: 'Singing', country: "Nigeria" },
        { firstName: "Sunday", secondName: 'Joshua', age: 14, sex: "Female", maritalStatus: 'Complicated', occupation: 'Driver', skinColor: 'Orange', hobbies: 'Singing', country: "Abuja" },
        { firstName: "Emmanuel", secondName: 'Aishat', age: 34, sex: "Male", maritalStatus: 'With Three Wives', occupation: 'Seller', skinColor: 'green', hobbies: 'Eating', country: "Jos" },

    ];



    let index = 0;

    function showProfile(index) {
        let membersProfile = usersArr[index]
        let displayScreen = document.getElementById("dispScreen");

        displayScreen.innerHTML = `
    <h2>Full-Name: ${membersProfile.firstName} ${membersProfile.secondName}</h2>
    <p>Age: ${membersProfile.age}</p>
    <p>Sex: ${membersProfile.sex}</p>
    <p>Skin Color: ${membersProfile.skinColor}</p>
    <p>Hobbies: ${membersProfile.hobbies}</p>
    <p>Marital Status: ${membersProfile.maritalStatus}</p>
    <p>Occupation: ${membersProfile.occupation}</p>
    <p>Country: ${membersProfile.country}</p>
  `;
    }

    function NextProfile() {
        index++;
        if (index >= usersArr.length) {
            index = 0;
        }
        showProfile(index);
    }

    showProfile(index);

