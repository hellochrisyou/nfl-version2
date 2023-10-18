import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-previous-game',
  templateUrl: './previous-game.component.html',
  styleUrls: ['./previous-game.component.scss']
})
export class PlayerPreviousGameComponent {
  currentPlayer: string = '';
  displayedColumns: string[] = ['week', 'opponent', 'value'
  ]
  dataSource: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService) {
    this.currentPlayer = data.player.name;
    this.dataSource = new MatTableDataSource(data.player.games);
  }
  returnOpponentTeamName(opponentId: string) {
    let tmpTeam = this.httpService.allTeams.find(team => {
      return (team.id === opponentId);
    })
    return tmpTeam?.displayName;
  }
}
