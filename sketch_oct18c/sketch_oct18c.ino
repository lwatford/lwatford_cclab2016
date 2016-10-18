// Motion detection sketch by Tyler Ram. http://tylerram.com
 
// pin 9 = red LED
// pin 12 = green LED
// pin 10 = motion sensor
 
 
// Var
int motion = 0;
 
void setup() {
  // put your setup code here, to run once:
  // Pin modes
  pinMode(9, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(10, INPUT);
 
}
 
void loop() {
  // put your main code here, to run repeatedly:
  motion = digitalRead(10);
  if (motion == HIGH) {
    digitalWrite(12, LOW); // Shuts of green LED
   
    digitalWrite(9, HIGH); // Start Flashing red LED
    delay(200);
    digitalWrite(9, LOW);
    delay(200);
    digitalWrite(9, HIGH);
    delay(200);
    digitalWrite(9, LOW);
    delay(200);
    digitalWrite(9, HIGH);
    delay(200);
    digitalWrite(9, LOW);
    delay(200);           // End flashing red LED
   
    } else {
     
    digitalWrite(9, LOW); // Red LED Off
    digitalWrite(12, HIGH); // Green LED on
  }
}
