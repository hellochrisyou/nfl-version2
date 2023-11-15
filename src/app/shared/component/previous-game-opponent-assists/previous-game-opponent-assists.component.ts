import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/core/services/http.service';
import { Game } from '../../models/interface';
import { HttpNbaService } from 'src/app/core/services/http-nba.service';

@Component({
  selector: 'app-previous-game-opponent',
  templateUrl: './previous-game-opponent-assists.component.html',
  styleUrls: ['./previous-game-opponent-assists.component.scss']
})
export class PreviousGameOpponentAssistsComponent {
  currentTeam: string = '';
  displayedColumns: string[] = ['date', 'opponent', 'opponent-avg', 'value', 'result'
  ]
  tmpGames: Game[] = [];

  dataSource: any;
  currentRole: string = '';
  currentTeamId: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpNbaService: HttpNbaService,
  ) {
    console.log("🚀 ~ data:", data)
    this.currentTeam = data.team.displayName;
    this.currentTeamId = data.team.id;

    switch (data.position) {
      case 'pg': {
        this.currentRole = 'PG';
        data.team.opponentGamesPg.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesPg;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesPg);
        break;
      }
      case 'pf': {
        this.currentRole = 'PF';
        data.team.opponentGamesPf.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesPf;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesPf);
        break;
      }
      case 'c': {
        this.currentRole = 'C';
        data.team.opponentGamesC.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesC;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesC);
        break;
      }
      case 'sf': {
        this.currentRole = 'SF';
        data.team.opponentGamesSf.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesSf;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesSf);
        break;
      }
      case 'sg': {
        this.currentRole = 'SG';
        data.team.opponentGamesSg.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.tmpGames = data.team.opponentGamesSg;
        this.dataSource = new MatTableDataSource(data.team.opponentGamesSg);
        break;
      }
    }
  }
  returnOpponentAvgValueGiven(opponentId: string): number {
    switch (this.currentRole) {
      case 'PG': {
        return this.httpNbaService.returnOpponentAvgPgAssistsGiven(opponentId);
      }
      case 'PF': {
        return this.httpNbaService.returnOpponentAvgPfAssistsGiven(opponentId);
      }
      case 'C': {
        return this.httpNbaService.returnOpponentAvgCAssistsGiven(opponentId);
      }
      case 'SF': {
        return this.httpNbaService.returnOpponentAvgSfAssistsGiven(opponentId);
      }
      case 'SG': {
        return this.httpNbaService.returnOpponentAvgSgAssistsGiven(opponentId);
      }
      default: {
        return -1;
      }
    }
  }
  returnOpponentTeamName(opponentId: string) {
    let tmpTeam = this.httpNbaService.allTeams.find(team => {
      return (team.id === opponentId);
    })
    return tmpTeam?.displayName;
  }

  returnPlayerAvg(playerName: string): number {
    let tmpData = -1;
      this.httpNbaService.allTeams.forEach(team => {
        switch (this.currentRole) {
          case 'PG': {
            if (team.depthChartPlayers.pg.name === playerName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.pg);
            }
            break;
          }
          case 'PF': {
            if (team.depthChartPlayers.pf.name === playerName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.pf);
            }
            break;
          }
          case 'C': {
            if (team.depthChartPlayers.c.name === playerName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.c);
            }
            break;
          }
          case 'SF': {
            if (team.depthChartPlayers.sf.name === playerName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.sf);
            }
            break;
          }
          case 'SG': {
            if (team.depthChartPlayers.sg.name === playerName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.sg);
            }
            break;
          }
        }
      })
    return tmpData;
  }

  sortColumn(event: any) {
    switch (event.active) {
      case 'opponent-avg': {
        if (event.direction === "asc") {
          this.tmpGames.sort((a: Game, b: Game) => (this.returnPlayerAvg(a.opponentPlayer!) < this.returnPlayerAvg(b.opponentPlayer!) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
       else if (event.direction === "desc") {
          this.tmpGames.sort((a: Game, b: Game) => (this.returnPlayerAvg(a.opponentPlayer!) > this.returnPlayerAvg(b.opponentPlayer!) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
        }
      break;
      }
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
      case 'result': {
        if (event.direction === "asc") {
            this.tmpGames.sort((a: Game, b: Game) => ((a.assistsValue! - this.returnPlayerAvg(a.opponentPlayer!)) < (b.assistsValue! - this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          }
         else if (event.direction === "desc") {
          this.tmpGames.sort((a: Game, b: Game) => ((a.assistsValue! - this.returnPlayerAvg(a.opponentPlayer!)) > (b.assistsValue! - this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
          this.dataSource = new MatTableDataSource(this.tmpGames);
          }
        break;
      }
      case 'value': {
        if (event.direction === "asc") {
            this.tmpGames.sort((a: Game, b: Game) => ((a.assistsValue!) < (b.assistsValue!) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
        } else if (event.direction === "desc") {
            this.tmpGames.sort((a: Game, b: Game) => ((a.assistsValue!) > (b.assistsValue!) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        break;
      }
    }
  }
}
