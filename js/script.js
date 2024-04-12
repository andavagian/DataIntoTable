// let table = document.getElementsByTagName('table')[0]
// let input = document.getElementsByTagName('input')[0]
// let data
// fetch('https://fakestoreapi.com/users')
// .then(res => res.json())
// .then(fetcheddata => {
//     data = fetcheddata
//     let first_row = document.createElement('tr')
//     for (let i = 0; i < Object.keys(data[0]).length; i++) {
//         let th = document.createElement('th')
//         th.innerHTML = `${Object.keys(data[0])[i]}`
//         first_row.appendChild(th)
//     }
//     table.appendChild(first_row)
    
//     data.forEach(element => {
//         let row = document.createElement('tr');
//         Object.values(element).forEach(value => {
//             let cell = document.createElement('td');
//             if (typeof value === 'object' && value !== null && 'city' in value) {
//                 cell.innerHTML = value.city; 
//             } else if(typeof value === 'object' && value !== null && 'firstname' in value){
//                 cell.innerHTML = value.firstname
//             }
//             else {
//                 cell.innerHTML = value;
//             }
//             row.appendChild(cell);
//         });
//         table.appendChild(row);
//     })
//     console.log(data)
// })

// function open_close(){
//     if (table.style.opacity === '1') {
//         table.style.opacity = '0';
//     } else {
//         table.style.opacity = '1';
//     }
// }

// function search(){
//     data.forEach(element => {
//         if(typeof element === 'object' && 'firstname' in element && firstname.includes(input.value)){
//             table.innerHTML = ``
//             let row = document.createElement('tr');
//         Object.values(element).forEach(value => {
//             let cell = document.createElement('td');
//             if (typeof value === 'object' && value !== null && 'city' in value) {
//                 cell.innerHTML = value.city; 
//             } else if(typeof value === 'object' && value !== null && 'firstname' in value){
//                 cell.innerHTML = value.firstname
//             }
//             else {
//                 cell.innerHTML = value;
//             }
//             row.appendChild(cell);
//         });
//         table.appendChild(row);

//         }
//     })
// }
let url = 'https://fakestoreapi.com/users'
let xhr

function open_close(){
    xhr = new XMLHttpRequest()
    xhr.open("GET",url)
    xhr.send()
    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText)
        tbody.innerHTML = ''
        data.forEach(elem => {
            tbody.innerHTML += `
                <tr>
                    <td>${elem.id}</td>
                    <td>${elem.name.firstname}</td>
                    <td>${elem.username}</td>
                    <td>${elem.email}</td>
                    <td>${elem.address.city}</td>
                    <td>${elem.phone}</td>
                </tr>
            `
      
    })
    }
}

function search(){
    let data = JSON.parse(xhr.responseText)
    let datas = data.filter(elem => elem.username.toLowerCase().startsWith(searchWord.value.toLowerCase()));
    tbody.innerHTML = ''
    for (let i = 0; i < datas.length; i++) {
        
        tbody.innerHTML += `
                <tr>
                    <td>${datas[i].id}</td>
                    <td>${datas[i].name.firstname}</td>
                    <td>${datas[i].username}</td>
                    <td>${datas[i].email}</td>
                    <td>${datas[i].address.city}</td>
                    <td>${datas[i].phone}</td>
                </tr>
            `
    }
}