// Boilerplate Code for HTTP Status Code API
const express = require("express");
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

app.get("/", (req, res) => {
  res.send("Please Navigate to /status-info?code=");
});

app.get("/status-info", (req, res) => {
  const code = req.query.code;
  let message = "";

  switch (code) {
    case "200":
      message =
        "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.";
      break;
    case "201":
      message =
        "Created: The request has been fulfilled and resulted in one or more new resources being created.";
      break;
    case "204":
      message =
        "No Content: The server successfully processed the request and is not returning any content.";
      break;
    case "400":
      message =
        "Bad Request: The server cannot process the request due to client-side errors (e.g.,malformed syntax).";
      break;
    case "401":
      message =
        "Unauthorized: The request has not been applied because it lacks valid authentication credentials for the target resource.";
      break;
    case "403":
      message =
        "Forbidden: The server understood the request but refuses to authorize it.";
      break;
    case "404":
      message = "Not Found: The server can not find the requested resource. ";
      break;
    case "405":
      message =
        "Method Not Allowed: The method received in the request is known by the origin server but not supported by the target resource.";
      break;
    case "429":
      message =
        "Too Many Requests: The user has sent too many requests in a given amount of time.";
      break;
    case "500":
      message =
        "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.";
      break;
    default:
      message = "Unknown Status Code";
  }
  res.json({
    code: code,
    message: message,
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
