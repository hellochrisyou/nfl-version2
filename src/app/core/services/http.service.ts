import { DepthChart, PassingPlayerGame, ReceivingPlayerGame } from './../../shared/models/interface';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/shared/models/interface';
import { INITIALIZE_TEAMS } from 'src/app/shared/utility/initialize-teams';
import { DateService } from './date';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  allTeams: Team[] = [];

  constructor(
    private apiService: ApiService,
    private dateService: DateService
  ) {
    this.allTeams = INITIALIZE_TEAMS(this.allTeams);
    this.initializeStaticDate();
  }
  initializeDepthChart() {
    this.allTeams.forEach((team: any) => {
      this.apiService.httpGet(team.depthChartUrl).subscribe((depthChartData: any) => {
        if (depthChartData.items[2] === undefined) {
          if (depthChartData.items[1] === undefined || depthChartData.items[1].positions.qb === undefined || depthChartData.items[1].positions.wr === undefined || depthChartData.items[1].positions.te === undefined) {
            console.log('API is missing data for team: ' + team.displayName + '... position is undefined');
          } else {
            team.depthChartPlayers.qb.playerUrl = depthChartData.items[1].positions.qb.athletes[0].athlete.$ref;
            team.depthChartPlayers.wr1.playerUrl = depthChartData.items[1].positions.wr.athletes[0].athlete.$ref;
            team.depthChartPlayers.wr2.playerUrl = depthChartData.items[1].positions.wr.athletes[2].athlete.$ref;
            team.depthChartPlayers.wr3.playerUrl = depthChartData.items[1].positions.wr.athletes[4].athlete.$ref;
            team.depthChartPlayers.te.playerUrl = depthChartData.items[1].positions.te.athletes[0].athlete.$ref;
          }
        } else {
          team.depthChartPlayers.qb.playerUrl = depthChartData.items[2].positions.qb.athletes[0].athlete.$ref;
          team.depthChartPlayers.wr1.playerUrl = depthChartData.items[2].positions.wr.athletes[0].athlete.$ref;
          team.depthChartPlayers.wr2.playerUrl = depthChartData.items[2].positions.wr.athletes[2].athlete.$ref;
          team.depthChartPlayers.wr3.playerUrl = depthChartData.items[2].positions.wr.athletes[4].athlete.$ref;
          team.depthChartPlayers.te.playerUrl = depthChartData.items[2].positions.te.athletes[0].athlete.$ref;
        }
      });
    });
  }

  initializeQbPlayers() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.qb.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.qb.playerUrl).subscribe((playerData: any) => {
          team.depthChartPlayers.qb.id = playerData.id;
          team.depthChartPlayers.qb.name = playerData.displayName;
          team.depthChartPlayers.qb.gamesUrl = playerData.statistics.$ref;
          team.depthChartPlayers.qb.games = [];

          this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: PassingPlayerGame = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                passingYards: 0
              };
              tmpGame.weekNum = i + 1;
              tmpGame.gameUrl = data.items[i].$ref;

              this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                if (data.competitions[0].competitors[0].id === team.id) {
                  tmpGame.gameStatsUrl = data.competitions[0].competitors[0].$ref;
                  tmpGame.opponentId = data.competitions[0].competitors[1].id;
                } else {
                  tmpGame.gameStatsUrl = data.competitions[0].competitors[1].$ref;
                  tmpGame.opponentId = data.competitions[0].competitors[0].id;
                }
                this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                  tmpGame.playerGameStatsUrl = data.statistics.$ref;
                  this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                    tmpGame.passingYards = data.splits.categories[1].stats[8].value;
                    team.depthChartPlayers.qb.games.push(tmpGame);
                  });
                });
              });
            }
          })
        });
      }
    });
  }

  initializeWr1Players() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.wr1.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.wr1.playerUrl).subscribe((playerData: any) => {
          team.depthChartPlayers.wr1.id = playerData.id;
          team.depthChartPlayers.wr1.name = playerData.displayName;
          team.depthChartPlayers.wr1.gamesUrl = playerData.statistics.$ref;
          team.depthChartPlayers.wr1.games = [];

          this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: ReceivingPlayerGame = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                receivingYards: 0
              };
              tmpGame.weekNum = i + 1;
              tmpGame.gameUrl = data.items[i].$ref;

              this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                if (data.competitions[0].competitors[0].id === team.id) {
                  tmpGame.gameStatsUrl = data.competitions[0].competitors[0].$ref;
                  tmpGame.opponentId = data.competitions[0].competitors[1].id;
                } else {
                  tmpGame.gameStatsUrl = data.competitions[0].competitors[1].$ref;
                  tmpGame.opponentId = data.competitions[0].competitors[0].id;
                }
                this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                  tmpGame.playerGameStatsUrl = data.statistics.$ref;
                  this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                    tmpGame.receivingYards = data.splits.categories[3].stats[4].value;
                    team.depthChartPlayers.wr1.games.push(tmpGame);
                  });
                });
              });
            }
          })
        });
      }
    });
  }

  initializeWr2Players() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.wr2.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.wr2.playerUrl).subscribe((playerData: any) => {
          if (playerData.statistics !== undefined) {
            team.depthChartPlayers.wr2.id = playerData.id;
            team.depthChartPlayers.wr2.name = playerData.displayName;
            team.depthChartPlayers.wr2.gamesUrl = playerData.statistics.$ref;
            team.depthChartPlayers.wr2.games = [];

            this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
              for (let i = 0; i < this.dateService.currentWeek; i++) {
                let tmpGame: ReceivingPlayerGame = {
                  gameUrl: '',
                  gameStatsUrl: '',
                  playerGameStatsUrl: '',
                  receivingYards: 0
                };
                tmpGame.weekNum = i + 1;
                tmpGame.gameUrl = data.items[i].$ref;

                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  if (data.competitions[0].competitors[0].id === team.id) {
                    tmpGame.gameStatsUrl = data.competitions[0].competitors[0].$ref;
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    tmpGame.gameStatsUrl = data.competitions[0].competitors[1].$ref;
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                    tmpGame.playerGameStatsUrl = data.statistics.$ref;
                    this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                      tmpGame.receivingYards = data.splits.categories[3].stats[4].value;
                      team.depthChartPlayers.wr2.games.push(tmpGame);
                    });
                  });
                });
              }
            })
          } else {
            console.log('API is missing data for: ' + playerData.displayName);
          }
        });
      }
    });
  }

  initializeWr3Players() {

    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.wr3.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.wr3.playerUrl).subscribe((playerData: any) => {
          if (playerData.statistics !== undefined) {
            team.depthChartPlayers.wr3.id = playerData.id;
            team.depthChartPlayers.wr3.name = playerData.displayName;
            team.depthChartPlayers.wr3.gamesUrl = playerData.statistics.$ref;
            team.depthChartPlayers.wr3.games = [];

            this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
              for (let i = 0; i < this.dateService.currentWeek; i++) {
                let tmpGame: ReceivingPlayerGame = {
                  gameUrl: '',
                  gameStatsUrl: '',
                  playerGameStatsUrl: '',
                  receivingYards: 0
                };
                tmpGame.weekNum = i + 1;
                tmpGame.gameUrl = data.items[i].$ref;

                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  if (data.competitions[0].competitors[0].id === team.id) {
                    tmpGame.gameStatsUrl = data.competitions[0].competitors[0].$ref;
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    tmpGame.gameStatsUrl = data.competitions[0].competitors[1].$ref;
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                    tmpGame.playerGameStatsUrl = data.statistics.$ref;
                    this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                      tmpGame.receivingYards = data.splits.categories[3].stats[4].value;
                      team.depthChartPlayers.wr3.games.push(tmpGame);
                    });
                  });
                });
              }
            })
          }
        });
      }
    });
  }

  initializeTePlayers() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.te.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.te.playerUrl).subscribe((playerData: any) => {
          if (playerData.statistics !== undefined) {
            team.depthChartPlayers.te.id = playerData.id;
            team.depthChartPlayers.te.name = playerData.displayName;
            team.depthChartPlayers.te.gamesUrl = playerData.statistics.$ref;
            team.depthChartPlayers.te.games = [];

            this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
              for (let i = 0; i < this.dateService.currentWeek; i++) {
                let tmpGame: ReceivingPlayerGame = {
                  gameUrl: '',
                  gameStatsUrl: '',
                  playerGameStatsUrl: '',
                  receivingYards: 0
                };
                tmpGame.weekNum = i + 1;
                tmpGame.gameUrl = data.items[i].$ref;

                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  if (data.competitions[0].competitors[0].id === team.id) {
                    tmpGame.gameStatsUrl = data.competitions[0].competitors[0].$ref;
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    tmpGame.gameStatsUrl = data.competitions[0].competitors[1].$ref;
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                    tmpGame.playerGameStatsUrl = data.statistics.$ref;
                    this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                      tmpGame.receivingYards = data.splits.categories[3].stats[4].value;
                      team.depthChartPlayers.te.games.push(tmpGame);
                    });
                  });
                });
              }
            })
          }
        });
      }
    });
  }

  initializeOpponentId() {
    this.allTeams.forEach(team => {
      this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
        team.currentWeekEventUrl = data.items[this.dateService.currentWeek - 1].$ref;
        this.apiService.httpGet(team.currentWeekEventUrl).subscribe((data: any) => {
          team.currentOpponentId = '';
          if (data.competitions[0].competitors[0].id === team.id) {
            team.currentOpponentId = data.competitions[0].competitors[1].id
          } else {
            team.currentOpponentId = data.competitions[0].competitors[0].id;
          }
        })
      })
    });
    console.log('Done processing Opponent Ids');
  }

  initializeAverageCalculations() {
    this.allTeams.forEach(team => {
      team.depthChartPlayers.qb.games.forEach(game => {
        team.depthChartPlayers.qb.allPassingYards += game.passingYards;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr1.games.forEach(game => {
        team.depthChartPlayers.wr1.allReceivingYards += game.receivingYards;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr2.games.forEach(game => {
        team.depthChartPlayers.wr2.allReceivingYards += game.receivingYards;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr3.games.forEach(game => {
        team.depthChartPlayers.wr3.allReceivingYards += game.receivingYards;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.te.games.forEach(game => {
        team.depthChartPlayers.te.allReceivingYards += game.receivingYards;
      })
    })
    console.log('Done aggregating Average Values')
  }

  initializeOpponentYdsGiven() {
    this.allTeams.forEach(team => {
      team.depthChartPlayers.qb.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenQb += game.passingYards;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr1.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenWr1 += game.receivingYards;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr2.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenWr2 += game.receivingYards;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr3.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenWr3 += game.receivingYards;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.te.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenTe += game.receivingYards;
      })
    })
    console.log('Done aggregating Average Given Values')
  }

  findTeamIndex(teamId: string | undefined): number {
    let returnIndexValue = -1;
    this.allTeams.forEach((team: Team, index: number) => {
      if (team.id === teamId) {
        returnIndexValue = index;
      }
    });
    return returnIndexValue;
  }

  initializeStaticDate(): void {
    const todayDate = new Date();
    if (todayDate >= this.dateService.week1 && todayDate < this.dateService.week2) {
      this.dateService.currentWeek = 1;
    } else if (todayDate >= this.dateService.week2 && todayDate < this.dateService.week3) {
      this.dateService.currentWeek = 2;
    } else if (todayDate >= this.dateService.week3 && todayDate < this.dateService.week4) {
      this.dateService.currentWeek = 3;
    } else if (todayDate >= this.dateService.week4 && todayDate < this.dateService.week5) {
      this.dateService.currentWeek = 4;
    } else if (todayDate >= this.dateService.week5 && todayDate < this.dateService.week6) {
      this.dateService.currentWeek = 5;
    } else if (todayDate >= this.dateService.week6 && todayDate < this.dateService.week7) {
      this.dateService.currentWeek = 6;
    } else if (todayDate >= this.dateService.week7 && todayDate < this.dateService.week8) {
      this.dateService.currentWeek = 7;
    } else if (todayDate >= this.dateService.week8 && todayDate < this.dateService.week9) {
      this.dateService.currentWeek = 8;
    } else if (todayDate >= this.dateService.week9 && todayDate < this.dateService.week10) {
      this.dateService.currentWeek = 9;
    } else if (todayDate >= this.dateService.week10 && todayDate < this.dateService.week11) {
      this.dateService.currentWeek = 10;
    } else if (todayDate >= this.dateService.week11 && todayDate < this.dateService.week12) {
      this.dateService.currentWeek = 11;
    } else if (todayDate >= this.dateService.week12 && todayDate < this.dateService.week13) {
      this.dateService.currentWeek = 13;
    } else if (todayDate >= this.dateService.week13 && todayDate < this.dateService.week14) {
      this.dateService.currentWeek = 13;
    } else if (todayDate >= this.dateService.week14 && todayDate < this.dateService.week15) {
      this.dateService.currentWeek = 14;
    } else if (todayDate >= this.dateService.week15 && todayDate < this.dateService.week16) {
      this.dateService.currentWeek = 15;
    } else if (todayDate >= this.dateService.week16 && todayDate < this.dateService.week17) {
      this.dateService.currentWeek = 16;
    } else if (todayDate >= this.dateService.week17 && todayDate < this.dateService.week18) {
      this.dateService.currentWeek = 17;
    } else if (todayDate >= this.dateService.week18 && todayDate < this.dateService.endOfSeason) {
      this.dateService.currentWeek = 18;
    }
  }
}
