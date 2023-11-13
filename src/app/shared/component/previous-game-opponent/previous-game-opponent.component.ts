import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/core/services/http.service';
import { Game } from '../../models/interface';
import { HttpNbaService } from 'src/app/core/services/http-nba.service';

@Component({
  selector: 'app-previous-game-opponent',
  templateUrl: './previous-game-opponent.component.html',
  styleUrls: ['./previous-game-opponent.component.scss']
})
export class PreviousGameOpponentComponent {
  currentTeam: string = '';
  displayedColumns: string[] = ['week', 'opponent', 'opponent-average', 'opponentGiven', 'value', 'result'
  ]
  dataSource: any;
  currentRole: string = '';
  isWeek = true;
  currentTeamId: string = '';
  tmpGames: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpNbaService: HttpNbaService,
    public httpService: HttpService
  ) {
    console.log("🚀 ~ data.team:", data.team)
    this.currentTeam = data.team.displayName;
    this.currentTeamId = data.team.id;

    switch (data.position) {
      case 'pg': {
        this.isWeek = false;
        this.currentRole = 'PG';
        data.team.opponentGamesPg.sort((a: Game, b: Game) => ((a.gameDate! < b.gameDate! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesPg);
        break;
      }
      case 'pf': {
        this.isWeek = false;
        this.currentRole = 'PF';
        data.team.opponentGamesPf.sort((a: Game, b: Game) => ((a.gameDate! < b.gameDate! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesPf);
        break;
      }
      case 'c': {
        this.isWeek = false;
        this.currentRole = 'C';
        data.team.opponentGamesC.sort((a: Game, b: Game) => ((a.gameDate! < b.gameDate! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesC);
        break;
      }
      case 'sf': {
        this.isWeek = false;
        this.currentRole = 'SF';
        data.team.opponentGamesSf.sort((a: Game, b: Game) => ((a.gameDate! < b.gameDate! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesSf);
        break;
      }
      case 'sg': {
        this.isWeek = false;
        this.currentRole = 'SG';
        data.team.opponentGamesSg.sort((a: Game, b: Game) => ((a.gameDate! < b.gameDate! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesSg);
        break;
      }
      case 'qb': {
        this.currentRole = 'QB';
        data.team.opponentGamesQb.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesQb;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesQb);
        break;
      }
      case 'rb1': {
        this.currentRole = 'RB1';
        data.team.opponentGamesRb1.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesRb1;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesRb1);
        break;
      }
      case 'rb2': {
        this.currentRole = 'RB2';
        data.team.opponentGamesRb2.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesRb2;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesRb2);
        break;
      }
      case 'wr1': {
        this.currentRole = 'WR1';
        data.team.opponentGamesWr1.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesWr1;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesWr1);
        break;
      }
      case 'wr2': {
        this.currentRole = 'WR2';
        data.team.opponentGamesWr2.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesWr2;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesWr2);
        break;
      }
      case 'wr3': {
        this.currentRole = 'WR3';
        data.team.opponentGamesWr3.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesWr3;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesWr3);
        break;
      }
      case 'te': {
        this.currentRole = 'TE';
        data.team.opponentGamesTe.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesTe;
        this.isWeek = data.team.opponentGamesTe;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesTe);
        break;
      }
      case 'rb1Rec': {
        this.currentRole = 'RB1REC';
        data.team.opponentGamesRb1.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.isWeek = data.team.opponentGamesRb1;
        this.tmpGames = data.team.opponentGamesRb1;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesRb1);
        break;
      }
      case 'rb2Rec': {
        this.currentRole = 'RB2REC';
        data.team.opponentGamesRb2.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.isWeek = data.team.opponentGamesRb2;
        this.tmpGames = data.team.opponentGamesRb2;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesRb2);
        break;
      }
    }
  }

  returnOpponentAvgValueGiven(opponentId: string): number {
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

  returnPlayerAvg(playerName: string): number {
    let tmpData = -1;
    let footballPositions = new Set<string>(["QB", "RB1", "RB2", "RB1REC", "RB2REC", "WR1", "WR2", "WR3", "TE"])
    if (footballPositions.has(this.currentRole)) {
      this.httpService.allTeams.forEach(team => {
        switch (this.currentRole) {
          case 'QB': {
            if (team.depthChartPlayers.qb.name === playerName) {
              tmpData = this.httpService.calculateQb(team.depthChartPlayers.qb);
            }
            break;
          }
          case 'RB1': {
            if (team.depthChartPlayers.rb1.name === playerName) {
              tmpData = this.httpService.calculateRb(team.depthChartPlayers.rb1);
            }
            break;
          }
          case 'RB2': {
            if (team.depthChartPlayers.rb2.name === playerName) {
              tmpData = this.httpService.calculateRb(team.depthChartPlayers.rb2);
            }
            break;
          }
          case 'RB1REC': {
            if (team.depthChartPlayers.rb1.name === playerName) {
              tmpData = this.httpService.calculateRbRec(team.depthChartPlayers.rb1);
            }
            break;
          }
          case 'RB2REC': {
            if (team.depthChartPlayers.rb2.name === playerName) {
              tmpData = this.httpService.calculateRbRec(team.depthChartPlayers.rb2);
            }
            break;
          }
          case 'WR1': {
            if (team.depthChartPlayers.wr1.name === playerName) {
              tmpData = this.httpService.calculateReceiving(team.depthChartPlayers.wr1);
            }
            break;
          }
          case 'WR2': {
            if (team.depthChartPlayers.wr2.name === playerName) {
              tmpData = this.httpService.calculateReceiving(team.depthChartPlayers.wr2);
            }
            break;
          }
          case 'WR3': {
            if (team.depthChartPlayers.wr3.name === playerName) {
              tmpData = this.httpService.calculateReceiving(team.depthChartPlayers.wr3);
            }
            break;
          }
          case 'TE': {
            if (team.depthChartPlayers.te.name === playerName) {
              tmpData = this.httpService.calculateReceiving(team.depthChartPlayers.te);
            }
            break;
          }
        }
      });
    } else {
      this.httpNbaService.allTeams.forEach(team => {
        switch (this.currentRole) {
          case 'PG': {
            if (team.depthChartPlayers.pg.name === playerName) {
              tmpData = this.httpNbaService.calculatePg(team.depthChartPlayers.pg);
            }
            break;
          }
          case 'PF': {
            if (team.depthChartPlayers.pf.name === playerName) {
              tmpData = this.httpNbaService.calculatePf(team.depthChartPlayers.pf);
            }
            break;
          }
          case 'C': {
            if (team.depthChartPlayers.c.name === playerName) {
              tmpData = this.httpNbaService.calculateC(team.depthChartPlayers.c);
            }
            break;
          }
          case 'SF': {
            if (team.depthChartPlayers.sf.name === playerName) {
              tmpData = this.httpNbaService.calculateSf(team.depthChartPlayers.sf);
            }
            break;
          }
          case 'SG': {
            if (team.depthChartPlayers.sg.name === playerName) {
              tmpData = this.httpNbaService.calculateSg(team.depthChartPlayers.sg);
            }
            break;
          }
        }
      })
    }
    return tmpData;
  }

  returnDifference(value1: number, value2: number) {
    return (value1 - value2);
  }

  returnOpponentTeamName(opponentId: string): string {
    switch (this.data.position) {
      case 'pg': {
        return this.returnNbaTeamName(opponentId);
      }
      case 'pf': {
        return this.returnNbaTeamName(opponentId);
      }
      case 'c': {
        return this.returnNbaTeamName(opponentId);
      }
      case 'sf': {
        return this.returnNbaTeamName(opponentId);
      }
      case 'sg': {
        return this.returnNbaTeamName(opponentId);
      }
      case 'qb': {
        return this.returnNflTeamName(opponentId);
      }
      case 'rb1': {
        return this.returnNflTeamName(opponentId);
      }
      case 'rb2': {
        return this.returnNflTeamName(opponentId);
      }
      case 'wr1': {
        return this.returnNflTeamName(opponentId);
      }
      case 'wr2': {
        ; return this.returnNflTeamName(opponentId);
      }
      case 'wr3': {
        return this.returnNflTeamName(opponentId);
      }
      case 'te': {
        return this.returnNflTeamName(opponentId);
      }
      case 'rb1Rec': {
        return this.returnNflTeamName(opponentId);
      }
      case 'rb2Rec': {
        return this.returnNflTeamName(opponentId);
      }
    }
    return 'undefined';
  }
  returnNbaTeamName(opponentId: string): string {
    let tmpTeam = this.httpNbaService.allTeams.find(team => {
      return (team.id === opponentId);
    })
    return tmpTeam?.displayName!;
  }

  returnNflTeamName(opponentId: string): string {
    let tmpTeam = this.httpService.allTeams.find(team => {
      return (team.id === opponentId);
    })
    return tmpTeam?.displayName!;
  }

  sortColumn(event: any) {
    switch (event.active) {
      case 'result': {
        if (event.direction === "asc") {
          if (this.currentRole === 'RB1REC' || this.currentRole === 'RB2REC') {
            this.tmpGames.sort((a: Game, b: Game) => ((a.rbReceivingValue! - this.returnPlayerAvg(a.opponentPlayer!)) < (b.rbReceivingValue! - this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          } else {
            this.tmpGames.sort((a: Game, b: Game) => ((a.value - this.returnPlayerAvg(a.opponentPlayer!)) < (b.value - this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          }
        } else if (event.direction === "desc") {
          if (this.currentRole === 'RB1REC' || this.currentRole === 'RB2REC') {
            this.tmpGames.sort((a: Game, b: Game) => ((a.rbReceivingValue! - this.returnPlayerAvg(a.opponentPlayer!)) > (b.rbReceivingValue! - this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          } else {
            this.tmpGames.sort((a: Game, b: Game) => ((a.value - this.returnPlayerAvg(a.opponentPlayer!)) > (b.value - this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          }
        }
        break;
      }
      case 'opponent-average': {
        if (event.direction === "asc") {
          this.tmpGames.sort((a: Game, b: Game) => ((this.returnPlayerAvg(a.opponentPlayer!) < this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
        } else if (event.direction === "desc") {
          this.tmpGames.sort((a: Game, b: Game) => ((this.returnPlayerAvg(a.opponentPlayer!) > this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        break;
      }
      case 'value': {
        if (event.direction === "asc") {
          if (this.currentRole === 'RB1REC' || this.currentRole === 'RB2REC') {
            this.tmpGames.sort((a: Game, b: Game) => ((a.rbReceivingValue!) < (b.rbReceivingValue!) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          } else {
            this.tmpGames.sort((a: Game, b: Game) => ((a.value) < (b.value) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          }
        } else if (event.direction === "desc") {
          if (this.currentRole === 'RB1REC' || this.currentRole === 'RB2REC') {
            this.tmpGames.sort((a: Game, b: Game) => ((a.rbReceivingValue!) > (b.rbReceivingValue!) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          } else {
            this.tmpGames.sort((a: Game, b: Game) => ((a.value) > (b.value) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          }
        }
        break;
      }
    }
  }
}
