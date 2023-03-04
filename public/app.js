document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById('make');
    if(select){
        select.addEventListener('change',function () {
            getModels(select.value)
        })
    }
});


function getModels(value) {
    let selectModel = document.getElementById('model');
    fetch("/model/"+value)
        .then((response) => response.json())
        .then((json) => {
            let length = selectModel.options.length;
            if (length) {
                for (let i = length-1; i >= 0; i--) {
                    selectModel.options[i] = null;
                }
            }
            for (const jsonElement of json) {
                let option = document.createElement("option");
                option.text = jsonElement.name
                option.value = jsonElement.id
                selectModel.appendChild(option);
                // selectModel.options[selectModel.options.length] = new Option(jsonElement.name,jsonElement.id);
            }
        });
}
