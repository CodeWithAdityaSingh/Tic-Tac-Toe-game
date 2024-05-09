let boxes = document.querySelectorAll(".box")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let newbtn = document.querySelector("#new-btn")
let turnO = true;
let resetbtn = document.querySelector("#reset-btn")

const winnpattern = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]

]


boxes.forEach((e) => {
    e.addEventListener("click", () => {
        if (turnO) {
            e.innerText = "O"
            turnO = false
        }
        else {
            e.innerText = "X"
            turnO = true
        }
        e.disabled = true
        winpattern()
    })
})

let reset = () => {
    turnO = true
    enablebox()
    msgcontainer.classList.add("hide")

}

let shoWwinner = (val) => {
    msg.innerText = ` the winner is ${val}`
    msgcontainer.classList.remove("hide")
    disabledbox()
}

let disabledbox = () => {
    for (let elements of boxes) {
        elements.disabled = true
    }

}
let enablebox = () => {

    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

function winpattern() {

    for (let elements of winnpattern) {
        // console.log(elements[0], elements[1], elements[2])
        // console.log(boxes[elements[0]], boxes[elements[1]], boxes[elements[2]])
        // console.log(boxes[elements[0]].innerText, boxes[elements[1]].innerText, boxes[elements[2]].inner)

        let con1 = boxes[elements[0]].innerText
        let con2 = boxes[elements[1]].innerText
        let con3 = boxes[elements[2]].innerText
        // console.log(con1)


        if (con1 != "" && con2 != "" && con3 != "") {
            if (con1 === con2 && con2 === con3) {
                console.log("winner", con1)
                shoWwinner(con1)
                // for(let box of boxes){
                //     box.disabled = true
                // }
            }
        }
    }
}


newbtn.addEventListener("click", reset)
resetbtn.addEventListener("click", reset)




