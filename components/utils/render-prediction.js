 export default function renderPredictions(predictions, ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //fonts
    const font= "20px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";


    predictions.forEach(prediction => {
        const[x, y, width, height] = prediction["bbox"];

        const isPerson = prediction.class=== "person";

        //bounding or border box

        ctx.strokeStyle = isPerson ? "#0000FF" : "#008000";
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);

        //fillstyle

        ctx.fillStyle = `rgba(0, 0, 255, ${isPerson ? 0.4 : 0.2})`;
        ctx.fillRect(x, y, width, height);

        //label background
        ctx.fillStyle = isPerson ? "#0000FF" : "#008000";
        const textWidth = ctx.measureText(prediction.class).width;
        const textHeight = parseInt(font, 10);

        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

        ctx.fillStyle = "#000000";
        ctx.fillText(prediction.class, x, y);
    })
}
