/* use eslint 
 */
function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min +1)) + min
}


let headerTable = ['id', 'Name', 'Email', 'Mobile', 'Age', 'Tuition']
let idStudent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const infoForm = document.getElementById("infoForm")
const tableInfo = document.getElementById("tableInfo")

/*-------- header table---------*/
const raw1El = document.createElement("tr")
tableInfo.appendChild(raw1El)

for (let i = 0; i < headerTable.length ; i++) {
    const thEl = document.createElement("th")
    raw1El.appendChild(thEl)
    thEl.textContent = headerTable[i]
}


/*-----------constructer ------*/

function Student(email, mobile, tuition) {
    this.email = email 
    this.mobile = mobile 
    this.tuition = tuition
    this.name = email.substring(0,email.length-9)
    this.age = randomNumber(18, 24)
    
    Student.all.push(this)
    
}

Student.all = []; 
console.log(Student.all)


function rerieve() {
    if(localStorage.length > 0){
        Student.all = JSON.parse(localStorage.getItem("car"))

        render2()
    }
    
}



Student.prototype.render = function() {
    const raw2 = document.createElement("tr")
    tableInfo.appendChild(raw2)
    raw2.innerHTML='';

    const td1El = document.createElement("td")
    raw2.appendChild(td1El)
    td1El.textContent = "1"
    
    const td2El = document.createElement("td")
    raw2.appendChild(td2El)
    td2El.textContent = this.name
    const td3El = document.createElement("td")
    raw2.appendChild(td3El)
    td3El.textContent = this.email
    const td4El = document.createElement("td")
    raw2.appendChild(td4El)
    td4El.textContent = this.mobile
    const td5El = document.createElement("td")
    raw2.appendChild(td5El)
    td5El.textContent = this.age
    const td6El = document.createElement("td")
    raw2.appendChild(td6El)
    td6El.textContent = this.tuition

    raw2.removeChild(raw2.lastElementChild);


}


function render2() {

    for (let i = 0; i<Student.all.length; i++){
        const raw2 = document.createElement("tr")
        tableInfo.appendChild(raw2)
        raw2.innerHTML='';
    
        
        
    
    
        const td1El = document.createElement("td")
        raw2.appendChild(td1El)
        td1El.textContent = "1"
    
    
        
        const td2El = document.createElement("td")
        raw2.appendChild(td2El)
        td2El.textContent = Student.all.name
        const td3El = document.createElement("td")
        raw2.appendChild(td3El)
        td3El.textContent = Student.all.email
        const td4El = document.createElement("td")
        raw2.appendChild(td4El)
        td4El.textContent = Student.all.mobile
        const td5El = document.createElement("td")
        raw2.appendChild(td5El)
        td5El.textContent = Student.all.age
        const td6El = document.createElement("td")
        raw2.appendChild(td6El)
        td6El.textContent = Student.all.tuition
        localStorage.setItem("car", JSON.stringify(Student.all))

    }

}
 



function hundle(event) {
    event.preventDefault()

    let email = event.target.studentEmail.value 
    let mobile = event.target.mobileNumber.value 
    let tuition = event.target.tuition.value

    let newStudent = new Student(email, mobile, tuition)
    newStudent.render()

    localStorage.setItem("car", JSON.stringify(Student.all))


} 


infoForm.addEventListener('submit', hundle)
rerieve()

