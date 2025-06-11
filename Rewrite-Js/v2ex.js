/***********************************

> 网站名称：V2EX网页去广告
> 脚本功能：网站净化|去广告
		  
    
[rewrite_local]

^https?:\/\/.*v2ex\.com\/($|t\/\d+) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/v2ex.js

[mitm] 

hostname = *.v2ex.com

***********************************/



var body = $response.body.replace(
  /<head>/,
  `<head>
    <style>
      .sidebar_units,
      .sidebar_compliance,
      div[class^="wwads-"]{
        display: none !important;
      }
    </style>`
);
$done({ body });