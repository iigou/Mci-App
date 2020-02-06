export interface IState<T> {
    state: boolean;
    data: T;
}

export interface IResponse<T> {
    payload: T;
}

export interface IInfoGames {
    games: string[];
}

export interface IGame {
    id: string;
    difficulty: string;
    playerName: string;
    level: number;
    maxCompletionTime: number;
    completionTime?: number;
    completedDate?: number;
}

export interface ICreateGameRequest {
    difficulty: string;
}

export interface IMciImage {
    id: string;
    path: string;
}

export interface IAntonymGame {
    game?: IGame;
    solved?: boolean;
    word?: string;
    choices?: string[];
}

export interface IFindTheSoundGame {
    game?: IGame;
    solved?: boolean;
    images?: IMciImage[];
    soundId?: string;
    soundPath?: string;
}

export interface ISolveAntonymGame {
    completionTime: number;
    solution: string;
}

export interface IFindTheSoundSolution {
    soundId: string;
    imageId: string;
}

export interface ISolveFindTheSoundGame {
    completionTime: number;
    solution: IFindTheSoundSolution;
}
