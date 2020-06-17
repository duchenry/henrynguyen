#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
const char* ssid = "WiFi_ESP8266_NODEMCU";
ESP8266WebServer server(80);
String data, data_old;
void setup()
{
 Serial.begin(115200);
 WiFi.mode(WIFI_AP);
 WiFi.softAP(ssid);
 server.on("/",HTTP_handleRoot);
 server.onNotFound(HTTP_handleRoot);
 server.begin();
}
void loop()
{
 server.handleClient();
 delay(50);
}
void HTTP_handleRoot(void)
{
 data = server.arg("kitu");
 if(data != data_old)
 {
 data_old = data;
 Serial.println(data);
 }
}
