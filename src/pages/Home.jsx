import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // 
import './Home.css'
import image from '../assets/nandita.jpg'


function Home() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);
  return (
    <div className="h-screen relative w-[100%] bg-slate-800 container mx-auto" id="home">
     

    <Particles className="absolute z-10 h-screen w-screen"
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
   
    options={
        {
            "autoPlay": true,
            "background": {
              "color": {
                "value": "#0d47a1" //#0d47a1
              },
              
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover",
              "opacity": 0.1  //change koralm 1 ache
            },
            "backgroundMask": {
              "composite": "destination-out",
              "cover": {
                "color": {
                  "value": "#fff" //fff chilo
                },
                "opacity": 1
              },
              "enable": false
            },
            "defaultThemes": {},
            "delay": 0,
            "fullScreen": {
              "enable": false, //true kora ache
              "zIndex": 0  //zindex 1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 120,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": false,  //true chilo
                  "mode": "repulse"
                },
                "onDiv": {
                  "selectors": [],
                  "enable": false,
                  "mode": [],
                  "type": "circle"
                },
                "onHover": { // hover korle ja hoy
                  "enable": false,  //change koralm true chilo
                  "mode": "bubble",
                  "parallax": {
                    "enable": false,
                    "force": 2,
                    "smooth": 10 
                  }
                },
                "resize": {
                  "delay": 0.5,
                  "enable": true
                }
              },
              "modes": {
                "trail": {
                  "delay": 1,
                  "pauseOnStop": false,
                  "quantity": 1
                },
                "attract": {
                  "distance": 200, //200 chilo
                  "duration": 0.4,
                  "easing": "ease-out-quad",
                  "factor": 1,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "bounce": {
                  "distance": 200
                },
                "bubble": {
                  "distance": 400,
                  "duration": 0.3,
                  "mix": false,
                  "opacity": 1,
                  "size": 4,
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": []
                  }
                },
                "connect": {
                  "distance": 80,
                  "links": {
                    "opacity": 0.5
                  },
                  "radius": 60
                },
                "grab": {
                  "distance": 400,
                  "links": {
                    "blink": false,
                    "consent": false,
                    "opacity": 0.5 //.5
                  }
                },
                "push": {
                  "default": true,
                  "groups": [],
                  "quantity": 4
                },
                "remove": {
                  "quantity": 2
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad",
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "selectors": []
                  }
                },
                "slow": {
                  "factor": 3,
                  "radius": 200
                },
                "light": {
                  "area": {
                    "gradient": {
                      "start": {
                        "value": "#ffffff" //ffffff
                      },
                      "stop": {
                        "value": "#000000"
                      }
                    },
                    "radius": 1000 
                  },
                  "shadow": {
                    "color": {
                      "value": "#000000"
                    },
                    "length": 2000
                  }
                }
              }
            },
            "manualParticles": [],
            "particles": {
              "bounce": {
                "horizontal": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                },
                "vertical": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                }
              },
              "collisions": {
                "absorb": {
                  "speed": 2
                },
                "bounce": {
                  "horizontal": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  },
                  "vertical": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  }
                },
                "enable": false,
                "maxSpeed": 50,
                "mode": "bounce",
                "overlap": {
                  "enable": true,
                  "retries": 0
                }
              },
              "color": {
                "value": "#fff", //fff chilo eita black korche
                "animation": {
                  "h": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "delay": 0,
                    "decay": 0,
                    "sync": true
                  },
                  "s": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "delay": 0,
                    "decay": 0,
                    "sync": true
                  },
                  "l": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "delay": 0,
                    "decay": 0,
                    "sync": true
                  }
                }
              },
              "groups": {},
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 90
                },
                "attract": {
                  "distance": 200,
                  "enable": false,
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "center": {
                  "x": 50,
                  "y": 50,
                  "mode": "percent",
                  "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "bottom",
                "drift": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 50
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                  "acceleration": 0,
                  "enable": false
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fill": {}
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "width": 1920,
                  "height": 1080      //height 1080 deoya ache
                },
                "limit": 0,
                "value": 400
              },
              "opacity": {
                "random": {
                  "enable": true,
                  "minimumValue": 0.1
                },
                "value": {
                  "min": 0.1,
                  "max": 0.5
                },
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 1, //speed
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none",
                  "minimumValue": 0.1
                }
              },
              "reduceDuplicates": false,
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "close": true,
                "fill": true,
                "options": {},
                "type": "circle"
              },
              "size": {
                "random": {
                  "enable": false, //true chilo
                  "minimumValue": 1
                },
                "value": {
                  "min": 1,
                  "max": 3 //change korlam circle koto boro hobe
                },
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 50, //change koralm 40 chilo
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none",
                  "minimumValue": 0.1
                }
              },
              "stroke": {
                "width": 0
              },
              "zIndex": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
              },
              "destroy": {
                "bounds": {},
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 3
                  },
                  "rate": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": {
                      "min": 4,
                      "max": 9
                    }
                  },
                  "sizeOffset": true,
                  "particles": {}
                }
              },
              "roll": {
                "darken": {
                  "enable": false,
                  "value": 0
                },
                "enable": false,
                "enlighten": {
                  "enable": false,
                  "value": 0
                },
                "mode": "vertical",
                "speed": 25
              },
              "tilt": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "enable": false
              },
              "twinkle": {
                "lines": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                },
                "particles": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                }
              },
              "wobble": {
                "distance": 5,
                "enable": false,
                "speed": {
                  "angle": 50,
                  "move": 10
                }
              },
              "life": {
                "count": 0,
                "delay": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "sync": false
                },
                "duration": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.0001
                  },
                  "value": 0,
                  "sync": false
                }
              },
              "rotate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "path": false
              },
              "orbit": {
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 45
                },
                "width": 1
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "#ffffff" //ffffff
                },
                "consent": false,
                "distance": 500,
                "enable": false,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#000" //000
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 2,
                "warp": false
              },
              "repulse": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
              }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "smooth": false,
            "style": {},
            "themes": [],
            "zLayers": 100,
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            }
          }
    }
/>

<div className="h-screen w-[100vw] absolute z-20 text-white grid grid-cols-2">
 {/* <div className="hero flex items-centre justify-between"> */}
  <div className="flex justify-center items-center ">
    <img src={image} alt="Profile" className="w-[300px] h-[300px] rounded-[50%] "/>

  </div>
  <div className="flex justify-center items-center pr-[100px] py-5">
    <div className="">
    <h1 className="lg:text-left lg:text-4xl text-2xl text-current mb-2 ">Hi There!</h1>
    <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold lg:text-left text-secondary custom-fontweight">I'm  <span className="text-cyan-500">Nandita <br/> Mandal</span> </h1>
    <div className="Typewriter" data-testid="typewriter-wrapper"><span class="Typewriter__wrapper">React Stack Developer</span><span className="Typewriter__cursor">|</span></div>
    
    <div className="mt-5">
      <button className=" transition-all ease-linear duration-[1000ms] border-2 border-indigo-600 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 hover:scale-125 rounded">
        <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/18xWpKY8YC0EeIZ2PK4xBxk0XY7P7-NGQ/view?usp=sharing" >DOWNLOAD CV</a>
      </button>
    </div>
    </div>
  {/* </div> */}
</div>


  </div>
</div>
    
  )
}

export default Home