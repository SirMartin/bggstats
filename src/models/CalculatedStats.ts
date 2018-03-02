import _ = require('lodash');

export class CalculatedResults {
    statsByGames: KnockoutObservableArray<StatsByGame>;
    statsByLocations: KnockoutObservableArray<StatsByLocation>;
    statsByPlayers: KnockoutObservableArray<StatsByPlayer>;
    plainStats: KnockoutObservableArray<PlainStats>;

    constructor(m: CalculatedResultsNet) {
        this.statsByGames = ko.observableArray(_.map(m.StatsByGames, (x) => new StatsByGame(x)));
        this.statsByLocations = ko.observableArray(_.map(m.StatsByLocations, (x) => new StatsByLocation(x)));
        this.statsByPlayers = ko.observableArray(_.map(m.StatsByPlayers, (x) => new StatsByPlayer(x)));
        this.plainStats = ko.observableArray(_.map(m.PlainStats, (x) => new PlainStats(x)));
    }
}

export class CalculatedResultsNet {
    StatsByGames: StatsByGameNet[];
    StatsByLocations: StatsByLocationNet[];
    StatsByPlayers: StatsByPlayerNet[];
    PlainStats: PlainStatsNet[];
}

export class PlainStats {
    gameId: KnockoutObservable<number>;
    gameName: KnockoutObservable<string>;
    date: KnockoutObservable<Date>;
    comments: KnockoutObservable<string>;
    location: KnockoutObservable<string>;
    players: KnockoutObservableArray<PlayerStats>;
    // Length in minutes
    length: KnockoutObservable<number>;

    constructor(m: PlainStatsNet) {
        this.gameId = ko.observable(m.GameId);
        this.gameName = ko.observable(m.GameName);
        this.date = ko.observable(m.Date);
        this.comments = ko.observable(m.Comments);
        this.location = ko.observable(m.Location);
        this.players = ko.observableArray(m.Players);
        this.length = ko.observable(m.Length);
    }
}

export class PlainStatsNet {
    GameId: number;
    GameName: string;
    Date: Date;
    Comments: string;
    Location: string;
    Players: PlayerStats[];
    // Length in minutes
    Length: number;
}

export class PlayerStats {
    userId?: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    bggUsername: KnockoutObservable<string>;
    isWinner: KnockoutObservable<boolean>;
    isNewPlayer: KnockoutObservable<boolean>;
    color: KnockoutObservable<string>;
    rating: KnockoutObservable<number>;
    startPosition: KnockoutObservable<string>;

    constructor(m: PlayerStatsNet) {
        this.userId = ko.observable(m.UserId);
        this.name = ko.observable(m.Name);
        this.bggUsername = ko.observable(m.BggUsername);
        this.isWinner = ko.observable(m.IsWinner);
        this.isNewPlayer = ko.observable(m.IsNewPlayer);
        this.color = ko.observable(m.Color);
        this.rating = ko.observable(m.Rating);
        this.startPosition = ko.observable(m.StartPosition);
    }
}

export class PlayerStatsNet {
    UserId?: number;
    Name: string;
    BggUsername: string;
    IsWinner: boolean;
    IsNewPlayer: boolean;
    Color: string;
    Rating: number;
    StartPosition: string;
}

export class PlayStats {
    date: KnockoutObservable<Date>;
    comments: KnockoutObservable<string>;
    location: KnockoutObservable<string>;
    players: KnockoutObservableArray<PlayerStats>;

    constructor(m: PlayStatsNet) {
        this.date = ko.observable(m.Date);
        this.comments = ko.observable(m.Comments);
        this.location = ko.observable(m.Location);
        this.players = ko.observableArray(_.map(m.Players, (x) => new PlayerStats(x)));
    }
}

export class PlayStatsNet {
    Date: Date;
    Comments: string;
    Location: string;
    Players: PlayerStatsNet[];
}

export class StatsByGame {

    gameId: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    plays: KnockoutObservableArray<PlayStats>;

    constructor(m: StatsByGameNet) {
        this.gameId = ko.observable(m.GameId);
        this.name = ko.observable(m.Name);
        this.plays = ko.observableArray(_.map(m.Plays, (x) => new PlayStats(x)));
    }
}

export class StatsByGameNet {
    GameId: number;
    Name: string;
    Plays: PlayStatsNet[];
}

export class StatsByLocation {
    name: KnockoutObservable<string>;
    plays: KnockoutObservableArray<PlayStats>;

    constructor(m: StatsByLocationNet) {
        this.name = ko.observable(m.Name);
        this.plays = ko.observableArray(_.map(m.Plays, (x) => new PlayStats(x)));
    }
}

export class StatsByLocationNet {
    Name: string;
    Plays: PlayStatsNet[];
}

export class StatsByPlayer {
    userId: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    plays: KnockoutObservableArray<PlayStats>;

    constructor(m: StatsByPlayerNet) {
        this.userId = ko.observable(m.UserId);
        this.name = ko.observable(m.Name);
        this.plays = ko.observableArray(_.map(m.Plays, (x) => new PlayStats(x)));
    }
}

export class StatsByPlayerNet {
    UserId: number;
    Name: string;
    Plays: PlayStatsNet[];
}