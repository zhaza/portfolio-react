import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    let timeoutid = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {
      clearTimeout(timeoutid);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_345qjgl",
        "template_gvnz3yz",
        document.querySelector("form"),
        "8RtJeAA4znkqZ5HCk"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="contact-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in remote opportunities - especially ambitious or
            large projects. However, if you have other requests or questions,
            don't hesitate to contact me using below form.
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <div className="map-info">
            Mikhail Jackson
            <br />
            Seattle, WA (USA)
            <br />
          </div>
          <MapContainer
            center={[47.6062, -122.3321]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[47.6062, -122.332109]}>
              <Popup>
                Seattle <br /> WA
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
