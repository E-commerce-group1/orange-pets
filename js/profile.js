let userName = document.getElementById('userName');
let role = document.getElementById('role');


let userInfo = JSON.parse(sessionStorage.getItem('user'));
let ad1 = document.getElementById('ad1');
let ad2 = document.getElementById('ad2');
let city = document.getElementById('city');
let country = document.getElementById('country');
let postal = document.getElementById('postal');
let btnUpdateSubmit = document.getElementById('btnUpdateSubmit');


console.log(userInfo);
userName.textContent = userInfo[0].first_name + ' ' + userInfo[0].last_name;
role.textContent = userInfo[0].role

fetch("http://localhost/orange-pets/php/controller/getUserAddress.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }, body: `id=${userInfo[0].id}`,
})
    .then((response) => response.json())
    .then((res) => {
        // console.log(res);
        console.log(res);
        ad1.textContent += res.address_line1
        ad2.textContent += res.address_line2
        city.textContent += res.city
        country.textContent += res.country
        postal.textContent += res.postal_code
    });

fetch("http://localhost/orange-pets/php/controller/getAllOrderById.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }, body: `id=${userInfo[0].id}`,
})
    .then((response) => response.json())
    .then((res) => {
        console.log(res);
        //   console.log(res);

        res.forEach(element => {
             recentOrder(element);
        });

    });





let tableRoot = document.getElementById('tableRoot');
function recentOrder(order) {
    let tr = document.createElement('tr');
   
    tableRoot.append(tr);

  
;

    let tdName = document.createElement('td');
    tdName.className = 'column-1 text-center';
    tdName.textContent = order.total +" $";
    tr.append(tdName); 

    let tdOrderDate = document.createElement('td');
    tdOrderDate.className = 'column-2 text-center';
    tdOrderDate.textContent = order.created_at;
    tr.append(tdOrderDate); 
    
    let tdCATEGORY = document.createElement('td');
    tdCATEGORY.className = 'column-3 text-center';
    tdCATEGORY.textContent = order.status;
    tr.append(tdCATEGORY); 

}



function editForm(){
    console.log(userInfo);
    let editEmail = document.getElementById('editEmail');
    let editFirst = document.getElementById('editFirst');
    let editLast = document.getElementById('editLast');
    let editPassword = document.getElementById('editPassword');
    editEmail.value= userInfo[0].email;
    editFirst.value= userInfo[0].first_name;
    editLast.value= userInfo[0].last_name;
    editPassword.value= userInfo[0].password;
}

btnUpdateSubmit.onclick = e =>{
    
}

let logout = document.getElementById('logout');
logout.onclick = () =>{ 
    sessionStorage.clear();

}