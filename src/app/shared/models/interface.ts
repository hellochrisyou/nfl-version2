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
  allYardsGivenRb1Rec: number;
  allYardsGivenRb1RecCounter: number;
  allYardsGivenRb2Rec: number;
  allYardsGivenRb2RecCounter: number;
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

export interface NbaPlayer {
  id?: string;
  playerUrl: string;
  name?: string;
  gamesUrl: string;
  games: Game[];
  allPoints: number;
  allAssists: number;
  allThreePts: number;
  allBlocks: number;
  allRebounds: number;
  missingData: MissingData;
  injuryStatus?: string;
}

export interface RushingPlayer {
  id?: string;
  playerUrl: string;
  name?: string;
  gamesUrl: string;
  games: Game[];
  allReceivingYards: number;
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
  gameDate?: string;
  weekNum?: number;
  gameNum?: number;
  gameUrl: string;
  gameStatsUrl: string;
  homeAway: string;
  playerGameStatsUrl: string;
  value: number;
  blocksValue?: number;
  reboundsValue?: number;
  assistsValue?: number;
  threePtValue?: number;
  rbReceivingValue?: number;
  opponentPlayer?: string;
}

export interface DefenseStats {
  weekNum?: string;
  yardsGiven?: number;
}

export interface NbaDefenseStats {
  gameNum?: string;
  pointsGiven?: number;
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

export interface NbaDepthChart {
  pg: NbaPlayer;
  pf: NbaPlayer;
  c: NbaPlayer;
  sf: NbaPlayer;
  sg: NbaPlayer;
}

export interface MissingData {
  item: string[];
}

export interface KeyValueRef {
  id: string;
  refValue: string;
}

export interface NbaTeam {
  id?: string;
  currentOpponentId?: string;
  currentAwayHome?: string;
  displayName?: string;
  date?: string;
  apiTeamUrl: string;
  depthChartUrl: string;
  eventsUrl: string;
  currentWeekEventUrl: string;
  depthChartPlayers: NbaDepthChart;
  defenseVsPg?: NbaDefenseStats[];
  defenseVsPf?: NbaDefenseStats[];
  defenseVsC?: NbaDefenseStats[];
  defenseVsSf?: NbaDefenseStats[];
  defenseVsSg?: NbaDefenseStats[];
  defenseVsTe?: NbaDefenseStats[];
  allYardsGivenPg: number;
  allYardsGivenPgCounter: number;
  allAssistsGivenPg: number;
  allAssistsGivenPgCounter: number;
  allBlocksGivenPg: number;
  allBlocksGivenPgCounter: number;
  allReboundsGivenPg: number;
  allReboundsGivenPgCounter: number;
  allThreesGivenPg: number;
  allThreesGivenPgCounter: number;
  allYardsGivenPf: number;
  allYardsGivenPfCounter: number;
  allAssistsGivenPf: number;
  allAssistsGivenPfCounter: number;
  allThreesGivenPf: number;
  allThreesGivenPfCounter: number;
  allBlocksGivenPf: number;
  allBlocksGivenPfCounter: number;
  allReboundsGivenPf: number;
  allReboundsGivenPfCounter: number;
  allYardsGivenC: number;
  allYardsGivenCCounter: number;
  allAssistsGivenC: number;
  allAssistsGivenCCounter: number;
  allThreesGivenC: number;
  allThreesGivenCCounter: number;
  allBlocksGivenC: number;
  allBlocksGivenCCounter: number;
  allReboundsGivenC: number;
  allReboundsGivenCCounter: number;
  allYardsGivenSf: number;
  allYardsGivenSfCounter: number;
  allAssistsGivenSf: number;
  allAssistsGivenSfCounter: number;
  allThreesGivenSf: number;
  allThreesGivenSfCounter: number;
  allBlocksGivenSf: number;
  allBlocksGivenSfCounter: number;
  allReboundsGivenSf: number;
  allReboundsGivenSfCounter: number;
  allYardsGivenSg: number;
  allYardsGivenSgCounter: number;
  allAssistsGivenSg: number;
  allAssistsGivenSgCounter: number;
  allThreesGivenSg: number;
  allThreesGivenSgCounter: number;
  allBlocksGivenSg: number;
  allBlocksGivenSgCounter: number;
  allReboundsGivenSg: number;
  allReboundsGivenSgCounter: number;

  opponentGamesPg: Game[],
  opponentGamesPf: Game[],
  opponentGamesC: Game[],
  opponentGamesSg: Game[],
  opponentGamesSf: Game[],
}
