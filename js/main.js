/* - login and sign up page - */

let loginPage,signUpPage;
        loginPage=document.querySelector("#login-container");
        signUpPage=document.querySelector("#signup-container");

        $(".fa-user").on("click",function(){
            $(".users").toggle(".users");
        })

        function openLogin(){
            loginPage.style.display="block";
            signUpPage.style.display="none";
            window.addEventListener("scroll",noScroll);
        }
        function closeLogin(){
            loginPage.style.display="none";
            window.removeEventListener('scroll', noScroll);
        }
        
        function openSignUp(){
            signUpPage.style.display="block";
            loginPage.style.display="none";
            window.addEventListener("scroll",noScroll);
        }
        function closeSignUp(){
            signUpPage.style.display="none";
            window.removeEventListener("scroll",noScroll);
        }

        function noScroll(){
            window.scrollTo(0,0);
        }
/* - x - login and sign up page - x - */

/* - Dropdpwn Menu opener - */
        //jquery for Toggle sub menus
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
        //jquery for sidebar open/close
    $(document).ready(function(){
        $('.menu-btn').click(function(){
            $('.side-bar').addClass('active');
        });
        $('.close-menu').click(function(){
            $('.side-bar').removeClass('active');
        });
    });
/* -- x - Dropdpwn Menu opener - x -- */

/* - Request List opener - */

    $(document).ready(function(){
        requestListOpen = () =>{
            $(".requestList-container").fadeIn();
            window.addEventListener("scroll",noScroll);
        }
        requestListClose = () =>{
            $(".requestList-container").fadeOut();
            window.removeEventListener("scroll",noScroll);
        }

    })

/* -- x - Request List opener - x -- */

/* - SMTP (send to Email) - */

const smtp_btn = document.querySelector("#smtp-btn");
const inputs = document.querySelector("#smtp-form");
smtp_btn.addEventListener("click",function(){
    if(inputs.elements["name"].value != "" && 
    inputs.elements["email"].value != "" &&
    inputs.elements["message"].value != ""){

    Email.send({
        Host:"smtp.mailtrap.io",
        Username: "3554c3579d264c",
        Password: "b91ae925542db4",
        To: "hasanovarzuman7@gmail.com",
        From: inputs.elements["email"].value,
        Subject: "Contact Us Query by the Customer",
        Body: inputs.elements["name"].value+ "<br>" + inputs.elements["email"].value + "<br>" + inputs.elements["message"].value
        
    })
    alert("Completed")
}
})

/* -- x - SMTP (send to Email)- x -- */

/* - Category  - */

let category_all = document.querySelector("#category_all");
let category_films = document.querySelector("#category_films");
let category_movies = document.querySelector("#category_movies");
let category_recently = document.querySelector("#category_recently");

category_all.addEventListener("click",function(){
    showAll();
    this.style.color="yellow";
    category_films.style.color="white";
    category_movies.style.color="white";
    category_recently.style.color="white";
})
category_films.addEventListener("click",function(){
    showFilm();
    this.style.color="yellow";
    category_movies.style.color="white";
    category_all.style.color="white";
    category_recently.style.color="white";
})
category_movies.addEventListener("click",function(){
    showMovie();
    this.style.color="yellow";
    category_films.style.color="white";
    category_all.style.color="white";
    category_recently.style.color="white";
})
category_recently.addEventListener("click",function(){
    showRecently();
    this.style.color="yellow";
    category_films.style.color="white";
    category_movies.style.color="white";
    category_all.style.color="white";
})
/* - x - Category - x - */

/* - Scroll Up  - */

var scrollUp=document.querySelector("#scrollUp");
scrollUp.addEventListener("click",function(){
    var rootElement=document.documentElement;
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* - x - Scroll Up - x - */


/* - Fixed Nav  - */

const navBar = document.querySelector('nav')
const navHeight = navBar.getBoundingClientRect().height
window.addEventListener("scroll",() => {
    const scrollHeight = window.pageYOffset
    if(scrollHeight > navHeight){
        navBar.classList.add("show")
    }else{
        navBar.classList.remove("show")
    }
})

/* - x - Fixed Nav - x - */



/* - GSAP  - */

// gsap.from('.main-text',{opacity: 0,duration: 1.5, delay: .5, y: 10});

/* - x - GSAP - x - */
