var app = new Vue(
  {
    el: '#app',
    data: {
      message : 'Hello'
    },
  }
);

var app2 = new Vue(
  {
    el: '#app2',
    data: {
      message : 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
);
var app3 = new Vue(
  {
    el: '#app3',
    data: {
      seen : true
    }
  }
);
var app4 = new Vue(
  {
    el: '#app4',
    data: {
      todos:[
      {message: 'todo 1'},
      {message: 'todo 2'},
      {message: 'todo 3'},
   ]
  }
  }
);
