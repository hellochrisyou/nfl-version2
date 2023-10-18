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

  displayedColumns: string[] = ['teamName',
    'averagePassYardsPerGame',
    'averagePassYardsPerGameGiven',
    'averageRb1YardsPerGame',
    'averageRb1YardsPerGameGiven',
    'averageRb2YardsPerGame',
    'averageRb2YardsPerGameGiven',
    'averageWr1YardsPerGame',
    'averageWr1YardsPerGameGiven',
    'averageWr2YardsPerGame',
    'averageWr2YardsPerGameGiven',
    'averageWr3YardsPerGame',
    'averageWr3YardsPerGameGiven',
    'averageTeYardsPerGame',
    'averageTeYardsPerGameGiven'
  ];
  dataSource: any;
  @ViewChild(MatSort) sort: any;
  noHighLowFormGroup: FormGroup = this.fb.group({
    toggleValue: [],
  });
  toggleStatus = 'No High or Low';
  toggleValue: any;

  constructor(
    private httpService: HttpService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.noHighLowFormGroup.valueChanges.subscribe(val => {
      if (val.toggleValue) {
        this.toggleStatus = 'All Average';
      } else {
        this.toggleStatus = 'No High or Low';
      }
      console.log(val);
    })
    this.httpService.initializeDepthChart();
  }

  checkInjury(status: string) {
    if (status === 'Questionable') {
      return 'bg-grey';
    } else if (status === 'Out') {
      return 'bg-red';
    } else if (status === '') {
      return ''
    } else {
      return 'bg-orange';
    }
  }

  openAllowedQbDialog(opponentId: string) {
    let tmpOpponent = this.httpService.allTeams.find(team => {
      return team.id === opponentId
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
  openQbDialog(qb: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: qb
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openRb1Dialog(rb1: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: rb1
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openRb2Dialog(rb2: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: rb2
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openWr1Dialog(wr1: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: wr1
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openWr2Dialog(wr2: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: wr2
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openWr3Dialog(wr3: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: wr3
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openTeDialog(te: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: te
      },
      height: '1200px',
      width: '1200px',
    });
  }
  sliceHighLow(value: any[]) {
    value.sort((a, b) => a - b);
    value = value.slice(1, value.length - 1);
    return value;
  }
  calculateQb(value: PassingPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allPassingYards / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpYards = 0;
      tmpData.forEach(item => {
        tmpYards += item.value;
      });
      return tmpYards/tmpData.length;
    }
  }

  calculateRb(value: RushingPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allRushingYards / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpYards = 0;
      tmpData.forEach(item => {
        tmpYards += item.value;
      });
      return tmpYards/tmpData.length;
    }
  }

  calculateReceiving(value: ReceivingPlayer): number {
    if (this.toggleStatus === 'No High or Low') {
      return value.allReceivingYards / value.games.length;
    } else {
      let tmpData = this.sliceHighLow(value.games);
      let tmpYards = 0;
      tmpData.forEach(item => {
        tmpYards += item.value;
      });
      return tmpYards/tmpData.length;
    }
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
  finishInitialization() {
    this.httpService.initializeOpponentId();
    this.httpService.initializeAverageCalculations();
    this.httpService.initializeOpponentYdsGiven();
    this.dataSource = new MatTableDataSource(this.httpService.allTeams);
    this.dataSource.sort = this.sort;
  }

  returnOpponentAvgPassYardsGiven(element: any) {
    if (element.currentOpponentId !== '') {
      let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
      if (this.httpService.allTeams[opponentIndex] === undefined) {
        console.log("🚀 ~ this.httpService.allTeams[opponentIndex]:", this.httpService.allTeams[opponentIndex])
      }
      if (this.toggleStatus === 'No High or Low') {
        return this.httpService.allTeams[opponentIndex].allYardsGivenQb / this.httpService.allTeams[opponentIndex].allYardsGivenQbCounter;
      } else {
        let tmpData = this.sliceHighLow(this.httpService.allTeams[opponentIndex].opponentGamesQb);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards/tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgRb1RushYardsGiven(element: any) {
    if (element.currentOpponentId !== '') {
      let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
      if (this.toggleStatus === 'No High or Low') {
        return this.httpService.allTeams[opponentIndex].allYardsGivenRb1 / this.httpService.allTeams[opponentIndex].allYardsGivenRb1Counter;
      } else {
        let tmpData = this.sliceHighLow(this.httpService.allTeams[opponentIndex].opponentGamesRb1);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards/tmpData.length;
      }
    } else {
      return 0;
    }
  }
  returnOpponentAvgRb2RushYardsGiven(element: any) {
    if (element.currentOpponentId !== '') {
      let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
      if (this.toggleStatus === 'No High or Low') {
        return this.httpService.allTeams[opponentIndex].allYardsGivenRb2 / this.httpService.allTeams[opponentIndex].allYardsGivenRb2Counter;
      } else {
        let tmpData = this.sliceHighLow(this.httpService.allTeams[opponentIndex].opponentGamesRb2);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards/tmpData.length;
      }
    }
    else {
      return 0;
    }
  }
  returnOpponentAvgWr1RecYardsGiven(element: any) {
    if (element.currentOpponentId !== '') {
      let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
      if (this.toggleStatus === 'No High or Low') {
        return this.httpService.allTeams[opponentIndex].allYardsGivenWr1 / this.httpService.allTeams[opponentIndex].allYardsGivenWr1Counter;
      } else {
        let tmpData = this.sliceHighLow(this.httpService.allTeams[opponentIndex].opponentGamesWr1);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards/tmpData.length;
      }
    }
    else {
      return 0;
    }
  }
  returnOpponentAvgWr2RecYardsGiven(element: any) {
    if (element.currentOpponentId !== '') {
      let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
      if (this.toggleStatus === 'No High or Low') {
        return this.httpService.allTeams[opponentIndex].allYardsGivenWr2 / this.httpService.allTeams[opponentIndex].allYardsGivenWr2Counter;
      } else {
        let tmpData = this.sliceHighLow(this.httpService.allTeams[opponentIndex].opponentGamesWr2);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards/tmpData.length;
      }    }
    else {
      return 0;
    }
  }
  returnOpponentAvgWr3RecYardsGiven(element: any) {
    if (element.currentOpponentId !== '') {
      let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
      if (this.toggleStatus === 'No High or Low') {
        return this.httpService.allTeams[opponentIndex].allYardsGivenWr3 / this.httpService.allTeams[opponentIndex].allYardsGivenWr3Counter;
      } else {
        let tmpData = this.sliceHighLow(this.httpService.allTeams[opponentIndex].opponentGamesWr3);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards/tmpData.length;
      }
    }
    else {
      return 0;
    }
  }
  returnOpponentAvgTeRecYardsGiven(element: any) {
    if (element.currentOpponentId !== '') {
      let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
      if (this.toggleStatus === 'No High or Low') {
        return this.httpService.allTeams[opponentIndex].allYardsGivenTe / this.httpService.allTeams[opponentIndex].allYardsGivenTeCounter;
      } else {
        let tmpData = this.sliceHighLow(this.httpService.allTeams[opponentIndex].opponentGamesTe);
        let tmpYards = 0;
        tmpData.forEach(item => {
          tmpYards += item.value;
        });
        return tmpYards/tmpData.length;
      }
    }
    else {
      return 0;
    }
  }
  returnOpponentName(opponentId: string) {
    if (opponentId !== '') {
      let tmpTeam = this.httpService.allTeams.find(team => {
        return (team.id === opponentId);
      })
      return tmpTeam?.displayName;
    } else {
      return 'BYE'
    }
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
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.qb.allPassingYards / a.depthChartPlayers.qb.games.length) - this.returnOpponentAvgPassYardsGiven(a) < (b.depthChartPlayers.qb.allPassingYards / b.depthChartPlayers.qb.games.length) - this.returnOpponentAvgPassYardsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.qb.allPassingYards / a.depthChartPlayers.qb.games.length) - this.returnOpponentAvgPassYardsGiven(a) > (b.depthChartPlayers.qb.allPassingYards / b.depthChartPlayers.qb.games.length) - this.returnOpponentAvgPassYardsGiven(b) ? -1 : 1)));
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
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allRushingYards / a.depthChartPlayers.rb1.games.length) - this.returnOpponentAvgRb1RushYardsGiven(a) < (b.depthChartPlayers.rb1.allRushingYards / b.depthChartPlayers.rb1.games.length) - this.returnOpponentAvgRb1RushYardsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb1.allRushingYards / a.depthChartPlayers.rb1.games.length) - this.returnOpponentAvgRb1RushYardsGiven(a) > (b.depthChartPlayers.rb1.allRushingYards / b.depthChartPlayers.rb1.games.length) - this.returnOpponentAvgRb1RushYardsGiven(b) ? -1 : 1)));
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
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allRushingYards / a.depthChartPlayers.rb2.games.length) - this.returnOpponentAvgRb2RushYardsGiven(a) < (b.depthChartPlayers.rb2.allRushingYards / b.depthChartPlayers.rb2.games.length) - this.returnOpponentAvgRb2RushYardsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.rb2.allRushingYards / a.depthChartPlayers.rb2.games.length) - this.returnOpponentAvgRb2RushYardsGiven(a) > (b.depthChartPlayers.rb2.allRushingYards / b.depthChartPlayers.rb2.games.length) - this.returnOpponentAvgRb2RushYardsGiven(b) ? -1 : 1)));
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
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr1.allReceivingYards / a.depthChartPlayers.wr1.games.length) - this.returnOpponentAvgWr1RecYardsGiven(a) < (b.depthChartPlayers.wr1.allReceivingYards / b.depthChartPlayers.wr1.games.length) - this.returnOpponentAvgWr1RecYardsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr1.allReceivingYards / a.depthChartPlayers.wr1.games.length) - this.returnOpponentAvgWr1RecYardsGiven(a) > (b.depthChartPlayers.wr1.allReceivingYards / b.depthChartPlayers.wr1.games.length) - this.returnOpponentAvgWr1RecYardsGiven(b) ? -1 : 1)));
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
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr2.allReceivingYards / a.depthChartPlayers.wr2.games.length) - this.returnOpponentAvgWr2RecYardsGiven(a) < (b.depthChartPlayers.wr2.allReceivingYards / b.depthChartPlayers.wr2.games.length) - this.returnOpponentAvgWr2RecYardsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr2.allReceivingYards / a.depthChartPlayers.wr2.games.length) - this.returnOpponentAvgWr2RecYardsGiven(a) > (b.depthChartPlayers.wr2.allReceivingYards / b.depthChartPlayers.wr2.games.length) - this.returnOpponentAvgWr2RecYardsGiven(b) ? -1 : 1)));
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
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr3.allReceivingYards / a.depthChartPlayers.wr3.games.length) - this.returnOpponentAvgWr3RecYardsGiven(a) < (b.depthChartPlayers.wr3.allReceivingYards / b.depthChartPlayers.wr3.games.length) - this.returnOpponentAvgWr3RecYardsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.wr3.allReceivingYards / a.depthChartPlayers.wr3.games.length) - this.returnOpponentAvgWr3RecYardsGiven(a) > (b.depthChartPlayers.wr3.allReceivingYards / b.depthChartPlayers.wr3.games.length) - this.returnOpponentAvgWr3RecYardsGiven(b) ? -1 : 1)));
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
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.te.allReceivingYards / a.depthChartPlayers.te.games.length) - this.returnOpponentAvgTeRecYardsGiven(a) < (b.depthChartPlayers.te.allReceivingYards / b.depthChartPlayers.te.games.length) - this.returnOpponentAvgTeRecYardsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpService.allTeams.sort((a, b) => ((a.depthChartPlayers.te.allReceivingYards / a.depthChartPlayers.te.games.length) - this.returnOpponentAvgTeRecYardsGiven(a) > (b.depthChartPlayers.te.allReceivingYards / b.depthChartPlayers.te.games.length) - this.returnOpponentAvgTeRecYardsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }
    }
  }

}
