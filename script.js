const buttons = document.getElementsByClassName('tosin')
const displayTray= document.getElementById('display');
var equaltoClicked = false;

let oper=['*','+','/','.','-']

for(let button of buttons){
    button.addEventListener('click', () => {
        switch (button.innerText) {
            case "AC":
                 displayTray.value ="";
                break;
                case ")":
                    if (equaltoClicked ==false)displayTray.value += button.innerText
                    else reset(button.innerText); 
                break;
            case "1":
                if (equaltoClicked ==false)displayTray.value += button.innerText
               else reset(button.innerText); 
                break;
            case "2":
               if(equaltoClicked ==false)displayTray.value += button.innerText
               else reset(button.innerText); 
            
                break; 
            case "3":
                // displayTray.value +=button.innerText;
                if (equaltoClicked ==false)displayTray.value += button.innerText
               else reset(button.innerText); 

                break; 
            case "(":
                // displayTray.value +=button.innerText;
                if (equaltoClicked ==false)displayTray.value += button.innerText
               else reset(button.innerText); 

                break; 
            case "4":
                // displayTray.value +=button.innerText;
                if (equaltoClicked ==false)displayTray.value += button.innerText
                else reset(button.innerText); 

                break; 
            case "5":
                if (equaltoClicked ==false)displayTray.value += button.innerText
                else reset(button.innerText); 

                break; 
            case "6":
                if (equaltoClicked ==false)displayTray.value += button.innerText
                else reset(button.innerText); 

                break;
              case "7":
                if (equaltoClicked ==false)displayTray.value += button.innerText
                else reset(button.innerText); 

             break;
             case "8":
                if (equaltoClicked ==false)displayTray.value += button.innerText
                else reset(button.innerText); 

             break;
             case "9":
                if (equaltoClicked ==false)displayTray.value += button.innerText
                else reset(button.innerText); 

             break;
             case "0":
                if (equaltoClicked ==false)displayTray.value += button.innerText
               else reset(button.innerText); 

             break;
             case "00":
                if (equaltoClicked ==false)displayTray.value += button.innerText
                else reset(button.innerText); 
             break;
             case "=":
                display.value = eval(display.value);
                equaltoClicked=true;
                break;
                case "C":
                    (equaltoClicked==false)?display.value = display.value.toString().slice(0,-1): display.value="";
                    break;
            default:
            displayTray +=button.innerText;
                break;
        }
    })
}


function fact(screen){
    var num, f;
    f=1
    num = screen.value;
    for(var i=1; i<=num; i++){
        f = f*i;
    }
    i=i-1;
    screen.value=f;
}



function multiply(element, dis){
    let elem= document.getElementById(element);
    let attr= elem.getAttribute('value');
    let displayValue= dis.value

     
    if(displayValue[displayValue.length-1] == "*"){
             displayValue = displayValue.replace(/.$/, attr);
             dis.value=displayValue;
         }
     else if(displayValue[displayValue.length-1] == "+"){
        displayValue = displayValue.replace(/.$/, attr);
        dis.value=displayValue;
       }
       else if(displayValue[displayValue.length-1] == "/"){
        displayValue = displayValue.replace(/.$/, attr);
        dis.value=displayValue;
       }
       else if(displayValue[displayValue.length-1] == "."){
        displayValue = displayValue.replace(/.$/, attr);
        dis.value=displayValue;
       }
       else if(displayValue[displayValue.length-1] == "-"){
        displayValue = displayValue.replace(/.$/, attr);
        dis.value=displayValue;
       }

    else {
        dis.value += attr;
    }
}

function reset(input){

     let displayValue = displayTray.value;
    
     (oper.includes(displayValue[displayValue.length-1]))?displayTray.value += input : displayTray.value = input;
    equaltoClicked = false;
    
    }

