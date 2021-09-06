/* - login and sign up page - */

let loginPage,signUpPage;
        loginPage=document.querySelector("#login-container");
        signUpPage=document.querySelector("#signup-container");

        $(".fa-user").on("click",function(){
            $("#users").toggle("#users");
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