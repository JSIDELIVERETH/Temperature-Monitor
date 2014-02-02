using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Web;
using System.Web.Mvc;

namespace TempratureMonitor.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public static HCMIS.Sensors.Service1SoapClient sensorService = new HCMIS.Sensors.Service1SoapClient();
        
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult UpdatedTempratures()
        {
            Random random = new Random();
            return Json(GetFakeSensorReading());
        }

        public List<Double> GetFakeSensorReading()
        {
            Random rnd = new Random();
            return new List<double>
            {
                rnd.Next(1, 8),
                rnd.Next(1, 8),
                rnd.Next(1, 8),
                rnd.Next(-20, -10),
                rnd.Next(1, 8)
            };
        }

        public List<Double> GetSensorReading()
        {
            if (Ping("192.168.2.154") == true)
            {
                string rowData = sensorService.GetLiveTempratureReading();
                if (String.IsNullOrEmpty(rowData) || !rowData.Contains(','))
                    return new List<double>();
                try
                {
                    rowData = rowData.Remove(0, 3);

                    return rowData.Split(',').Select(t => double.Parse(t)).ToList<double>();
                }
                catch (Exception ex)
                {
                    return new List<double>() { -273, -273, -273, -273, -273 };
                }
            }
            else
            {
                return new List<double>() { -273, -273, -273, -273, -273 };
            }
        }

        private bool Ping(string IPAddress)
        {
            try
            {
                using (var ping = new Ping())
                {
                    var reply = ping.Send(IPAddress, 2000);
                    if (reply.Status == IPStatus.Success)
                        return true;
                    else return false;
                }
            }
            catch (PingException)
            {
                return false;
            }
        }
    }
}
