import React from "react";

const Api = () => {
  return (
    <main className="calendar">
      <header className="header row flex-middle">
        <div className="col col-center api-text">
          <span>Lavendar REST API</span>
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
              Lavendar is a calendar and tasks app. This document describes a
              REST API which can be used for free and for any purpose.
            </p>
            <span className="api-method api-text">BASE URL:</span>
            <span className="api-code api-text">
              https://lavendar-app.herokuapp.com/
            </span>
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
              <tbody>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <th>email</th>
                  <th>email of user</th>
                </tr>
                <tr>
                  <th>password</th>
                  <th>password of user</th>
                </tr>
              </tbody>
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
              <tbody>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <th>email</th>
                  <th>must be unique</th>
                </tr>
                <tr>
                  <th>password</th>
                  <th>atleast 6 characters long</th>
                </tr>
              </tbody>
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
              <tbody>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <th>title</th>
                  <th>Title of the event</th>
                </tr>
                <tr>
                  <th>date</th>
                  <th>Day/Month/Year, e.g. "17.3.2021"</th>
                </tr>
                <tr>
                  <th>time</th>
                  <th>optional, e.g. "12.00"</th>
                </tr>
              </tbody>
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

      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Get Tasks</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Gets tasks from user.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">GET</span>
            <code className="api-code api-text">/api/tasks</code>
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
            <code className="api-code api-text">tasks</code>
          </div>
        </div>
        <br />
        <hr />
      </div>

      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Create Task</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Creates new task on user logged in.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">POST</span>
            <code className="api-code api-text">/api/tasks</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <table className="api-table">
              <tbody>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <th>title</th>
                  <th>Title of the task</th>
                </tr>
                <tr>
                  <th>completed</th>
                  <th>optional, default value: "false"</th>
                </tr>
              </tbody>
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
              title, completed, user, id
            </code>
          </div>
        </div>
        <br />
        <hr />
      </div>

      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Edit Task completed</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Edits task's completed value.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">PUT</span>
            <code className="api-code api-text">/api/tasks/:id</code>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <table className="api-table">
              <tbody>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <th>completed</th>
                  <th>"false" or "true"</th>
                </tr>
              </tbody>
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
              title, completed, user, id
            </code>
          </div>
        </div>
        <br />
        <hr />
      </div>

      <div>
        <div className="header row flex-middle">
          <div className="col col-start api-text">
            <span>Delete Task</span>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <p className="api-text">Deletes task from user by task's id.</p>
          </div>
        </div>
        <div className="row flex-middle">
          <div className="col col-start">
            <span className="api-method api-text">DELETE</span>
            <code className="api-code api-text">/api/tasks/:id</code>
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
    </main>
  );
};

export default Api;
