<template>
  <section class="tg-main">
    <router-view name="background"></router-view>
    <canvas id="bubbles"></canvas>
    <router-view class="main-view"></router-view>
  </section>
</template>

<script>
export default {
  name: "tg-main",
  methods: {
    onResize: function() {}
  },
  // mounted() {
  //   var canvas = document.querySelector("#bubbles");
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   var c = canvas.getContext("2d"); /*context*/
  //   // c.fillStyle = "rgba(255, 0, 0, 0.5)";
  //   // c.fillRect(105, 100, 100, 100);
  //   // c.fillStyle = "rgba(0, 0, 255, 0.5)";
  //   // c.fillRect(210, 90, 95, 110);
  //   // c.fillStyle = "rgba(0, 255, 0, 0.5)";
  //   // c.fillRect(310, 80, 90, 120);

  //   // //line
  //   // c.beginPath();
  //   // c.moveTo(400, 300);
  //   // c.lineTo(500, 500);
  //   // c.lineTo(600, 600);
  //   // c.strokeStyle = "red";
  //   // c.stroke();

  //   // //arc
  //   // c.beginPath();
  //   // c.arc(200, 300, 30, 0, Math.PI * 2, false);
  //   // c.strokeStyle = "blue";
  //   // c.stroke();

  //   // for (let i = 0; i < 100; i++) {
  //   //   var x = Math.random() * window.innerWidth;
  //   //   var y = Math.random() * window.innerHeight;
  //   //   var letters = "0123456789ABCDEF";
  //   //   var color = "#";
  //   //   color += letters[Math.floor(Math.random() * 16)];
  //   //   c.beginPath();
  //   //   c.arc(x, y, 30, 0, Math.PI * 2, false);
  //   //   c.strokeStyle = "blue";
  //   //   c.stroke();
  //   // }

  //   var mouse = {
  //     x: undefined,
  //     y: undefined
  //   };

  //   var maxRadius = 40;
  //   var minRadius = 2;
  //   var colourArray = ["#17468A", "#4C8DCA", "#78E5EB", "#F5F0F2", "#E12D53"];
  //   this.onResize = function() {
  //     init();
  //   };
  //   window.addEventListener("resize", this.onResize);

  //   function Circle(x, y, dx, dy, radius, colorFill) {
  //     this.x = x;
  //     this.y = y;
  //     this.dx = dx;
  //     this.dy = dy;
  //     this.radius = radius;
  //     this.minRadius = radius;
  //     this.draw = function() {
  //       c.beginPath();
  //       c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

  //       c.fillStyle = colorFill;
  //       c.fill();
  //     };

  //     this.update = function() {
  //       if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
  //         this.dx = -this.dx;
  //       }
  //       if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
  //         this.dy = -this.dy;
  //       }
  //       this.y = this.y + this.dy;
  //       this.x = this.x + this.dx;
  //       //interactivaity

  //       this.draw();
  //     };
  //   }

  //   var circleArray = [];

  //   function init() {
  //     circleArray = [];
  //     //red dots
  //     for (var i = 0; i < 100; i++) {
  //       var x = Math.random() * (innerWidth - radius * 2) + radius;
  //       var dx = (Math.random() - 0.5) * 2;
  //       var y = Math.random() * (innerHeight - radius * 2) + radius;
  //       var dy = (Math.random() - 0.5) * 2;
  //       var radius = Math.random() * 4 + 1;
  //       circleArray.push(
  //         new Circle(
  //           x,
  //           y,
  //           dx,
  //           dy,
  //           radius,
  //           colourArray[Math.floor(Math.random() * colourArray.length)]
  //         )
  //       );
  //     }
  //   }

  //   function animate() {
  //     requestAnimationFrame(animate);
  //     c.clearRect(0, 0, innerWidth, innerHeight);

  //     for (var i = 0; i < circleArray.length; i++) {
  //       circleArray[i].update();
  //     }
  //   }
  //   init();
  //   animate();
  // },
  destroyed(){
    window.removeEventListener('resize',this.onResize)
  }
};
</script>

<style lang="scss">
.tg-main {
  position: relative;
  .main-view {
    position: relative;
    z-index: 10;
    padding-bottom: 6rem;
  }
  #bubbles {
    width: 100%;
    height: auto;
    position: fixed;
    top: 200px;
  }
}
</style>
