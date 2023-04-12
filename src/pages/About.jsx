import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="container p-5">
        <h1>
          <u>React JS </u>
        </h1>
        <div className="container py-3">
          <h4>
            Getting started : Use command <b className="text-danger">npm run dev</b>
          </h4>
        </div>
        <h2>
          <u className="text-info">Quote APP</u>
        </h2>
        <div className="container px-5">
          <h5 className="aboutQoute">
            A quote app using React JS is a web application that displays a
            collection of quotes and allows users to interact with them. The app
            is built using the React JS library, which provides a fast and
            efficient way to build user interfaces.
          </h5>
          <h4>The main features of a quote app using React JS include:</h4>
          <ol>
            <li>
              Displaying quotes: The app displays a collection of quotes that
              users can browse through.
            </li>
            <li>
              Filtering quotes: Users can filter quotes by author, category, or
              other criteria.
            </li>
            <li>
              Adding new quotes: Users can submit their own quotes to the app.
            </li>
            <li>
              Liking and sharing quotes: Users can like or share their favorite
              quotes on social media.
            </li>
            <li>
              Saving favorite quotes: Users can save their favorite quotes to a
              list for easy access.
            </li>
          </ol>
          <h4><b>API : </b> https://quotable.io/random</h4>
          <p>
            To build a quote app using React JS, you will need to use a
            combination of HTML, CSS, Bootstrap  and JavaScript to create the user
            interface, and React JS to manage the app's state and render the
            components.
          </p>
          <p>
            Some of the key components you will need to create include a quote
            list component, a filter component, a quote submission form, a like
            and share button component, and a favorites list component. You will
            also need to integrate the app with a backend API that stores and
            retrieves the quotes. This can be done using a variety of
            technologies, including Node.js, MongoDB, and Firebase. Overall,
            building a quote app using React JS can be a fun and rewarding
            project that helps you learn the basics of web development and user
            interface design. &nbsp; &nbsp; &nbsp;
            <Link
              to="/qoute"
              className="btn btn-light rounded-5 border border-secondary"
            >
              Visit APP
            </Link>
          </p>
        </div>
      </div>

      <hr />

      <div className="container p-5">
        <h2>
          <u className="text-info">News APP</u>
        </h2>
        <div className="container px-5">
          <h5 className="aboutQoute">
            A news app using React JS is a web application that allows users to
            browse and read news articles from various sources. The app is built
            using the React JS library, which provides a fast and efficient way
            to build user interfaces.
          </h5>
          <h4>The main features of a news app using React JS include:</h4>
          <ol>
            <li>
              Displaying news articles: The app displays a collection of news
              articles from various sources, such as newspapers, magazines, or
              blogs.
            </li>
            <li>
              Filtering articles: Users can filter articles by topic, source, or
              other criteria.
            </li>
            <li>
              Searching for articles: Users can search for specific articles by
              keyword.
            </li>
            <li>
              Saving articles: Users can save their favorite articles for later
              reading.
            </li>
            <li>
              Sharing articles: Users can share articles on social media or via
              email.
            </li>
          </ol>
          <h4><b>API : </b> https://newsapi.org/v2/everything?q="TOPIC"&from=2023-03-11&sortBy=publishedAt&apiKey=6386d7740a064a90b22e801c1618ad77</h4>

          <p>
            To build a news app using React JS, you will need to use a
            combination of HTML, CSS, Bootstrap  and JavaScript to create the user
            interface, and React JS to manage the app's state and render the
            components.
          </p>
          <p>
            Some of the key components you will need to create include a news
            article list component, a filter component, a search component, a
            saved articles component, and a share button component.
          </p>
          <p>
            You will also need to integrate the app with a news API that
            retrieves the articles. There are several news APIs available, such
            as NewsAPI, Google News API, and New York Times API.
          </p>

          <p>
            Overall, building a news app using React JS can be a challenging and
            rewarding project that helps you learn the basics of web
            development, user interface design, and API integration. &nbsp;
            &nbsp; &nbsp;
            <Link
              to="/newsApp"
              className="btn btn-light rounded-5 border border-secondary"
            >
              Visit APP
            </Link>
          </p>
        </div>
      </div>


      <hr />

<div className="container p-5">
  <h2>
    <u className="text-info">URL To QR CODE</u>
  </h2>
  <div className="container px-5">
    <h5 className="aboutQoute">
    A URL to QR app using React JS is a web application that allows users to convert a URL into a QR code. The app is built using the React JS library, which provides a fast and efficient way to build user interfaces.
    </h5>
    <h4>The main features of a URL to QR app using React JS include:</h4>
    <ol>
      <li>
      Converting URLs to QR codes: The app allows users to enter a URL and generate a QR code that represents the URL.
      </li>
      <li>
      Scanning QR codes: Users can scan the generated QR code using their mobile device to open the URL in their mobile browser.
      </li>
      <li>
      Downloading QR codes: Users can download the generated QR code as an image for later use.
      </li>
    </ol>
    <h4><b>API : </b> https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TOPIC</h4>
    
    <p>
    To build a URL to QR app using React JS, you will need to use a combination of HTML, CSS, Bootstrap  and JavaScript to create the user interface, and React JS to manage the app's state and render the components.


    </p>
    <p>
    Some of the key components you will need to create include a URL input component, a QR code generator component, a scan QR code component, and a download QR code component.


    </p>
    <p>
    You will also need to integrate the app with a QR code generation API that generates the QR codes. There are several QR code generation APIs available, such as QR Code API, QR Code Generator API, and ZXing API.
    </p>

    <p>
    Overall, building a URL to QR app using React JS can be a fun and useful project that helps you learn the basics of web development, user interface design, and API integration. &nbsp;
      &nbsp; &nbsp;
      <Link
        to="/qr"
        className="btn btn-light rounded-5 border border-secondary"
      >
        Visit APP
      </Link>
    </p>
  </div>
</div>
    </>
  );
};

export default About;
