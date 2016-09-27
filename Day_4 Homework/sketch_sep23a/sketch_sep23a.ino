int buttonPin = 7;
int ledPin = 13;
int inputPin = 2;

boolean on=false;
int buttonState = 0;



void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(inputPin, OUTPUT);

  pinMode(buttonPin, INPUT);

}

void loop() {
  buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH){
    if(on==true){
      on=false;
    }else{
      on=true;
    }
  }
 if (on == true){
  digitalWrite(ledPin, HIGH); //turn on
 }else{
  digitalWrite(ledPin, LOW);//turn off
  }
 delay(0);

  if (on == true){
  digitalWrite(inputPin, HIGH); //turn on
 }else{
  digitalWrite(inputPin, LOW);//turn off
  }
}
