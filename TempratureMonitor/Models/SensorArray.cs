using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TempratureMonitor.Models
{
    public class SensorArray
    {
        public string SiteName { get; set; }
        public string Description { get; set; }
        public string IPAddress { get; set; }
        public IEnumerable<Sensor> Sensors { get; set; }
    }
}