using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TempratureMonitor.Models
{
    public class Sensor
    {
        public string Name { get; set; }
        public float Value { get; set; }
        public DateTime Time { get; set; }
    }
}