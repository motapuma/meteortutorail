PlayerList = new Mongo.Collection('players');

if(Meteor.isClient){
  console.log("here we go!!");
  Template.leaderboard.helpers({
    //'total': function(){return PlayerList.find().count()},
    'player2':function(){return PlayerList.find()}
  });
  Template.totalElements.helpers({
    'total': function(){return PlayerList.find().count()},
    //'player2':function(){return PlayerList.find()}
  });

    Template.leaderboard.events({
      'click .player': function(){
        alert("you clciked");// code goes here
      }
    });

}

if(Meteor.isServer){
  
}