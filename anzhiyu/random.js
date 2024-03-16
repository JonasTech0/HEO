var posts=["2023/03/26/hello-world/","2024/03/17/isTime/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };