export interface TeamKeyValue {
  teamId: string,
  teamName: string
}

export interface Team {
  id?: string;
  currentOpponentId?: string;
  currentAwayHome?: string;
  displayName?: string;
  apiTeamUrl: string;
  depthChartUrl: string;
  eventsUrl: string;
  currentWeekEventUrl: string;
  depthChartPlayers: DepthChart
  defenseVsRb1?: DefenseStats[];
  defenseVsRb2?: DefenseStats[];
  defenseVsWr1?: DefenseStats[];
  defenseVsWr2?: DefenseStats[];
  defenseVsWr3?: DefenseStats[];
  defenseVsTe?: DefenseStats[];
  allYardsGivenQb: number;
  allYardsGivenQbCounter: number;
  allYardsGivenRb1: number;
  allYardsGivenRb1Counter: number;
  allYardsGivenRb2: number;
  allYardsGivenRb2Counter: number;
  allYardsGivenWr1: number;
  allYardsGivenWr1Counter: number;
  allYardsGivenWr2: number;
  allYardsGivenWr2Counter: number;
  allYardsGivenWr3: number;
  allYardsGivenWr3Counter: number;
  allYardsGivenTe: number;
  allYardsGivenTeCounter: number;
  opponentGamesQb: Game[],
  opponentGamesRb1: Game[],
  opponentGamesRb2: Game[],
  opponentGamesWr1: Game[],
  opponentGamesWr2: Game[],
  opponentGamesWr3: Game[],
  opponentGamesTe: Game[],
}

export interface PassingPlayer {
  id?: string;
  playerUrl: string;
  name?: string;
  gamesUrl: string;
  games: Game[];
  allPassingYards: number;
  missingData: MissingData;
  injuryStatus?: string;
}

export interface RushingPlayer {
  id?: string;
  playerUrl: string;
  name?: string;
  gamesUrl: string;
  games: Game[];
  allRushingYards: number;
  missingData: MissingData;
  injuryStatus?: string;
}

export interface ReceivingPlayer {
  id?: string;
  playerUrl: string;
  name?: string;
  gamesUrl: string;
  games: Game[];
  allReceivingYards: number;
  missingData: MissingData;
  injuryStatus?: string;
}

export interface Game {
  opponentId?: string;
  weekNum: number;
  gameUrl: string;
  gameStatsUrl: string;
  homeAway: string;
  playerGameStatsUrl: string;
  value: number;
}

export interface DefenseStats {
  weekNum?: string;
  yardsGiven?: number;
}

export interface DepthChart {
  qb: PassingPlayer;
  rb1: RushingPlayer;
  rb2: RushingPlayer;
  wr1: ReceivingPlayer;
  wr2: ReceivingPlayer;
  wr3: ReceivingPlayer;
  te: ReceivingPlayer;
}

export interface MissingData {
  item: string[];
}

export interface KeyValueRef {
  id: string;
  refValue: string;
}
