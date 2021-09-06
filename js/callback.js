const All = [
    { title : "La Case De Papel", url : "image/movies/movie2.jpg"},
    { title : "Extraction", url : "image/films/film11.jpg"},
    { title : "Game of Thrones", url : "image/movies/movie1.jpg"},
    { title : "Joker", url : "image/films/film2.jpg"},
    { title : "Mee Before You", url : "image/films/film12.jpg"},
    { title : "Sherlock", url : "image/movies/movie3.jpg"},
    { title : "Dark", url : "image/movies/movie4.jpg"},
    { title : "All The Bright Pl...", url : "image/films/film1.jpg"},
    { title : "Tomb Raider", url : "image/films/film8.jpg"},
    { title : "Don't Breathe", url : "image/films/film9.jpg"},
    { title : "The Witcher", url : "image/movies/movie10.jpg"},
    { title : "13 Reasons Why", url : "image/movies/movie9.jpg"}
];
const Films = [
    { title : "All The Bright Pl...", url : "image/films/film1.jpg"},
    { title : "Joker", url : "image/films/film2.jpg"},
    { title : "Sweet Girl", url : "image/films/film3.jpg"},
    { title : "Just say yes", url : "image/films/film4.jpg"},
    { title : "1917", url : "image/films/film5.jpg"},
    { title : "Platform", url : "image/films/film6.jpg"},
    { title : "Bird Box", url : "image/films/film7.jpg"},
    { title : "Tomb Raider", url : "image/films/film8.jpg"},
    { title : "Don't Breathe", url : "image/films/film9.jpg"},
    { title : "Miracle in Cell No7", url : "image/films/film10.jpg"},
    { title : "Extraction", url : "image/films/film11.jpg"},
    { title : "Mee Before You", url : "image/films/film12.jpg"}
];
const Movies = [
    { title : "Game of Thrones", url : "image/movies/movie1.jpg"},
    { title : "La Case De Papel", url : "image/movies/movie2.jpg"},
    { title : "Sherlock", url : "image/movies/movie3.jpg"},
    { title : "Dark", url : "image/movies/movie4.jpg"},
    { title : "Breaking Bad", url : "image/movies/movie5.jpg"},
    { title : "Vikings", url : "image/movies/movie6.jpg"},
    { title : "Peaky Blinders", url : "image/movies/movie7.jpg"},
    { title : "Black Mirror", url : "image/movies/movie8.jpg"},
    { title : "13 Reasons Why", url : "image/movies/movie9.jpg"},
    { title : "The Witcher", url : "image/movies/movie10.jpg"},
    { title : "Atiye", url : "image/movies/movie11.jpg"},
    { title : "Aşk 101", url : "image/movies/movie12.jpg"}
];
const Recently = [
    
    { title : "Stowaway", url : "image/recently/post2.jpg"},
    { title : "Nuh Tepesi", url : "image/recently/post4.jpg"},
    { title : "Hasta el cielo", url : "image/recently/post3.jpg"},
    { title : "Aşk 101", url : "image/recently/post12.jpg"},
    { title : "Madame Claude", url : "image/recently/post5.jpg"},
    { title : "Sen Hiç Ateş...", url : "image/recently/post6.jpg"},
    { title : "Just say yes", url : "image/recently/post8.jpg"},
    { title : "Concrete Cowboy", url : "image/recently/post7.jpg"},
    { title : "Kapı", url : "image/recently/post9.jpg"},
    { title : "Atiye", url : "image/recently/post11.jpg"},
    { title : "Mitchells vs. Mac...", url : "image/recently/post.jpg"},
    { title : "Chaos Walking", url : "image/recently/post10.jpg"}
];

let category__items = document.querySelector(".posts");

function showAll(){
        let items = ""
        All.forEach(item => {
            items += 
            `
            <div class="post">
                    <a href="#"><img src="${item.url}" alt="post">
                    <div class="post-info">
                        <i class="fas fa-play"></i>
                    </div></a>
                    <p><a href="#">${item.title}</a></p>
            </div>
            `
        });
        category__items.innerHTML = items;
}
showAll()
function showFilm(){
    let items = ""
    Films.forEach(item => {
        items += 
        `
        <div class="post">
                <a href="#"><img src="${item.url}" alt="post">
                <div class="post-info">
                    <i class="fas fa-play"></i>
                </div></a>
                <p><a href="#">${item.title}</a></p>
        </div>
        `
    });
    category__items.innerHTML = items;
}
function showMovie(){
    let items = ""
    Movies.forEach(item => {
        items += 
        `
        <div class="post">
                <a href="#"><img src="${item.url}" alt="post">
                <div class="post-info">
                    <i class="fas fa-play"></i>
                </div></a>
                <p><a href="#">${item.title}</a></p>
        </div>
        `
    });
    category__items.innerHTML = items;
}
function showRecently(){
    let items = ""
    Recently.forEach(item => {
        items += 
        `
        <div class="post">
                <a href="#"><img src="${item.url}" alt="post">
                <div class="post-info">
                    <i class="fas fa-play"></i>
                </div></a>
                <p><a href="#">${item.title}</a></p>
        </div>
        `
    });
    category__items.innerHTML = items;
}