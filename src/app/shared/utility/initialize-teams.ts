import { NbaTeam, Team } from 'src/app/shared/models/interface';

export const INITIALIZE_TEAMS = (inputTeams: Team[]) => {
  let tmpTeam: Team = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0,
  };
  tmpTeam.id = '25';
  tmpTeam.displayName = '49ers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/25?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/25/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/25/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '3';
  tmpTeam.displayName = 'Bears';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/3?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/3/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/3/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '4';
  tmpTeam.displayName = 'Bengals';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/4?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/4/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/4/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '2';
  tmpTeam.displayName = 'Bills';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/2?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/2/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/2/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '7';
  tmpTeam.displayName = 'Broncos';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/7?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/7/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/7/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '5';
  tmpTeam.displayName = 'Browns';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/5?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/5/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/5/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '27';
  tmpTeam.displayName = 'Buccaneers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/27?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/27/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/27/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '22';
  tmpTeam.displayName = 'Cardinals';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/22?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/22/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/22/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '24';
  tmpTeam.displayName = 'Chargers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/24?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/24/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/24/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '12';
  tmpTeam.displayName = 'Chiefs';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/12?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/12/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/12/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '11';
  tmpTeam.displayName = 'Colts';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/11?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/11/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/11/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '28';
  tmpTeam.displayName = 'Commanders';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/28?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/28/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/28/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '6';
  tmpTeam.displayName = 'Cowboys';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/6?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/6/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/6/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '15';
  tmpTeam.displayName = 'Dolphins';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/15?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/15/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/15/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '21';
  tmpTeam.displayName = 'Eagles';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/21?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/21/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/21/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '1';
  tmpTeam.displayName = 'Falcons';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/1?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/1/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/1/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '19';
  tmpTeam.displayName = 'Giants';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/19?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/19/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/19/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '30';
  tmpTeam.displayName = 'Jaguars';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/30?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/30/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/30/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '20';
  tmpTeam.displayName = 'Jets';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/20?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/20/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/20/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '8';
  tmpTeam.displayName = 'Lions';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/8?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/8/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/8/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '9';
  tmpTeam.displayName = 'Packers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/9?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/9/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/9/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '29';
  tmpTeam.displayName = 'Panthers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/29?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/29/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/29/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '17';
  tmpTeam.displayName = 'Patriots';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/17?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/17/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/17/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '13';
  tmpTeam.displayName = 'Raiders';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/13?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/13/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/13/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '14';
  tmpTeam.displayName = 'Rams';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/14?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/14/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/14/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '33';
  tmpTeam.displayName = 'Ravens';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/33?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/33/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/33/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '18';
  tmpTeam.displayName = 'Saints';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/18?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/18/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/18/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '26';
  tmpTeam.displayName = 'Seahawks';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/26?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/26/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/26/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '23';
  tmpTeam.displayName = 'Steelers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/23?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/23/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/23/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

 tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '34';
  tmpTeam.displayName = 'Texans';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/34?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/34/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/34/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '10';
  tmpTeam.displayName = 'Titans';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/10?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/10/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/10/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      qb: {
        playerUrl: '',
        gamesUrl: '',
        allPassingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      rb1: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      rb2: {
        playerUrl: '',
        gamesUrl: '',
        allRushingYards: 0,
        games: [],
        missingData: {
          item: []
        },
        allReceivingYards: 0
      },
      wr1: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr2: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      wr3: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      te: {
        playerUrl: '',
        gamesUrl: '',
        allReceivingYards: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenQb: 0,
    allYardsGivenRb1: 0,
    allYardsGivenRb2: 0,
    allYardsGivenWr1: 0,
    allYardsGivenWr2: 0,
    allYardsGivenWr3: 0,
    allYardsGivenTe: 0,
    allYardsGivenQbCounter: 0,
    allYardsGivenRb1Counter: 0,
    allYardsGivenRb2Counter: 0,
    allYardsGivenWr1Counter: 0,
    allYardsGivenWr2Counter: 0,
    allYardsGivenWr3Counter: 0,
    allYardsGivenTeCounter: 0,
    opponentGamesQb: [],
    opponentGamesRb1: [],
    opponentGamesRb2: [],
    opponentGamesWr1: [],
    opponentGamesWr2: [],
    opponentGamesWr3: [],
    opponentGamesTe: [],
    allYardsGivenRb1Rec: 0,
    allYardsGivenRb1RecCounter: 0,
    allYardsGivenRb2Rec: 0,
    allYardsGivenRb2RecCounter: 0
  };
  tmpTeam.id = '16';
  tmpTeam.displayName = 'Vikings';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/16?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/16/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/16/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  return inputTeams;
}

