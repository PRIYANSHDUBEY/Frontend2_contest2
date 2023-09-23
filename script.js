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
    

    function addFemaleRow(e){
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
      female_content.append(myRow);
    }
    let  female_Data = data.filter(e => e.gender == 'Female');
    female_Data.forEach(addFemaleRow) 
                              

    function addMaleRow(e){
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
        male_content.append(myRow);
    }
    let male_Data = data.filter(( e => e.gender == 'Male'));
    male_Data.forEach(addMaleRow)
    

    let btnArray = document.querySelectorAll("#five-buttons>button");

  
    function atozsorting() {
        search.value = "";
        let array1= data.map(e => e);
        array1.sort((a,b) => (a.first_name +" "+ a.last_name).localeCompare(b.first_name +" "+ b.last_name));
        document.querySelectorAll("#main_content>tr").forEach(e => e.remove());
        main_content.parentNode.classList.remove("table-invisible");
        female_content.parentNode.classList.add("table-invisible");
        male_content.parentNode.classList.add("table-invisible");
        array1.forEach(addMainRow);
    }
    btnArray[0].addEventListener("click", atozsorting);


    function ztoasorting() {
        search.value = "";
        let array1= data.map(e => e);
        array1.sort((b,a) => (a.first_name +" "+ a.last_name).localeCompare(b.first_name +" "+ b.last_name));
        document.querySelectorAll("#main_content>tr").forEach(e => e.remove());
        main_content.parentNode.classList.remove("table-invisible");
        female_content.parentNode.classList.add("table-invisible");
        male_content.parentNode.classList.add("table-invisible");
        array1.forEach(addMainRow);
    }
    btnArray[1].addEventListener("click", ztoasorting);


    function markssort() {
        search.value = "";
        let array1= data.map(e => e);
        array1.sort((a,b) => a.marks-b.marks);
        document.querySelectorAll("#main_content>tr").forEach(e => e.remove());
        main_content.parentNode.classList.remove("table-invisible");
        female_content.parentNode.classList.add("table-invisible");
        male_content.parentNode.classList.add("table-invisible");
        array1.forEach(addMainRow);
    }
    btnArray[2].addEventListener("click", markssort);

    
    function passingsort() {
        search.value = "";
        let array1= data.filter(e => e.passing == true);
        document.querySelectorAll("#main_content>tr").forEach(e => e.remove());
        main_content.parentNode.classList.remove("table-invisible");
        female_content.parentNode.classList.add("table-invisible");
        male_content.parentNode.classList.add("table-invisible");
        array1.forEach(addMainRow);
    }
    btnArray[3].addEventListener("click", passingsort);
    
    
    function classsort() {
        search.value = "";
        let array1= data.map(e => e);
        array1.sort((a,b) => a.class-b.class);
        document.querySelectorAll("#main_content>tr").forEach(e => e.remove());
        main_content.parentNode.classList.remove("table-invisible");
        female_content.parentNode.classList.add("table-invisible");
        male_content.parentNode.classList.add("table-invisible");
        array1.forEach(addMainRow);
    }
    btnArray[4].addEventListener("click", classsort);


    function gendersort() {
        search.value = "";
        main_content.parentNode.classList.add("table-invisible");
        female_content.parentNode.classList.remove("table-invisible");
        male_content.parentNode.classList.remove("table-invisible");
    }
    btnArray[5].addEventListener("click", gendersort);






    function search_filter() {
        
        let key = search.value.toLowerCase();
        let newArray = data.filter(e => {
            return e.first_name.toLowerCase().includes(key)||e.last_name.toLowerCase().includes(key)||e.email.toLowerCase().includes(key);
        })
        main_content.parentNode.classList.remove("table-invisible");
        female_content.parentNode.classList.add("table-invisible");
        male_content.parentNode.classList.add("table-invisible");
        document.querySelectorAll("#main_content>tr").forEach(e => e.remove());
        newArray.forEach(addMainRow);
    }
    btn_search.addEventListener("click", search_filter);
})