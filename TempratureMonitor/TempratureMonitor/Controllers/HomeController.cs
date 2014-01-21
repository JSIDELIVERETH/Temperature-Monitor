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
        public static HCMIS.SensorService.Service1SoapClient sensorService = new HCMIS.SensorService.Service1SoapClient();
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult UpdatedTempratures()
        {
            Random random = new Random();
            return Json(GetSensorReading());
        }

        public List<Double> GetSensorReading()
        {
            string rowData = sensorService.GetLiveTempratureReading();
            if (String.IsNullOrEmpty(rowData) || !rowData.Contains(','))
                return new List<double>();
            rowData = rowData.Remove(0, 3);

           return rowData.Split(',').Select(t => double.Parse(t)).ToList<double>();
        }
    }
}
