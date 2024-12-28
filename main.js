const options = {
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#0B021A"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "delay": 0,
  "fullScreen": {
    "enable": true,
    "zIndex": -1
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "particles": {
    "color": {
      "value": "#888",
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": []
    },
    "move": {
      "enable": true,
      "random": false,
      "size": true,
      "speed": 0.2,
      "straight": false,
    },
    "number": {
      "density": {
        "enable": true,
        "width": 1920,
        "height": 1080
      },
      "value": 300
    },
    "opacity": {
      "value": {
        "min": 0.1,
        "max": 0.5
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 0.25,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {},
      "type": "circle"
    },
    "size": {
      "value": 2,
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "smooth": false,
  "zLayers": 100,
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}


tsParticles.load("particles-js-id", options).then(container => {
	console.log("callback - tsparticles config loaded");
}).catch(error => {
	console.error(error);
});


function tagger(element, text, tag) {
  // This is really not a good way but not being able to edit the HTML sucks
  element.innerHTML = element.innerHTML.replaceAll(text, `<${tag}>${text}</${tag}>`)
}


const h1 = document.getElementById('main-header').children[0];
tagger(h1, 'Winter Solstice', 'emph')

const intro = document.getElementById('introduction').children[1];
tagger(intro, 'astronomical event', 'emph')
tagger(intro, 'December in the Northern Hemisphere', 'b')
tagger(intro, 'June in the Southern Hemisphere', 'b')
tagger(intro, 'rebirth, reflection, and the triumph of light over darkness', 'u')

const introimgcont = document.createElement('div');
const introimg = document.createElement('img');
introimg.src = 'images/winter-landscape.jpg';
introimgcont.appendChild(introimg);
intro.insertAdjacentElement('afterend', introimgcont);

const science = document.querySelectorAll('#science > p');
science.forEach((sc) => {
  tagger(sc, '23.5 degrees', 'i')
})
tagger(science[1], 'December 21st or 22nd', 'b')
tagger(science[1], 'June 20th or 21st', 'b')
tagger(science[1], 'Tropic of Capricorn', 'u')
tagger(science[1], 'Tropic of Cancer', 'u')
tagger(science[2], '"solstice"', 'emph')
tagger(science[2], '"sol"', 'emph')
tagger(science[2], '"sistere"', 'emph')

tagger(document.getElementById('hemispheres').children[1], 'opposite seasons', 'b')

const nhemi = document.getElementById('northern-hemisphere').children[1];
tagger(nhemi, 'beginning of winter', 'emph')
tagger(nhemi, 'shortest day and longest night', 'u')

const shemi = document.getElementById('southern-hemisphere').children[1];
tagger(shemi, 'start of summer', 'emph')
tagger(shemi, 'longest day and shortest night', 'u')

tagger(document.getElementById('newgrange').children[1], 'over 5,000 years ago', 'u')
tagger(document.getElementById('intiraymi').children[1], 'ancient Incan festival', 'emph')
tagger(document.getElementById('modranicht').children[1], 'honor female deities and ancestral mothers', 'u')
tagger(document.getElementById('koliada').children[1], 'Slavic festival', 'emph')

const conclusion = document.getElementById('conclusion').children[1];
tagger(conclusion, 'connects humanity', 'b')
tagger(conclusion, 'hope, renewal, and the enduring human spirit', 'u')

const secret = document.createElement('button');
secret.id = 'secret-button'
secret.innerText = "Enable more cool stuff"
document.querySelector('#main-footer').insertAdjacentElement('beforeend', secret)

let secret_enabled = false;
secret.onclick = () => {
	const is_mobile = window.matchMedia("screen and (max-width: 720px)");
	if (is_mobile.matches) {
		secret.innerText = 'Please use a desktop browser for this!'
		return
	}
	const cscript = document.createElement('script');
	cscript.type = 'text/javascript';
	cscript.src = 'cooler.js';
	document.head.appendChild(cscript)
	secret_enabled = true
	secret.innerText = 'Reload to be normal!'
}

const tip = document.createElement('p');
tip.innerText = "To get the full experience, view this site on a desktop browser";
tip.id = 'mobile-tip';
h1.parentElement.insertAdjacentElement('beforeend', tip);

const observer = new IntersectionObserver(onIntersection, {
	root: null,
	threshold: .5
})

function onIntersection(entries, opts) {
	entries.forEach(entry =>  {
		const id = entry.target.getAttribute('id');
		if (entry.isIntersecting) {
			document.querySelector(`#main-nav>ul>li>a[href="#${id}"]`).parentElement.classList.add('active');
			document.getElementById(id).classList.add('active-section')
		} else {
			document.querySelector(`#main-nav>ul>li>a[href="#${id}"]`).parentElement.classList.remove('active');
			document.getElementById(id).classList.remove('active-section')
			if (secret_enabled)
				ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	})
}

// Use the observer to observe an element
document.querySelectorAll('section').forEach((el) => observer.observe(el))
