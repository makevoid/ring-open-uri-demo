# Ring OpenURI

video: http://mkv-video.s3.amazonaws.com/ring/ring_maps_and_b.mov (~5mb)

### simple example using Ruby

see `ring_open_uri.rb` (sinatra example app)


```
$ # clone/download the project
$ gem install sinatra rack
$ rackup -p 3000
```

Then visit: http://localhost:3000

(after you tested the app on your computer, then open the browser on your phone/tablet)


There are two default acttions to see (I focused more on choosing and testing the gestures than the actual implementation):

#### home

![](http://dl.dropboxusercontent.com/s/qn2og1q2x5t4xnh/2014-12-05%20at%2008.56%20(1).png)

- `http://YOUR_WIFI_IP:3000/action/home` 
- (calls google map to get you home: need to get the current location thou)

#### btc

![](http://dl.dropboxusercontent.com/s/2ft6o2a9zxg0ojo/2014-12-05%20at%2008.56.png)

- `http://YOUR_WIFI_IP:3000/action/bitcoin` 
- (opens a disposable bitcoin wallet [rushwallet])

at the moment, you can configures Actions from here: https://github.com/makevoid/ring_open_uri/blob/master/ring_open_uri.rb#L23

and urls from here: https://github.com/makevoid/ring_open_uri/blob/master/views/index.erb#L9

enjoy!

#### TODO:

- eventsource (server sent events)
- rewrite main.js in opal (too awesome)
