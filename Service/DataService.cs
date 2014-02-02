using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Service.Model;

namespace Service
{
    public class DataService
    {
        TemperatureSensorDataEntities context = new TemperatureSensorDataEntities();

        public void AddTempratureReading(TempratureReading tempratureReading)
        {
            context.TempratureReadings.Add(tempratureReading);
            context.SaveChanges();
        }

        public void Add(SensorArray sensorArray)
        {
           
        }

    }
}
