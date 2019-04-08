const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
 
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
function fill(items, values) {
  items.forEach((item, index) => item.innerText = values[index]);
}

//nav
let nav = document.querySelector('nav');
let firstNav = document.createElement('a')
let lastNav = document.createElement('a')

let navItems = document.querySelectorAll('nav a');
let navValues = Object.values(siteContent['nav']);

fill(navItems, navValues);

navItems.forEach((item) => item.style.color = "green")



let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//cta

let codeSnip= document.getElementById('cta-img')
codeSnip.setAttribute('src',siteContent['cta']['img-src']);

//let cta=document.querySelector('h1')
//cta.textContent = siteContent['cta']['h1'];

let ctaItems = document.querySelectorAll('.cta h1');
let ctaValues = Object.values(siteContent['cta']);
fill(ctaItems,ctaValues);

ctaItems.forEach((item) => item.style.color = "blue")
ctaItems.forEach((item) => item.style.background = "silver")


let ctabutton=document.querySelector('button')
ctabutton.textContent=siteContent['cta']['button'];

//Main content
let mainH4 = document.querySelectorAll('.text-content h4');
let mainContentKeys = Object.keys(siteContent['main-content']);
let h4Values = [];
mainContentKeys.forEach((key) => {
  if (key.includes('h4')) {
    h4Values.push(siteContent['main-content'][key]);
  }
});

 fill(mainH4, h4Values);
let mainContentP = document.querySelectorAll('.text-content p');
let pValues = [];
mainContentKeys.forEach((key) => {
  if (key.includes('content')) {
    pValues.push(siteContent['main-content'][key]);
  }
});

 fill(mainContentP, pValues);

 mainContentP.forEach((item) => item.style.color = "red")

 //middleimg

let codeSnip2=document.getElementById('middle-img')
codeSnip2.setAttribute('src',siteContent['main-content']['middle-img-src']);

//contact

let contactH4=document.querySelector('.contact h4')
contactH4.innerText=siteContent['contact']['contact-h4'];

let contactItems=document.querySelectorAll('.contact p')
let contactValues=Object.values(siteContent['contact']).splice(1,3);

fill(contactItems,contactValues);

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];


