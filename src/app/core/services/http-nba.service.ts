import { Injectable } from '@angular/core';
import { Game, KeyValueRef, NbaPlayer, NbaTeam, Team } from 'src/app/shared/models/interface';
import { INITIALIZE_NBA_TEAMS, INITIALIZE_TEAMS } from 'src/app/shared/utility/initialize-teams';

import { ApiService } from './api.service';
import { DateService } from './date';

@Injectable({
  providedIn: 'root'
})
export class HttpNbaService {

  allTeams: NbaTeam[] = [];
  toggleStatus = 'No High or Low';

  constructor(
    private apiService: ApiService,
  ) {
    this.allTeams = INITIALIZE_NBA_TEAMS(this.allTeams);
    this.initializeDepthChart();
  }
  initializeDepthChart() {
    this.allTeams.forEach((team: any) => {
      this.apiService.httpGet(team.depthChartUrl).subscribe((depthChartData: any) => {
        if (depthChartData.items[0].positions.pg !== undefined) {
          team.depthChartPlayers.pg.playerUrl = depthChartData.items[0].positions.pg.athletes[0].athlete.$ref;
        }
        if (depthChartData.items[0].positions.pf !== undefined) {
          team.depthChartPlayers.pf.playerUrl = depthChartData.items[0].positions.pf.athletes[0].athlete.$ref;
        }
        if (depthChartData.items[0].positions.c !== undefined) {
          team.depthChartPlayers.c.playerUrl = depthChartData.items[0].positions.c.athletes[0].athlete.$ref;
        }
        if (depthChartData.items[0].positions.sf !== undefined) {
          team.depthChartPlayers.sf.playerUrl = depthChartData.items[0].positions.sf.athletes[0].athlete.$ref;
        }
        if (depthChartData.items[0].positions.sg !== undefined) {
          team.depthChartPlayers.sg.playerUrl = depthChartData.items[0].positions.sg.athletes[0].athlete.$ref;
        }
      });
    });
  }

