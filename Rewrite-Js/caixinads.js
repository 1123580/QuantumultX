/***********************************

> 应用名称：财新
> 请在本地添加下面分流
host, gg.caixin.com, direct

[rewrite_local]

# ～ 财新（2024-01-14）@ddgksf2013
^https?:\/\/gg\.caixin\.com\/s\?z=caixin&op=1&c=3362 url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/caixinads.js

[mitm]

hostname=gg.caixin.com

***********************************/











var body = $response.body.replace(/sday":"[^"]*"/g, 'sday":"2029-12-01 00:00:00"')
		.replace(/eday":"[^"]*"/g, 'eday":"2029-12-30 00:00:00"')
		.replace(/intval":\d/g, 'intval":0')
$done({ body });