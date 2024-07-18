int Sensor=6;
int Led=3;
void setup() {
  pinMode(Led,OUTPUT);
  pinMode(Sensor,INPUT); 
}
void loop() {
  bool LedStatus;
  int Sensordata=digitalRead(Sensor);
  if(Sensordata == 1)
  {
    LedStatus = true;
    if(LedStatus == true)
    {
    digitalWrite(Led,HIGH);
    }
  }
  else
  {
    LedStatus = false;
    digitalWrite(Led, LOW);
  }
}  
