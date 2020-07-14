$(document).ready(function ()
{
    // Bathroom 1
    $('area#bathroom1').mouseover(function ()
    {
        $("#floor-plan").attr("src", "assets/bthroom1.jpg");
        $('.house-area-tooltip').show();
        $('.house-area-tooltip h3').text("Bathroom 1");
        $('.house-area-tooltip img').attr("src", "assets/area/bathroom1.jpg");
        $('.house-area-tooltip p').text("A bathroom is a room for personal hygiene activities, generally containing a toilet, a sink (basin) and either a bathtub, a shower, or both. In some countries, the toilet is usually included in the bathroom, whereas other cultures consider this insanitary or impractical, and give that fixture a room of its own.");
    }).mouseleave(function ()
    {
        resetFloorPlan();
    }).mousemove(function (e)
    {
        moveToolTip(e);
    });

    // Dining Room 
    $('area#diningroom').mouseover(function ()
    {
        $("#floor-plan").attr("src", "assets/diningrm.jpg");
        $('.house-area-tooltip').show();
        $('.house-area-tooltip h3').text("Dining Room");
        $('.house-area-tooltip img').attr("src", "assets/area/dining-room.jpg");
        $('.house-area-tooltip p').text("A dining room is a room for consuming food. Historically the dining room is furnished with a rather large dining table and a number of dining chairs; the most common shape is generally rectangular with two armed end chairs and an even number of un-armed side chairs along the long sides.");
    }).mouseleave(function ()
    {
        resetFloorPlan();
    }).mousemove(function (e)
    {
        moveToolTip(e);
    });

    // Kitchen
    $('area#kitchen').mouseover(function ()
    {
        $("#floor-plan").attr("src", "assets/kitchen.jpg");
        $('.house-area-tooltip').show();
        $('.house-area-tooltip h3').text("Kitchen");
        $('.house-area-tooltip img').attr("src", "assets/area/kitchen.jpg");
        $('.house-area-tooltip p').text("A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment.");
    }).mouseleave(function ()
    {
        resetFloorPlan();
    }).mousemove(function (e)
    {
        moveToolTip(e);
    });

    // Mater Bedroom
    $('area#masterroom').mouseover(function ()
    {
        $("#floor-plan").attr("src", "assets/mstrbed.jpg");
        $('.house-area-tooltip').show();
        $('.house-area-tooltip h3').text("Master Bedroom");
        $('.house-area-tooltip img').attr("src", "assets/area/master-bedroom.jpg");
        $('.house-area-tooltip p').text("A principal bedroom in a house or apartment, usually the largest, typically occupied by the person or persons who head the household.");
    }).mouseleave(function ()
    {
        resetFloorPlan();
    }).mousemove(function (e)
    {
        moveToolTip(e);
    });

    // Guest Room
    $('area#guestroom').mouseover(function ()
    {
        $("#floor-plan").attr("src", "assets/gstbed.jpg");
        $('.house-area-tooltip').show();
        $('.house-area-tooltip h3').text("Guest Bedroom");
        $('.house-area-tooltip img').attr("src", "assets/area/guest-bedroom.jpg");
        $('.house-area-tooltip p').text("A guest room is a bedroom in a house or hotel for visitors or guests to sleep in.");
    }).mouseleave(function ()
    {
        resetFloorPlan();
    }).mousemove(function (e)
    {
        moveToolTip(e);
    });

    // Living Room
    $('area#livingroom').mouseover(function ()
    {
        $("#floor-plan").attr("src", "assets/lvngroom.jpg");
        $('.house-area-tooltip').show();
        $('.house-area-tooltip h3').text("Living Room");
        $('.house-area-tooltip img').attr("src", "assets/area/living-room.jpg");
        $('.house-area-tooltip p').text("A living room is a room in a home. In the living room they talk with each other and their guests and do other things such as reading or watching television.");
    }).mouseleave(function ()
    {
        resetFloorPlan();
    }).mousemove(function (e)
    {
        moveToolTip(e);
    });

    // Bathroom 2
    $('area#bathroom2').mouseover(function ()
    {
        $("#floor-plan").attr("src", "assets/bthroom2.jpg");
        $('.house-area-tooltip').show();
        $('.house-area-tooltip h3').text("Bathroom 2");
        $('.house-area-tooltip img').attr("src", "assets/area/bathroom2.jpg");
        $('.house-area-tooltip p').text("A bathroom is a room for personal hygiene activities, generally containing a toilet, a sink (basin) and either a bathtub, a shower, or both. In some countries, the toilet is usually included in the bathroom, whereas other cultures consider this insanitary or impractical, and give that fixture a room of its own.");
    }).mouseleave(function ()
    {
        resetFloorPlan();
    }).mousemove(function (e)
    {
        moveToolTip(e);
    });
});

function moveToolTip(e)
{
    var mousex = e.pageX;
    var mousey = e.pageY;
    $('.house-area-tooltip').css({
        top: mousey - 10,
        left: mousex + 10
    })
}

function resetFloorPlan()
{
    $("#floor-plan").attr("src", "assets/floor-plan.jpg");
    $('.house-area-tooltip').hide();
}
