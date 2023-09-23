const apiLink = "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json";

fetch(apiLink).then(responce => responce.json()).then(data => {
    function addMainRow(e){
      let myRow = document.createElement('tr');
      myRow.innerHTML = `
      <td align="center">${e.id}</td>
      <td><div class="details">
      <img src="${e.img_src}" alt="img">
      <span>${e.first_name+" "+e.last_name}</span></div></td>
      <td>${e.gender}</td>
      <td>${e.class}</td>
      <td>${e.marks}</td>
      <td>${e.passing?'Passed':'Failed'}</td>
      <td>${e.email}</td>
      `;
      main_content.append(myRow);
    }
    data.forEach(addMainRow)


    let  female_Data = data.filter(value => value.gender == 'Female');
    



    let male_Data = data.filter(( value => value.gender == 'Male'));

    console.log(male_Data)
})