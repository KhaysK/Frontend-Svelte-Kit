<main>
    <div id="intro">
        <div id="title">KHABIB KHAYS FRONTEND DEVELOPER</div>
        <div id="summary">Junior Frontend developer with a passion 
            for creating engaging, intuitive, and user-friendly web experiences.</div>
        <button id="contact" >Contact Me</button>
    </div>
</main>

<div id="projects">
    <div class="project">
        <div class="project-title">Etch-a-Sketch</div>
        <div class="project-description">
            This project is a fully functional, browser-based version of the classic toy
            that can be played right in your web browser. Using JavaScript, HTML, and CSS, 
            I have created an interactive experience that perfectly replicates the traditional 
            Etch-a-Sketch in modern way</div>
        <div class="project-link">
            <a href="https://khaysk.github.io/Etch-a-Sketch-JS/">Website</a>
            <a href="https://github.com/KhaysK/Etch-a-Sketch-JS">Repository</a>
        </div>
    </div>
    <div class="project">
        <div class="project-title">Rock Paper Scissors</div>
        <div class="project-description">
            In this Rock Paper Scissors JavaScript project, I built a browser-based implementation
            of the game using HTML, CSS, and JavaScript. The project has a user-friendly interface
            that allows players to make their choices, see the results of each round, and keep track of the score
        </div>
        <div class="project-link">
            <a href="https://khaysk.github.io/Rock-Paper-Scissors-JS-Project/">Website</a> 
            <a href="https://github.com/KhaysK/Rock-Paper-Scissors-JS-Project">Repository</a>
        </div>
    </div>
    <div class="project">
        <div class="project-title">IsmaTour</div>
        <div class="project-description">The Dagestan travel company website showcases
            the beauty and rich culture of Dagestan. The website features a visually stunning design,
            user-friendly interface, and comprehensive tour booking system. The platform provides
            visitors with popular destinations and tour packages.</div>
        <div class="project-link">
            <a href="https://khaysk.github.io/IsmaTour/src/">Website</a> 
            <a href="https://github.com/KhaysK/IsmaTour">Repository</a>
        </div>    
    </div>
</div>

<style>
main{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Righteous', cursive;
    color: #E7E7D6 ;
    background: no-repeat 0% 40%/cover url(../../materials/bg.png);
    flex: 1 0 auto;
}

a{
    text-decoration: none;
    color: #f4efdb;
}

#intro{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding-left: 10%;
    padding-top: 15%;
}

#contact{
    width: 200px;
    height: 60px;
    font-size: 1.5rem;
    font-family: 'Righteous', cursive;
    background: transparent;
    color: #f4efdb;
    border: 2px solid #f4efdb;
    border-radius: 10px;
    transform: scale(1);
    transition: all 0.3s ease;
}

#contact:hover{
    transform: scale(1.1);
}

#title{
    font-size: 2.5rem;
    color: #f4efdb;
}

#summary{
    font-size: 1.5rem;
    width: 100%;
}

#projects{
    height: 25%;
    display: flex;
    justify-content: space-around;
    padding: 10% 0;
    background-color: #f4efdb;
}

.project{
    width: 420px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project-title{
    font-size: 2rem;
    color: #453c38;
    text-align: center;
}

.project-link{
    height: 15%;
    display: flex;
    justify-content: space-around;
}

.project-link a{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #453c38 ;
    font-family: 'Righteous', cursive;
    font-size: 1rem;
    border: 1px solid #453c38;
    border-radius: 10px;
    width: 140px;
    height: 100%;
    transform: scale(1);
    transition: all 0.2s ease-out;
}

.project-link a:hover{
    transform: scale(1.1);
}

</style>