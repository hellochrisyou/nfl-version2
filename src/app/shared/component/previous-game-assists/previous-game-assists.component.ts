import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpNbaService } from 'src/app/core/services/http-nba.service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-previous-game',
  templateUrl: './previous-game-assists.component.html',
  styleUrls: ['./previous-game-assists.component.scss']
})
export class PlayerPreviousGameAssistComponent {
  currentPlayer: string = '';
  displayedColumns: string[] = ['date', 'opponent','opponent-avg', 'value', 'result',
  ]
  dataSource: any;
  currentRole: string = '';
  currentTeamId: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpNbaService: HttpNbaService
  ) {
    this.currentPlayer = data.player.name;
    console.log("🚀 ~ data:", data)
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
  returnPlayerAvg(playerName?: string): number {
    let tmpName = '';
    if (playerName) {
      tmpName = playerName
    } else {
      tmpName = this.data.player.name;
    }
    let tmpData = -1;
      this.httpNbaService.allTeams.forEach(team => {
        switch (this.currentRole) {
          case 'PG': {
            if (team.depthChartPlayers.pg.name === tmpName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.pg);
            }
            break;
          }
          case 'PF': {
            if (team.depthChartPlayers.pf.name === tmpName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.pf);
            }
            break;
          }
          case 'C': {
            if (team.depthChartPlayers.c.name === tmpName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.c);
            }
            break;
          }
          case 'SF': {
            if (team.depthChartPlayers.sf.name === tmpName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.sf);
            }
            break;
          }
          case 'SG': {
            if (team.depthChartPlayers.sg.name === tmpName) {
              tmpData = this.httpNbaService.calculateAssists(team.depthChartPlayers.sg);
            }
            break;
          }
        }
      })
    return tmpData;
  }
}
