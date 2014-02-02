Create Database TemperatureSensorData
ON PRIMARY
(
	NAME = 'TemperatureSensorData',
	FileName = 'D:\Databases\TemperatureSensorData_db.mdf',
	MAXSIZE = Unlimited 
)

LOG ON
(
	NAME = 'TemperatureSensorData_log',
	FILENAME = 'D:\Databases\TemperatureSensorData_log.ldf'
);

GO

Use TemperatureSensorData;

GO

CREATE TABLE SensorArray
(
	SensorArrayID INT IDENTITY(1, 1) PRIMARY KEY,
	Name VARCHAR(300) NOT NULL,
	[Description] VARCHAR(300)
)

CREATE TABLE Sensor
(
	SensorID INT IDENTITY(1, 1) PRIMARY KEY,
	NAME VARCHAR(300) NOT NULL,
	SensorArrayID INT FOREIGN KEY REFERENCES SensorArray(SensorArrayID),
	[Description] VARCHAR(300) NOT NULL
)

CREATE TABLE TempratureReading
(
	TempratureReadingID INT IDENTITY(1, 1) PRIMARY KEY,
	SensorID INT FOREIGN KEY REFERENCES Sensor(SensorID),
	Temprature FLOAT NOT NULL,
	[TimeStamp] DATETIME NOT NULL,
)