
// WALLPAPER ANIMADO COM PARTÍCULAS COLORIDAS

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.createElement("canvas");
    document.body.prepend(canvas);

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";

    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const colors = [
        "#ff0000",
        "#ff8800",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#0088ff",
        "#ff00ff"
    ];

    const particles = [];

    for(let i = 0; i < 120; i++) {

        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 5 + 2,
            dx: (Math.random() - 0.5) * 1.5,
            dy: (Math.random() - 0.5) * 1.5,
            color: colors[Math.floor(Math.random() * colors.length)]
        });

    }

    function animate() {

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach(p => {

            p.x += p.dx;
            p.y += p.dy;

            if(p.x < 0 || p.x > canvas.width)
                p.dx *= -1;

            if(p.y < 0 || p.y > canvas.height)
                p.dy *= -1;

            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = p.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
});