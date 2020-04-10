// Execute once when DOM is loaded.
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM loaded");

    const form = document.querySelector("#memeForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const div = document.createElement("div");

        const top = document.createElement("span");
        top.classList.add("top");
        top.innerText = txtTop.value;
        div.append(top);
        top.addEventListener("click", function (event) {
            event.target.parentElement.remove();
        });

        const img = document.createElement("img");
        img.src = txtURL.value;
        div.append(img);
        img.addEventListener("click", function (event) {
            event.target.parentElement.remove();
        });

        const bottom = document.createElement("span");
        bottom.classList.add("bottom");
        bottom.innerText = txtBottom.value;
        div.append(bottom);
        bottom.addEventListener("click", function (event) {
            event.target.parentElement.remove();
        });

        document.querySelector("#memeContainer").append(div);

        txtURL.value = "";
        txtTop.value = "";
        txtBottom.value = "";
    });

    const txtURL = document.querySelector("#txtURL");
    txtURL.addEventListener("blur", function (event) {
        enableButton();
    });
    txtURL.addEventListener("change", function (event) {
        enableButton();
    });
    txtURL.addEventListener("input", function (event) {
        enableButton();
    });

    const txtTop = document.querySelector("#txtTop");
    txtTop.addEventListener("blur", function (event) {
        enableButton();
    });
    txtTop.addEventListener("change", function (event) {
        enableButton();
    });
    txtTop.addEventListener("input", function (event) {
        enableButton();
    });

    const txtBottom = document.querySelector("#txtBottom");
    txtBottom.addEventListener("blur", function (event) {
        enableButton();
    });
    txtBottom.addEventListener("change", function (event) {
        enableButton();
    });
    txtBottom.addEventListener("input", function (event) {
        enableButton();
    });

    const btnSubmit = document.querySelector("#btnSubmit");
});

// Execute once when window is loaded and rendered.
window.addEventListener("load", function (event) {
    console.log("Window loaded");
});

function enableButton() {
    if ((txtURL.value === "") ||
        (txtTop.value === "") ||
        (txtBottom.value === "")) {
        btnSubmit.disabled = true;
    }
    else {
        btnSubmit.disabled = false;
    }
}
