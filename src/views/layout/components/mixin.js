export default class BackgroundCircle {
    constructor() {
        this.canvas = document.querySelector("#bubbles");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.c = this.canvas.getContext("2d"); /*context*/
        this.mouse = {
            x: undefined,
            y: undefined
        };

        this.maxRadius = 40;
        this.minRadius = 2;
        this.colourArray = ["#17468A", "#4C8DCA", "#78E5EB", "#F5F0F2", "#E12D53"];
        this.circleArray = [];
    }
    init() {
        //red dots
        this.circleArray = []
        // this.canvas.width = window.innerWidth;
        // this.canvas.height = window.innerHeight;
        for (var i = 0; i < 100; i++) {
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var dx = (Math.random() - 0.5) * 2;
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            var dy = (Math.random() - 0.5) * 2;
            var radius = Math.random() * 4 + 1;
            this.circleArray.push(
                new Circle(
                    x,
                    y,
                    dx,
                    dy,
                    radius,
                    this.colourArray[Math.floor(Math.random() * this.colourArray.length)],
                    this.c
                )
            );
        }
    }
    animate = () => {
        requestAnimationFrame(this.animate);
        this.c.clearRect(0, 0, innerWidth, innerHeight);

        for (var i = 0; i < this.circleArray.length; i++) {
            this.circleArray[i].update();
        }
    }

}




class Circle {
    constructor(x, y, dx, dy, radius, colorFill, c) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.colorFill = colorFill
        this.c = c


    }
    draw() {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        this.c.fillStyle = this.colorFill;
        this.c.fill();
    };
    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.y = this.y + this.dy;
        this.x = this.x + this.dx;
        //interactivaity

        this.draw();
    };
}


// init();
// animate();