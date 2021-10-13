var facebookProfile = {
  name: "LB",
  friends: 100,
  messages: [],
  postMessage: function(newMessage){
     return facebookProfile.messages.push(newMessage);
  },
  deleteMessage: function(index){
     return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function(x){
      return facebookProfile.friends += x;
  },
  removeFriend: function(x){
      return facebookProfile.friends -= x;
  }
}
console.log(facebookProfile.postMessage("yo"));
console.log(facebookProfile.postMessage("yerrrr"));
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);
facebookProfile.addFriend(33);
console.log(facebookProfile.friends);
facebookProfile.removeFriend(34);
console.log(facebookProfile.friends);


