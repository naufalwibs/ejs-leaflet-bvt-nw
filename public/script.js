"use strict";

var map = L.map("mapid").setView([16.4131793, 80.8045234], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([19.4131793, 80.8045234]).addTo(map).bindPopup("You clicked marker 1");

L.marker([16.4131793, 80.8045234]).addTo(map).bindPopup("You clicked marker 2");

L.marker([19.4131793, 78.300235]).addTo(map).bindPopup("You clicked marker 3");

L.marker([16.4131793, 78.300235]).addTo(map).bindPopup("You clicked marker 4");

L.marker([19.4131793, 75.8045234]).addTo(map).bindPopup("You clicked marker 5");

L.marker([16.4131793, 75.8045234]).addTo(map).bindPopup("You clicked marker 6");