export const INITIALIZE_NBA_TEAMS = (inputTeams: NbaTeam[]) => {
  let tmpTeam: NbaTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '1';
  tmpTeam.displayName = 'Atlanta Hawks';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/1?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/1/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/1/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '2';
  tmpTeam.displayName = 'Boston Celtics';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/2?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/2/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/2/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '3';
  tmpTeam.displayName = 'New Orleans Pelicans';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/3?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/3/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/3/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '4';
  tmpTeam.displayName = 'Chicago Bulls';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/4?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/4/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/4/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '5';
  tmpTeam.displayName = 'Cleveland Cavaliers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/5?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/5/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/5/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '6';
  tmpTeam.displayName = 'Dallas Mavericks';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/6?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/6/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/6/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '7';
  tmpTeam.displayName = 'Denver Nuggets';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/7?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/7/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/7/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '8';
  tmpTeam.displayName = 'Detroit Pistons';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/8?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/8/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/8/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '9';
  tmpTeam.displayName = 'Golden State Warriors';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/9?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/9/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/9/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '10';
  tmpTeam.displayName = 'Houston Rockets';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/10?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/10/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/10/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '11';
  tmpTeam.displayName = 'Indiana Pacers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/11?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/11/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/11/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '12';
  tmpTeam.displayName = 'LA Clippers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/12?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/12/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/12/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '13';
  tmpTeam.displayName = 'LA Lakers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/13?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/13/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/13/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '14';
  tmpTeam.displayName = 'Miami Heat';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/14?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/14/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/14/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '15';
  tmpTeam.displayName = 'Milwaukee Bucks';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/15?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/15/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/15/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '16';
  tmpTeam.displayName = 'Minnesota Timberwolves';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/16?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/16/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/16/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '17';
  tmpTeam.displayName = 'Brooklyn Nets';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/17?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/17/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/17/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '18';
  tmpTeam.displayName = 'New York Knicks';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/18?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/18/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/18/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '19';
  tmpTeam.displayName = 'Orlando Magic';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/19?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/19/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/19/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '20';
  tmpTeam.displayName = 'Philadelphia 76ers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/20?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/20/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/20/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '21';
  tmpTeam.displayName = 'Phoenix Suns';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/21?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/21/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/21/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '22';
  tmpTeam.displayName = 'Portland Trail Blazers';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/22?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/22/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/22/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '23';
  tmpTeam.displayName = 'Sacramento Kings';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/23?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/23/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/23/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '24';
  tmpTeam.displayName = 'San Antonio Spurs';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/24?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/24/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/24/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '25';
  tmpTeam.displayName = 'Oklahoma City Thunder';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/25?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/25/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/25/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '26';
  tmpTeam.displayName = 'Utah Jazz';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/26?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/26/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/26/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '27';
  tmpTeam.displayName = 'Washington Wizards';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/27?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/27/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/27/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '28';
  tmpTeam.displayName = 'Toronto Raptors';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/28?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/28/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/28/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '29';
  tmpTeam.displayName = 'Memphis Grizzlies';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/29?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/29/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/29/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  tmpTeam = {
    apiTeamUrl: '',
     depthChartPlayers: {
      pg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      pf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      c: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        },
      },
      sf: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
      sg: {
        playerUrl: '',
        gamesUrl: '',
         allPoints: 0,
        allAssists: 0,
        allThreePts: 0,
        allBlocks: 0,
        allRebounds: 0,
        games: [],
        missingData: {
          item: []
        }
      },
    },
    depthChartUrl: '',
    eventsUrl: '',
    currentWeekEventUrl: '',
    allYardsGivenPf: 0,
    allYardsGivenPg: 0,
    allYardsGivenC: 0,
    allYardsGivenSf: 0,
    allYardsGivenSg: 0,
    allYardsGivenPgCounter: 0,
    allYardsGivenPfCounter: 0,
    allYardsGivenCCounter: 0,
    allYardsGivenSfCounter: 0,
    allYardsGivenSgCounter: 0,
    allBlocksGivenPg: 0,
    allBlocksGivenPgCounter: 0,
    allBlocksGivenPf: 0,
    allBlocksGivenPfCounter: 0,
    allBlocksGivenC: 0,
    allBlocksGivenCCounter: 0,
    allBlocksGivenSf: 0,
    allBlocksGivenSfCounter: 0,
    allBlocksGivenSg: 0,
    allBlocksGivenSgCounter: 0,
    allReboundsGivenPg: 0,
    allReboundsGivenPgCounter: 0,
    allReboundsGivenPf: 0,
    allReboundsGivenPfCounter: 0,
    allReboundsGivenC: 0,
    allReboundsGivenCCounter: 0,
    allReboundsGivenSf: 0,
    allReboundsGivenSfCounter: 0,
    allReboundsGivenSg: 0,
    allReboundsGivenSgCounter: 0,
    opponentGamesPg: [],
    opponentGamesPf: [],
    opponentGamesC: [],
    opponentGamesSf: [],
    opponentGamesSg: [],
	allAssistsGivenC: 0,
    allAssistsGivenCCounter: 0,
    allAssistsGivenPf: 0,
    allAssistsGivenPfCounter: 0,
    allAssistsGivenPg: 0,
    allAssistsGivenPgCounter: 0,
    allAssistsGivenSf: 0,
    allAssistsGivenSfCounter: 0,
    allAssistsGivenSg: 0,
    allAssistsGivenSgCounter: 0,
    allThreesGivenC: 0,
    allThreesGivenCCounter: 0,
    allThreesGivenPf: 0,
    allThreesGivenPfCounter: 0,
    allThreesGivenPg: 0,
    allThreesGivenPgCounter: 0,
    allThreesGivenSf: 0,
    allThreesGivenSfCounter: 0,
    allThreesGivenSg: 0,
    allThreesGivenSgCounter: 0,
  };
  tmpTeam.id = '30';
  tmpTeam.displayName = 'Charlotte Hornets';
  tmpTeam.apiTeamUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/30?lang=en&region=us';
  tmpTeam.eventsUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/30/events?lang=en&region=us';
  tmpTeam.depthChartUrl = 'http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/teams/30/depthcharts?lang=en&region=us';
  inputTeams.push(tmpTeam);

  return inputTeams;
}
