<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="//fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
        {{-- <link rel="stylesheet" href="/js/app.css"> --}}
    </head>
    <body>
        <div id="app"></div>
        <script src="//localhost:8080/webpack-dev-server.js"></script>
        <script src="//localhost:8080/vendors.js"></script>
        <script src="//localhost:8080/app.js"></script>

{{--         <script src="/js/vendors.js"></script>
        <script src="/js/app.js"></script> --}}
        <div class="container">
            <div class="content">
                <div class="title">Laravel 5</div>
            </div>
        </div>
    </body>
</html>
