
//////////////////////////////////////////////////// variables

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const parts = [];

//////////////////////////////////////////////////// run

const run = async () => {

  const loop = () => {

    //////////////////////////////////////////////// add

    for (let i = 0; i < 1; i++) {
      parts.push({
        x: [Math.random() * (canvas.width + 100) - 100, Math.random()],
        y: [-100, 1 + Math.random() * 5],
        r: [Math.random() * 1 + 0.5]
      });
    }

    //////////////////////////////////////////////// clear
  
    c.clearRect(0, 0, canvas.width, canvas.height);
  
    //////////////////////////////////////////////// iterate

    c.fillStyle = 'white';

    for (let i = parts.length - 1; i >= 0; --i) {
      const { x, y, r } = parts[i];

      x[0] += x[1];
      y[0] += y[1];

      c.beginPath();
      c.arc(x[0], y[0], r[0], 0, Math.PI * 2);
      c.closePath();
      c.fill();

      if (x[0] > canvas.width || y[0] > canvas.height) parts.splice(i, 1);
    }

    //////////////////////////////////////////////// loop again
  
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

//////////////////////////////////////////////////// events

addEventListener('load', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  run();
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});