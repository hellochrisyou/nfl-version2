import { NbaDepthChart } from './../shared/models/interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpNbaService } from '../core/services/http-nba.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PlayerPreviousGameComponent } from '../shared/component/previous-game/previous-game.component';
import { NbaPlayer } from '../shared/models/interface';
import { PreviousGameOpponentComponent } from '../shared/component/previous-game-opponent/previous-game-opponent.component';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerPreviousGameAssistComponent } from '../shared/component/previous-game-assists/previous-game-assists.component';
import { PreviousGameOpponentAssistsComponent } from '../shared/component/previous-game-opponent-assists/previous-game-opponent-assists.component';
import { PlayerPreviousGameThreeComponent } from '../shared/component/previous-game-three/previous-game-three.component';
import { PreviousGameOpponentThreeComponent } from '../shared/component/previous-game-opponent-three/previous-game-opponent-three.component';
import { PlayerPreviousGameBlocksComponent } from '../shared/component/previous-game-blocks/previous-game-blocks.component';
import { PreviousGameOpponentBlocksComponent } from '../shared/component/previous-game-opponent-blocks/previous-game-opponent-blocks.component';
import { PreviousGameOpponentReboundComponent } from '../shared/component/previous-game-opponent-reb/previous-game-opponent-reb.component';
import { PlayerPreviousGameReboundComponent } from '../shared/component/previous-game-reb/previous-game-reb.component';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.scss']
})
export class NbaComponent implements OnInit {
  currentWeek: number = 0;

  pgDisplayedColumns: string[] = [
    'teamName',
    'averagePgPointsPerGame',
    'averagePgPointsPerGameGiven',
    'averagePgAssistsPerGame',
    'averagePgAssistsPerGameGiven',
    'averagePgThreesPerGame',
    'averagePgThreesPerGameGiven',
    'averagePgBlocksPerGame',
    'averagePgBlocksPerGameGiven',
    'averagePgRebPerGame',
    'averagePgRebPerGameGiven',
  ];
  pfDisplayedColumns: string[] = [
    'teamName',
    'averagePfPointsPerGame',
    'averagePfPointsPerGameGiven',
    'averagePfAssistsPerGame',
    'averagePfAssistsPerGameGiven',
    'averagePfThreesPerGame',
    'averagePfThreesPerGameGiven',
    'averagePfBlocksPerGame',
    'averagePfBlocksPerGameGiven',
    'averagePfRebPerGame',
    'averagePfRebPerGameGiven',];
  cDisplayedColumns: string[] = [
    'teamName',
    'averageCPointsPerGame',
    'averageCPointsPerGameGiven',
    'averageCAssistsPerGame',
    'averageCAssistsPerGameGiven',
    'averageCThreesPerGame',
    'averageCThreesPerGameGiven',
    'averageCBlocksPerGame',
    'averageCBlocksPerGameGiven',
    'averageCRebPerGame',
    'averageCRebPerGameGiven'];
  sfDisplayedColumns: string[] = [
    'teamName',
    'averageSfPointsPerGame',
    'averageSfPointsPerGameGiven',
    'averageSfAssistsPerGame',
    'averageSfAssistsPerGameGiven',
    'averageSfThreesPerGame',
    'averageSfThreesPerGameGiven',
    'averageSfBlocksPerGame',
    'averageSfBlocksPerGameGiven',
    'averageSfRebPerGame',
    'averageSfRebPerGameGiven',
  ];
  sgDisplayedColumns: string[] = [
    'teamName',
    'averageSgPointsPerGame',
    'averageSgPointsPerGameGiven',
    'averageSgAssistsPerGame',
    'averageSgAssistsPerGameGiven',
    'averageSgThreesPerGame',
    'averageSgThreesPerGameGiven',
    'averageSgBlocksPerGame',
    'averageSgBlocksPerGameGiven',
    'averageSgRebPerGame',
    'averageSgRebPerGameGiven',
  ];
  dataSource: any;
  @ViewChild(MatSort) sort: any;
  noHighLowFormGroup: FormGroup = this.fb.group({
    toggleValue: [],
  });
  toggleValue: any;
  constructor(
    public httpNbaService: HttpNbaService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.noHighLowFormGroup.valueChanges.subscribe(val => {
      if (val.toggleValue) {
        this.httpNbaService.toggleStatus = 'All Average';
      } else {
        this.httpNbaService.toggleStatus = 'No High or Low';
      }
      console.log(val);
    })
  }
  downloadPlayers() {
    this.httpNbaService.initializePgPlayers();
    this.httpNbaService.initializePfPlayers();
    this.httpNbaService.initializeCPlayers();
    this.httpNbaService.initializeSfPlayers();
    this.httpNbaService.initializeSgPlayers();
  }

