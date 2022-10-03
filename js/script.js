document.getElementById("mark").addEventListener(
    "click", function read() {
        const wrap = document.querySelectorAll(".one")
        document.querySelector('.num').textContent = '0'

        var i;
        for (i = 0; i < wrap.length; i++) {
            wrap[i].style.backgroundColor = "white";
        }
    }
)

