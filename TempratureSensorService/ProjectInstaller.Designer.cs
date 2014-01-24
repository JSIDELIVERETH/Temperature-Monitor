namespace TempratureSensorService
{
    partial class ProjectInstaller
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.TempratureSensorServiceProcessInstaller = new System.ServiceProcess.ServiceProcessInstaller();
            this.TempratureSensorServiceInstaller = new System.ServiceProcess.ServiceInstaller();
            // 
            // TempratureSensorServiceProcessInstaller
            // 
            this.TempratureSensorServiceProcessInstaller.Installers.AddRange(new System.Configuration.Install.Installer[] {
            this.TempratureSensorServiceInstaller});
            this.TempratureSensorServiceProcessInstaller.Password = null;
            this.TempratureSensorServiceProcessInstaller.Username = null;
            // 
            // TempratureSensorServiceInstaller
            // 
            this.TempratureSensorServiceInstaller.ServiceName = "TempratureReaderService";
            this.TempratureSensorServiceInstaller.StartType = System.ServiceProcess.ServiceStartMode.Automatic;
            // 
            // ProjectInstaller
            // 
            this.Installers.AddRange(new System.Configuration.Install.Installer[] {
            this.TempratureSensorServiceProcessInstaller});

        }

        #endregion

        private System.ServiceProcess.ServiceProcessInstaller TempratureSensorServiceProcessInstaller;
        private System.ServiceProcess.ServiceInstaller TempratureSensorServiceInstaller;
    }
}