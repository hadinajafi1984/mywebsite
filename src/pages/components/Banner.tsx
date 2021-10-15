import React from "react";
import TextAnimation from "react-animate-text";
interface Props {
  name: String;
  family: String;
}
export const Banner = ({ name, family }: Props) => {
  return (
    <section
      id="home"
      className="banner-section pt-page banner-back page-active"
    >
      <div className="banner-content">
        <h1 className="mb-20">
          {name} <span>{family}</span>
        </h1>

        <p className="cd-headline clip is-full-width">
          <span>I am a </span>

          <span className="cd-words-wrapper typing-demo">
            <b className="is-visible">Graphics Designer</b>

            <b>Freelancer</b>
            <b>Web Developer</b>
            <b>UI/UX Designer</b>
          </span>
        </p>
      </div>
    </section>
  );
};
