<html>
    <head>
    </head>
    <body>
        <h1>Data Layer Test Harness</h1>

        <h2>Site Cat Params</h2>

        <table border="1">
            <#list session.queryString?split("&") as param>
                <tr><td>${param?replace('=', '</td><td>')?replace('%3A', ':')?replace('%2C', ',')?replace('%2F', '/')?replace('%3D', '=')?replace('%7C', "|")?replace('%20', ' ')?replace('%3B', ';')}</td></tr>
            </#list>
        </table>
    </body>
</html>