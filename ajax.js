var appId= '5b33f230';
var appKey= 'a690e53c9885162961a7681d016dda16';
var mcdonaldsurl = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + appId + "&appKey=" + appKey;

$.ajax({
    url: mcdonaldsurl,
    success: function(data){
        console.log(data);
        for (i =0; i<data.hits.length; i++){
        var foodItem = data.hits[i]
        var name = foodItem.fields.item_name;
        var cals= foodItem.fields.nf_calories;
        $('body').append('<h2>This' + name + ' has '+ cals + 'calories!!!</h2>')
        }
    }
})