export type Character = {
    name: string;
    resource: string;
};

export const createCharacter = (name: string, resource: string) : Character => {
    return {
        name,
        resource,
    }
};

/////

export type Narration = {
    content: string;
}

export const createNarration = (content: string) : Narration => {
    return {
        content,
    }
};

/////

export type Say = {
    actor: Character;
    content: string;
}

export const createSay = (actor: Character, content: string) : Say => {
    return {
        actor,
        content,
    }
};

/////

export type Enter = {
    actor: Character;
}

export const createEnter = (actor: Character) : Enter => {
    return {
        actor,
    }
};

/////

export type TextChoice = {
    destination: SceneGenerator,
    content: string,
}

export const createTextChoice = (destination: SceneGenerator, content:string) : TextChoice => {
    return {
        destination,
        content,
    }
};

/////

export type ImageChoice = {
    destination: SceneGenerator,
    resource: string,
}

export const createImageChoice = (destination: SceneGenerator, resource: string) : ImageChoice => {
    return {
        destination,
        resource,
    }
};

/////

export type Choice = TextChoice | ImageChoice

/////

export type Menu = {
    choices: Choice[];
}

export const createMenu = (choices: Choice[]) : Menu => {
    return {
        choices
    }
};

/////

export type Jump = {
    destination: SceneGenerator,
}

export const createJump = (destination: SceneGenerator) : Jump => {
    return {
        destination,
    }
};

/////

export type Background = {
    resource: string,
}

export const createBackground = (resource: string) : Background => {
    return {
        resource,
    }
};

/////

export type ScriptLine = Narration | Say | Enter | Menu | Jump | Enter | Background;

/////

export type Scene = {
    lines: ScriptLine[];
}

export type SceneGenerator = () => Scene;

export const createScene = (lines: ScriptLine[]) : Scene => {
    return {
        lines,
    }
};

/////

export type Episode = {
    startScene: SceneGenerator;
}

export const createEpisode = (startScene: SceneGenerator) : Episode => {
    return {
        startScene,
    }
};
