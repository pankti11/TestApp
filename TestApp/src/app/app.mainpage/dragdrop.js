function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    console.log("drageed text")
    console.log(document.getElementById(data).value);
    ev.target.appendChild(document.getElementById(data));
}

function getDropedText() {

    var dropedContent = document.getElementById('accessDropedText');
    var testDiv = document.getElementById('testDiv');
    testDiv.innerHTML = dropedContent.innerHTML;


}