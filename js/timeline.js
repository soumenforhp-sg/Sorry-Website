document.addEventListener("DOMContentLoaded", () => {


    const timelineItems =
        document.querySelectorAll(".timeline-item");


    const timelineLine =
        document.querySelector(".timeline::before");


    /*
    ======================================
       SCROLL REVEAL ANIMATION
    ======================================
    */


    const observer =
        new IntersectionObserver(
            
            entries => {

                entries.forEach(entry => {


                    if(entry.isIntersecting){


                        entry.target.classList.add(
                            "show"
                        );


                        observer.unobserve(
                            entry.target
                        );


                    }


                });


            },
            {
                threshold:0.2
            }

        );



    timelineItems.forEach(item => {

        observer.observe(item);

    });



    /*
    ======================================
       ACTIVE TIMELINE ITEM
    ======================================
    */


    const activeObserver =
        new IntersectionObserver(

            entries => {


                entries.forEach(entry => {


                    if(entry.isIntersecting){


                        entry.target.classList.add(
                            "active-memory"
                        );


                    }
                    else{


                        entry.target.classList.remove(
                            "active-memory"
                        );


                    }


                });


            },

            {
                threshold:.55
            }

        );



    timelineItems.forEach(item => {

        activeObserver.observe(item);

    });



    /*
    ======================================
       HEART PULSE EFFECT
    ======================================
    */


    timelineItems.forEach(item => {


        item.addEventListener(
            "mouseenter",
            ()=>{


                item.classList.add(
                    "heart-focus"
                );


            }
        );


        item.addEventListener(
            "mouseleave",
            ()=>{


                item.classList.remove(
                    "heart-focus"
                );


            }
        );


    });



    /*
    ======================================
       CLICK MEMORY EFFECT
    ======================================
    */


    timelineItems.forEach(item => {


        item.addEventListener(
            "click",
            ()=>{


                item.classList.toggle(
                    "memory-open"
                );


            }
        );


    });



    /*
    ======================================
       ADD ANIMATION CSS CLASSES
    ======================================
    */


    const style =
    document.createElement("style");


    style.innerHTML = `


    .timeline-item{

        opacity:0;

        transform:
        translateY(50px);

        transition:
        opacity .8s ease,
        transform .8s ease;

    }



    .timeline-item.show{

        opacity:1;

        transform:
        translateY(0);

    }



    .timeline-item.active-memory
    .timeline-content{


        box-shadow:

        0 0 45px
        rgba(255,105,180,.55);


        transform:
        translateY(-8px);


    }



    .timeline-item.heart-focus
    .timeline-content::after{


        animation:

        heartBeat .8s infinite;


    }



    .timeline-item.memory-open
    .timeline-content{


        background:

        rgba(255,255,255,.22);


    }



    @keyframes heartBeat{


        0%{

            transform:
            scale(1);

        }


        50%{

            transform:
            scale(1.35);

        }


        100%{

            transform:
            scale(1);

        }


    }


    `;


    document.head.appendChild(style);



    /*
    ======================================
       PAGE LOADED EFFECT
    ======================================
    */


    console.log(
        "📖 Friendship Timeline Activated ❤️"
    );


});