var chicagoBulls = {
  startingSmallForward: "Scottie Pippen",
  startingPowerForward: "Dennis \'The Worm\' Rodman",
  startingCenter: "Luc Longley",
  startingShootingGuard: "Michael Jordan",
  startingPointGuard: "Ron Harper",
  sixthMan: "Toni Kukoč",
  seasonWins: "72",
  seasonLosses: "10",
  nbaChampionship: true,
  startingLineup: function(){
    var fullLineup = "Tonight\'s starting lineup: " + this.startingCenter + ", " + this.startingPowerForward + ", " + this.startingSmallForward + ", " + this.startingPointGuard + " and " + this.startingShootingGuard + "!\n";
    console.log(fullLineup);
  },
  realAllStar: function(bestPlayer, worstPlayer){
    this.bestPlayer = bestPlayer;
    this.worstPlayer = worstPlayer;
    var realAllStar = "But tonight\'s true all-star is " + this.bestPlayer +"! Take that, " + this.worstPlayer + "!";
    console.log(realAllStar);
  }


}
chicagoBulls.startingLineup();
chicagoBulls.realAllStar(chicagoBulls.sixthMan, chicagoBulls.startingShootingGuard);
