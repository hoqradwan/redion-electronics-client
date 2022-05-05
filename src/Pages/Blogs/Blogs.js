import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <p>
        <div className="blog">
          <h4 className="blog-head">
            Differences between JavaScript and NodeJS
          </h4>
          <p>
            JavaScript is a scripting high level programming language. On the
            other hand node.js is a cross platform and opensource JavaScript
            runtime environment. JavaScript can only be run in the browsers. We
            can run Javascript with the help of node.js. JavaScript is basically
            used on the client side. Node.js is mostly used on the server-side.
            JavaScript is capable enough to add HTML and play with the DOM.
            Nodejs does not have capability to add HTML tags. Javascript is used
            in frontend development. Nodejs is used in server-side development.
          </p>
        </div>
        <div className="blog">
          <h4 className="blog-head">
            Differences between SQL and NoSQL databases.
          </h4>
          <p>
            SQL is a RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).NoSQL is a
            Non-relational or distributed database system. SQL databases have
            fixed or static or predefined schema. NoSQL databases have dynamic
            schema. SQL databases are not suited for hierarchical data storage.
            NoSQL databases are best suited for hierarchical data storage. SQL
            databases are vertically scalable. NoSQL databases are horizontally
            scalable. MySQL, Microsoft SQL, PostgreSQL etc are SQL databases.
            MongoDB, Cassandra, Amazon DynamoDB etc are NoSQL databases.
          </p>
        </div>
        <div className="blog">
          <h4 className="blog-head">
            What is the purpose of `jwt` and how does it work
          </h4>
          <p>
            JSON Web Token (JWT) is a system for securely transmitting
            information between parties as JSON object. It is compact, readable
            and digitally signed using a private key or a public key pair by the
            Identity Provider(IdP). So the integrity and authenticity of the
            token can be verified by other parties involved. The purpose of
            using JWT is not to hide data but to ensure the authenticity of the
            data. JWT is signed and encoded, not encrypted. JWT is a token based
            stateless authentication mechanism. Since it is a client-side based
            stateless session, server doesn’t have to completely rely on a
            database to save session information.
          </p>
        </div>
      </p>
    </div>
  );
};

export default Blogs;