  processData() {
    this.httpNbaService.initializeOpponentId();
    this.httpNbaService.initializeAverageCalculations();
    this.httpNbaService.initializeOpponentYdsGiven();
    this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams);
    this.dataSource.sort = this.sort;
  }

  openPgDialog(element: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: element.depthChartPlayers.pg,
        position: 'pg',
        teamId: element.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openPgAssistsDialog(value: any) {
    this.dialog.open(PlayerPreviousGameAssistComponent, {
      data: {
        player: value.depthChartPlayers.pg,
        position: 'pg',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openPfAssistsDialog(value: any) {
    this.dialog.open(PlayerPreviousGameAssistComponent, {
      data: {
        player: value.depthChartPlayers.pf,
        position: 'pf',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openCAssistsDialog(value: any) {
    this.dialog.open(PlayerPreviousGameAssistComponent, {
      data: {
        player: value.depthChartPlayers.c,
        position: 'c',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }


  openSfAssistsDialog(value: any) {
    this.dialog.open(PlayerPreviousGameAssistComponent, {
      data: {
        player: value.depthChartPlayers.sf,
        position: 'sf',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }


  openSgAssistsDialog(value: any) {
    this.dialog.open(PlayerPreviousGameAssistComponent, {
      data: {
        player: value.depthChartPlayers.sg,
        position: 'sg',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }


  openPgThreesDialog(value: any) {
    this.dialog.open(PlayerPreviousGameThreeComponent, {
      data: {
        player: value.depthChartPlayers.pg,
        position: 'pg',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openPfThreesDialog(value: any) {
    this.dialog.open(PlayerPreviousGameThreeComponent, {
      data: {
        player: value.depthChartPlayers.pf,
        position: 'pf',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openCThreesDialog(value: any) {
    this.dialog.open(PlayerPreviousGameThreeComponent, {
      data: {
        player: value.depthChartPlayers.c,
        position: 'c',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openSfThreesDialog(value: any) {
    this.dialog.open(PlayerPreviousGameThreeComponent, {
      data: {
        player: value.depthChartPlayers.sf,
        position: 'sf',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openSgThreesDialog(value: any) {
    this.dialog.open(PlayerPreviousGameThreeComponent, {
      data: {
        player: value.depthChartPlayers.sg,
        position: 'sg',
        teamId: value.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedPgDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'pg'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openAllowedPgAssistsDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentAssistsComponent, {
      data: {
        team: tmpOpponent,
        position: 'pg'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openAllowedPgThreesDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentThreeComponent, {
      data: {
        team: tmpOpponent,
        position: 'pg'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedPfAssistsDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentAssistsComponent, {
      data: {
        team: tmpOpponent,
        position: 'pf'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openAllowedPfThreesDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentThreeComponent, {
      data: {
        team: tmpOpponent,
        position: 'pf'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedCAssistsDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentAssistsComponent, {
      data: {
        team: tmpOpponent,
        position: 'c'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openAllowedCThreesDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentThreeComponent, {
      data: {
        team: tmpOpponent,
        position: 'c'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedSfAssistsDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentAssistsComponent, {
      data: {
        team: tmpOpponent,
        position: 'sf'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openAllowedSfThreesDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentThreeComponent, {
      data: {
        team: tmpOpponent,
        position: 'sf'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedSgAssistsDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentAssistsComponent, {
      data: {
        team: tmpOpponent,
        position: 'sf'
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openAllowedSgThreesDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentThreeComponent, {
      data: {
        team: tmpOpponent,
        position: 'sg'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openPfDialog(element: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: element.depthChartPlayers.pf,
        position: 'pf',
        teamId: element.id
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openBlocksDialog(value: any) {
    this.dialog.open(PlayerPreviousGameBlocksComponent, {
      data: {
        player: value
      },
      height: '1200px',
      width: '1200px',
    });
  }
  openDefensiveReboundDialog(value: any) {
    this.dialog.open(PlayerPreviousGameReboundComponent, {
      data: {
        player: value
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedPfDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'pf'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedBlocksDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentBlocksComponent, {
      data: {
        team: tmpOpponent,
        position: 'sg'
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedDefensivereboundsDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentReboundComponent, {
      data: {
        team: tmpOpponent,
        position: 'sg'
      },
      height: '1200px',
      width: '1200px',
    });
  }


  openCDialog(element: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: element.depthChartPlayers.c,
        position: 'c',
        teamId: element.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedCDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'c'
      },
      height: '1200px',
      width: '1200px',
    });
  }



  openSfDialog(element: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: element.depthChartPlayers.sf,
        position: 'sf',
        teamId: element.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedSfDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'sf'
      },
      height: '1200px',
      width: '1200px',
    });
  }



  openSgDialog(element: any) {
    this.dialog.open(PlayerPreviousGameComponent, {
      data: {
        player: element.depthChartPlayers.sg,
        position: 'sg',
        teamId: element.id
      },
      height: '1200px',
      width: '1200px',
    });
  }

  openAllowedSgDialog(opponentId: string) {
    let tmpOpponent = this.httpNbaService.allTeams.find(team => {
      return team.id === opponentId
    });
    this.dialog.open(PreviousGameOpponentComponent, {
      data: {
        team: tmpOpponent,
        position: 'sg'
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

  sortColumn(event: any) {
    switch (event.active) {
      case 'teamName': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => (a.date! < b.date! ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => (a.date! > b.date! ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePgPointsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allPoints / a.depthChartPlayers.pg.games.length) < (b.depthChartPlayers.pg.allPoints / b.depthChartPlayers.pg.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allPoints / a.depthChartPlayers.pg.games.length) > (b.depthChartPlayers.pg.allPoints / b.depthChartPlayers.pg.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePgBlocksPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allBlocks / a.depthChartPlayers.pg.games.length) < (b.depthChartPlayers.pg.allBlocks / b.depthChartPlayers.pg.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allBlocks / a.depthChartPlayers.pg.games.length) > (b.depthChartPlayers.pg.allBlocks / b.depthChartPlayers.pg.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePgBlocksPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allBlocks / a.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgBlocksGiven(a) < (b.depthChartPlayers.pg.allBlocks / b.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgBlocksGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allBlocks / a.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgBlocksGiven(a) > (b.depthChartPlayers.pg.allBlocks / b.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgBlocksGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }


      case 'averagePgRebPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allRebounds / a.depthChartPlayers.pg.games.length) < (b.depthChartPlayers.pg.allRebounds / b.depthChartPlayers.pg.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allRebounds / a.depthChartPlayers.pg.games.length) > (b.depthChartPlayers.pg.allRebounds / b.depthChartPlayers.pg.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePgRebPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allRebounds / a.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgDefensiveReboundsGiven(a) < (b.depthChartPlayers.pg.allRebounds / b.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgDefensiveReboundsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allRebounds / a.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgDefensiveReboundsGiven(a) > (b.depthChartPlayers.pg.allRebounds / b.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgDefensiveReboundsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }

      case 'averagePfRebPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allRebounds / a.depthChartPlayers.pf.games.length) < (b.depthChartPlayers.pf.allRebounds / b.depthChartPlayers.pf.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allRebounds / a.depthChartPlayers.pf.games.length) > (b.depthChartPlayers.pf.allRebounds / b.depthChartPlayers.pf.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePfRebPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allRebounds / a.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfDefensiveReboundsGiven(a) < (b.depthChartPlayers.pf.allRebounds / b.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfDefensiveReboundsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allRebounds / a.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfDefensiveReboundsGiven(a) > (b.depthChartPlayers.pf.allRebounds / b.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfDefensiveReboundsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }


      case 'averageCRebPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allRebounds / a.depthChartPlayers.c.games.length) < (b.depthChartPlayers.c.allRebounds / b.depthChartPlayers.c.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allRebounds / a.depthChartPlayers.c.games.length) > (b.depthChartPlayers.c.allRebounds / b.depthChartPlayers.c.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageCRebPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allRebounds / a.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCDefensiveReboundsGiven(a) < (b.depthChartPlayers.c.allRebounds / b.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCDefensiveReboundsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allRebounds / a.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCDefensiveReboundsGiven(a) > (b.depthChartPlayers.c.allRebounds / b.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCDefensiveReboundsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }


      case 'averageSfRebPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allRebounds / a.depthChartPlayers.sf.games.length) < (b.depthChartPlayers.sf.allRebounds / b.depthChartPlayers.sf.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allRebounds / a.depthChartPlayers.sf.games.length) > (b.depthChartPlayers.sf.allRebounds / b.depthChartPlayers.sf.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageSfRebPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allRebounds / a.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfDefensiveReboundsGiven(a) < (b.depthChartPlayers.sf.allRebounds / b.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfDefensiveReboundsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allRebounds / a.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfDefensiveReboundsGiven(a) > (b.depthChartPlayers.sf.allRebounds / b.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfDefensiveReboundsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }


      case 'averageSgRebPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allRebounds / a.depthChartPlayers.sg.games.length) < (b.depthChartPlayers.sg.allRebounds / b.depthChartPlayers.sg.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allRebounds / a.depthChartPlayers.sg.games.length) > (b.depthChartPlayers.sg.allRebounds / b.depthChartPlayers.sg.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageSgRebPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allRebounds / a.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgPgDefensiveReboundsGiven(a) < (b.depthChartPlayers.sg.allRebounds / b.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgDefensiveReboundsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allRebounds / a.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgPgDefensiveReboundsGiven(a) > (b.depthChartPlayers.sg.allRebounds / b.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgDefensiveReboundsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePfBlocksPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allBlocks / a.depthChartPlayers.pf.games.length) < (b.depthChartPlayers.pf.allBlocks / b.depthChartPlayers.pf.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allBlocks / a.depthChartPlayers.pf.games.length) > (b.depthChartPlayers.pf.allBlocks / b.depthChartPlayers.pf.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePfBlocksPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allBlocks / a.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfBlocksGiven(a) < (b.depthChartPlayers.pf.allBlocks / b.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfBlocksGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allBlocks / a.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfBlocksGiven(a) > (b.depthChartPlayers.pf.allBlocks / b.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfBlocksGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageCBlocksPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allBlocks / a.depthChartPlayers.c.games.length) < (b.depthChartPlayers.c.allBlocks / b.depthChartPlayers.c.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allBlocks / a.depthChartPlayers.c.games.length) > (b.depthChartPlayers.c.allBlocks / b.depthChartPlayers.c.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageCBlocksPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allBlocks / a.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCBlocksGiven(a) < (b.depthChartPlayers.c.allBlocks / b.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCBlocksGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allBlocks / a.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCBlocksGiven(a) > (b.depthChartPlayers.c.allBlocks / b.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCBlocksGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageSfBlocksPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allBlocks / a.depthChartPlayers.sf.games.length) < (b.depthChartPlayers.sf.allBlocks / b.depthChartPlayers.sf.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allBlocks / a.depthChartPlayers.sf.games.length) > (b.depthChartPlayers.sf.allBlocks / b.depthChartPlayers.sf.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageSfBlocksPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allBlocks / a.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfBlocksGiven(a) < (b.depthChartPlayers.sf.allBlocks / b.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfBlocksGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allBlocks / a.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfBlocksGiven(a) > (b.depthChartPlayers.sf.allBlocks / b.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfBlocksGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageSgBlocksPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allBlocks / a.depthChartPlayers.sg.games.length) < (b.depthChartPlayers.sg.allBlocks / b.depthChartPlayers.sg.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allBlocks / a.depthChartPlayers.sg.games.length) > (b.depthChartPlayers.sg.allBlocks / b.depthChartPlayers.sg.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageSgBlocksPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allBlocks / a.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgBlocksGiven(a) < (b.depthChartPlayers.sg.allBlocks / b.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgBlocksGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allBlocks / a.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgBlocksGiven(a) > (b.depthChartPlayers.sg.allBlocks / b.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgBlocksGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }




      case 'averagePgPointsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allPoints / a.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgPointsGiven(a) < (b.depthChartPlayers.pg.allPoints / b.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgPointsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allPoints / a.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgPointsGiven(a) > (b.depthChartPlayers.pg.allPoints / b.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgPointsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }

      case 'averagePgAssistsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allAssists / a.depthChartPlayers.pg.games.length) < (b.depthChartPlayers.pg.allAssists / b.depthChartPlayers.pg.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allAssists / a.depthChartPlayers.pg.games.length) > (b.depthChartPlayers.pg.allAssists / b.depthChartPlayers.pg.games.length) ? -1 : 1)));
        } else {
        }
        break;
      }
      case 'averagePgAssistsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allAssists / a.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgAssistsGiven(a) < (b.depthChartPlayers.pg.allAssists / b.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgAssistsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pg.allAssists / a.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgAssistsGiven(a) > (b.depthChartPlayers.pg.allAssists / b.depthChartPlayers.pg.games.length) - this.httpNbaService.returnOpponentAvgPgAssistsGiven(b) ? -1 : 1)));
        } else {
        }
        break;
      }
      case 'averagePfPointsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allPoints / a.depthChartPlayers.pf.games.length) < (b.depthChartPlayers.pf.allPoints / b.depthChartPlayers.pf.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allPoints / a.depthChartPlayers.pf.games.length) > (b.depthChartPlayers.pf.allPoints / b.depthChartPlayers.pf.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePfPointsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allPoints / a.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfPointsGiven(a) < (b.depthChartPlayers.pf.allPoints / b.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfPointsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allPoints / a.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfPointsGiven(a) > (b.depthChartPlayers.pf.allPoints / b.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfPointsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averagePfAssistsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allAssists / a.depthChartPlayers.pf.games.length) < (b.depthChartPlayers.pf.allAssists / b.depthChartPlayers.pf.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allAssists / a.depthChartPlayers.pf.games.length) > (b.depthChartPlayers.pf.allAssists / b.depthChartPlayers.pf.games.length) ? -1 : 1)));
        } else {
        }
        break;
      }
      case 'averagePfAssistsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allAssists / a.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfAssistsGiven(a) < (b.depthChartPlayers.pf.allAssists / b.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfAssistsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.pf.allAssists / a.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfAssistsGiven(a) > (b.depthChartPlayers.pf.allAssists / b.depthChartPlayers.pf.games.length) - this.httpNbaService.returnOpponentAvgPfAssistsGiven(b) ? -1 : 1)));
        } else {
        }
        break;
      }

      case 'averageCPointsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allPoints / a.depthChartPlayers.c.games.length) < (b.depthChartPlayers.c.allPoints / b.depthChartPlayers.c.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allPoints / a.depthChartPlayers.c.games.length) > (b.depthChartPlayers.c.allPoints / b.depthChartPlayers.c.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageCPointsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allPoints / a.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCPointsGiven(a) < (b.depthChartPlayers.c.allPoints / b.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCPointsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allPoints / a.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCPointsGiven(a) > (b.depthChartPlayers.c.allPoints / b.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCPointsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }

      case 'averageCAssistsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allAssists / a.depthChartPlayers.c.games.length) < (b.depthChartPlayers.c.allAssists / b.depthChartPlayers.c.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allAssists / a.depthChartPlayers.c.games.length) > (b.depthChartPlayers.c.allAssists / b.depthChartPlayers.c.games.length) ? -1 : 1)));
        } else {
        }
        break;
      }
      case 'averageCAssistsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allAssists / a.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCAssistsGiven(a) < (b.depthChartPlayers.c.allAssists / b.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCAssistsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.c.allAssists / a.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCAssistsGiven(a) > (b.depthChartPlayers.c.allAssists / b.depthChartPlayers.c.games.length) - this.httpNbaService.returnOpponentAvgCAssistsGiven(b) ? -1 : 1)));
        } else {
        }
        break;
      }

      case 'averageSfPointsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allPoints / a.depthChartPlayers.sf.games.length) < (b.depthChartPlayers.sf.allPoints / b.depthChartPlayers.sf.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allPoints / a.depthChartPlayers.sf.games.length) > (b.depthChartPlayers.sf.allPoints / b.depthChartPlayers.sf.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageSfPointsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allPoints / a.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfPointsGiven(a) < (b.depthChartPlayers.sf.allPoints / b.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfPointsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allPoints / a.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfPointsGiven(a) > (b.depthChartPlayers.sf.allPoints / b.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfPointsGiven(b) ? -1 : 1)));
        } else {

        }
        break;
      }

      case 'averageSfAssistsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allAssists / a.depthChartPlayers.sf.games.length) < (b.depthChartPlayers.sf.allAssists / b.depthChartPlayers.sf.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allAssists / a.depthChartPlayers.sf.games.length) > (b.depthChartPlayers.sf.allAssists / b.depthChartPlayers.sf.games.length) ? -1 : 1)));
        } else {
        }
        break;
      }
      case 'averageSfAssistsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allAssists / a.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfAssistsGiven(a) < (b.depthChartPlayers.sf.allAssists / b.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfAssistsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sf.allAssists / a.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfAssistsGiven(a) > (b.depthChartPlayers.sf.allAssists / b.depthChartPlayers.sf.games.length) - this.httpNbaService.returnOpponentAvgSfAssistsGiven(b) ? -1 : 1)));
        } else {
        }
        break;
      }

      case 'averageSgPointsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allPoints / a.depthChartPlayers.sg.games.length) < (b.depthChartPlayers.sg.allPoints / b.depthChartPlayers.sg.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allPoints / a.depthChartPlayers.sg.games.length) > (b.depthChartPlayers.sg.allPoints / b.depthChartPlayers.sg.games.length) ? -1 : 1)));
        } else {

        }
        break;
      }
      case 'averageSgPointsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allPoints / a.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgPointsGiven(a) < (b.depthChartPlayers.sg.allPoints / b.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgPointsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allPoints / a.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgPointsGiven(a) > (b.depthChartPlayers.sg.allPoints / b.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgPointsGiven(b) ? -1 : 1)));        } else {

        }
        break;
      }
      case 'averageSgAssistsPerGame': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allAssists / a.depthChartPlayers.sg.games.length) < (b.depthChartPlayers.sg.allAssists / b.depthChartPlayers.sg.games.length) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allAssists / a.depthChartPlayers.sg.games.length) > (b.depthChartPlayers.sg.allAssists / b.depthChartPlayers.sg.games.length) ? -1 : 1)));
        } else {
        }
        break;
      }
      case 'averageSgAssistsPerGameGiven': {
        if (event.direction === "asc") {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allAssists / a.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgAssistsGiven(a) < (b.depthChartPlayers.sg.allAssists / b.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgAssistsGiven(b) ? -1 : 1)));
        } else if (event.direction === 'desc') {
          this.dataSource = new MatTableDataSource(this.httpNbaService.allTeams.sort((a, b) => ((a.depthChartPlayers.sg.allAssists / a.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgAssistsGiven(a) > (b.depthChartPlayers.sg.allAssists / b.depthChartPlayers.sg.games.length) - this.httpNbaService.returnOpponentAvgSgAssistsGiven(b) ? -1 : 1)));
        } else {
        }
        break;
      }
    }
  }
}
