using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Searching_Filter.Models;

namespace Searching_Filter.Controllers
{
    public class ProductController : Controller
    {
        string Baseurl = "https://localhost:7298/api/";
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<JsonResult> ProductList()
        {
            List<Products> data = new List<Products>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage res = await client.GetAsync("SearchingApi/ProductList");
                if (res.IsSuccessStatusCode)
                {
                    var UserResponse = await res.Content.ReadAsStringAsync();
                    data = JsonConvert.DeserializeObject<List<Products>>(UserResponse);
                }

                return Json(data);
            }
        }

        [HttpGet]
        public async Task<JsonResult> Search(string searchTerm)
        {
            List<Products> data = new List<Products>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage res = await client.GetAsync($"SearchingApi/Search?searchTerm={searchTerm}");
                if (res.IsSuccessStatusCode)
                {
                    var UserResponse = await res.Content.ReadAsStringAsync();
                    data = JsonConvert.DeserializeObject<List<Products>>(UserResponse);
                }

                return Json(data);
            }
        }


        [HttpGet]
        public async Task<JsonResult> SearchByFilter(string searchTerm)
        {
            List<Products> data = new List<Products>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage res = await client.GetAsync($"SearchingApi/SearchByFilter?searchTerm={searchTerm}");
                if (res.IsSuccessStatusCode)
                {
                    var UserResponse = await res.Content.ReadAsStringAsync();
                    data = JsonConvert.DeserializeObject<List<Products>>(UserResponse);
                }

                return Json(data);
            }
        }




    }
}
