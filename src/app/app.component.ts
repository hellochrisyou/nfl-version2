import { DateService } from './core/services/date';
import { HttpService } from './core/services/http.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { TEAM_ID_NAME } from './shared/const/const';
import { MatSort } from '@angular/material/sort';

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

  displayedColumns: string[] = ['teamName', 'averagePassYardsPerGame', 'averagePassYardsPerGameGiven', 'averageWr1YardsPerGame', 'averageWr1YardsPerGameGiven', 'averageWr2YardsPerGame', 'averageWr2YardsPerGameGiven', 'averageWr3YardsPerGame', 'averageWr3YardsPerGameGiven', 'averageTeYardsPerGame', 'averageTeYardsPerGameGiven', 'opponentName'];
  dataSource: any;
  dataSource2: any;
  @ViewChild(MatSort) sort: any;

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
    private dateService: DateService
  ) {

  }
  ngOnInit(): void {
  }

  // setNewTeam() {
  //   let tmpData = this.httpService.allTeams.forEach(team => {
  //     if (team.currentOpponentId === this.selectTeamForm.get('selectTeamCtrl')?.value) {
  //       this.dataSource = new MatTableDataSource<any>(team);
  //     }
  //   })
  // }

  downloadPart1() {
    this.httpService.initializeDepthChart();
  }
  downloadPart2() {
    this.httpService.initializeQbPlayers();
  }
  downloadPart3() {
    this.httpService.initializeWr1Players();
  }
  downloadPart4() {
    this.httpService.initializeWr2Players();
  }
  downloadPart5() {
    this.httpService.initializeWr3Players();
  }
  downloadPart6() {
    this.httpService.initializeTePlayers();
  }
  downloadPart7() {
    this.httpService.initializeOpponentId();
  }
  downloadPart8() {
    this.httpService.initializeAverageCalculations();
  }
  downloadPart9() {
    this.httpService.initializeOpponentYdsGiven();
  }

  returnOpponentAvgPassYardsGiven(element: any) {
    let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
    return this.httpService.allTeams[opponentIndex].allYardsGivenQb / this.httpService.allTeams[opponentIndex].allYardsGivenQbCounter;
  }
  returnOpponentAvgWr1RecYardsGiven(element: any) {
    let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
    return this.httpService.allTeams[opponentIndex].allYardsGivenWr1 / this.httpService.allTeams[opponentIndex].allYardsGivenWr1Counter;
  }
  returnOpponentAvgWr2RecYardsGiven(element: any) {
    let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
    return this.httpService.allTeams[opponentIndex].allYardsGivenWr2 / this.httpService.allTeams[opponentIndex].allYardsGivenWr2Counter;
  }
  returnOpponentAvgWr3RecYardsGiven(element: any) {
    let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
    return this.httpService.allTeams[opponentIndex].allYardsGivenWr3 / this.httpService.allTeams[opponentIndex].allYardsGivenWr3Counter;
  }
  returnOpponentAvgTeRecYardsGiven(element: any) {
    let opponentIndex = this.httpService.findTeamIndex(element.currentOpponentId);
    return this.httpService.allTeams[opponentIndex].allYardsGivenTe / this.httpService.allTeams[opponentIndex].allYardsGivenTeCounter;
  }
  returnOpponentName(opponentId: string) {
    let tmpIndex = +opponentId -1;
    return TEAM_ID_NAME[tmpIndex];
  }

  setTableData() {
    console.log("🚀 ~ this.httpService.allTeams:", this.httpService.allTeams)
    this.dataSource = new MatTableDataSource(this.httpService.allTeams);
    this.dataSource.sort = this.sort;
  }

}
