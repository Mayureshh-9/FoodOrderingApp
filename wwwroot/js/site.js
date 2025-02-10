let apiURL = "https://forkify-api.herokuapp.com/api/v2/recipes";
let apikey = "2f91e4f8-4d43-40f1-92a4-9ca9610d2414";

async function GetRecipes(recipeName,id,isAllShow){
    let resp = await fetch(`${apiURL}?search=${recipeName}&key=${apikey}`);
    let result = await resp.json();
    let Recipes = isAllShow ? result.data.recipes : result.data.recipes.slice(0,6);
    showRecipes(Recipes,id);
}

function showRecipes(recipes,id){
    $.ajax(
        {
            contentType:"application/json; charset=utf-8",
            dataType:'html',
            type:'POST',
            url: '/Recipes/GetRecipeCard',
            data:JSON.stringify(recipes),
            success:function (htmlResult){
                $('#'+id).html(htmlResult);
            }

        }
    );
}