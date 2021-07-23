import React from "react";

const Api = (props) => {
  return (
    <div className="calendar">
      <header className="header row flex-middle">
        <div className="col col-center api-text">
          <span>Lavender REST Api</span>
        </div>
      </header>
      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Introduction</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">
              Lavender is a calendar app where you can set events for specific
              days and times. This document describes a REST API which can be
              used freely on any purpose. API is mainly built solely for
              Lavender app but it can be extended to other apps.
            </p>
          </div>
        </div>
        <br />
        <hr />
      </div>
      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Login</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">
              Logins user and retrieves user's access token.
            </p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">POST</span>
            <code className="api-code api-text">/api/login</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <table className="api-table">
              <tr>
                <th>Field</th>
                <th>Info</th>
                <th>Example</th>
              </tr>
              <tr>
                <th>email</th>
                <th></th>
                <th>admin@test.com</th>
              </tr>
              <tr>
                <th>password</th>
                <th></th>
                <th>123456</th>
              </tr>
            </table>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-response api-text">Response Fields</span>
            <code className="api-code api-text">token</code>
          </div>
        </div>
        <br />
        <hr />
      </div>
      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Register</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Registers new user.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">POST</span>
            <code className="api-code api-text">/api/users</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <table className="api-table">
              <tr>
                <th>Field</th>
                <th>Info</th>
                <th>Example</th>
              </tr>
              <tr>
                <th>email</th>
                <th>[unique]</th>
                <th>admin@test.com</th>
              </tr>
              <tr>
                <th>password</th>
                <th>[min-length: 6]</th>
                <th>123456</th>
              </tr>
            </table>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-response api-text">Response Fields</span>
            <code className="api-code api-text">id</code>
          </div>
        </div>
        <br />
        <hr />
      </div>

      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Get User</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Gets user data.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">GET</span>
            <code className="api-code api-text">/api/users</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-auth api-text">Authorization</span>
            <code className="api-code api-text">user access token</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-response api-text">Response Fields</span>
            <code className="api-code api-text">events[id], email, id</code>
          </div>
        </div>
        <br />
        <hr />
      </div>

      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Get Events</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Gets events from user.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">GET</span>
            <code className="api-code api-text">/api/events</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-auth api-text">Authorization</span>
            <code className="api-code api-text">user access token</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-response api-text">Response Fields</span>
            <code className="api-code api-text">events</code>
          </div>
        </div>
        <br />
        <hr />
      </div>

      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Create Event</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Creates new event on user logged in.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">POST</span>
            <code className="api-code api-text">/api/events</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <table className="api-table">
              <tr>
                <th>Field</th>
                <th>Info</th>
                <th>Example</th>
              </tr>
              <tr>
                <th>title</th>
                <th>[max-length: 45]</th>
                <th>New event</th>
              </tr>
              <tr>
                <th>date</th>
                <th></th>
                <th>17.3.2021</th>
              </tr>
              <tr>
                <th>time</th>
                <th></th>
                <th>12.00</th>
              </tr>
            </table>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-auth api-text">Authorization</span>
            <code className="api-code api-text">user access token</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-response api-text">Response Fields</span>
            <code className="api-code api-text">
              title, time, date, user, id
            </code>
          </div>
        </div>
        <br />
        <hr />
      </div>

      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Delete Event</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Deletes event from user by event's id.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">DELETE</span>
            <code className="api-code api-text">/api/events/:id</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-auth api-text">Authorization</span>
            <code className="api-code api-text">user access token</code>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Api;
