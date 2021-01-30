window.onscroll = function() {myFunction()};

            function myFunction() {
                if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
                {
                    document.getElementById("text").className="slide";
                    document.getElementById("text2").className="appear";
                }
            }
