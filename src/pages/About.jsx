import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="container marPad ">
        <h1 className="marPad">
          <u>React JS </u>
        </h1>
        <div className="container marPad ">
          <div className="container marPad ">
          </div>
          <h2>
            <u className="text-info">News APP</u>
          </h2>
            <h4>
              Getting for started : Use command <b className="text-danger">npm run dev</b>
            </h4>
            <h4 className="text-warning"> <b> Vite JS</b>  created by</h4><br />
          <div className="container marPad">
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
            <b>API : https://newsapi.org/v2/everything?q="TOPIC"&from=2023-03-11&sortBy= publishedAt&apiKey=6386d7740a064a90b22e801c1618ad77</b>
            <p className="text-danger float-end">NOTE : Using Only LocalHost</p><br /><br />
            <b>API : https://newsdata.io/api/1/news?apikey= pub_2028019d6fdb5375f779ccaa625633b1d319e&q="TOPIC"</b>

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
              &nbsp;<a href="https://github.com/ritendragour/reactWorld" target="_blank" className="btn btn-light rounded-5 border border-secondary">GitHub</a>   

            </p>
          </div>
        </div>
        <hr />
        <h2>
          <u className="text-info">Quote APP</u>
        </h2>
        <h4>
              Getting for started : Use command <b className="text-danger">npm run dev</b>
            </h4>
            <h4 className="text-warning"> <b> Vite JS</b>  created by</h4><br />

        <div className="container marPad">
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
          <b>API :  https://quotable.io/random</b>
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
            &nbsp; <a href="https://github.com/ritendragour/reactWorld" target="_blank" className="btn btn-light rounded-5 border border-secondary">GitHub</a>   

          </p>
        </div>
      </div>

      <hr />

      <div className="container marPad">
        <h2>
          <u className="text-info">URL To QR CODE</u>
        </h2>
        <h4>
              Getting for started : Use command <b className="text-danger">npm run dev</b>
            </h4>
            <h4 className="text-warning"> <b> Vite JS</b>  created by</h4><br />

        <div className="container marPad">
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
          <b>API :  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TOPIC</b>

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
            &nbsp; <a href="https://github.com/ritendragour/reactWorld" target="_blank" className="btn btn-light rounded-5 border border-secondary">GitHub</a>   
          </p>
        </div>
      </div>

<hr />
      <div className="container marPad">
        <h2>
          <u className="text-info">Todo app</u>
        </h2>
        <h4>
              Getting for started : Use command <b className="text-danger">npm start</b>
            </h4>
            <h4 className="text-warning"> <b> Create-react-app</b>  created by</h4><br />

        <div className="container marPad">
          <h5 className="aboutQoute">
            A Todo app is a common project for learning and practicing ReactJS, and using Context is a great way to manage global state in a React application. Here are the basic steps to create a Todo app using ReactJS Context:
          </h5>
          <ol>
            <li>
              Create a new React app using create-react-app or your preferred setup.

            </li>
            <li>
              Create a new context using the createContext() method from React. This will be used to manage the state of the Todo items.

            </li>
            <li>Create a TodoProvider component that wraps the entire application and provides the state and methods to manage the Todo items to its children.

            </li>
            <li>
              In the TodoProvider component, define the initial state for the Todo items using useState() hook.

            </li>
            <li>
              Define methods for adding, editing, and deleting Todo items in the TodoProvider component. These methods should update the state of the Todo items using the setState() function.

            </li>
            <li>Create a TodoList component that displays the list of Todo items. This component should receive the state of the Todo items from the TodoProvider using useContext() hook.
            </li>
            <li>Create a TodoItem component that displays each individual Todo item. This component should receive the state of the Todo items and the methods to manage them from the TodoProvider using useContext() hook.
            </li>
            <li>Create a TodoForm component that allows the user to add a new Todo item. This component should receive the addTodo method from the TodoProvider using useContext() hook.
            </li>
            <li>Render the TodoProvider component at the top level of the application.
            </li>
            <li>Use the TodoList, TodoItem, and TodoForm components to display and manage the Todo items.
            &nbsp;&nbsp; &nbsp;
            <a href="https://todo-reactjs-nu.vercel.app/" target="_blank" className="btn btn-light rounded-5 border border-secondary">Visit APP</a>
            &nbsp;  <a href="https://github.com/ritendragour/TodoReactjs" target="_blank" className="btn btn-light rounded-5 border border-secondary">GitHub</a>   
            </li>
          </ol>
        </div>
      </div>

      <hr />
      
      <div className="container marPad">
        <h2>
          <u className="text-info">Expense Manager</u>
        </h2>
        <h4>
              Getting for started : Use command <b className="text-danger">npm start</b>
            </h4>
            <h4 className="text-warning"> <b> Create-react-app</b>  created by</h4><br />

        <div className="container marPad">
          <h5 className="aboutQoute">
          An expense manager is a web application that helps users track their expenses and manage their budget. ReactJS is a popular JavaScript library for building user interfaces, and it can be used to create a component-based expense manager application.
</h5>
          <p>To get started with building an expense manager using ReactJS, you can first create a new React application using a tool like Create React App. Once you have your project set up, you can begin building your expense manager component.
</p>
<p>One way to approach this is to break down the expense manager into smaller, reusable components. For example, you could create a component for displaying a list of expenses, a component for adding new expenses, and a component for displaying a summary of the user's budget.
</p>
<p>To manage the state of the application, you can use React's built-in state management system or a state management library like Redux. You can also use a library like React Router to handle navigation between different parts of the application.
</p>
<p>When building an expense manager, it's important to consider factors like data validation, user authentication, and data storage. You may want to use a backend service like Firebase or a Node.js server to store and manage user data.
</p>
<p>Overall, building an expense manager using ReactJS can be a great way to learn more about building complex, component-based web applications. By breaking down the application into smaller, reusable components, you can create a more modular and maintainable codebase.
&nbsp;&nbsp; &nbsp;
    <a href="https://expense-manager-six.vercel.app/" target="_blank" className="btn btn-light rounded-5 border border-secondary">Visit APP</a>
    &nbsp;<a href="https://github.com/ritendragour/expense_manager" target="_blank" className="btn btn-light rounded-5 border border-secondary">GitHub</a>
</p>
        </div>
      </div>
    </>
  );
};

export default About;
