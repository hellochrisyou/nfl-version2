import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/core/services/http.service';
import { Game } from '../../models/interface';
import { HttpNbaService } from 'src/app/core/services/http-nba.service';

@Component({
  selector: 'app-previous-game-opponent',
  templateUrl: './previous-game-opponent-three.component.html',
  styleUrls: ['./previous-game-opponent-three.component.scss']
})
export class PreviousGameOpponentThreeComponent {
  currentTeam: string = '';
  displayedColumns: string[] = ['date', 'opponent', 'opponent-avg', 'value', 'result'  ]
  tmpGames: any[] = [];

  dataSource: any;
  currentRole: string = '';
  currentTeamId: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpNbaService: HttpNbaService,
  ) {
    this.currentTeam = data.team.displayName;
    this.currentTeamId = data.team.id;

    switch (data.position) {
      case 'pg': {
        this.currentRole = 'PG';
        data.team.opponentGamesPg.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesPg);
        break;
      }
      case 'pf': {
        this.currentRole = 'PF';
        data.team.opponentGamesPf.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesPf);
        break;
      }
      case 'c': {
        this.currentRole = 'C';
        data.team.opponentGamesC.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesC);
        break;
      }
      case 'sf': {
        this.currentRole = 'SF';
        data.team.opponentGamesSf.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesSf);
        break;
      }
      case 'sg': {
        this.currentRole = 'SG';
        data.team.opponentGamesSg.sort((a: Game, b: Game) => ((a.weekNum! < b.weekNum! ? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesSg);
        break;
      }
    }
  }
  returnOpponentAvgValueGiven(opponentId: string): number {
    switch (this.currentRole) {
      case 'PG': {
        return this.httpNbaService.returnOpponentAvgPgThreesGiven(opponentId);
      }
      case 'PF': {
        return this.httpNbaService.returnOpponentAvgPfThreesGiven(opponentId);
      }
      case 'C': {
        return this.httpNbaService.returnOpponentAvgCThreesGiven(opponentId);
      }
      case 'SF': {
        return this.httpNbaService.returnOpponentAvgSfThreesGiven(opponentId);
      }
      case 'SG': {
        return this.httpNbaService.returnOpponentAvgSgThreesGiven(opponentId);
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
              tmpData = this.httpNbaService.calculateThrees(team.depthChartPlayers.pg);
            }
            break;
          }
          case 'PF': {
            if (team.depthChartPlayers.pf.name === playerName) {
              tmpData = this.httpNbaService.calculateThrees(team.depthChartPlayers.pf);
            }
            break;
          }
          case 'C': {
            if (team.depthChartPlayers.c.name === playerName) {
              tmpData = this.httpNbaService.calculateThrees(team.depthChartPlayers.c);
            }
            break;
          }
          case 'SF': {
            if (team.depthChartPlayers.sf.name === playerName) {
              tmpData = this.httpNbaService.calculateThrees(team.depthChartPlayers.sf);
            }
            break;
          }
          case 'SG': {
            if (team.depthChartPlayers.sg.name === playerName) {
              tmpData = this.httpNbaService.calculateThrees(team.depthChartPlayers.sg);
            }
            break;
          }
        }
      })
    return tmpData;
  }

  sortColumn(event: any) {
    switch (event.active) {
      case 'result': {
        if (event.direction === "asc") {
            this.tmpGames.sort((a: Game, b: Game) => ((a.value - this.returnPlayerAvg(a.opponentPlayer!)) < (b.value - this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
          }
         else if (event.direction === "desc") {
            this.tmpGames.sort((a: Game, b: Game) => ((a.value - this.returnPlayerAvg(a.opponentPlayer!)) > (b.value - this.returnPlayerAvg(b.opponentPlayer!)) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
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
            this.tmpGames.sort((a: Game, b: Game) => ((a.value) < (b.value) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
        } else if (event.direction === "desc") {
            this.tmpGames.sort((a: Game, b: Game) => ((a.value) > (b.value) ? -1 : 1));
            this.dataSource = new MatTableDataSource(this.tmpGames);
        }
        break;
      }
    }
  }
}
