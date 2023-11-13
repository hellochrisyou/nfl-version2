import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpNbaService } from 'src/app/core/services/http-nba.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Game } from '../../models/interface';

@Component({
  selector: 'app-previous-game',
  templateUrl: './previous-game.component.html',
  styleUrls: ['./previous-game.component.scss']
})
export class PlayerPreviousGameComponent {
  currentPlayer: string = '';
  displayedColumns: string[] = ['week', 'opponent', 'opponent-avg', 'value', 'result'
  ]
  dataSource: any;
  currentTeam: string = '';
  currentRole: string = '';
  isWeek = false;
  currentTeamId: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService,
    private httpNbaService: HttpNbaService
  ) {
    // this.currentPlayer = data.player.name;
    // this.dataSource = new MatTableDataSource(data.player.games);
    console.log("🚀 ~ data:", data)
    this.currentTeam = data.name;
    this.currentPlayer = data.player.name;
    switch (data.position) {
      case 'qb': {
        this.isWeek = true;
        this.currentRole = 'QB';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'rb1': {
        this.isWeek = true;
        this.currentRole = 'RB1';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'rb2': {
        this.isWeek = true;
        this.currentRole = 'RB2';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'wr1': {
        this.isWeek = true;
        this.currentRole = 'WR1';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'wr2': {
        this.isWeek = true;
        this.currentRole = 'WR2';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'wr3': {
        this.isWeek = true;
        this.currentRole = 'WR3';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'te': {
        this.isWeek = true;
        this.currentRole = 'TE';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'rb1Rec': {
        this.isWeek = true;
        this.currentRole = 'RB1REC';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'rb2Rec': {
        this.isWeek = true;
        this.currentRole = 'RB2REC';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'pg': {
        this.currentRole = 'PG';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'pf': {
        this.currentRole = 'PF';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'c': {
        this.currentRole = 'C';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'sf': {
        this.currentRole = 'SF';
        this.currentTeamId = data.teamId;
        break;
      }
      case 'sg': {
        this.currentRole = 'SG';
        this.currentTeamId = data.teamId;
        break;
      }
    }
    data.player.games.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
    this.dataSource = new MatTableDataSource(data.player.games);
  }
  returnOpponentTeamName(opponentId: string) {
    let tmpTeam;
    if (this.data.player.allPoints) {
      tmpTeam = this.httpNbaService.allTeams.find(team => {
        return (team.id === opponentId);
      })
    } else {
      tmpTeam = this.httpService.allTeams.find(team => {
        return (team.id === opponentId);
      })
    }
    return tmpTeam?.displayName;
  }

  returnAvgGiven(opponentId: string): number {
    switch (this.currentRole) {
      case 'QB': {
        return this.httpService.returnOpponentAvgPassYardsGiven(opponentId);
      }
      case 'RB1': {
        return this.httpService.returnOpponentAvgRb1RushYardsGiven(opponentId);
      }
      case 'RB2': {
        return this.httpService.returnOpponentAvgRb2RushYardsGiven(opponentId);
      }
      case 'WR1': {
        return this.httpService.returnOpponentAvgWr1RecYardsGiven(opponentId);
      }
      case 'WR2': {
        return this.httpService.returnOpponentAvgWr2RecYardsGiven(opponentId);
      }
      case 'WR3': {
        return this.httpService.returnOpponentAvgWr3RecYardsGiven(opponentId);
      }
      case 'TE': {
        return this.httpService.returnOpponentAvgTeRecYardsGiven(opponentId);
      }
      case 'RB1REC': {
        return this.httpService.returnOpponentAvgRb1RecYardsGiven(opponentId);
      }
      case 'RB2REC': {
        return this.httpService.returnOpponentAvgRb2RecYardsGiven(opponentId);
      }
      case 'PG': {
        return this.httpNbaService.returnOpponentAvgPgPointsGiven(opponentId);
      }
      case 'PF': {
        return this.httpNbaService.returnOpponentAvgPfPointsGiven(opponentId);
      }
      case 'C': {
        return this.httpNbaService.returnOpponentAvgCPointsGiven(opponentId);
      }
      case 'SF': {
        return this.httpNbaService.returnOpponentAvgSfPointsGiven(opponentId);
      }
      case 'SG': {
        return this.httpNbaService.returnOpponentAvgSgPointsGiven(opponentId);
      }
      default: {
        return -1;
      }
    }
  }
  returnPlayerAvg(playerName?: string): number {
    let tmpName = '';
    if (playerName) {
      tmpName = playerName
    } else {
      tmpName = this.data.player.name;
    }
    let tmpData = -1;
    let footballPositions = new Set<string>(["QB", "RB1", "RB2", "RB1REC", "RB2REC", "WR1", "WR2", "WR3", "TE"])
    if (footballPositions.has(this.currentRole)) {
      this.httpService.allTeams.forEach(team => {
        switch (this.currentRole) {
          case 'QB': {
            if (team.depthChartPlayers.qb.name === tmpName) {
              tmpData = this.httpService.calculateQb(team.depthChartPlayers.qb);
            }
            break;
          }
          case 'RB1': {
            if (team.depthChartPlayers.rb1.name === tmpName) {
              tmpData = this.httpService.calculateRb(team.depthChartPlayers.rb1);
            }
            break;
          }
          case 'RB2': {
            if (team.depthChartPlayers.rb2.name === tmpName) {
              tmpData = this.httpService.calculateRb(team.depthChartPlayers.rb2);
            }
            break;
          }
          case 'RB1REC': {
            if (team.depthChartPlayers.rb1.name === tmpName) {
              tmpData = this.httpService.calculateRbRec(team.depthChartPlayers.rb1);
            }
            break;
          }
          case 'RB2REC': {
            if (team.depthChartPlayers.rb2.name === tmpName) {
              tmpData = this.httpService.calculateRbRec(team.depthChartPlayers.rb2);
            }
            break;
          }
          case 'WR1': {
            if (team.depthChartPlayers.wr1.name === tmpName) {
              tmpData = this.httpService.calculateReceiving(team.depthChartPlayers.wr1);
            }
            break;
          }
          case 'WR2': {
            if (team.depthChartPlayers.wr2.name === tmpName) {
              tmpData = this.httpService.calculateReceiving(team.depthChartPlayers.wr2);
            }
            break;
          }
          case 'WR3': {
            if (team.depthChartPlayers.wr3.name === tmpName) {
              tmpData = this.httpService.calculateReceiving(team.depthChartPlayers.wr3);
            }
            break;
          }
          case 'TE': {
            if (team.depthChartPlayers.te.name === tmpName) {
              tmpData = this.httpService.calculateReceiving(team.depthChartPlayers.te);
            }
            break;
          }
        }
      })
    } else {
      this.httpNbaService.allTeams.forEach(team => {
        switch (this.currentRole) {
          case 'PG': {
            if (team.depthChartPlayers.pg.name === tmpName) {
              tmpData = this.httpNbaService.calculatePg(team.depthChartPlayers.pg);
            }
            break;
          }
          case 'PF': {
            if (team.depthChartPlayers.pf.name === tmpName) {
              tmpData = this.httpNbaService.calculateSf(team.depthChartPlayers.pf);
            }
            break;
          }
          case 'C': {
            if (team.depthChartPlayers.c.name === tmpName) {
              tmpData = this.httpNbaService.calculateC(team.depthChartPlayers.c);
            }
            break;
          }
          case 'SF': {
            if (team.depthChartPlayers.sf.name === tmpName) {
              tmpData = this.httpNbaService.calculateSf(team.depthChartPlayers.sf);
            }
            break;
          }
          case 'SG': {
            if (team.depthChartPlayers.sg.name === tmpName) {
              tmpData = this.httpNbaService.calculateSg(team.depthChartPlayers.sg);
            }
            break;
          }
        }
      })
    }
    return tmpData;
  }

  sortColumn(event: any) {
    switch (event.active) {
      case 'result': {
        if (event.direction === "asc") {
          if (this.currentRole === 'RB1REC' || this.currentRole === 'RB2REC') {
            let tmpGames = this.data.player.games;
            tmpGames.sort((a: Game, b: Game) => ((a.rbReceivingValue! - this.returnPlayerAvg(a.opponentPlayer)) < (b.rbReceivingValue! - this.returnPlayerAvg(b.opponentPlayer)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(tmpGames);
          } else {
            let tmpGames = this.data.player.games;
            tmpGames.sort((a: Game, b: Game) => ((a.value - this.returnPlayerAvg(a.opponentPlayer)) < (b.value - this.returnPlayerAvg(b.opponentPlayer)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(tmpGames);
          }
        } else if (event.direction === "desc") {
          if (this.currentRole === 'RB1REC' || this.currentRole === 'RB2REC') {
            let tmpGames = this.data.player.games;
            tmpGames.sort((a: Game, b: Game) => ((a.rbReceivingValue! - this.returnPlayerAvg(a.opponentPlayer)) > (b.rbReceivingValue! - this.returnPlayerAvg(b.opponentPlayer)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(tmpGames);
          } else {
            let tmpGames = this.data.player.games;
            tmpGames.sort((a: Game, b: Game) => ((a.value - this.returnPlayerAvg(a.opponentPlayer)) > (b.value - this.returnPlayerAvg(b.opponentPlayer)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(tmpGames);
          }
        }
        break;
      }
      case 'opponent-avg': {
        if (event.direction === "asc") {
          let tmpGames = this.data.player.games;
          tmpGames.sort((a: Game, b: Game) => ((this.returnAvgGiven(a.opponentId!) < this.returnAvgGiven(b.opponentId!)) ? -1 : 1));
          this.dataSource = new MatTableDataSource(tmpGames);
        } else if (event.direction === "desc") {
          let tmpGames = this.data.player.games;
          tmpGames.sort((a: Game, b: Game) => ((this.returnAvgGiven(a.opponentId!) > this.returnAvgGiven(b.opponentId!)) ? -1 : 1));
          this.dataSource = new MatTableDataSource(tmpGames);
        }
        break;
      }
      case 'value': {
        if (event.direction === "asc") {
          if (this.currentRole === 'RB1REC' || this.currentRole === 'RB2REC') {
            let tmpGames = this.data.player.games;
            tmpGames.sort((a: Game, b: Game) => ((a.rbReceivingValue!) < (b.rbReceivingValue!) ? -1 : 1));
            this.dataSource = new MatTableDataSource(tmpGames);
          } else {
            let tmpGames = this.data.player.games;
            tmpGames.sort((a: Game, b: Game) => ((a.value) < (b.value) ? -1 : 1));
            this.dataSource = new MatTableDataSource(tmpGames);
          }
        } else if (event.direction === "desc") {
          if (this.currentRole === 'RB1REC' || this.currentRole === 'RB2REC') {
            let tmpGames = this.data.player.games;
            tmpGames.sort((a: Game, b: Game) => ((a.rbReceivingValue!) > (b.rbReceivingValue!) ? -1 : 1));
            this.dataSource = new MatTableDataSource(tmpGames);
          } else {
            let tmpGames = this.data.player.games;
            tmpGames.sort((a: Game, b: Game) => ((a.value) > (b.value) ? -1 : 1));
            this.dataSource = new MatTableDataSource(tmpGames);
          }
        }
        break;
      }
    }
  }
}
