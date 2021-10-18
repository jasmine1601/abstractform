const textedit = document.getElementById("textedit")
const button = document.getElementById("submit")
const requestUrl = document.getElementById("request-url")

button.addEventListener("click", () => {
    let rawjson = textedit.value
    // console.log(rawjson)
    try {
        var json = JSON.parse(rawjson)
    } catch {
        alert("wrong json format")
        return
    }

    let reqUrl = requestUrl.value;
    const option = document.querySelector('input[name="op-mode"]:checked')

    if (reqUrl === "") {
        alert("enter a URL to post form")
        return
    }
    // console.log(json)
    // console.log(genIp("name", json.name))
    // console.log(Object.entries(json))
    // let aform = createForm(json)
    // aform.submit()
    // document.getElementById("header").appendChild(aform)
    // console.log(aform)
    console.log(option.value)
    let form = document.createElement("form")
    form.name = "abstract"
    form.method = "post"
    form.id = "abstract"
    form.action = reqUrl
    let h1 = document.createElement("h1")
    h1.innerText = `${form.name} form`
    form.appendChild(h1)
    
    for (key in json) {
        let value = (typeof json[key] == "object" ? JSON.stringify(json[key]) : json[key])
        let ip = document.createElement("input")
        ip.name = key
        ip.value = value
        
        let label = document.createElement("label")
        label.innerText = key + ": "
        label.appendChild(ip)
        form.appendChild(label)
    }
    if (option.value === "op-a") {
        submit = document.createElement("button")
        submit.type = "submit"
        submit.innerHTML = "Submit"
        form.appendChild(submit)
    } else {
        form.style.display = "none"
    }
    if (aform = document.getElementById(form.id)) {
        aform.remove()
    }

    formdisplay = document.getElementById("container")
    formdisplay.appendChild(form)

    if (option.value === "op-b") {
        form.submit()
    }
})