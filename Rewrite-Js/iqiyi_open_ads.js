请自行在本地添加分流
host-suffix, cupid.iqiyi.com, direct


[rewrite_local]

# ～ 爱奇艺（2023-03-17）@ddgksf2013
^https?:\/\/.*cupid\.iqiyi\.com\/mixer\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/iqiyi_open_ads.js

[mitm]

hostname=*cupid.iqiyi.com

***********************************/












let obj=JSON.parse($response.body);delete obj.adSlots,$done({body:JSON.stringify(obj)});