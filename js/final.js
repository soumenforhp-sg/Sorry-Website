document.addEventListener("DOMContentLoaded", () => {


    const yesButton =
        document.getElementById("forgiveYes");


    const maybeButton =
        document.getElementById("forgiveMaybe");


    const message =
        document.getElementById("forgiveMessage");



    if(!yesButton || !maybeButton || !message){

        return;

    }



    /*
    ======================================
       YES BUTTON
    ======================================
    */


    yesButton.addEventListener("click", () => {


        message.innerHTML = `

        <div class="success-message">

        ❤️ Thank You ❤️

        <br><br>

        Your forgiveness means
        more than words can explain.

        <br><br>

        I promise to protect this
        friendship and value it forever.

        🌹

        </div>

        `;


        createHeartExplosion();


        createConfetti();


        playSuccessSound();


        yesButton.style.display="none";

        maybeButton.style.display="none";


    });




    /*
    ======================================
       MAYBE BUTTON
    ======================================
    */


    maybeButton.addEventListener("click", () => {


        message.innerHTML = `

        🌸 I Understand.

        <br><br>

        Take all the time you need.

        <br><br>

        Your feelings matter,
        and I'll always respect them.

        ❤️

        `;


    });





    /*
    ======================================
       HEART EXPLOSION
    ======================================
    */


    function createHeartExplosion(){


        const hearts = [

            "❤️",
            "💖",
            "💕",
            "💗",
            "🌹"

        ];



        for(let i=0;i<60;i++){


            const heart =
            document.createElement("div");


            heart.className =
            "final-heart";


            heart.innerHTML =
            hearts[
                Math.floor(
                Math.random()
                *
                hearts.length
                )
            ];



            heart.style.left =
            Math.random()*100+"vw";



            heart.style.animationDuration =
            (3+
            Math.random()*5)
            +"s";



            heart.style.fontSize =
            (20+
            Math.random()*40)
            +"px";



            document.body.appendChild(
                heart
            );



            setTimeout(()=>{

                heart.remove();

            },8000);


        }


    }





    /*
    ======================================
       CONFETTI EFFECT
    ======================================
    */


    function createConfetti(){


        const symbols=[

            "🎉",
            "✨",
            "💖",
            "🌸"

        ];



        for(let i=0;i<80;i++){


            const confetti =
            document.createElement("div");


            confetti.innerHTML =
            symbols[
                Math.floor(
                Math.random()
                *
                symbols.length
                )
            ];



            confetti.style.position =
            "fixed";


            confetti.style.top =
            "-20px";


            confetti.style.left =
            Math.random()*100+"vw";


            confetti.style.fontSize =
            (15+
            Math.random()*30)
            +"px";


            confetti.style.zIndex =
            "99999";


            confetti.style.animation =
            `fall ${
            3+
            Math.random()*4
            }s linear`;



            document.body.appendChild(
                confetti
            );



            setTimeout(()=>{

                confetti.remove();

            },7000);


        }


    }





    /*
    ======================================
       SUCCESS SOUND
    ======================================
    */


    function playSuccessSound(){


        const audio =
        new Audio(
        "music/success.mp3"
        );


        audio.volume=.5;


        audio.play()
        .catch(()=>{

            console.log(
            "Sound requires user interaction"
            );

        });


    }





    /*
    ======================================
       CONFETTI ANIMATION STYLE
    ======================================
    */


    const style =
    document.createElement("style");


    style.innerHTML=`


    @keyframes fall{


    from{

        transform:
        translateY(-50px)
        rotate(0deg);

        opacity:1;

    }


    to{

        transform:
        translateY(110vh)
        rotate(720deg);

        opacity:0;

    }


    }



    .success-message{


        animation:

        successPop
        .8s ease;


        font-size:25px;


    }



    @keyframes successPop{


    from{

        transform:
        scale(.5);

        opacity:0;

    }


    to{

        transform:
        scale(1);

        opacity:1;

    }


    }


    `;


    document.head.appendChild(style);



    console.log(
    "❤️ Final apology interaction loaded"
    );


});