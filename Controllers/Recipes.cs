using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FoodOrderingApp.Models;

namespace FoodOrderingApp.Controllers;
public class RecipesController : Controller
{
    public IActionResult Index()
    {
        return View(); // This will render Views/Recipes/Index.cshtml
    }
    [HttpPost]
    public IActionResult GetRecipeCard([FromBody] List<Recipe> recipes)
    {
        return PartialView("RecipeCard",recipes);
    }
    public IActionResult Search([FromQuery] string recipe)
    {
        ViewBag.Recipe = recipe;
        return View();
    }
}
