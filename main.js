var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var img_dino = new Image();
img_dino.src = 'dino.png';
var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img_dino, this.x, this.y)
    }
}
var img1 = new Image();
img1.src = 'cactus.png'
dino.draw()
class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;        
    }
    draw(){    
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height)    
        ctx.drawImage(img1, this.x, this.y)
    }
}
var timer = 0;
var cactus_list = [];
var jump_timer = 0;
var animation;
function play(){
    animation = requestAnimationFrame(play);
    timer++;
    ctx.clearRect(0,0,canvas.width, canvas.height) 
    
    if (timer%240 == 0){
        var cactus = new Cactus();
        cactus_list.push(cactus);        
    }
    
    cactus_list.forEach((a, i, o)=>{
        if (a.x < 0){
            o.splice(i, 1)
        }
        a.x--;        
        a.draw();
        collision(dino, a);
    })
    if (jump == true){
        dino.y-=2;
        jump_timer++;    
    }else{
        if (dino.y >= 200){
            dino.y = 200;
        }else{
            dino.y+=2;
        }
    }
    if (jump_timer > 50){
        jump = false;
    }


    dino.draw()    
}

play();

var jump = false;
document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        jump = true;
    }
})
function collision(dino, cactus){
    var x_len = cactus.x - (dino.x + dino.width);
    var y_len = cactus.y - (dino.y + dino.height);

    if (x_len < 0 && y_len < 0){
        // ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}