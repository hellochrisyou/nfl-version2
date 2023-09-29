export interface Team {
  id?: string;
  currentOpponentId?: string;
  displayName?: string;
  apiTeamUrl: string;
  depthChartUrl: string;
  eventsUrl: string;
  currentWeekEventUrl: string;
  depthChartPlayers: DepthChart
  defenseVsWr1?: DefenseStats[];
  defenseVsWr2?: DefenseStats[];
  defenseVsWr3?: DefenseStats[];
  defenseVsTe?: DefenseStats[];
  allYardsGivenQb: number;
  allYardsGivenQbCounter: number;
  allYardsGivenWr1: number;
  allYardsGivenWr1Counter: number;
  allYardsGivenWr2: number;
  allYardsGivenWr2Counter: number;
  allYardsGivenWr3: number;
  allYardsGivenWr3Counter: number;
  allYardsGivenTe: number;
  allYardsGivenTeCounter: number;
}

export interface PassingPlayer {
  id?: string;
  playerUrl: string;
  name?: string;
  gamesUrl: string;
  games: PassingPlayerGame[];
  allPassingYards: number;
}

export interface PassingPlayerGame {
  opponentId?: string;
  weekNum?: number;
  gameUrl: string;
  gameStatsUrl: string;
  playerGameStatsUrl: string;
  passingYards: number;
}

export interface ReceivingPlayer {
  id?: string;
  playerUrl: string;
  name?: string;
  gamesUrl: string;
  games: ReceivingPlayerGame[];
  allReceivingYards: number;
}

export interface ReceivingPlayerGame {
  opponentId?: string;
  weekNum?: number;
  gameUrl: string;
  gameStatsUrl: string;
  playerGameStatsUrl: string;
  receivingYards: number;
}

export interface DefenseStats {
  weekNum?: string;
  yardsGiven?: number;
}

export interface DepthChart {
  qb: PassingPlayer;
  wr1: ReceivingPlayer;
  wr2: ReceivingPlayer;
  wr3: ReceivingPlayer;
  te: ReceivingPlayer;
}
