var posts=["2023/03/26/hello-world/","2024/03/17/240317-超低价升级开通GPT4、Claude、MJ等服务!/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };