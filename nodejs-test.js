var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？");
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/
  console.log(
    "有人向端口号" + port + "发送请求，路径（带查询参数）为" + pathWithQuery
  );
  console.log("请求方式为method:" + method);
  console.log("request.headers");
  console.log(request.headers);

  if (path === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(
      `
        <!DOCTYPE html>
        <head>
          <link rel="stylesheet" href="/css">
        </head>
        <body>
          <h1 class="h1">欢迎来到个人网站</h1>
          <button class="b1"><a href="/rainbow">彩虹</a></button>
          <button class="b2"><a href="/heart">跳动的心</a></button>
          <script src="/js"></script> 
        </body>
        `
    );
    response.end();
  } else if (path === "/css") {
    response.statusCode = 201;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    response.write(
      `
        .h1{
            color:red;
        }
        .b1{
          background:green;
        }
        .b1>a{
          color:yellow;
        }
        .b2{
          background:black;
        }
        .b2>a{
          color:red;
        }
        `
    );
    response.end();
  } else if (path === "/js") {
    response.statusCode = 202;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    response.write(`
      console.log('这是JS的内容')
    `);
    response.end();
  } else if (path === "/rainbow") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`
      <!DOCTYPE html>
      <html lang="Zn">
        <head>
          <link rel="stylesheet" href="/rainbow/rainbow-css">
        </head>
        <body>
        <div class="container">
          <div class="rainbow">
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="/rainbow/rainbow-js>
        </body>
</html>

   `);
    response.end();
  } else if (path === "/rainbow/rainbow-css") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    response.write(`
    body {
        background-color: white;
      }
      .container {
        height: 150px;
        width: 300px;
        overflow: hidden;
      }
      .container div {
        overflow: hidden;
      }
      .rainbow {
        height: 300px;
        width: 300px;
        background-color: hsl(0, 100%, 50%);
        border-radius: 50%;
      }

      .rainbow > div {
        background: hsl(39, 100%, 50%);
        height: 280px;
        margin: 10px;
        border-radius: 50%;
      }
      .rainbow > div > div {
        background: hsl(60, 100%, 50%);
        height: 260px;
        margin: 10px;
        border-radius: 50%;
      }
      .rainbow > div > div > div {
        background: hsl(120, 100%, 50%);
        height: 240px;
        margin: 10px;
        border-radius: 50%;
      }
      .rainbow > div > div > div > div {
        background: hsl(180, 100%, 50%);
        height: 220px;
        margin: 10px;
        border-radius: 50%;
      }
      .rainbow > div > div > div > div > div {
        background: hsl(240, 100%, 50%);
        height: 200px;
        margin: 10px;
        border-radius: 50%;
      }
      .rainbow > div > div > div > div > div > div {
        background: hsl(300, 100%, 50%);
        height: 180px;
        margin: 10px;
        border-radius: 50%;
      }
      .rainbow > div > div > div > div > div > div > div {
        background: hsl(300, 100%, 100%);
        height: 160px;
        margin: 10px;
        border-radius: 50%;
      }
    `);
    response.end();
  } else if (path === "/rainbow/rainbow-js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    response.end();
  } else if (path === "/heart") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`
    <!DOCTYPE html>
        <head>
          <link rel="stylesheet" href="/heart/heart-css">
        </head>
        <body>
          <div class="heart">
            <div class="left"></div>
            <div class="right"></div>
            <div class="center"></div>
          </div>
        </body>
      </html>
    `);
    response.end();
  } else if (path === "/heart/heart-css") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    response.write(`
    *{margin:0;padding:0;box-sizing:border-box;}
    .heart{
      display:inline-block;
      border:1px solid black;
      margin:100px;
      position:relative;
      animation:heart 1s infinite alternate ;
    }
    
    
     @keyframes heart {
      0% {
        transform:scale(1.0);
      }
      100%
      {transform:scale(1.5); }
    }
    
    .left{
      background:red;
      width: 40px;
      height: 40px;
      position:absolute;
      transform:rotate(45deg) translateX(-40px);
      border-radius:50% 0% 0% 50%;
      
    }
    .right{
      background:red;
      width: 40px;
      height: 40px;
      position:absolute;
      transform:rotate(45deg) translateY(-40px);
      border-radius:50% 50% 0% 0%;
      
    }
    .center{
      background:red;
      width: 40px;
      height: 40px;
      position:absolute;
      transform:rotate(45deg);
    }
    `);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`你输入的路径不存在对应的内容`);
    response.end;
  }
});
server.listen(port);
console.log("监听" + port + "成功\n请用Ctrl+单击打开 http://localhost:" + port);
