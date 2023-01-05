const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end(`
    <!doctype html>
    <html>
      <head>
        <title>Current Time</title>
      </head>
      <body>
        <h1 id="time">Wait pls...</h1>
        <script>
          setInterval(() => {
            const CTime = new Date().toLocaleString();
            document.getElementById('time').innerText = CTime;
          }, 500);
        </script>
      </body>
    </html>
  `);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('oops.... something bad happened', err);
  }

  console.log(`server started on ${port}. Link: http://127.0.0.1:${port} :D`);
});
