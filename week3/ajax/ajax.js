//id
var id = "ec142813";

//key
var key = "153836bddd6dcc0aeb61c9268062445c";

var foodURL = "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat" +
                "&appId=" +id + "&appKey=" + key;

$.ajax({
    url: foodURL,
    success: function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name
        var cals = food.fields.nf_calories

        $("body").append("<h2> "  + "This" + name + "has " + cals + "kcal!!</h2>")
    }
});