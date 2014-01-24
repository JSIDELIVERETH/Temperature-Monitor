using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.IO.Ports;
using System.Linq;
using System.ServiceProcess;
using System.Text;

namespace TempratureSensorService
{
    public partial class TempratureSensorService : ServiceBase
    {
        private static SerialPort serialPort = new SerialPort("COM1", 9600);

        public TempratureSensorService()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            serialPort.Open();
            int updateInterval = 5000;
            if (args.Any())
            {
                if (int.TryParse(args.First(), out updateInterval))
                {
                    timer1.Interval = updateInterval;
                }
            }

            timer1.Start();
        }

        protected override void OnStop()
        {
            if (serialPort.IsOpen) serialPort.Close();
        }


        private void timer1_Tick(object sender, EventArgs e)
        {
            ReadSensorsAndUpdateDatabase();
        }

        private void ReadSensorsAndUpdateDatabase()
        {
            var SensorReading = GetLiveTempratureReading();
            /*
             * 
             *Store the sensor reading to a database 
             * 
             */
        }

        private Double[] GetLiveTempratureReading()
        {
            serialPort.Encoding = System.Text.ASCIIEncoding.ASCII;
            serialPort.DtrEnable = true;
            serialPort.RtsEnable = true;

            try
            {
                if (!serialPort.IsOpen) serialPort.Open();

                var bytes = System.Text.ASCIIEncoding.ASCII.GetBytes("TEMP\r");
                serialPort.Write(bytes, 0, bytes.Length);
                serialPort.BaseStream.Flush();

                var data = serialPort.ReadExisting();
                return data.Split(',').Select(t => double.Parse(t)).ToArray();
            }
            catch (Exception ex)
            {
                return new double[]{-273, -273, -273, -273, -273};
            }
        }

    }
}
