import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpNbaService } from 'src/app/core/services/http-nba.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Game } from '../../models/interface';

@Component({
  selector: 'app-previous-game',
  templateUrl: './previous-game-reb.component.html',
  styleUrls: ['./previous-game-reb.component.scss']
})
export class PlayerPreviousGameReboundComponent {
  currentPlayer: string = '';
  displayedColumns: string[] = ['date', 'opponent','opponent-avg', 'value',  'result'
  ]
  dataSource: any;
  currentRole: string = '';
  currentTeamId: string = '';
  tmpGames: Game[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpNbaService: HttpNbaService
  ) {
    this.currentPlayer = data.player.name;
    switch (data.position) {
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
    this.tmpGames = data.player.games;
    this.dataSource = new MatTableDataSource(data.player.games);
  }
  returnOpponentTeamName(opponentId: string) {
    let tmpTeam = this.httpNbaService.allTeams.find(team => {
      return (team.id === opponentId);
    });
    return tmpTeam?.displayName;
  }
  returnAvgGiven(opponentId: string): number {
    switch (this.currentRole) {
      case 'PG': {
        return this.httpNbaService.returnOpponentAvgPgReboundsGiven(opponentId);
      }
      case 'PF': {
        return this.httpNbaService.returnOpponentAvgPfReboundsGiven(opponentId);
      }
      case 'C': {
        return this.httpNbaService.returnOpponentAvgCReboundsGiven(opponentId);
      }
      case 'SF': {
        return this.httpNbaService.returnOpponentAvgSfReboundsGiven(opponentId);
      }
      case 'SG': {
        return this.httpNbaService.returnOpponentAvgSgReboundsGiven(opponentId);
      }
      default: {
        return -1;
      }
    }
  }
  returnPlayerAvg(playerId?: string): number {
    let tmpId = '';
    if (playerId) {
      tmpId = playerId
    } else {
      tmpId = this.data.player.id;
    }
    let tmpData = -1;
      this.httpNbaService.allTeams.forEach(team => {
        switch (this.currentRole) {
          case 'PG': {
            if (team.depthChartPlayers.pg.id === tmpId) {
              tmpData = this.httpNbaService.calculateRebounds(team.depthChartPlayers.pg);
            }
            break;
          }
          case 'PF': {
            if (team.depthChartPlayers.pf.id === tmpId) {
              tmpData = this.httpNbaService.calculateRebounds(team.depthChartPlayers.pf);
            }
            break;
          }
          case 'C': {
            if (team.depthChartPlayers.c.id === tmpId) {
              tmpData = this.httpNbaService.calculateRebounds(team.depthChartPlayers.c);
            }
            break;
          }
          case 'SF': {
            if (team.depthChartPlayers.sf.id === tmpId) {
              tmpData = this.httpNbaService.calculateRebounds(team.depthChartPlayers.sf);
            }
            break;
          }
          case 'SG': {
            if (team.depthChartPlayers.sg.id === tmpId) {
              tmpData = this.httpNbaService.calculateRebounds(team.depthChartPlayers.sg);
            }
            break;
          }
        }
      })
    return tmpData;
  }
  sortColumn(event: any) {
    switch (event.active) {
      case 'date': {
        if (event.direction === "asc") {
          this.tmpGames.sort((a: Game, b: Game) => (a.gameDate! < b.gameDate!) ? -1 : 1);
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        else if (event.direction === "desc") {
          this.tmpGames.sort((a: Game, b: Game) => (a.gameDate! > b.gameDate!) ? -1 : 1);
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        break;
      }
      case 'opponent-avg': {
        if (event.direction === "asc") {
          this.tmpGames.sort((a: Game, b: Game) => (this.returnAvgGiven(a.opponentId!) < this.returnPlayerAvg(b.opponentId!)) ? -1 : 1);
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        else if (event.direction === "desc") {
          this.tmpGames.sort((a: Game, b: Game) => (this.returnPlayerAvg(a.opponentId!) > this.returnPlayerAvg(b.opponentId!)) ? -1 : 1);
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        break;
      }
      case 'result': {
        if (event.direction === "asc") {
          this.tmpGames.sort((a: Game, b: Game) => ((a.reboundsValue! - this.returnPlayerAvg(a.opponentId!)) < (b.reboundsValue! - this.returnPlayerAvg(b.opponentId!)) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        else if (event.direction === "desc") {
          this.tmpGames.sort((a: Game, b: Game) => ((a.reboundsValue! - this.returnPlayerAvg(a.opponentId!)) > (b.reboundsValue! - this.returnPlayerAvg(b.opponentId!)) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        break;
      }
      case 'value': {
        if (event.direction === "asc") {
          this.tmpGames.sort((a: Game, b: Game) => ((a.reboundsValue!) < (b.reboundsValue!) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
        } else if (event.direction === "desc") {
          this.tmpGames.sort((a: Game, b: Game) => ((a.reboundsValue!) > (b.reboundsValue!) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        break;
      }
    }
  }
}
