const app=getApp()
const parseObjToQuery=require("../../utils/parseObjtoQuery.js")
Page({
  data: {
    model: [{ m: 1718, 
    s: "../../static/images/b11.png" ,
    p: "331kw",
    h: "310km/h"
    },
    

     { m: 1911, 
     s: "../../static/images/b22.png",
     p: "320kw",
     h: "350km/h"
     }, 
     { m: "I Panamer", 
     s: "../../static/images/b33.png",
     p: "330kw",
     h: "300km/h" 
     },
      { m: "I Macan", 
      s: "../../static/images/b44.png",
      p: "300kw",
      h: "300km/h" 
      }, 
      { m: "I Cayenne", 
      s: "../../static/images/b55.png",
      p: "380kw",
      h: "360km/h" 
      }],
    
    images: ['../../static/images/b11.jpg', '../../static/images/b22.jpg',          '../../static/images/b33.jpg',
      '../../static/images/b44.jpg', '../../static/images/b55.jpg'],
    motto: '宝马--随心而动',
  },
  bindJump: function(event){
    const data=event.target.dataset;
    console.log(data);
    const query=parseObjToQuery(data);
    console.log(query);
    wx.navigateTo({
      url: '/pages/detail/detail'+"?"+query,
    })
  },
  
  onLoad: function () {
   
  }
})
