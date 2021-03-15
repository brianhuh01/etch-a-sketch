
const body = document.querySelector('body');
const container = document.createElement("div");
container.classList.add('container')
body.appendChild(container);

const button = document.createElement('button');
button.innerHTML = "Start/Reset"
body.insertBefore(button, container);

button.style.display = "flex";

button.style.margin = "30vh auto";


//let colors = ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#8A2BE2", "#A52A2A","#5F9EA0", "#E9967A"]



        function askUser() {
            let user = prompt("enter a numer between 1-100") /// this should be the input from the textbox
            if (user == null) {
                alert("canceled")
                return
            }
            else {
                user = parseInt(user)
            
                if (isNaN(user)) {
                    alert("Enter a number")
                    return askuser()
                }
                
                else if (user <= 0) {
                    alert("Enter a positive numbeer")
                    return askuser()
                }
                else if (user > 100) {
                    alert("Enter a number less than 100")
                    return askuser()
                }    

                else {
                    return user
                }
        }
        }


        function createDiv() {
                userinput = askUser()
                container.style.gridTemplateColumns = ``;
                container.style.gridTemplateRows = ``;
                for (let i = 0; i<userinput*userinput; i++) {
                    const div = document.createElement('div');
                    div.classList.add(`grid`)
                    //div.style.backgroundColor = `${colors[i%colors.length]}`  not using this one
                    div.style.margin = '1px'
                    div.style.backgroundColor = "blue";
                    //when hovering change color
                    div.addEventListener("mouseover", function() {
                        this.style.backgroundColor="orange"
                    })


                    container.appendChild(div);

                }
    
                function repeat() {
                    let fr = ""
                    for (let i = 0; i < userinput; i++) {
                        fr += "1fr "
                        }
                    fr = fr.slice(0, -1)
                    return fr
                    };
                
                let gridnumber = repeat()

                button.style.margin = "15vh auto";
                container.style.margin = "0 auto";
                container.style.backgroundColor = "red";
                container.style.height = "500px";
                container.style.width = "500px";

                container.style.display='grid';
                container.style.gridTemplateColumns = gridnumber;
                container.style.gridTemplateRows = gridnumber;





        } //end of createDiv


        






            
        
        
    


    button.addEventListener("click", function() {
        container.style.gridTemplate = "none";
        
        const grids = document.querySelectorAll("div.grid")
        grids.forEach(grid =>
            grid.remove()
        )
        createDiv()    
        }
        
        )
        

