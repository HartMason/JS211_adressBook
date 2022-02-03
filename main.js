

// Use API: https://randomuser.me/api/

// Fetch a new user multiple times and store them in an array

// Then list out all the users in your adress book array by name and picture 

// Figure out how to fetch multiple times and store them in an array.

// const display = document.getElementById("display-info")
// const contactInfoDisplay = document.getElementById("contact-Info")
// const nextCon = document.getElementById("next-Contact")

// const result = fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

//         console.log(data)

let arrayOfUsers
let currentUser 

const getUser = () => {
    fetch('http://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(user => arrayOfUsers = user) 
};

getUser()

const consoleUsers = () => {
    console.log(arrayOfUsers)
};

const displayUsers = () => {
    const allPeep = document.getElementById('book')
    arrayOfUsers.results.map((user, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode(`#${index}, Name: ${user.name.first} , Cell: ${user.cell}`)
        const pic = document.createElement('img')
        li.appendChild(text)
        li.append(pic)
        pic.setAttribute('src', user.picture.thumbnail)
        allPeep.append(li)
    })
}

let counter = 0;


let nextContact = () => {
    // let i = arrayOfUsers.results.indexOf("index");
    // if(i >= 0 && i < arrayOfUsers.length - 1)
    // let nextItem = arrayOfUsers[i + 1]
    if (counter === arrayOfUsers.results.length) {
        counter = 0 
    }
    console.log(counter)
    console.log(arrayOfUsers.results.length)
    const allPeep = document.getElementById('book')
    allPeep.innerHTML = ``
    console.log("click")
    const li = document.createElement('li')
    const text = document.createTextNode(`Name: ${arrayOfUsers.results[counter].name.first} , Cell: ${arrayOfUsers.results[counter].cell}`)
    const pic = document.createElement('img')
    console.log(arrayOfUsers)
    li.appendChild(text)
    li.append(pic)
    pic.setAttribute('src', arrayOfUsers.results[counter].picture.thumbnail)
    allPeep.append(li)
    counter++
};





















        // contactOne.innerHTML = `
        // <img src="${data.results[0].picture.medium}" alt="" />
        // <h4>Contact: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h4>
        // `
                  
        // infoBtn.addEventListener('display-info', () => {
        //     contactInfoDisplay.innerHTML = `
        //                     <ul>
        //                         <li>DOB: ${data.results[0].dob.date}</li>
        //                         <li>Age: ${data.results[0].dob.age}</li>
        //                         <li>Phone Number: ${data.results[0].phone}</li>
        //                         <li>Email: ${data.results[0].email}</li>
        //                     </ul>
        //     `
        // })

// let body = document.getElementById("app");
// let ul = document.createElement("ul"); 

// body.appendChild(ul);

// const result = fetch('http://randomuser.me/api')
//     .then((response) => {
//         return response.json();
//     })

//     .then((data) => {
//     // console.log(character);
//     data.results.map((character) => {
//         console.log(character);

//         let li = document.createElement("li"); 
//         let img = document.createElement("img");
//         let p = document.createEleemnt("p");

//         img.src = character.image; 
//         img.alt = character.name;
//         p.innerHTML = character.name; 

//         li.appendChild(p);
//         li.appendChild(img);
//         ul.appendChild(li);
//     });
// });

