int soundSensorPin=A0;
int soundReading=0;
int soundThreshold=500;
int intensity[3]={0,0,0};
int LEDPins[3] = {3,5,6};
int numberOfPins=3;
int currentPin=0;
int fadeCounter=0;
int fadeDelay=50;
boolean switcher = true;

void setup(){
 pinMode(soundSensorPin, INPUT);
 for(int i=0; i<numberOfPins;i++){
 pinMode(LEDPins[i],OUTPUT);
 }
}

void loop(){
 soundReading=analogRead(soundSensorPin);
 if(soundReading>soundThreshold){
 if(switcher){
 aboveThreshold(currentPin);
 switcher=true;
  }
 } else {
 if(switcher){
 belowThreshold();
 switcher=true;
  }
 }
}

void aboveThreshold(int cPin){
 switcher=false;
 if(intensity[cPin]<10){
 intensity[cPin]=255;
 delay(50);
 currentPin=currentPin+1;
 }

 if(currentPin==numberOfPins){
 currentPin=0;
 }
}

void belowThreshold(){
 switcher=false;
 fadeCounter++;
 if(fadeCounter==fadeDelay){
 fadeCounter=0;
 for(int i=0; i<numberOfPins;i++){
 analogWrite(LEDPins[i],intensity[i]);
 }
 for(int i=0; i<numberOfPins;i++){
 intensity[i]--;
 if(intensity[i]<0){
 intensity[i]=0;
   }
  }
 }
}

//source scott c - UT
