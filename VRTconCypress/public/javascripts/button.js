let button = document.getElementById("send")

button.addEventListener("click", function() {
    button.disabled = true
    window.alert("Just wait a few seconds please")
    fetch('/run').then(res => {
        button.disabled = false
        window.alert("Success")
        console.log(res)
        location.reload()
    }).catch(err => {
        button.disabled = false
        window.alert("Something went wrong calling service")
        console.log('Something went wrong calling service')
    })
});