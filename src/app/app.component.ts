import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { HttpService } from './core/services/http.service';
import { PlayerPreviousGameComponent } from './shared/component/previous-game/previous-game.component';
import { TEAM_ID_NAME } from './shared/const/const';
import { PreviousGameOpponentComponent } from './shared/component/previous-game-opponent/previous-game-opponent.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PassingPlayer, ReceivingPlayer, RushingPlayer } from './shared/models/interface';
import { DateService } from './core/services/date';

interface Team {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nfl-version2';
  currentWeek: number = 0;
  qbDisplayedColumns: string[] = ['teamName',
    'averagePassYardsPerGame',
    'averagePassYardsPerGameGiven'];
  rb1DisplayedColumns: string[] = ['teamName',
    'averageRb1YardsPerGame',
    'averageRb1YardsPerGameGiven',
    'averageRb1RecYardsPerGame',
    'averageRb1RecYardsPerGameGiven',
  ];
  rb2DisplayedColumns: string[] = ['teamName',
    'averageRb2YardsPerGame',
    'averageRb2YardsPerGameGiven',
    'averageRb2RecYardsPerGame',
    'averageRb2RecYardsPerGameGiven',
  ];
  wr1DisplayedColumns: string[] = ['teamName',
    'averageWr1YardsPerGame',
    'averageWr1YardsPerGameGiven',
  ];
  wr2DisplayedColumns: string[] = ['teamName',
    'averageWr2YardsPerGame',
    'averageWr2YardsPerGameGiven',
  ];
  wr3DisplayedColumns: string[] = ['teamName',
    'averageWr3YardsPerGame',
    'averageWr3YardsPerGameGiven',
  ];
  teDisplayedColumns: string[] = ['teamName',
    'averageTeYardsPerGame',
    'averageTeYardsPerGameGiven',
  ];

  dataSource: any;
  @ViewChild(MatSort) sort: any;
  noHighLowFormGroup: FormGroup = this.fb.group({
    toggleValue: [],
  });
  toggleValue: any;

  constructor(
    private dateService: DateService,
    public httpService: HttpService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.noHighLowFormGroup.valueChanges.subscribe(val => {
      if (val.toggleValue) {
        this.httpService.toggleStatus = 'All Average';
      } else {
        this.httpService.toggleStatus = 'No High or Low';
      }
      console.log(val);
    })
    this.httpService.initializeDepthChart();
    this.currentWeek = this.dateService.currentWeek;
  }

  checkInjury(status: string) {
    switch (status) {
      case 'Questionable': {
        return 'bg-grey';
      }
      case 'Out': {
        return 'bg-red';
      }
      case 'Doubtful': {
        return 'bg-yellow';
      }
      case 'Injured Reserve': {
        return 'bg-orange';
      }
    }
    return '';
  }

