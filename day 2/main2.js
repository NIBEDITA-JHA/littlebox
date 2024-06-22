const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;
const box = document.getElementById("box");
const bar=document.getElementById("bar");



const BAR_HEIGHT = 300;
const BOX_SIZE = 100;
const MAX_MARGIN_TOP = WINDOW_HEIGHT - BOX_SIZE;
const MAX_MARGIN_LEFT = WINDOW_WIDTH - BOX_SIZE;
let direction_x = 1;
let direction_y = 1;
let x_count = 60;
let y_count = 20;

let bar_top = 300

bar.draggable = true
bar.addEventListener("mousemove", (e) => {
    console.log(e.screenY)
    bar.style.top = (e.screenY - BAR_HEIGHT/2) + "px"
    bar_top = e.screenY - BAR_HEIGHT/2
    
})

function increaseMargin(){
    box.style.top = y_count+"px";
    box.style.left = x_count+"px";
    
    if(y_count >= MAX_MARGIN_TOP || y_count<= 0){
        direction_y*=-1;
    }
    if(x_count >= MAX_MARGIN_LEFT || x_count <= 60){
        //Check if bar position collides with ball
        if(x_count <= 60){
            if(y_count+BOX_SIZE/2 >= bar_top && y_count+BOX_SIZE/2 <= bar_top+BAR_HEIGHT){
                //Collides
            direction_x*=-1;
            x_count = 61
            } else {
            alert("GAME OVER")
            }
        } else {
        direction_x*=-1;
        }
    }
    y_count = y_count + direction_y*10;
    x_count = x_count + direction_x*10;
    
    
    
}
setInterval(increaseMargin,20); 
