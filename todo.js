document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("one");
    var addButton = document.querySelector("button");

    function add() {
        if (input.value.trim() !== "") {
            var main = document.getElementById("main");
            var list = document.createElement("li");
            list.innerHTML = input.value + " <button onclick='del(event)'>Delete</button>";
            main.insertAdjacentElement("beforeend", list);
            input.value = ""; // Clear the input field
            input.focus(); // Focus the input field for the next entry
        }
    }

    function del(event) {
        event.target.parentElement.remove();
    }

    // Attach functions to window object
    window.add = add;
    window.del = del;

    // Add event listener for add button
    addButton.addEventListener("click", add);
});
