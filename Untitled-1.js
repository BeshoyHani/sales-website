function ratingColor(n)
{
    for(var i=1; i<=n; i++)
        {
            var star=document.getElementById(i);
            star.style.color="orange";
        }
}
    
function ratingDisColor(n)
{
     for(var i=1; i<=n; i++)
        {
            var star=document.getElementById(i);
            star.style.color="black";
        }
}