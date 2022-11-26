import Sprite from "../sprite.js";

function Apple (pos) {

    let eaten = false;

    const position = pos || {
        x: Math.floor(Math.random() * ((Sprite.canvasSize.width / Sprite.size) - 0 ) + 0) * Sprite.size,
        y: Math.floor(Math.random() * ((Sprite.canvasSize.height / Sprite.size) - 0 ) + 0) * Sprite.size
    }

    const draw = (context) => {
        context.fillStyle = "rgb(255, 0, 0)";
        
        context.fillRect(position.x, position.y, Sprite.size, Sprite.size);
    }

    const update = (time) => {
            
    }

    return {
        draw,
        update,
        position,
        eaten
    }

}

export default Apple;