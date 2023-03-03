export let next = -1;

//function to add blog posts according to an index in local storage
export function addthing(date, title, summary, counter) {

    //get initial variables and html elements
    let item = window.localStorage.getItem(counter);
    let postList = document.getElementById("posts")
    let element = document.getElementById(`listElement${counter}`);
    let buttonLoc = document.getElementById(`buttonLoc`);

    //check if we have the thing in local storage
    if (item != null) {
        //item in local storage but we need to create its html elements
        if (element === null) {
            let post = document.createElement("article");
            let postDate = document.createElement("date");
            let postTitle = document.createElement("postTitle");
            let postSummary = document.createElement("p");
            post.appendChild(postDate);
            post.appendChild(postTitle);
            post.appendChild(postSummary);
            post.id = `listElement${counter}`;
            buttonLoc.before(post);
            //            postList.appendChild(post);
        }
        //set html elements
        element = document.getElementById(`listElement${counter}`);
        element.childNodes[0].innerHTML = `Date: ${JSON.parse(window.localStorage.getItem(counter)).d} <br><br>`
        element.childNodes[1].innerHTML = `Title: ${JSON.parse(window.localStorage.getItem(counter)).t}`
        element.childNodes[2].innerHTML = `Summary: ${JSON.parse(window.localStorage.getItem(counter)).s} <button class="edit" id="edit${counter}"><i class="fa fa-pencil"></i></button><button class="delete" id="delete${counter}"><i class="fa fa-trash"></i></button><br><br><br><br>`;
    }
    else {
        //adding a new post, so first add to local storage
        window.localStorage.setItem(counter, `{ "d" : "${date.value}", "t" : "${title.value}", "s" : "${summary.value}" }`);
        console.log(JSON.parse(window.localStorage.getItem(counter)).d);

        //now create and instantiate html tags for an article
        let post = document.createElement("article");
        let postDate = document.createElement("date");
        let postTitle = document.createElement("postTitle");
        let postSummary = document.createElement("p");
        post.appendChild(postDate);
        post.appendChild(postTitle);
        post.appendChild(postSummary);
        post.id = `listElement${counter}`;
        buttonLoc.before(post);

        element = document.getElementById(`listElement${counter}`);
        element.childNodes[0].innerHTML = `Date: ${JSON.parse(window.localStorage.getItem(counter)).d} <br><br>`
        element.childNodes[1].innerHTML = `Title: ${JSON.parse(window.localStorage.getItem(counter)).t}`
        element.childNodes[2].innerHTML = `Summary: ${JSON.parse(window.localStorage.getItem(counter)).s} <button class="edit" id="edit${counter}"><i class="fa fa-pencil"></i></button><button class="delete" id="delete${counter}"><i class="fa fa-trash"></i></button><br><br><br><br>`;


    }
    //create the edit button and listener for this post
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
    //create the delete button and listener for this post
    const delbutton = document.getElementById(`delete${counter}`);
    delbutton.addEventListener("click", () => {
        document.getElementById(`listElement${counter}`).remove();
        window.localStorage.removeItem(counter);
        let p = document.getElementById("posts");
        const outputBox = document.querySelector('#output');;
        console.log(p.childNodes);
        if (p.childNodes.length === 5) {
            outputBox.innerHTML = "No blog posts at the moment";
        }
    });
    //reset the dialog box
    if (date != "") {
        date.value = "";
    }
    if (title != "") {
        title.value = "";
    }
    if (summary != "") {
        summary.value = "";
    }


}

export function updateThing(date, title, summary, num) {
    window.localStorage.setItem(num, `{ "d" : "${date.value}", "t" : "${title.value}", "s" : "${summary.value}" }`);

    console.log(window.localStorage);
    console.log(num);
    addthing("", "", "", num);

}
export function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}