import { Injectable } from '@angular/core';
import { Game, KeyValueRef, Team } from 'src/app/shared/models/interface';
import { INITIALIZE_TEAMS } from 'src/app/shared/utility/initialize-teams';

import { ApiService } from './api.service';
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
            team.depthChartPlayers.rb1.playerUrl = depthChartData.items[1].positions.rb.athletes[0].athlete.$ref;
            team.depthChartPlayers.rb2.playerUrl = depthChartData.items[1].positions.rb.athletes[1].athlete.$ref;
            team.depthChartPlayers.wr1.playerUrl = depthChartData.items[1].positions.wr.athletes[0].athlete.$ref;
            team.depthChartPlayers.wr2.playerUrl = depthChartData.items[1].positions.wr.athletes[2].athlete.$ref;
            team.depthChartPlayers.wr3.playerUrl = depthChartData.items[1].positions.wr.athletes[4].athlete.$ref;
            team.depthChartPlayers.te.playerUrl = depthChartData.items[1].positions.te.athletes[0].athlete.$ref;
          }
        } else {
          team.depthChartPlayers.qb.playerUrl = depthChartData.items[2].positions.qb.athletes[0].athlete.$ref;
          team.depthChartPlayers.rb1.playerUrl = depthChartData.items[2].positions.rb.athletes[0].athlete.$ref;
          team.depthChartPlayers.rb2.playerUrl = depthChartData.items[2].positions.rb.athletes[1].athlete.$ref;
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
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length-1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.qb.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.qb.injuryStatus = '';
          }
          team.depthChartPlayers.qb.id = playerData.id;
          team.depthChartPlayers.qb.name = playerData.displayName;
          team.depthChartPlayers.qb.gamesUrl = playerData.statistics.$ref;
          team.depthChartPlayers.qb.games = [];

          this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: Game = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                value: 0,
                homeAway: '',
                weekNum: 0
              };
              tmpGame.weekNum = i + 1;
              tmpGame.gameUrl = data.items[i].$ref;

              this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                if (data.competitions[0].competitors[0].id === team.id) {
                  tmpGame.gameStatsUrl = data.competitions[0].competitors[0].statistics.$ref;
                  tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  tmpGame.homeAway = 'home';
                } else {
                  tmpGame.gameStatsUrl = data.competitions[0].competitors[1].statistics.$ref;
                  tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  tmpGame.homeAway = 'away';
                }
                this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                  console.log("🚀 ~ data:", data)
                  tmpGame.playerGameStatsUrl = data.$ref;
                  this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                    console.log("🚀 ~ data:", data)
                    if (data.splits === undefined) {
                      this.apiService.httpGet(data.statistics.$ref).subscribe((data: any) => {
                        tmpGame.value = data.splits.categories[1].stats[8].value;
                      });
                    } else {
                      tmpGame.value = data.splits.categories[1].stats[8].value;
                    }
                    let opponentTeam = this.allTeams.find(team => {
                      return team.id === tmpGame.opponentId
                    });
                    let tmpOpponentGame: Game = {
                      opponentId: team.id,
                      gameUrl: '',
                      gameStatsUrl: '',
                      weekNum: tmpGame.weekNum,
                      playerGameStatsUrl: '',
                      value: tmpGame.value,
                      homeAway: '',
                      opponentPlayer: team.depthChartPlayers.qb.name
                    };
                    opponentTeam?.opponentGamesQb.push(tmpOpponentGame);
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

  initializeRb1Players() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.rb1.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.rb1.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length-1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.rb1.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.rb1.injuryStatus = '';
          }
          team.depthChartPlayers.rb1.id = playerData.id;
          team.depthChartPlayers.rb1.name = playerData.displayName;
          team.depthChartPlayers.rb1.gamesUrl = playerData.eventLog.$ref;

          this.apiService.httpGet(team.depthChartPlayers.rb1.gamesUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: Game = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                value: 0,
                homeAway: '',
                weekNum: 0
              };
              tmpGame.weekNum = i + 1;
              if (data.events.items[i] === undefined) {
                console.log('API data is missing for: ' + team.depthChartPlayers.rb1.name);
                team.depthChartPlayers.rb1.missingData.item.push(team.depthChartPlayers.rb1.name + ' missing ' + 'data.events.items[1]');
              } else {
                if (data.events.items[i].events === undefined) {
                  tmpGame.gameUrl = data.events.items[i].event.$ref;
                } else {
                  tmpGame.gameUrl = data.events.items[i].events.$ref;
                }
                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  tmpGame.gameStatsUrl === undefined;
                  if (data.competitions[0].competitors[0].id === team.id) {
                    if (data.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[0].statistics.$ref;
                      tmpGame.homeAway = 'home';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    if (data.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[1].statistics.$ref;
                      tmpGame.homeAway = 'away';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  if (tmpGame.gameStatsUrl === undefined || tmpGame.gameStatsUrl.length < 1) {
                    console.log("Game Statistics missing for: ", team.depthChartPlayers.rb1.name);
                    team.depthChartPlayers.rb1.missingData.item.push(team.depthChartPlayers.rb1.name + ' missing ' + 'tmpGame.gameStatsUrl');
                  } else {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      for (let a = 0; a < data.splits.categories[3].athletes.length; a++) {
                        let tmpPlayerUrl = data.splits.categories[3].athletes[a].athlete.$ref;
                        let tmpChar = '';
                        for (let b = 0; b < tmpPlayerUrl.length; b++) {
                          if (tmpPlayerUrl.charAt(b) !== '/') {
                            tmpChar += tmpPlayerUrl.charAt(b);
                          } else {
                            if (tmpChar !== 'athletes') {
                              tmpChar = '';
                            } else {
                              tmpChar = '';
                              for (let c = b + 1; c < b + 8; c++) {
                                if (tmpPlayerUrl.charAt(c) === '?') {
                                  break;
                                } else {
                                  tmpChar += tmpPlayerUrl.charAt(c);
                                }
                              }
                              break;
                            }
                          }
                        }
                        if (tmpChar === team.depthChartPlayers.rb1.id) {
                          tmpGame.playerGameStatsUrl = data.splits.categories[3].athletes[a].statistics.$ref;
                          break;
                        } else {
                          continue;
                        }
                      };
                      if (tmpGame.playerGameStatsUrl.length === 0) {
                        console.log('API missing data for: ', team.depthChartPlayers.rb1.name);
                        team.depthChartPlayers.rb1.missingData.item.push(team.depthChartPlayers.rb1.name + ' missing ' + 'tmpGame.playerGameStatsUrl');
                      } else {
                        this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                          if (data.splits === undefined) {
                            this.apiService.httpGet(data.statistics.$ref).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[2].stats[12].value;
                            });
                          } else {
                            tmpGame.value = data.splits.categories[2].stats[12].value;
                          }
                          let opponentTeam = this.allTeams.find(team => {
                            return team.id === tmpGame.opponentId
                          });
                          let tmpOpponentGame: Game = {
                            opponentId: team.id,
                            gameUrl: '',
                            gameStatsUrl: '',
                            weekNum: tmpGame.weekNum,
                            playerGameStatsUrl: '',
                            value: tmpGame.value,
                            homeAway: '',
                            opponentPlayer: team.depthChartPlayers.rb1.name
                          };
                          opponentTeam?.opponentGamesRb1.push(tmpOpponentGame);
                          team.depthChartPlayers.rb1.games.push(tmpGame);
                        });
                      }
                    });
                  }
                });
              }
            }
          })
        });
      }
    });
  }

  initializeRb2Players() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.rb2.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.rb2.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length-1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.rb2.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.rb2.injuryStatus = '';
          }
          team.depthChartPlayers.rb2.id = playerData.id;
          team.depthChartPlayers.rb2.name = playerData.displayName;
          team.depthChartPlayers.rb2.gamesUrl = playerData.eventLog.$ref;

          this.apiService.httpGet(team.depthChartPlayers.rb2.gamesUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: Game = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                value: 0,
                homeAway: '',
                weekNum: 0
              };
              tmpGame.weekNum = i + 1;
              if (data.events.items[i] === undefined) {
                console.log('API data is missing for: ' + team.depthChartPlayers.rb2.name);
                team.depthChartPlayers.rb1.missingData.item.push(team.depthChartPlayers.rb2.name + ' missing ' + 'data.events.items[i]');
              } else {
                if (data.events.items[i].events === undefined) {
                  tmpGame.gameUrl = data.events.items[i].event.$ref;
                } else {
                  tmpGame.gameUrl = data.events.items[i].events.$ref;
                }
                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  tmpGame.gameStatsUrl === undefined;
                  if (data.competitions[0].competitors[0].id === team.id) {
                    if (data.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[0].statistics.$ref;
                      tmpGame.homeAway = 'home';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    if (data.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[1].statistics.$ref;
                      tmpGame.homeAway = 'away';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  if (tmpGame.gameStatsUrl === undefined || tmpGame.gameStatsUrl.length < 1) {
                    console.log("Game Statistics missing for: ", team.depthChartPlayers.rb2.name);
                    team.depthChartPlayers.rb1.missingData.item.push(team.depthChartPlayers.rb2.name + ' missing ' + 'teamGame.gaemStatsUrl');
                  } else {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      for (let a = 0; a < data.splits.categories[3].athletes.length; a++) {
                        let tmpPlayerUrl = data.splits.categories[3].athletes[a].athlete.$ref;
                        let tmpChar = '';
                        for (let b = 0; b < tmpPlayerUrl.length; b++) {
                          if (tmpPlayerUrl.charAt(b) !== '/') {
                            tmpChar += tmpPlayerUrl.charAt(b);
                          } else {
                            if (tmpChar !== 'athletes') {
                              tmpChar = '';
                            } else {
                              tmpChar = '';
                              for (let c = b + 1; c < b + 8; c++) {
                                if (tmpPlayerUrl.charAt(c) === '?') {
                                  break;
                                } else {
                                  tmpChar += tmpPlayerUrl.charAt(c);
                                }
                              }
                              break;
                            }
                          }
                        }
                        if (tmpChar === team.depthChartPlayers.rb2.id) {
                          tmpGame.playerGameStatsUrl = data.splits.categories[3].athletes[a].statistics.$ref;
                          break;
                        } else {
                          continue;
                        }
                      };
                      if (tmpGame.playerGameStatsUrl.length === 0) {
                        console.log('API missing data for: ', team.depthChartPlayers.rb2.name);
                        team.depthChartPlayers.rb2.missingData.item.push(team.depthChartPlayers.rb2.name + ' missing ' + 'teamGame.gaemStatsUrl');
                      } else {
                        this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                          if (data.splits === undefined) {
                            this.apiService.httpGet(data.statistics.$ref).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[2].stats[12].value;
                            });
                          } else {
                            tmpGame.value = data.splits.categories[2].stats[12].value;
                          }
                          let opponentTeam = this.allTeams.find(team => {
                            return team.id === tmpGame.opponentId
                          });
                          let tmpOpponentGame: Game = {
                            opponentId: team.id,
                            gameUrl: '',
                            gameStatsUrl: '',
                            weekNum: tmpGame.weekNum,
                            playerGameStatsUrl: '',
                            value: tmpGame.value,
                            homeAway: '',
                            opponentPlayer: team.depthChartPlayers.rb2.name
                          };
                          opponentTeam?.opponentGamesRb2.push(tmpOpponentGame);
                          team.depthChartPlayers.rb2.games.push(tmpGame);
                        });
                      }
                    });
                  }
                });
              }
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
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length-1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.wr1.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.wr1.injuryStatus = '';
          }
          team.depthChartPlayers.wr1.id = playerData.id;
          team.depthChartPlayers.wr1.name = playerData.displayName;
          team.depthChartPlayers.wr1.gamesUrl = playerData.eventLog.$ref;

          this.apiService.httpGet(team.depthChartPlayers.wr1.gamesUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: Game = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                value: 0,
                homeAway: '',
                weekNum: 0
              };
              tmpGame.weekNum = i + 1;
              if (data.events.items[i] === undefined) {
                console.log('API data is missing for: ' + team.depthChartPlayers.wr1.name);
                team.depthChartPlayers.wr1.missingData.item.push(team.depthChartPlayers.wr1.name + ' missing ' + 'data.events.items[i]');
              } else {
                if (data.events.items[i].events === undefined) {
                  tmpGame.gameUrl = data.events.items[i].event.$ref;
                } else {
                  tmpGame.gameUrl = data.events.items[i].events.$ref;
                }
                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  tmpGame.gameStatsUrl === undefined;
                  if (data.competitions[0].competitors[0].id === team.id) {
                    if (data.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[0].statistics.$ref;
                      tmpGame.homeAway = 'home';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    if (data.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[1].statistics.$ref;
                      tmpGame.homeAway = 'away';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  if (tmpGame.gameStatsUrl === undefined || tmpGame.gameStatsUrl.length < 1) {
                    console.log("Game Statistics missing for: ", team.depthChartPlayers.wr1.name);
                    team.depthChartPlayers.wr1.missingData.item.push(team.depthChartPlayers.wr1.name + ' missing ' + 'tmpGame.gameStatsUrl');
                  } else {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      for (let a = 0; a < data.splits.categories[3].athletes.length; a++) {
                        let tmpPlayerUrl = data.splits.categories[3].athletes[a].athlete.$ref;
                        let tmpChar = '';
                        for (let b = 0; b < tmpPlayerUrl.length; b++) {
                          if (tmpPlayerUrl.charAt(b) !== '/') {
                            tmpChar += tmpPlayerUrl.charAt(b);
                          } else {
                            if (tmpChar !== 'athletes') {
                              tmpChar = '';
                            } else {
                              tmpChar = '';
                              for (let c = b + 1; c < b + 8; c++) {
                                if (tmpPlayerUrl.charAt(c) === '?') {
                                  break;
                                } else {
                                  tmpChar += tmpPlayerUrl.charAt(c);
                                }
                              }
                              break;
                            }
                          }
                        }
                        if (tmpChar === team.depthChartPlayers.wr1.id) {
                          tmpGame.playerGameStatsUrl = data.splits.categories[3].athletes[a].statistics.$ref;
                          break;
                        } else {
                          continue;
                        }
                      };
                      if (tmpGame.playerGameStatsUrl.length === 0) {
                        console.log('API missing data for: ', team.depthChartPlayers.wr1.name);
                      } else {
                        this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                          if (data.splits === undefined) {
                            this.apiService.httpGet(data.statistics.$ref).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[3].stats[12].value;
                            });
                          } else {
                            tmpGame.value = data.splits.categories[3].stats[12].value;
                          }
                          let opponentTeam = this.allTeams.find(team => {
                            return team.id === tmpGame.opponentId
                          });
                          let tmpOpponentGame: Game = {
                            opponentId: team.id,
                            gameUrl: '',
                            gameStatsUrl: '',
                            weekNum: tmpGame.weekNum,
                            playerGameStatsUrl: '',
                            value: tmpGame.value,
                            homeAway: '',
                            opponentPlayer: team.depthChartPlayers.wr1.name
                          };
                          opponentTeam?.opponentGamesWr1.push(tmpOpponentGame);
                          team.depthChartPlayers.wr1.games.push(tmpGame);
                        });
                      }
                    });
                  }
                });
              }
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
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length-1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.wr2.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.wr2.injuryStatus = '';
          }
          team.depthChartPlayers.wr2.id = playerData.id;
          team.depthChartPlayers.wr2.name = playerData.displayName;
          team.depthChartPlayers.wr2.gamesUrl = playerData.eventLog.$ref;

          this.apiService.httpGet(team.depthChartPlayers.wr2.gamesUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: Game = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                value: 0,
                homeAway: '',
                weekNum: 0
              };
              tmpGame.weekNum = i + 1;
              if (data.events === undefined || data.events.items[i] === undefined) {
                console.log('API data is missing for: ' + team.depthChartPlayers.wr2.name);
                team.depthChartPlayers.wr2.missingData.item.push(team.depthChartPlayers.wr2.name + ' missing ' + 'data.events or data.events.items[i]');
              } else {
                if (data.events.items[i].events === undefined) {
                  tmpGame.gameUrl = data.events.items[i].event.$ref;
                } else {
                  tmpGame.gameUrl = data.events.items[i].events.$ref;
                }
                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  tmpGame.gameStatsUrl === undefined;
                  if (data.competitions[0].competitors[0].id === team.id) {
                    if (data.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[0].statistics.$ref;
                      tmpGame.homeAway = 'home';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    if (data.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[1].statistics.$ref;
                      tmpGame.homeAway = 'away';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  if (tmpGame.gameStatsUrl === undefined || tmpGame.gameStatsUrl.length < 1) {
                    console.log("Game Statistics missing for: ", team.depthChartPlayers.wr2.name);
                    team.depthChartPlayers.wr2.missingData.item.push(team.depthChartPlayers.wr2.name + ' missing ' + 'tmpGame.gameStatsUrl');
                  } else {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      for (let a = 0; a < data.splits.categories[3].athletes.length; a++) {
                        let tmpPlayerUrl = data.splits.categories[3].athletes[a].athlete.$ref;
                        let tmpChar = '';
                        for (let b = 0; b < tmpPlayerUrl.length; b++) {
                          if (tmpPlayerUrl.charAt(b) !== '/') {
                            tmpChar += tmpPlayerUrl.charAt(b);
                          } else {
                            if (tmpChar !== 'athletes') {
                              tmpChar = '';
                            } else {
                              tmpChar = '';
                              for (let c = b + 1; c < b + 8; c++) {
                                if (tmpPlayerUrl.charAt(c) === '?') {
                                  break;
                                } else {
                                  tmpChar += tmpPlayerUrl.charAt(c);
                                }
                              }
                              break;
                            }
                          }
                        }
                        if (tmpChar === team.depthChartPlayers.wr2.id) {
                          tmpGame.playerGameStatsUrl = data.splits.categories[3].athletes[a].statistics.$ref;
                          break;
                        } else {
                          continue;
                        }
                      };
                      if (tmpGame.playerGameStatsUrl.length === 0) {
                        console.log('API missing data for: ', team.depthChartPlayers.wr2.name);
                        team.depthChartPlayers.wr2.missingData.item.push(team.depthChartPlayers.wr2.name + ' missing ' + 'tmpGame.playerGameStatsUrl');
                      } else {
                        this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                          if (data.splits === undefined) {
                            this.apiService.httpGet(data.statistics.$ref).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[3].stats[12].value;
                            });
                          } else {
                            tmpGame.value = data.splits.categories[3].stats[12].value;
                          }
                          let opponentTeam = this.allTeams.find(team => {
                            return team.id === tmpGame.opponentId
                          });
                          let tmpOpponentGame: Game = {
                            opponentId: team.id,
                            gameUrl: '',
                            gameStatsUrl: '',
                            weekNum: tmpGame.weekNum,
                            playerGameStatsUrl: '',
                            value: tmpGame.value,
                            homeAway: '',
                            opponentPlayer: team.depthChartPlayers.wr2.name
                          };
                          opponentTeam?.opponentGamesWr2.push(tmpOpponentGame);
                          team.depthChartPlayers.wr2.games.push(tmpGame);
                        });
                      }
                    });
                  }
                });
              }
            }
          })
        });
      }
    });
  }

  initializeWr3Players() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.wr3.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.wr3.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length-1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.wr3.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.wr3.injuryStatus = '';
          }
          team.depthChartPlayers.wr3.id = playerData.id;
          team.depthChartPlayers.wr3.name = playerData.displayName;
          team.depthChartPlayers.wr3.gamesUrl = playerData.eventLog.$ref;

          this.apiService.httpGet(team.depthChartPlayers.wr3.gamesUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: Game = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                value: 0,
                homeAway: '',
                weekNum: 0
              };
              tmpGame.weekNum = i + 1;
              if (data.events === undefined || data.events.items[i] === undefined) {
                console.log('API data is missing for: ' + team.depthChartPlayers.wr3.name);
                team.depthChartPlayers.wr3.missingData.item.push(team.depthChartPlayers.wr3.name + ' missing ' + 'data.events or data.events.items[i]');
              } else {
                if (data.events.items[i].events === undefined) {
                  tmpGame.gameUrl = data.events.items[i].event.$ref;
                } else {
                  tmpGame.gameUrl = data.events.items[i].events.$ref;
                }
                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  tmpGame.gameStatsUrl === undefined;
                  if (data.competitions[0].competitors[0].id === team.id) {
                    if (data.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[0].statistics.$ref;
                      tmpGame.homeAway = 'home';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    if (data.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[1].statistics.$ref;
                      tmpGame.homeAway = 'away';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  if (tmpGame.gameStatsUrl === undefined || tmpGame.gameStatsUrl.length < 1) {
                    console.log("Game Statistics missing for: ", team.depthChartPlayers.wr3.name);
                    team.depthChartPlayers.wr3.missingData.item.push(team.depthChartPlayers.wr3.name + ' missing ' + 'tmpGame.gameStatsUrl');
                  } else {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      for (let a = 0; a < data.splits.categories[3].athletes.length; a++) {
                        let tmpPlayerUrl = data.splits.categories[3].athletes[a].athlete.$ref;
                        let tmpChar = '';
                        for (let b = 0; b < tmpPlayerUrl.length; b++) {
                          if (tmpPlayerUrl.charAt(b) !== '/') {
                            tmpChar += tmpPlayerUrl.charAt(b);
                          } else {
                            if (tmpChar !== 'athletes') {
                              tmpChar = '';
                            } else {
                              tmpChar = '';
                              for (let c = b + 1; c < b + 8; c++) {
                                if (tmpPlayerUrl.charAt(c) === '?') {
                                  break;
                                } else {
                                  tmpChar += tmpPlayerUrl.charAt(c);
                                }
                              }
                              break;
                            }
                          }
                        }
                        if (tmpChar === team.depthChartPlayers.wr3.id) {
                          tmpGame.playerGameStatsUrl = data.splits.categories[3].athletes[a].statistics.$ref;
                          break;
                        } else {
                          continue;
                        }
                      };
                      if (tmpGame.playerGameStatsUrl.length === 0) {
                        console.log('API missing data for: ', team.depthChartPlayers.wr3.name);
                        team.depthChartPlayers.wr3.missingData.item.push(team.depthChartPlayers.wr3.name + ' missing ' + 'tmpGame.playerGameStatsUrl');
                      } else {
                        this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                          if (data.splits === undefined) {
                            this.apiService.httpGet(data.statistics.$ref).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[3].stats[12].value;
                            });
                          } else {
                            tmpGame.value = data.splits.categories[3].stats[12].value;
                          }
                          let opponentTeam = this.allTeams.find(team => {
                            return team.id === tmpGame.opponentId
                          });
                          let tmpOpponentGame: Game = {
                            opponentId: team.id,
                            gameUrl: '',
                            gameStatsUrl: '',
                            weekNum: tmpGame.weekNum,
                            playerGameStatsUrl: '',
                            value: tmpGame.value,
                            homeAway: '',
                            opponentPlayer: team.depthChartPlayers.wr3.name
                          };
                          opponentTeam?.opponentGamesWr3.push(tmpOpponentGame);
                          team.depthChartPlayers.wr3.games.push(tmpGame);
                        });
                      }
                    });
                  }
                });
              }
            }
          })
        });
      }
    });
  }

  initializeTePlayers() {
    this.allTeams.forEach(team => {
      if (team.depthChartPlayers.te.playerUrl.length > 0) {
        this.apiService.httpGet(team.depthChartPlayers.te.playerUrl).subscribe((playerData: any) => {
          if (playerData.injuries.length > 0) {
            this.apiService.httpGet(playerData.injuries[playerData.injuries.length-1].$ref).subscribe((data: any) => {
              team.depthChartPlayers.te.injuryStatus = data.status;
            });
          } else {
            team.depthChartPlayers.te.injuryStatus = '';
          }
          team.depthChartPlayers.te.id = playerData.id;
          team.depthChartPlayers.te.name = playerData.displayName;
          team.depthChartPlayers.te.gamesUrl = playerData.eventLog.$ref;

          this.apiService.httpGet(team.depthChartPlayers.te.gamesUrl).subscribe((data: any) => {
            for (let i = 0; i < this.dateService.currentWeek; i++) {
              let tmpGame: Game = {
                gameUrl: '',
                gameStatsUrl: '',
                playerGameStatsUrl: '',
                value: 0,
                homeAway: '',
                weekNum: 0
              };
              tmpGame.weekNum = i + 1;
              if (data.events === undefined || data.events.items[i] === undefined) {
                console.log('API data is missing for: ' + team.depthChartPlayers.te.name);
                team.depthChartPlayers.te.missingData.item.push(team.depthChartPlayers.te.name + ' missing ' + 'data.events or data.events.items[i]');
              } else {
                if (data.events.items[i].events === undefined) {
                  tmpGame.gameUrl = data.events.items[i].event.$ref;
                } else {
                  tmpGame.gameUrl = data.events.items[i].events.$ref;
                }
                this.apiService.httpGet(tmpGame.gameUrl).subscribe((data: any) => {
                  tmpGame.gameStatsUrl === undefined;
                  if (data.competitions[0].competitors[0].id === team.id) {
                    if (data.competitions[0].competitors[0].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[0].statistics.$ref;
                      tmpGame.homeAway = 'home';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[1].id;
                  } else {
                    if (data.competitions[0].competitors[1].statistics !== undefined) {
                      tmpGame.gameStatsUrl = data.competitions[0].competitors[1].statistics.$ref;
                      tmpGame.homeAway = 'away';
                    }
                    tmpGame.opponentId = data.competitions[0].competitors[0].id;
                  }
                  if (tmpGame.gameStatsUrl === undefined || tmpGame.gameStatsUrl.length < 1) {
                    team.depthChartPlayers.te.missingData.item.push(team.depthChartPlayers.te.name + ' missing ' + 'tmpGame.gameStatsUrl');
                  } else {
                    this.apiService.httpGet(tmpGame.gameStatsUrl).subscribe((data: any) => {
                      for (let a = 0; a < data.splits.categories[3].athletes.length; a++) {
                        let tmpPlayerUrl = data.splits.categories[3].athletes[a].athlete.$ref;
                        let tmpChar = '';
                        for (let b = 0; b < tmpPlayerUrl.length; b++) {
                          if (tmpPlayerUrl.charAt(b) !== '/') {
                            tmpChar += tmpPlayerUrl.charAt(b);
                          } else {
                            if (tmpChar !== 'athletes') {
                              tmpChar = '';
                            } else {
                              tmpChar = '';
                              for (let c = b + 1; c < b + 8; c++) {
                                if (tmpPlayerUrl.charAt(c) === '?') {
                                  break;
                                } else {
                                  tmpChar += tmpPlayerUrl.charAt(c);
                                }
                              }
                              break;
                            }
                          }
                        }
                        if (tmpChar === team.depthChartPlayers.te.id) {
                          tmpGame.playerGameStatsUrl = data.splits.categories[3].athletes[a].statistics.$ref;
                          break;
                        } else {
                          continue;
                        }
                      };
                      if (tmpGame.playerGameStatsUrl.length === 0) {
                        console.log('API missing data for: ', team.depthChartPlayers.te.name);
                        team.depthChartPlayers.te.missingData.item.push(team.depthChartPlayers.te.name + ' missing ' + 'tmpGame.playerGameStatsUrl');
                      } else {
                        this.apiService.httpGet(tmpGame.playerGameStatsUrl).subscribe((data: any) => {
                          if (data.splits === undefined) {
                            this.apiService.httpGet(data.statistics.$ref).subscribe((data: any) => {
                              tmpGame.value = data.splits.categories[3].stats[12].value;
                            });
                          } else {
                            tmpGame.value = data.splits.categories[3].stats[12].value;
                          }
                          let opponentTeam = this.allTeams.find(team => {
                            return team.id === tmpGame.opponentId
                          });
                          let tmpOpponentGame: Game = {
                            opponentId: team.id,
                            weekNum: tmpGame.weekNum,
                            gameUrl: '',
                            gameStatsUrl: '',
                            playerGameStatsUrl: '',
                            value: tmpGame.value,
                            homeAway: '',
                            opponentPlayer: team.depthChartPlayers.te.name
                          };
                          opponentTeam?.opponentGamesTe.push(tmpOpponentGame);
                          team.depthChartPlayers.te.games.push(tmpGame);
                        });
                      }
                    });
                  }
                });
              }
            }
          })
        });
      }
    });
  }

  calculateWeek(teamId: string | any): number {
    switch (this.dateService.currentWeek) {
      case 5: {
        if (teamId === '5' || teamId === '24' || teamId === '26' || teamId === '27') {
          return -1;
        } else {
          return 4;
        }
      }
      case 6: {
        if (teamId === '9' || teamId === '23') {
          return -1;
        } else {
          var tSet = new Set(['5', '24', '26', '27']);
          if (tSet.has(teamId)) {
            return this.dateService.currentWeek - 2;
          } else {
            return this.dateService.currentWeek - 1;
          }
        }
      }
      case 7: {
        if (teamId === '29' || teamId === '4' || teamId === '6' || teamId === '34' || teamId === '20' || teamId === '10') {
          return -1;
        } else {
          var tSet = new Set(['5', '24', '26', '27', '9', '23']);
          if (tSet.has(teamId)) {
            return this.dateService.currentWeek - 2;
          } else {
            return this.dateService.currentWeek - 1;
          }
        }
      }
      case 9: {
        if (teamId === '7' || teamId === '8' || teamId === '30' || teamId === '25') {
          return -1;
        } else {
          var tSet = new Set(['5', '24', '26', '27', '9', '23', '29', '4', '6', '34', '20', '10']);
          if (tSet.has(teamId)) {
            return this.dateService.currentWeek - 2;
          } else {
            return this.dateService.currentWeek - 1;
          }
        }
      }
      case 10: {
        if (teamId === '12' || teamId === '14' || teamId === '15' || teamId === '21') {
          return -1;
        } else {
          var tSet = new Set(['5', '24', '26', '27', '9', '23', '29', '4', '6', '34', '20', '10', '7', '8', '30', '25']);
          if (tSet.has(teamId)) {
            return this.dateService.currentWeek - 2;
          } else {
            return this.dateService.currentWeek - 1;
          }
        }
      }
      case 11: {
        if (teamId === '1' || teamId === '11' || teamId === '17' || teamId === '18') {
          return -1;
        } else {
          var tSet = new Set(['5', '24', '26', '27', '9', '23', '29', '4', '6', '34', '20', '10', '7', '8', '30', '25', '12', '14', '15', '21']);
          if (tSet.has(teamId)) {
            return this.dateService.currentWeek - 2;
          } else {
            return this.dateService.currentWeek - 1;
          }
        }
      }
      case 13: {
        if (teamId === '33' || teamId === '2' || teamId === '3' || teamId === '13' || teamId === '16' || teamId === '19') {
          return -1;
        } else {
          var tSet = new Set(['5', '24', '26', '27', '9', '23', '29', '4', '6', '34', '20', '10', '7', '8', '30', '25', '12', '14', '15', '21', '1', '11', '17', '18']);
          if (tSet.has(teamId)) {
            return this.dateService.currentWeek - 2;
          } else {
            return this.dateService.currentWeek - 1;
          }
        }
      }
      case 14: {
        if (teamId === '22' || teamId === '28') {
          return -1;
        } else {
          var tSet = new Set(['5', '24', '26', '27', '9', '23', '29', '4', '6', '34', '20', '10', '7', '8', '30', '25', '12', '14', '15', '21', '1', '11', '17', '18', '33', '2', '3', '13', '16', '19']);
          if (tSet.has(teamId)) {
            return this.dateService.currentWeek - 2;
          } else {
            return this.dateService.currentWeek - 1;
          }
        }
      }
    }
    return this.dateService.currentWeek - 1;
  }


  initializeOpponentId() {
    this.allTeams.forEach(team => {
      this.apiService.httpGet(team.eventsUrl).subscribe((data: any) => {
        let tmpIndex = this.calculateWeek(team.id);
        team.currentOpponentId = '';
        team.currentAwayHome = '';
        if (tmpIndex === -1) {
          team.currentOpponentId = '';
          team.currentAwayHome = '';
        } else {
          for (let i = 0; i < data.items.length; i++) {
            this.apiService.httpGet(data.items[i].$ref).subscribe((data2: any) => {
              if (this.dateService.isCurrentWeek(new Date(data2.date))) {
                if (team.id === '21') {
                  console.log('h');
                }
                team.currentOpponentId = '';
                if (data2.competitions[0].competitors[0].id === team.id) {
                  team.currentOpponentId = data2.competitions[0].competitors[1].id
                  team.currentAwayHome = 'home';
                } else {
                  team.currentOpponentId = data2.competitions[0].competitors[0].id;
                  team.currentAwayHome = 'away';
                }
              }
            });
          }
          };
        });
      });
      console.log('Done processing Opponent Ids');
    };

  initializeAverageCalculations() {
    this.allTeams.forEach(team => {
      team.depthChartPlayers.qb.games.forEach(game => {
        team.depthChartPlayers.qb.allPassingYards += game.value;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.rb1.games.forEach(game => {
        team.depthChartPlayers.rb1.allRushingYards += game.value;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.rb2.games.forEach(game => {
        team.depthChartPlayers.rb2.allRushingYards += game.value;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr1.games.forEach(game => {
        team.depthChartPlayers.wr1.allReceivingYards += game.value;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr2.games.forEach(game => {
        team.depthChartPlayers.wr2.allReceivingYards += game.value;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr3.games.forEach(game => {
        team.depthChartPlayers.wr3.allReceivingYards += game.value;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.te.games.forEach(game => {
        team.depthChartPlayers.te.allReceivingYards += game.value;
      })
    })
    console.log('Done aggregating Average Values')
  }

  initializeOpponentYdsGiven() {
    this.allTeams.forEach(team => {
      team.depthChartPlayers.qb.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenQb += game.value;
        this.allTeams[opponentIndex].allYardsGivenQbCounter++;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.rb1.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenRb1 += game.value;
        this.allTeams[opponentIndex].allYardsGivenRb1Counter++;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.rb2.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenRb2 += game.value;
        this.allTeams[opponentIndex].allYardsGivenRb2Counter++;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr1.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenWr1 += game.value;
        this.allTeams[opponentIndex].allYardsGivenWr1Counter++;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr2.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenWr2 += game.value;
        this.allTeams[opponentIndex].allYardsGivenWr2Counter++;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.wr3.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenWr3 += game.value;
        this.allTeams[opponentIndex].allYardsGivenWr3Counter++;
      })
    })
    this.allTeams.forEach(team => {
      team.depthChartPlayers.te.games.forEach(game => {
        let opponentIndex = this.findTeamIndex(game.opponentId);
        this.allTeams[opponentIndex].allYardsGivenTe += game.value;
        this.allTeams[opponentIndex].allYardsGivenTeCounter++;
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
