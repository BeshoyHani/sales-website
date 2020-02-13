var fixedRateStars=0;


function ratingColor(n)
{
    for(var i=1; i<=n; i++)
        {
            var star=document.getElementById(i);
            star.style.color="orange";
        }
}
    
function ratingDisColor()
{
     for(var i=fixedRateStars+1; i<=5; i++)
        {
            var star=document.getElementById(i);
            star.style.color="black";
        }
}


function fixedRate(n)
{
    fixedRateStars=n;
    ratingColor(n);
}