  initializePgPlayers() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.pg.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.pg.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length - 1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.pg.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.pg.injuryStatus = '';
          }
          team.depthChartPlayers.pg.id = playerData.id;
          team.depthChartPlayers.pg.name = playerData.displayName;
          if (playerData.statistics !== undefined) {
            team.depthChartPlayers.pg.gamesUrl = playerData.statistics.$ref;
          }

          team.depthChartPlayers.pg.games = [];

          this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
            data.items.forEach((item: any) => {
              let tmpUrl = item.$ref;
              this.apiService.httpGet(tmpUrl).subscribe((gameData: any) => {
                let tmpGameDate = new Date(gameData.date);
                let tmpToday = new Date();
                let tmpNbaStart = new Date('10/24/2023');
                if (tmpToday >= tmpGameDate && tmpGameDate >= tmpNbaStart) {
                  let tmpGame: Game = {
                    gameDate: gameData.date,
                    gameUrl: '',
                    gameStatsUrl: '',
                    playerGameStatsUrl: '',
                    value: 0,
                    assistsValue: 0,
                    threePtValue: 0,
                    blocksValue: 0,
                    reboundsValue: 0,
                    homeAway: '',
                    gameNum: (team.depthChartPlayers.pg.games.length + 1)
                  };

                  if (gameData.competitions[0].competitors[0].id === team.id) {
                    if (gameData.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[0].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[1].id;
                    tmpGame.homeAway = 'home';
                  } else {
                    if (gameData.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[1].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[0].id;
                    tmpGame.homeAway = 'away';
                  }
                  if (tmpGame.gameStatsUrl !== '') {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      data.splits.categories[2].athletes.forEach((item: any) => {
                        let tmpRef = item.athlete.$ref;
                        let tmpRefStats = item.statistics.$ref;
                        let tmpPlayerId = '';
                        tmpPlayerId += tmpRef.substring(171, 1);

                        this.apiService.httpGet(tmpRef).subscribe((data: any) => {
                          if (data.id === team.depthChartPlayers.pg.id) {
                            this.apiService.httpGet(tmpRefStats).subscribe((data: any) => {
                              console.log("🚀 ~ data:", data)
                              tmpGame.blocksValue = data.splits.categories[0].stats[0].value;
                              tmpGame.reboundsValue = data.splits.categories[0].stats[1].value;
                              tmpGame.assistsValue = data.splits.categories[2].stats[0].value;
                              tmpGame.threePtValue = data.splits.categories[2].stats[14].value;
                              tmpGame.value = data.splits.categories[2].stats[10].value;
                              let opponentTeam = this.allTeams.find(team => {
                                return team.id === tmpGame.opponentId
                              });
                              let tmpOpponentGame: Game = {
                                opponentId: team.id,
                                gameDate: tmpGame.gameDate,
                                gameUrl: '',
                                gameStatsUrl: '',
                                gameNum: tmpGame.gameNum,
                                playerGameStatsUrl: '',
                                value: tmpGame.value,
                                assistsValue: tmpGame.assistsValue,
                                threePtValue: tmpGame.threePtValue,
                                blocksValue: tmpGame.blocksValue,
                                reboundsValue: tmpGame.reboundsValue,
                                homeAway: '',
                                opponentPlayer: team.depthChartPlayers.pg.name
                              };
                              opponentTeam?.opponentGamesPg.push(tmpOpponentGame);
                              team.depthChartPlayers.pg.games.push(tmpGame);
                            });
                          }
                        });
                      });
                    });
                  }
                }
              });
            });
          })
        });
      }
    });
  }

  initializePfPlayers() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.pf.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.pf.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length - 1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.pf.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.pf.injuryStatus = '';
          }
          team.depthChartPlayers.pf.id = playerData.id;
          team.depthChartPlayers.pf.name = playerData.displayName;
          if (playerData.statistics !== undefined) {
            team.depthChartPlayers.pf.gamesUrl = playerData.statistics.$ref;
          }

          team.depthChartPlayers.pf.games = [];

          this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
            data.items.forEach((item: any) => {
              let tmpUrl = item.$ref;
              this.apiService.httpGet(tmpUrl).subscribe((gameData: any) => {
                let tmpGameDate = new Date(gameData.date);
                let tmpToday = new Date();
                let tmpNbaStart = new Date('10/24/2023');
                if (tmpToday >= tmpGameDate && tmpGameDate >= tmpNbaStart) {
                  let tmpGame: Game = {
                    gameDate: gameData.date,
                    gameUrl: '',
                    gameStatsUrl: '',
                    playerGameStatsUrl: '',
                    value: 0,
                    assistsValue: 0,
                    threePtValue: 0,
                    blocksValue: 0,
                    reboundsValue: 0,
                    homeAway: '',
                    gameNum: (team.depthChartPlayers.pf.games.length + 1)
                  };

                  if (gameData.competitions[0].competitors[0].id === team.id) {
                    if (gameData.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[0].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[1].id;
                    tmpGame.homeAway = 'home';
                  } else {
                    if (gameData.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[1].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[0].id;
                    tmpGame.homeAway = 'away';
                  }
                  if (tmpGame.gameStatsUrl !== '') {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      data.splits.categories[2].athletes.forEach((item: any) => {
                        let tmpRef = item.athlete.$ref;
                        let tmpRefStats = item.statistics.$ref;
                        let tmpPlayerId = '';
                        tmpPlayerId += tmpRef.substring(171, 1);

                        this.apiService.httpGet(tmpRef).subscribe((data: any) => {
                          if (data.id === team.depthChartPlayers.pf.id) {
                            this.apiService.httpGet(tmpRefStats).subscribe((data: any) => {
                              tmpGame.blocksValue = data.splits.categories[0].stats[0].value;
                              tmpGame.reboundsValue = data.splits.categories[0].stats[1].value;
                              tmpGame.assistsValue = data.splits.categories[2].stats[0].value;
                              tmpGame.threePtValue = data.splits.categories[2].stats[14].value;
                              tmpGame.value = data.splits.categories[2].stats[10].value;
                              let opponentTeam = this.allTeams.find(team => {
                                return team.id === tmpGame.opponentId
                              });
                              let tmpOpponentGame: Game = {
                                opponentId: team.id,
                                gameDate: tmpGame.gameDate,
                                gameUrl: '',
                                gameStatsUrl: '',
                                gameNum: tmpGame.gameNum,
                                playerGameStatsUrl: '',
                                value: tmpGame.value,
                                assistsValue: tmpGame.assistsValue,
                                threePtValue: tmpGame.threePtValue,
                                blocksValue: tmpGame.blocksValue,
                                reboundsValue: tmpGame.reboundsValue,
                                homeAway: '',
                                opponentPlayer: team.depthChartPlayers.pf.name
                              };
                              opponentTeam?.opponentGamesPf.push(tmpOpponentGame);
                              team.depthChartPlayers.pf.games.push(tmpGame);
                            });
                          }
                        });
                      });
                    });
                  }
                }
              });
            });
          })
        });
      }
    });
  }

  initializeCPlayers() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.c.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.c.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length - 1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.c.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.c.injuryStatus = '';
          }
          team.depthChartPlayers.c.id = playerData.id;
          team.depthChartPlayers.c.name = playerData.displayName;
          if (playerData.statistics !== undefined) {
            team.depthChartPlayers.c.gamesUrl = playerData.statistics.$ref;
          }

          team.depthChartPlayers.c.games = [];

          this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
            data.items.forEach((item: any) => {
              let tmpUrl = item.$ref;
              this.apiService.httpGet(tmpUrl).subscribe((gameData: any) => {
                let tmpGameDate = new Date(gameData.date);
                let tmpToday = new Date();
                let tmpNbaStart = new Date('10/24/2023');
                if (tmpToday >= tmpGameDate && tmpGameDate >= tmpNbaStart) {
                  let tmpGame: Game = {
                    gameDate: gameData.date,
                    gameUrl: '',
                    gameStatsUrl: '',
                    playerGameStatsUrl: '',
                    value: 0,
                    homeAway: '',
                    assistsValue: 0,
                    threePtValue: 0,
                    blocksValue: 0,
                    reboundsValue: 0,
                    gameNum: (team.depthChartPlayers.c.games.length + 1)
                  };

                  if (gameData.competitions[0].competitors[0].id === team.id) {
                    if (gameData.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[0].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[1].id;
                    tmpGame.homeAway = 'home';
                  } else {
                    if (gameData.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[1].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[0].id;
                    tmpGame.homeAway = 'away';
                  }
                  if (tmpGame.gameStatsUrl !== '') {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      data.splits.categories[2].athletes.forEach((item: any) => {
                        let tmpRef = item.athlete.$ref;
                        let tmpRefStats = item.statistics.$ref;
                        let tmpPlayerId = '';
                        tmpPlayerId += tmpRef.substring(171, 1);

                        this.apiService.httpGet(tmpRef).subscribe((data: any) => {
                          if (data.id === team.depthChartPlayers.c.id) {
                            this.apiService.httpGet(tmpRefStats).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[2].stats[10].value;
                              tmpGame.blocksValue = data.splits.categories[0].stats[0].value;
                              tmpGame.reboundsValue = data.splits.categories[0].stats[1].value;
                              tmpGame.assistsValue = data.splits.categories[2].stats[0].value;
                              tmpGame.threePtValue = data.splits.categories[2].stats[14].value;
                              let opponentTeam = this.allTeams.find(team => {
                                return team.id === tmpGame.opponentId
                              });
                              let tmpOpponentGame: Game = {
                                gameDate: tmpGame.gameDate,
                                opponentId: team.id,
                                gameUrl: '',
                                gameStatsUrl: '',
                                gameNum: tmpGame.gameNum,
                                playerGameStatsUrl: '',
                                value: tmpGame.value,
                                assistsValue: tmpGame.assistsValue,
                                threePtValue: tmpGame.threePtValue,
                                blocksValue: tmpGame.blocksValue,
                                reboundsValue: tmpGame.reboundsValue,
                                homeAway: '',
                                opponentPlayer: team.depthChartPlayers.c.name
                              };
                              opponentTeam?.opponentGamesC.push(tmpOpponentGame);
                              team.depthChartPlayers.c.games.push(tmpGame);
                            });
                          }
                        });
                      });
                    });
                  }
                }
              });
            });
          })
        });
      }
    });
  }

  initializeSfPlayers() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.sf.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.sf.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length - 1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.sf.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.sf.injuryStatus = '';
          }
          team.depthChartPlayers.sf.id = playerData.id;
          team.depthChartPlayers.sf.name = playerData.displayName;
          if (playerData.statistics !== undefined) {
            team.depthChartPlayers.sf.gamesUrl = playerData.statistics.$ref;
          }

          team.depthChartPlayers.sf.games = [];

          this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
            data.items.forEach((item: any) => {
              let tmpUrl = item.$ref;
              this.apiService.httpGet(tmpUrl).subscribe((gameData: any) => {
                let tmpGameDate = new Date(gameData.date);
                let tmpToday = new Date();
                let tmpNbaStart = new Date('10/24/2023');
                if (tmpToday >= tmpGameDate && tmpGameDate >= tmpNbaStart) {
                  let tmpGame: Game = {
                    gameDate: gameData.date,
                    gameUrl: '',
                    gameStatsUrl: '',
                    playerGameStatsUrl: '',
                    value: 0,
                    homeAway: '',
                    assistsValue: 0,
                    threePtValue: 0,
                    blocksValue: 0,
                    reboundsValue: 0,
                    gameNum: (team.depthChartPlayers.sf.games.length + 1)
                  };

                  if (gameData.competitions[0].competitors[0].id === team.id) {
                    if (gameData.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[0].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[1].id;
                    tmpGame.homeAway = 'home';
                  } else {
                    if (gameData.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[1].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[0].id;
                    tmpGame.homeAway = 'away';
                  }
                  if (tmpGame.gameStatsUrl !== '') {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      data.splits.categories[2].athletes.forEach((item: any) => {
                        let tmpRef = item.athlete.$ref;
                        let tmpRefStats = item.statistics.$ref;
                        let tmpPlayerId = '';
                        tmpPlayerId += tmpRef.substring(171, 1);

                        this.apiService.httpGet(tmpRef).subscribe((data: any) => {
                          if (data.id === team.depthChartPlayers.sf.id) {
                            this.apiService.httpGet(tmpRefStats).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[2].stats[10].value;
                              tmpGame.blocksValue = data.splits.categories[0].stats[0].value;
                              tmpGame.reboundsValue = data.splits.categories[0].stats[1].value;
                              tmpGame.assistsValue = data.splits.categories[2].stats[0].value;
                              tmpGame.threePtValue = data.splits.categories[2].stats[14].value;
                              let opponentTeam = this.allTeams.find(team => {
                                return team.id === tmpGame.opponentId
                              });
                              let tmpOpponentGame: Game = {
                                opponentId: team.id,
                                gameDate: tmpGame.gameDate,
                                gameUrl: '',
                                gameStatsUrl: '',
                                gameNum: tmpGame.gameNum,
                                playerGameStatsUrl: '',
                                value: tmpGame.value,
                                assistsValue: tmpGame.assistsValue,
                                threePtValue: tmpGame.threePtValue,
                                blocksValue: tmpGame.blocksValue,
                                reboundsValue: tmpGame.reboundsValue,
                                homeAway: '',
                                opponentPlayer: team.depthChartPlayers.sf.name
                              };
                              opponentTeam?.opponentGamesSf.push(tmpOpponentGame);
                              team.depthChartPlayers.sf.games.push(tmpGame);
                            });
                          }
                        });
                      });
                    });
                  }
                }
              });
            });
          })
        });
      }
    });
  }

  initializeSgPlayers() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.sg.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.sg.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length - 1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.sg.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.sg.injuryStatus = '';
          }
          team.depthChartPlayers.sg.id = playerData.id;
          team.depthChartPlayers.sg.name = playerData.displayName;
          if (playerData.statistics !== undefined) {
            team.depthChartPlayers.sg.gamesUrl = playerData.statistics.$ref;
          }

          team.depthChartPlayers.sg.games = [];

          this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
            data.items.forEach((item: any) => {
              let tmpUrl = item.$ref;
              this.apiService.httpGet(tmpUrl).subscribe((gameData: any) => {
                let tmpGameDate = new Date(gameData.date);
                let tmpToday = new Date();
                let tmpNbaStart = new Date('10/24/2023');
                if (tmpToday >= tmpGameDate && tmpGameDate >= tmpNbaStart) {
                  let tmpGame: Game = {
                    gameDate: gameData.date,
                    gameUrl: '',
                    gameStatsUrl: '',
                    playerGameStatsUrl: '',
                    value: 0,
                    homeAway: '',
                    assistsValue: 0,
                    threePtValue: 0,
                    blocksValue: 0,
                    reboundsValue: 0,
                    gameNum: (team.depthChartPlayers.sg.games.length + 1)
                  };

                  if (gameData.competitions[0].competitors[0].id === team.id) {
                    if (gameData.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[0].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[1].id;
                    tmpGame.homeAway = 'home';
                  } else {
                    if (gameData.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = gameData.competitions[0].competitors[1].statistics.$ref;
                    }
                    tmpGame.opponentId = gameData.competitions[0].competitors[0].id;
                    tmpGame.homeAway = 'away';
                  }
                  if (tmpGame.gameStatsUrl !== '') {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      data.splits.categories[2].athletes.forEach((item: any) => {
                        let tmpRef = item.athlete.$ref;
                        let tmpRefStats = item.statistics.$ref;
                        let tmpPlayerId = '';
                        tmpPlayerId += tmpRef.substring(171, 1);

                        this.apiService.httpGet(tmpRef).subscribe((data: any) => {
                          if (data.id === team.depthChartPlayers.sg.id) {
                            this.apiService.httpGet(tmpRefStats).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[2].stats[10].value;
                              tmpGame.blocksValue = data.splits.categories[0].stats[0].value;
                              tmpGame.reboundsValue = data.splits.categories[0].stats[1].value;
                              tmpGame.assistsValue = data.splits.categories[2].stats[0].value;
                              tmpGame.threePtValue = data.splits.categories[2].stats[14].value;
                              let opponentTeam = this.allTeams.find(team => {
                                return team.id === tmpGame.opponentId
                              });
                              let tmpOpponentGame: Game = {
                                opponentId: team.id,
                                gameDate: tmpGame.gameDate,
                                gameUrl: '',
                                gameStatsUrl: '',
                                gameNum: tmpGame.gameNum,
                                playerGameStatsUrl: '',
                                value: tmpGame.value,
                                assistsValue: tmpGame.assistsValue,
                                threePtValue: tmpGame.threePtValue,
                                blocksValue: tmpGame.blocksValue,
                                reboundsValue: tmpGame.reboundsValue,
                                homeAway: '',
                                opponentPlayer: team.depthChartPlayers.sg.name
                              };
                              opponentTeam?.opponentGamesSg.push(tmpOpponentGame);
                              team.depthChartPlayers.sg.games.push(tmpGame);
                            });
                          }
                        });
                      });
                    });
                  }
                }
              });
            });
          })
        });
      }
    });
  }

  initializeOpponentId() {
    this.allTeams.forEach(team => {
      let tmpDate: Date;
      team.currentOpponentId = '';
      team.currentAwayHome = '';
      this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
        for (let i = 0; i < data.items.length; i++) {
          let tmpToday = new Date();
          this.apiService.httpGet(data.items[i].$ref).subscribe((data2: any) => {
            let tmpGameDate = new Date(data2.date);
            if (tmpGameDate.toDateString() === tmpToday.toDateString()) {
              tmpDate = tmpGameDate;
              team.date = tmpGameDate.toDateString();
              if (data2.competitions[0].competitors[0].id === team.id) {
                team.currentOpponentId = data2.competitions[0].competitors[1].id
                team.currentAwayHome = 'home';
              } else {
                team.currentOpponentId = data2.competitions[0].competitors[0].id;
                team.currentAwayHome = 'away';
              }
            } else if (tmpGameDate > tmpToday) {
              if (tmpDate === undefined || tmpGameDate < tmpDate) {
                tmpDate = tmpGameDate;
                team.date = tmpGameDate.toDateString();
                if (data2.competitions[0].competitors[0].id === team.id) {
                  team.currentOpponentId = data2.competitions[0].competitors[1].id
                  team.currentAwayHome = 'home';
                } else {
                  team.currentOpponentId = data2.competitions[0].competitors[0].id;
                  team.currentAwayHome = 'away';
                }
              }
            }
          });
        }
      });
    });
  };

  initializeAverageCalculations() {
    this.allTeams.forEach(team => {
      team.depthChartPlayers.pg.games.forEach(game => {
        team.depthChartPlayers.pg.allPoints += game.value;
        team.depthChartPlayers.pg.allAssists += game.assistsValue!;
        team.depthChartPlayers.pg.allThreePts += game.threePtValue!;
        team.depthChartPlayers.pg.allBlocks += game.blocksValue!;
        team.depthChartPlayers.pg.allRebounds += game.reboundsValue!;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.pf.games.forEach(game => {
        team.depthChartPlayers.pf.allPoints += game.value;
        team.depthChartPlayers.pf.allAssists += game.assistsValue!;
        team.depthChartPlayers.pf.allThreePts += game.threePtValue!;
        team.depthChartPlayers.pf.allBlocks += game.blocksValue!;
        team.depthChartPlayers.pf.allRebounds += game.reboundsValue!;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.c.games.forEach(game => {
          team.depthChartPlayers.c.allPoints += game.value;
          team.depthChartPlayers.c.allAssists += game.assistsValue!;
          team.depthChartPlayers.c.allThreePts += game.threePtValue!;
          team.depthChartPlayers.c.allBlocks += game.blocksValue!;
          team.depthChartPlayers.c.allRebounds += game.reboundsValue!;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.sf.games.forEach(game => {
        team.depthChartPlayers.sf.allPoints += game.value;
        team.depthChartPlayers.sf.allAssists += game.assistsValue!;
        team.depthChartPlayers.sf.allThreePts += game.threePtValue!;
        team.depthChartPlayers.sf.allBlocks += game.blocksValue!;
        team.depthChartPlayers.sf.allRebounds += game.reboundsValue!;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.sg.games.forEach(game => {
        team.depthChartPlayers.sg.allPoints += game.value;
        team.depthChartPlayers.sg.allAssists += game.assistsValue!;
        team.depthChartPlayers.sg.allThreePts += game.threePtValue!;
        team.depthChartPlayers.sg.allBlocks += game.blocksValue!;
        team.depthChartPlayers.sg.allRebounds += game.reboundsValue!;
      })
    })
  }

  initializeOpponentYdsGiven() {
    this.allTeams.forEach(team => {
      team.depthChartPlayers.pg.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        if (opponentIndex !== -1) {
          this.allTeams[opponentIndex].allYardsGivenPg += game.value;
          this.allTeams[opponentIndex].allYardsGivenPgCounter++;
          this.allTeams[opponentIndex].allAssistsGivenPg += game.assistsValue!;
          this.allTeams[opponentIndex].allAssistsGivenPg++;
          this.allTeams[opponentIndex].allThreesGivenPg += game.threePtValue!;
          this.allTeams[opponentIndex].allThreesGivenPgCounter++;
          this.allTeams[opponentIndex].allBlocksGivenPg += game.blocksValue!;
          this.allTeams[opponentIndex].allBlocksGivenPgCounter++;
          this.allTeams[opponentIndex].allReboundsGivenPg += game.reboundsValue!;
          this.allTeams[opponentIndex].allReboundsGivenPgCounter++;
        }
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.pf.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        if (opponentIndex !== -1) {
          this.allTeams[opponentIndex].allYardsGivenPf += game.value;
          this.allTeams[opponentIndex].allYardsGivenPfCounter++;
          this.allTeams[opponentIndex].allAssistsGivenPf += game.assistsValue!;
          this.allTeams[opponentIndex].allAssistsGivenPf++;
          this.allTeams[opponentIndex].allThreesGivenPf += game.threePtValue!;
          this.allTeams[opponentIndex].allThreesGivenPfCounter++;
          this.allTeams[opponentIndex].allBlocksGivenPf += game.blocksValue!;
          this.allTeams[opponentIndex].allBlocksGivenPfCounter++;
          this.allTeams[opponentIndex].allReboundsGivenPf += game.reboundsValue!;
          this.allTeams[opponentIndex].allReboundsGivenPfCounter++;
        }
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.c.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        if (opponentIndex !== -1) {
          this.allTeams[opponentIndex].allYardsGivenC += game.value;
          this.allTeams[opponentIndex].allYardsGivenCCounter++;
          this.allTeams[opponentIndex].allAssistsGivenC += game.assistsValue!;
          this.allTeams[opponentIndex].allAssistsGivenC++;
          this.allTeams[opponentIndex].allThreesGivenC += game.threePtValue!;
          this.allTeams[opponentIndex].allThreesGivenCCounter++;
          this.allTeams[opponentIndex].allBlocksGivenC += game.blocksValue!;
          this.allTeams[opponentIndex].allBlocksGivenCCounter++;
          this.allTeams[opponentIndex].allReboundsGivenC += game.reboundsValue!;
          this.allTeams[opponentIndex].allReboundsGivenCCounter++;
        }
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.sf.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        if (opponentIndex !== -1) {
          this.allTeams[opponentIndex].allYardsGivenSf += game.value;
          this.allTeams[opponentIndex].allYardsGivenSfCounter++;
          this.allTeams[opponentIndex].allAssistsGivenSf += game.assistsValue!;
          this.allTeams[opponentIndex].allAssistsGivenSf++;
          this.allTeams[opponentIndex].allThreesGivenSf += game.threePtValue!;
          this.allTeams[opponentIndex].allThreesGivenSfCounter++;
          this.allTeams[opponentIndex].allBlocksGivenSf += game.blocksValue!;
          this.allTeams[opponentIndex].allBlocksGivenSfCounter++;
          this.allTeams[opponentIndex].allReboundsGivenSf += game.reboundsValue!;
          this.allTeams[opponentIndex].allReboundsGivenSfCounter++;
        }
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.sg.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        if (opponentIndex !== -1) {
          this.allTeams[opponentIndex].allYardsGivenSg += game.value;
          this.allTeams[opponentIndex].allYardsGivenSgCounter++;
          this.allTeams[opponentIndex].allAssistsGivenSg += game.assistsValue!;
          this.allTeams[opponentIndex].allAssistsGivenSg++;
          this.allTeams[opponentIndex].allThreesGivenSg += game.threePtValue!;
          this.allTeams[opponentIndex].allThreesGivenSgCounter++;
          this.allTeams[opponentIndex].allBlocksGivenSg += game.blocksValue!;
          this.allTeams[opponentIndex].allBlocksGivenSgCounter++;
          this.allTeams[opponentIndex].allReboundsGivenSg += game.reboundsValue!;
          this.allTeams[opponentIndex].allReboundsGivenSgCounter++;
        }
      })
    })
  }

  findTeamIndex(teamId: string | undefined): number {
    let returnIndexValue = -1;
    this.allTeams.forEach((team: NbaTeam, index: number) => {
      if (team.id === teamId) {
        returnIndexValue = index;
      }
    });
    return returnIndexValue;
  }

  returnOpponentName(opponentId: string) {
    if (opponentId !== '') {
      let tmpTeam = this.allTeams.find(team => {
        return (team.id === opponentId);
      })
      return tmpTeam?.displayName;
    } else {
      return 'BYE'
    }
  }

  checkInjury(status: string) {
    switch (status) {
      case 'Day-To-Day': {
        return 'bg-grey';
      }
      case 'Out': {
        return 'bg-red';
      }
    }
    return '';
  }


  calculatePg(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allPoints / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.value;
      });
      return tmpPoints / tmpData.length;
    }
  }

  calculatePf(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allPoints / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.value;
      });
      return tmpPoints / tmpData.length;
    }
  }
  calculateC(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allPoints / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.value;
      });
      return tmpPoints / tmpData.length;
    }
  }

  calculateSf(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allPoints / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.value;
      });
      return tmpPoints / tmpData.length;
    }
  }

  calculateSg(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allPoints / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.value;
      });
      return tmpPoints / tmpData.length;
    }
  }

  calculateAssists(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allAssists / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.assistsValue;
      });
      return tmpPoints / tmpData.length;
    }
  }

  calculateBlocks(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allBlocks / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.blocksValue;
      });
      return tmpPoints / tmpData.length;
    }
  }

  calculateRebounds(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allRebounds / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.reboundsValue;
      });
      return tmpPoints / tmpData.length;
    }
  }

  calculateThrees(value: NbaPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allThreePts / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpPoints = 0;
      tmpData.forEach(item => {
        tmpPoints += item.threePtValue;
      });
      return tmpPoints / tmpData.length;
    }
  }

  returnOpponentAvgPgPointsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allYardsGivenPg / this.allTeams[opponentIndex].allYardsGivenPgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgPgAssistsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allAssistsGivenPg / this.allTeams[opponentIndex].allYardsGivenPgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.assistsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgPgBlocksGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allBlocksGivenPg / this.allTeams[opponentIndex].allBlocksGivenPgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.blocksValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgPgDefensiveReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allReboundsGivenPg / this.allTeams[opponentIndex].allReboundsGivenPgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgPfDefensiveReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allReboundsGivenPf / this.allTeams[opponentIndex].allReboundsGivenPfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgCDefensiveReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allReboundsGivenC / this.allTeams[opponentIndex].allReboundsGivenCCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesC);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSfDefensiveReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allReboundsGivenSf / this.allTeams[opponentIndex].allReboundsGivenSfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSgDefensiveReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allReboundsGivenSg / this.allTeams[opponentIndex].allReboundsGivenSgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgPfAssistsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allAssistsGivenPf / this.allTeams[opponentIndex].allYardsGivenPfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.assistsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgPfBlocksGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allBlocksGivenPf / this.allTeams[opponentIndex].allBlocksGivenPfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.blocksValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgCAssistsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allAssistsGivenC / this.allTeams[opponentIndex].allYardsGivenCCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesC);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.assistsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgCBlocksGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allBlocksGivenC / this.allTeams[opponentIndex].allBlocksGivenCCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesC);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.blocksValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgSfAssistsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allAssistsGivenSf / this.allTeams[opponentIndex].allYardsGivenSfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.assistsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSfBlocksGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allBlocksGivenSf / this.allTeams[opponentIndex].allBlocksGivenSfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.blocksValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSgAssistsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allAssistsGivenSg / this.allTeams[opponentIndex].allYardsGivenSgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.assistsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSgBlocksGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allBlocksGivenSg / this.allTeams[opponentIndex].allBlocksGivenSgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.blocksValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgPgThreesGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenPg / this.allTeams[opponentIndex].allThreesGivenPgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.threePtValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgPgReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenPg / this.allTeams[opponentIndex].allThreesGivenPgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgPfThreesGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenPf / this.allTeams[opponentIndex].allThreesGivenPfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.threePtValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }

  returnOpponentAvgPfReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenPf / this.allTeams[opponentIndex].allThreesGivenPfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgCThreesGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenC / this.allTeams[opponentIndex].allThreesGivenCCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesC);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.threePtValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgCReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenC / this.allTeams[opponentIndex].allThreesGivenCCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesC);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSfThreesGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenSf / this.allTeams[opponentIndex].allThreesGivenSfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.threePtValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSfReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenSf / this.allTeams[opponentIndex].allThreesGivenSfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSgThreesGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenSg / this.allTeams[opponentIndex].allThreesGivenSgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.threePtValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSgReboundsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allThreesGivenSg / this.allTeams[opponentIndex].allThreesGivenSgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.reboundsValue;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSgPointsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allYardsGivenSg / this.allTeams[opponentIndex].allYardsGivenSgCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSg);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgSfPointsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allYardsGivenSf / this.allTeams[opponentIndex].allYardsGivenSfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesSf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgCPointsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allYardsGivenC / this.allTeams[opponentIndex].allYardsGivenCCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesC);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgPfPointsGiven(currentOpponentId: any) {
    if (currentOpponentId !== '') {
      let opponentIndex = this.findTeamIndex(currentOpponentId);
      if (opponentIndex === -1) {
        return 0;
      }
      if (this.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.allTeams[opponentIndex].allYardsGivenPf / this.allTeams[opponentIndex].allYardsGivenPfCounter;
      } else {
        let tmpData = this.sliceHighLow(this.allTeams[opponentIndex].opponentGamesPf);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards / tmpData.length;
      }
    } else {
      return 0;
    }
  }


  sliceHighLow(value: any[]) {
    value.sort((a, b) => a - b);
    value = value.slice(1, value.length - 1);
    return value;
  }
}
