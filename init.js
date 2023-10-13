let points = [];
let p1, p2;
let canvas = null;
let ctx = null;

function init(path, size) {

    points = [];

    p1 = new Path2D(path);
    p2 = new Path2D();

    let ratio = (canvas.width / size[0]) / 1.3; // 33 per cent

    let pathWidth = size[0] * ratio;
    let pathHeight = size[1] * ratio;

    let bbox = [
        canvas.width / 2 - pathWidth / 2,
        canvas.height / 2 - pathHeight / 2
    ];

    p2.addPath(p1, { e: bbox[0], f: bbox[1], a: ratio, d: ratio });

    let ranx, rany;
    let point;
    for (let i = 0; i <= 40000; i++) {    // points amount must depend on canvas size and text width

        ranx = Math.random() * pathWidth + bbox[0];
        rany = Math.random() * pathHeight + bbox[1];

        if (ctx.isPointInPath(p2, ranx, rany)) {

            // to make things easier to understand imma divide points 

            point = {
                'X': ranx,
                'Y': rany,
                'speedX': 0,
                'speedY': 0,
                'angle': 0,
                'range': 0,
                'size': 800 + Math.floor(Math.random() * 500 / 100) * 100,
                'IsActive': false,
                'InitialX': 0,
                'InitialY': 0,
                'initialSize': 0,
                'FadeInDelay': 0,
                'OneThatSpins': false,
                'OneThatFades': false,
                'FadingDirection': true,
                'SpinSpeed': 0,
            };

            if (Math.random() > .9) {
                point['FadeInDelay'] = 20;
            } else {
                point['FadeInDelay'] = 80;  // used as countdown
            }

            let angle = Math.random() * 360 * Math.PI / 180; // no radians kek
            let range = Math.random() * canvas.width / 5;  // may depend on canvas size

            point['InitialX'] = point['X'] + range * Math.sin(angle);
            point['InitialY'] = point['Y'] + range * Math.cos(angle);

            point['angle'] = angle + 180 * Math.PI / 180;
            point['range'] = range;

            if (Math.random() > .95) {

                point['OneThatSpins'] = true;

                if (Math.random() > .5) {
                    point['SpinSpeed'] = .002;
                } else {
                    point['SpinSpeed'] = .005;
                }

                if (Math.random() > .5) {
                    point['range'] = 5;
                } else {
                    point['range'] = 25;
                }

            }

            points.push(point);

        }

    }

}

onmessage = function(e) {

    if (canvas == null){
        canvas = e.data.canvas;
        ctx = canvas.getContext("2d");
    } else {
        init(e.data[0], e.data[1]);
        postMessage(points);
    }

}