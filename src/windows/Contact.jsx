import { WindowConrtols } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import React from "react";

const Contact = () => {
  const { windows } = useWindowStore();
  return (
    <>
      <div id="window-header">
        <WindowConrtols target="contact" />
        <h2>Contact me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/gal1.jpg"
          alt="kalayar"
          className="w-26 h-26 rounded-full object-cover"
        />
        <h3> Let's Connect! </h3>  
        <p>
    Get in touch to create engaging and supportive learning experiences for students
        </p>
        <p>kalayarlamin487@gmail.com</p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => 
            (<li key={id} style={{backgroundColor:bg}}>
              <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                <img src={icon}   alt={text} className="size-5"/>
                <p>
                    {text}
                </p>
              </a>
            </li>)
          )}
        </ul>
      </div>
    </>
  );
};
const ContactWidow = WindowWrapper(Contact, "contact");
export default ContactWidow;
