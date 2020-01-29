
const firstNameList = document.querySelector('tbody')
function renderName(name){
    const users = name.users
    const html = users.map(firstN => {

        return `
        <tr><td>${firstN.firstName}</td>
        <td> ${firstN.lastName}</td>
        <td> ${firstN.email}</td>
        <td> ${firstN.title}</td>
        </tr>
        
        `
    }).join('')

    firstNameList.innerHTML = html
    console.log(firstNameList)
}


fetch('https://acme-users-api-rev.herokuapp.com/api/users/')
    .then(response => response.json())
    .then(result => renderName(result))