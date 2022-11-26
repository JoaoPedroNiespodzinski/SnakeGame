import Sprite from "../sprite.js";

function Snake (pos) {

    const moveVelocity = 10;
    const position = new Set([{
        x: 0,
        y: 0
    }]);
    const keysPressed = new Set();

    const draw = (context) => {
        //head
        context.fillStyle = "rgb(0, 255, 0)";
        context.fillRect([...position][0].x, [...position][0].y, Sprite.size, Sprite.size);
        //tail
        context.fillStyle = "rgb(0, 0, 0)";
        let index = 0;
        position.forEach((tail) => {
            if(index !== 0)
                context.fillRect(tail.x, tail.y, Sprite.size, Sprite.size);
            index += 1;
        });
        
    }

    const update = (time, apple) => {

        move(time);
        eat(apple);
            
    }

    const keyDown = (e) => {
        keysPressed.add(e.key);
    }

    const keyUp = (e) => {
        keysPressed.delete(e.key);
    }

    const move = (time) => {
        if(time%moveVelocity == 0 ){
            switch([...keysPressed][keysPressed.size - 1]){
                case "w":
                    if([...position][0].y > 0){
                        let lastY = [...position][0].y;
                        let lastX = [...position][0].x;
                        let index = 0;
                        position.forEach((tail) => {
                            if(index === 0)
                                tail.y -= (1 * Sprite.size);
                            else{
                                let tempY = lastY;
                                let tempX = lastX;
                                lastY = tail.y;
                                lastX = tail.x;
                                tail.y = tempY;
                                tail.x = tempX;
                            }
                            index += 1;
                        });
                    }
                    break;
                case "a":
                    if([...position][0].x > 0){
                        let lastX = [...position][0].x;
                        let lastY = [...position][0].y;
                        let index = 0;
                        position.forEach((tail) => {
                            
                            if(index === 0)
                                tail.x -= (1 * Sprite.size);
                            else{
                                let tempX = lastX;
                                let tempY = lastY;
                                lastX = tail.x;
                                lastY = tail.y;
                                tail.x = tempX;
                                tail.y = tempY;
                            }
                            index += 1;
                        });
                    }
                    break;
                case "s":
                    if(([...position][0].y + Sprite.size) < Sprite.canvasSize.height){
                        let lastY = [...position][0].y;
                        let lastX = [...position][0].x;
                        let index = 0;
                        position.forEach((tail) => {
                            if(index === 0)
                                tail.y += (1 * Sprite.size);
                            else{
                                let tempY = lastY;
                                let tempX = lastX;
                                lastY = tail.y;
                                lastX = tail.x;
                                tail.y = tempY;
                                tail.x = tempX;
                            }
                            index += 1;
                        });
                    }
                    break;
                case "d":
                    if(([...position][0].x + Sprite.size) < Sprite.canvasSize.width){
                        let lastX = [...position][0].x;
                        let lastY = [...position][0].y;
                        let index = 0;
                        position.forEach((tail) => {
                            
                            if(index === 0)
                                tail.x += (1 * Sprite.size);
                            else{
                                let tempX = lastX;
                                let tempY = lastY;
                                lastX = tail.x;
                                lastY = tail.y;
                                tail.x = tempX;
                                tail.y = tempY;
                            }
                            index += 1;
                        });
                    }
                    break;
            }
        }
    }

    const eat = (apple) => {
        if(apple.position.x === [...position][0].x && apple.position.y === [...position][0].y){

            switch([...keysPressed][keysPressed.size - 1]){
                case "w":
                    if([...position][0].y > 0){
                        position.add({
                            x: [...position][0].x,
                            y: [...position][0].y + (1 * Sprite.size)
                        });
                    }
                    break;
                case "a":
                    if([...position][0].x > 0){
                        position.add({
                            x: [...position][0].x + (1 * Sprite.size),
                            y: [...position][0].y
                        });
                    }
                    break;
                case "s":
                    if(([...position][0].y + Sprite.size) < Sprite.canvasSize.height){
                        position.add({
                            x: [...position][0].x,
                            y: [...position][0].y - (1 * Sprite.size)
                        });
                    }
                    break;
                case "d":
                    if(([...position][0].x + Sprite.size) < Sprite.canvasSize.width){
                        position.add({
                            x: [...position][0].x - (1 * Sprite.size),
                            y: [...position][0].y
                        });
                    }
                    break;
            }
            apple.eaten = true;
        }
    }

    return {
        eat,
        update,
        draw,
        keyDown,
        keyUp
    }

}

export default Snake;