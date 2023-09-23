AOS.init();

function myFunction(x) {
    if (x.matches) { // If media query matches
        window.onscroll = function () {
            const navbar = document.querySelector('nav');
            const logo = document.querySelector('.logo')
            const hamb = document.querySelector('.hamb')
            const hamb2 = document.querySelector('.hamb2')
            const fixed = navbar.offsetTop;

            if (window.pageYOffset > fixed) {
                navbar.classList.add('navbar-fixed');
                logo.classList.add('logo-fixed')
                logo.classList.remove('text-blue-500')

                hamb.classList.add('bg-slate-100')
                hamb.classList.remove('bg-blue-500')

                hamb2.classList.add('bg-slate-100')
                hamb2.classList.remove('bg-blue-500')
            } else {
                navbar.classList.remove('navbar-fixed');
                logo.classList.remove('logo-fixed')
                hamb.classList.remove('bg-slate-100')
                hamb.classList.add('bg-blue-500')

                hamb2.classList.add('bg-blue-500')
                hamb2.classList.remove('bg-slate-100')

                logo.classList.add('text-blue-500')

            }


        }

    } else {}
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes