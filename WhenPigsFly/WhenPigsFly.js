Games = new Meteor.Collection("ExistingGames");
Players = new Meteor.Collection("Players");
Cards = new Meteor.Collection("Cards");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to When Pigs Fly.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.welcome.showHome = function () {
    // When there is no game ID we need the home screen.
    return Session.equals("gameId", null);
  };

  Template.welcome.existingGames = function () {
    return Games.find();
  };

   Template.welcome.events({
    'click span.add': function () {
      var newName = prompt('What is the name of your game?', '(new game)');
      if (newName)
      {
        Games.insert({name: newName, owner: this.userId, dateCreated: new Date()});
      }
    },
    'click div.gameListItem': function () {
      alert('You selected an existing game.');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
       Games.insert({name: 'Seans game', owner: '123123123123123123', dateCreated: new Date()});
       Games.insert({name: 'Adams game', owner: '123123123123123123', dateCreated: new Date()});
       Games.insert({name: 'Tonys game', owner: '123123123123123123', dateCreated: new Date()});
   });
}
