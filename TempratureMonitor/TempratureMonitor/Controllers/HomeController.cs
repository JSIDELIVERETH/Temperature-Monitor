using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TempratureMonitor.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult UpdatedTempratures()
        {
            Random random = new Random();

            List<int> SensorData = new List<int>()
                {
                    random.Next(-2, 6), random.Next(2, 8), random.Next(-35, 1),random.Next(0, 5),random.Next(0, 11), random.Next(0, 11)
                };

            return Json(SensorData);
        }
    }
}
