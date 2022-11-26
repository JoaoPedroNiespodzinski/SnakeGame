import Apple from "./classes/apple.js";
import Snake from "./classes/snake.js";
import Sprite from "./sprite.js";

function Game() {
    const canvas = document.querySelector("#canvas");
    const canvasHeight = 500, canvasWidth = 500;
    const context = canvas.getContext("2d");
    let time = 0;

    const snake = new Snake();
    let apple = new Apple();

    window.addEventListener("keydown", (e) => keyDown(e));
    window.addEventListener("keyup", (e) => keyUp(e));
    
    context.canvas.width = Sprite.canvasSize.width;
    context.canvas.height = Sprite.canvasSize.height;
    
    const loop = () => {

        context.clearRect(0, 0, canvasWidth, canvasHeight);
    
        update();
        draw();

        time += 1;
        window.requestAnimationFrame(loop);

    }

    const draw = () => {
        snake.draw(context);
        apple.draw(context);
    }

    const update = () => {
        snake.update(time, apple);

        if(apple.eaten)
            apple = new Apple();
        else
            apple.update(time);
    }

    const keyDown = (e) => {
        snake.keyDown(e);
    }

    const keyUp = (e) => {
        snake.keyUp(e);
    }
    
    return {
        loop
    }
}

const game = new Game();
game.loop();

