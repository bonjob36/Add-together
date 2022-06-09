const textbox1 = document.getElementById("textbox1");
const display = document.getElementById("answer");
let parent = document.getElementById('input_area');

let ans=0;
let idx='';

function prepare() {
    for(let i=0; i< Number(textbox1.value); i++){
        let input_data = document.createElement('input');
        let br = document.createElement( 'br' );
        //let p = document.createElement('p');
        input_data.type = 'text';
        input_data.id = 'inputform_' + i;
        input_data.placeholder=(i+1)+"番目の値を入力してね";
        parent.appendChild(input_data); 
        parent.appendChild(br);
        //p.innerHTML = '+';
        //if(i!=Number(textbox1.value)-1)parent.appendChild(p);
        
    }
}

function run(){
    ans = 0;
    for(let i=0; i< Number(textbox1.value); i++){
        idx = 'inputform_'+i;
        let num = Number(document.getElementById(idx).value);
        ans += num;
    }
    display.innerHTML = ans;
}

function refresh() {
    display.innerHTML = 0;
    textbox1.value = "";
    parent.innerHTML='';
}