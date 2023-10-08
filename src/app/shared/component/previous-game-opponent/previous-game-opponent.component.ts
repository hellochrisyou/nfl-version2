import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/core/services/http.service';
import { Game } from '../../models/interface';

@Component({
  selector: 'app-previous-game-opponent',
  templateUrl: './previous-game-opponent.component.html',
  styleUrls: ['./previous-game-opponent.component.scss']
})
export class PreviousGameOpponentComponent {
  currentTeam: string = '';
  displayedColumns: string[] = ['week', 'opponent', 'value'
  ]
  dataSource: any;
  currentRole: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService) {
    console.log("🚀 ~ data:", data)
    this.currentTeam = data.team.displayName;
    switch (data.position) {
      case 'qb':  {
        this.currentRole = 'QB';
        data.team.opponentGamesQb.sort((a: Game, b: Game) => ((a.weekNum < b.weekNum? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesQb);
        break;
      }
      case 'rb1':  {
        this.currentRole = 'RB1';
        data.team.opponentGamesRb1.sort((a: Game, b: Game) => ((a.weekNum < b.weekNum? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesRb1);
        break;
      }
      case 'rb2':  {
        this.currentRole = 'RB2';
        data.team.opponentGamesRb2.sort((a: Game, b: Game) => ((a.weekNum < b.weekNum? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesRb2);
        break;
      }
      case 'wr1':  {
        this.currentRole = 'WR1';
        data.team.opponentGamesWr1.sort((a: Game, b: Game) => ((a.weekNum < b.weekNum? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesWr1);
        break;
      }
      case 'wr2':  {
        this.currentRole = 'WR2';
        data.team.opponentGamesWr2.sort((a: Game, b: Game) => ((a.weekNum < b.weekNum? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesWr2);
        break;
      }
      case 'wr3':  {
        this.currentRole = 'WR3';
        data.team.opponentGamesWr3.sort((a: Game, b: Game) => ((a.weekNum < b.weekNum? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesWr3);
        break;
      }
      case 'te':  {
        this.currentRole = 'TE';
        data.team.opponentGamesTe.sort((a: Game, b: Game) => ((a.weekNum < b.weekNum? -1 : 1)));
        this.dataSource = new MatTableDataSource(data.team.opponentGamesTe);
        break;
      }
    }
  }
  returnOpponentTeamName(opponentId: string) {
    let tmpTeam = this.httpService.allTeams.find(team => {
      return (team.id === opponentId);
    })
    return tmpTeam?.displayName;
  }
}
