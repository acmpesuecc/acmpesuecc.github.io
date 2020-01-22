const particlesJSON = {
    "particles": {
            "number": {
                "value": 20,
                "density": {
                    "enable": true,
                    "value_area": 400 //Denser the smaller the number.
                }
            },
            "color": { //The color for every node, not the connecting lines.
                "value": "#01579b" //Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
            },
            "shape": {
                "type": "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
                "stroke": { //The border
                    "width": 1,
                    "color": "#145ea8"
                },
                "polygon": { //if the shape is a polygon
                    "nb_sides": 5
                },
                "image": { //If the shape is an image
                    "src": "",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.7,
                "random": true
            },
            "size": {
                "value": 10,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 200, //The radius before a line is added, the lower the number the more lines.
                "color": "#007ecc",
                "opacity": 0.5,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "top", //Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
                "random": true,
                "straight": false, //Whether they'll shift left and right while moving.
                "out_mode": "out", //What it'll do when it reaches the end of the canvas, either "out" or "bounce".
                "bounce": false, 
                "attract": { //Make them start to clump together while moving.
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
      //Negate the default interactivity
      "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
    
    particlesJS("particles-js", particlesJSON)