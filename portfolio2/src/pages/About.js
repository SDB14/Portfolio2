import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Parallax} from 'react-parallax'

function About() {
  return (
    <>
        <Header></Header>
        <Parallax bgImage='https://image.shutterstock.com/image-photo/palm-leaves-on-wooden-background-260nw-1060645004.jpg' strength={500}>
            <div style={{height:650}}>
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
     
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
    </div>
    </Parallax>
    <Footer></Footer>
    </>
  );
}

export default About;