  openAllowedQbDialog(element: any) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === element.currentOpponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'qb'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedRb1RecDialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'rb1Rec',
        type: 'rbRec'

      },
      height: '1200px',
      width: '1200px',
    });
  }
  openAllowedRb2RecDialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'rb2Rec',
        type: 'rbRec'
      },
      height: '1200px',
      width: '1200px',
    });
  }


  openAllowedRb1Dialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'rb1'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedRb2Dialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'rb2'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedWr1Dialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'wr1'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedWr2Dialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'wr2'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openAllowedWr3Dialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'wr3'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedTeDialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'te'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openQbDialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.qb,
        position: 'qb',
        teamId: team.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openRb1Dialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.rb1,
        position: 'rb1',
        teamId: team.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openRb2Dialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.rb2,
        position: 'rb2',
        teamId: team.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openWr1Dialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.wr1,
        position: 'wr1',
        teamId: team.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openWr2Dialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.wr2,
        position: 'wr2',
        teamId: team.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openWr3Dialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.wr3,
        position: 'wr3',
        teamId: team.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openTeDialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.te,
        position: 'te',
        teamId: team.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openRbRec1Dialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.rb1,
        position: 'rb1Rec',
        teamId: team.id,
        type: 'rbRec'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openRbRec2Dialog(team: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: team.depthChartPlayers.rb2,
        position: 'rb2Rec',
        teamId: team.id,
        type: 'rbRec'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  downloadAllPositions() {
    this.httpService.initializeQbPlayers();
    this.httpService.initializeRb1Players();
    this.httpService.initializeRb2Players();
    this.httpService.initializeWr1Players();
    this.httpService.initializeWr2Players();
    this.httpService.initializeWr3Players();
    this.httpService.initializeTePlayers();
  }
  finishInitialization1() {
    this.httpService.initializeOpponentId();
  }
  finishInitialization2() {
    this.httpService.initializeAverageCalculations();
    this.httpService.initializeOpponentYdsGiven();
    this.dataSource = new MatTableDataSource(this.httpService.allTeams);
    this.dataSource.sort = this.sort;
  }

  sortColumn(event: any) {
    switch (event.active) {
      case 'averagePassYardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.qb.allPassingYards / a.depthChartPlayers.qb.games.length) < (b.depthChartPlayers.qb.allPassingYards / b.depthChartPlayers.qb.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.qb.allPassingYards / a.depthChartPlayers.qb.games.length) > (b.depthChartPlayers.qb.allPassingYards / b.depthChartPlayers.qb.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePassYardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.qb.allPassingYards / a.depthChartPlayers.qb.games.length) - this.httpService.returnOpponentAvgPassYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.qb.allPassingYards / b.depthChartPlayers.qb.games.length) - this.httpService.returnOpponentAvgPassYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.qb.allPassingYards / a.depthChartPlayers.qb.games.length) - this.httpService.returnOpponentAvgPassYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.qb.allPassingYards / b.depthChartPlayers.qb.games.length) - this.httpService.returnOpponentAvgPassYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageRb1YardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allRushingYards / a.depthChartPlayers.rb1.games.length) < (b.depthChartPlayers.rb1.allRushingYards / b.depthChartPlayers.rb1.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allRushingYards / a.depthChartPlayers.rb1.games.length) > (b.depthChartPlayers.rb1.allRushingYards / b.depthChartPlayers.rb1.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageRb1YardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allRushingYards / a.depthChartPlayers.rb1.games.length) - this.httpService.returnOpponentAvgRb1RushYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.rb1.allRushingYards / b.depthChartPlayers.rb1.games.length) - this.httpService.returnOpponentAvgRb1RushYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allRushingYards / a.depthChartPlayers.rb1.games.length) - this.httpService.returnOpponentAvgRb1RushYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.rb1.allRushingYards / b.depthChartPlayers.rb1.games.length) - this.httpService.returnOpponentAvgRb1RushYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageRb1RecYardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allReceivingYards / a.depthChartPlayers.rb1.games.length) < (b.depthChartPlayers.rb1.allReceivingYards / b.depthChartPlayers.rb1.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allReceivingYards / a.depthChartPlayers.rb1.games.length) > (b.depthChartPlayers.rb1.allReceivingYards / b.depthChartPlayers.rb1.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageRb1RecYardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allReceivingYards / a.depthChartPlayers.rb1.games.length) - this.httpService.returnOpponentAvgRb1RecYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.rb1.allReceivingYards / b.depthChartPlayers.rb1.games.length) - this.httpService.returnOpponentAvgRb1RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allReceivingYards / a.depthChartPlayers.rb1.games.length) - this.httpService.returnOpponentAvgRb1RecYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.rb1.allReceivingYards / b.depthChartPlayers.rb1.games.length) - this.httpService.returnOpponentAvgRb1RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageRb2RecYardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allReceivingYards / a.depthChartPlayers.rb2.games.length) < (b.depthChartPlayers.rb2.allReceivingYards / b.depthChartPlayers.rb2.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allReceivingYards / a.depthChartPlayers.rb2.games.length) > (b.depthChartPlayers.rb2.allReceivingYards / b.depthChartPlayers.rb2.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageRb2RecYardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allReceivingYards / a.depthChartPlayers.rb2.games.length) - this.httpService.returnOpponentAvgRb2RecYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.rb2.allReceivingYards / b.depthChartPlayers.rb2.games.length) - this.httpService.returnOpponentAvgRb2RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allReceivingYards / a.depthChartPlayers.rb2.games.length) - this.httpService.returnOpponentAvgRb2RecYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.rb2.allReceivingYards / b.depthChartPlayers.rb2.games.length) - this.httpService.returnOpponentAvgRb2RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageRb2YardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allRushingYards / a.depthChartPlayers.rb2.games.length) < (b.depthChartPlayers.rb2.allRushingYards / b.depthChartPlayers.rb2.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allRushingYards / a.depthChartPlayers.rb2.games.length) > (b.depthChartPlayers.rb2.allRushingYards / b.depthChartPlayers.rb2.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageRb2YardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allRushingYards / a.depthChartPlayers.rb2.games.length) - this.httpService.returnOpponentAvgRb2RushYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.rb2.allRushingYards / b.depthChartPlayers.rb2.games.length) - this.httpService.returnOpponentAvgRb2RushYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allRushingYards / a.depthChartPlayers.rb2.games.length) - this.httpService.returnOpponentAvgRb2RushYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.rb2.allRushingYards / b.depthChartPlayers.rb2.games.length) - this.httpService.returnOpponentAvgRb2RushYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageWr1YardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr1.allReceivingYards / a.depthChartPlayers.wr1.games.length) < (b.depthChartPlayers.wr1.allReceivingYards / b.depthChartPlayers.wr1.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr1.allReceivingYards / a.depthChartPlayers.wr1.games.length) > (b.depthChartPlayers.wr1.allReceivingYards / b.depthChartPlayers.wr1.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageWr1YardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr1.allReceivingYards / a.depthChartPlayers.wr1.games.length) - this.httpService.returnOpponentAvgWr1RecYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.wr1.allReceivingYards / b.depthChartPlayers.wr1.games.length) - this.httpService.returnOpponentAvgWr1RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr1.allReceivingYards / a.depthChartPlayers.wr1.games.length) - this.httpService.returnOpponentAvgWr1RecYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.wr1.allReceivingYards / b.depthChartPlayers.wr1.games.length) - this.httpService.returnOpponentAvgWr1RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageWr2YardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr2.allReceivingYards / a.depthChartPlayers.wr2.games.length) < (b.depthChartPlayers.wr2.allReceivingYards / b.depthChartPlayers.wr2.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr2.allReceivingYards / a.depthChartPlayers.wr2.games.length) > (b.depthChartPlayers.wr2.allReceivingYards / b.depthChartPlayers.wr2.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageWr2YardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr2.allReceivingYards / a.depthChartPlayers.wr2.games.length) - this.httpService.returnOpponentAvgWr2RecYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.wr2.allReceivingYards / b.depthChartPlayers.wr2.games.length) - this.httpService.returnOpponentAvgWr2RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr2.allReceivingYards / a.depthChartPlayers.wr2.games.length) - this.httpService.returnOpponentAvgWr2RecYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.wr2.allReceivingYards / b.depthChartPlayers.wr2.games.length) - this.httpService.returnOpponentAvgWr2RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageWr3YardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr3.allReceivingYards / a.depthChartPlayers.wr3.games.length) < (b.depthChartPlayers.wr3.allReceivingYards / b.depthChartPlayers.wr3.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr3.allReceivingYards / a.depthChartPlayers.wr3.games.length) > (b.depthChartPlayers.wr3.allReceivingYards / b.depthChartPlayers.wr3.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageWr3YardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr3.allReceivingYards / a.depthChartPlayers.wr3.games.length) - this.httpService.returnOpponentAvgWr3RecYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.wr3.allReceivingYards / b.depthChartPlayers.wr3.games.length) - this.httpService.returnOpponentAvgWr3RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr3.allReceivingYards / a.depthChartPlayers.wr3.games.length) - this.httpService.returnOpponentAvgWr3RecYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.wr3.allReceivingYards / b.depthChartPlayers.wr3.games.length) - this.httpService.returnOpponentAvgWr3RecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageTeYardsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.te.allReceivingYards / a.depthChartPlayers.te.games.length) < (b.depthChartPlayers.te.allReceivingYards / b.depthChartPlayers.te.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.te.allReceivingYards / a.depthChartPlayers.te.games.length) > (b.depthChartPlayers.te.allReceivingYards / b.depthChartPlayers.te.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageTeYardsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.te.allReceivingYards / a.depthChartPlayers.te.games.length) - this.httpService.returnOpponentAvgTeRecYardsGiven(a.currentOpponentId!) < (b.depthChartPlayers.te.allReceivingYards / b.depthChartPlayers.te.games.length) - this.httpService.returnOpponentAvgTeRecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.te.allReceivingYards / a.depthChartPlayers.te.games.length) - this.httpService.returnOpponentAvgTeRecYardsGiven(a.currentOpponentId!) > (b.depthChartPlayers.te.allReceivingYards / b.depthChartPlayers.te.games.length) - this.httpService.returnOpponentAvgTeRecYardsGiven(b.currentOpponentId!) ? -1 : 1)));
        } else {

        }
        break;
      }
    }
  }

}
