export let next = -1;

export function addthing(date, title, summary,  counter) {

    let list = document.getElementById("blogPosts");
    let item = window.localStorage.getItem(counter);

    let element = document.getElementById(`listElement${counter}`);

    console.log(window.localStorage.getItem(counter));
    if (item != null) {
        if(element === null){
            let li = document.createElement("li");
            li.id = `listElement${counter}`;
            list.appendChild(li);
        }
        element = document.getElementById(`listElement${counter}`);
        element.innerHTML = `Date: ${JSON.parse(window.localStorage.getItem(counter)).d} Title: ${JSON.parse(window.localStorage.getItem(counter)).t} \nSummary: ${JSON.parse(window.localStorage.getItem(counter)).s} <button class="edit" id="edit${counter}">edit</button><button class="delete" id="delete${counter}">delete</button>`;
    }
    else {
        window.localStorage.setItem(counter, `{ "d" : "${date.value}", "t" : "${title.value}", "s" : "${summary.value}" }`);
        console.log(JSON.parse(window.localStorage.getItem(counter)).d);
        let li = document.createElement("li");
        li.id = `listElement${counter}`;
        li.innerHTML = `Date: ${JSON.parse(window.localStorage.getItem(counter)).d} Title: ${JSON.parse(window.localStorage.getItem(counter)).t} \nSummary: ${JSON.parse(window.localStorage.getItem(counter)).s} <button class="edit" id="edit${counter}">edit</button><button class="delete" id="delete${counter}">delete</button>`;
        list.appendChild(li);
    }
    const editbutton = document.getElementById(`edit${counter}`);
    editbutton.addEventListener("click", () => {
        let dateEdit = editBlog.querySelector("#post-date-edit");
        let titleEdit = editBlog.querySelector("#post-title-edit");
        let summaryEdit = document.getElementById("post-summary-edit");
        dateEdit.value = JSON.parse(window.localStorage.getItem(counter)).d;
        titleEdit.value = JSON.parse(window.localStorage.getItem(counter)).t;
        summaryEdit.value = JSON.parse(window.localStorage.getItem(counter)).s;
        next = counter;

        editBlog.showModal()
    });
    const delbutton = document.getElementById(`delete${counter}`);
    delbutton.addEventListener("click", () => {
        document.getElementById(`listElement${counter}`).remove();
        window.localStorage.removeItem(counter);
        const listLen = document.querySelectorAll("#blogPosts li").length;
        const outputBox = document.querySelector('#output');
        if(listLen == 0){
            outputBox.innerHTML = "No blog posts at the moment";
        }
        console.log(listLen);
        console.log(window.localStorage);
    });
    if(date != ""){
        date.value = "";
    }
    if(title != ""){
        title.value = "";
    }
    if(summary != ""){
        summary.value = "";
    }


}

export function updateThing(date, title, summary,  num) {
    window.localStorage.setItem(num, `{ "d" : "${date.value}", "t" : "${title.value}", "s" : "${summary.value}" }`);
        
    console.log(window.localStorage);
    console.log(num);
    addthing("", "", "",  num);
   
}
export function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}