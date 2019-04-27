import { getRuntime, Runtime } from './runtime'

const runtime = getRuntime();

/////

export type Character = {
    name: string;
    resource: string;
};

export const Character = (name: string, resource: string) : Character => {
    return {
        name,
        resource,
    }
};

/////

type ScriptLineRunFunc = (r: Runtime) => void;

export type ScriptLine = {
    run: ScriptLineRunFunc,
};

/////

export type Narration = {
    content: string;
    run: ScriptLineRunFunc,
}

export const Narration = (content: string) : Narration => {
    return {
        content,
        run: (_) => {},
    }
};

/////

export type Say = {
    actor: Character;
    content: string;
    run: ScriptLineRunFunc,
}

export const Say = (actor: Character, content: string) : Say => {
    return {
        actor,
        content,
        run: (_) => {},
    }
};

/////

export type Enter = {
    actor: Character;
    run: ScriptLineRunFunc,
}

export const Enter = (actor: Character) : Enter => {
    return {
        actor,
        run: (_) => {},
    }
};

/////

export type TextChoice = {
    destination: SceneGenerator,
    content: string,
    run: ScriptLineRunFunc,
}

export const TextChoice = (destination: SceneGenerator, content:string) : TextChoice => {
    return {
        destination,
        content,
        run: (_) => {},
    }
};

/////

export type ImageChoice = {
    destination: SceneGenerator,
    resource: string,
    run: ScriptLineRunFunc,
}

export const ImageChoice = (destination: SceneGenerator, resource: string) : ImageChoice => {
    return {
        destination,
        resource,
        run: (_) => {},
    }
};

/////

export type Choice = TextChoice | ImageChoice

/////

export type Menu = {
    choices: Choice[];
    run: ScriptLineRunFunc,
}

export const Menu = (choices: Choice[]) : Menu => {
    return {
        choices,
        run: (_) => {},
    }
};

/////

export type Jump = {
    destination: SceneGenerator,
    run: ScriptLineRunFunc,
}

export const Jump = (destination: SceneGenerator) : Jump => {
    return {
        destination,
        run: (_) => {},
    }
};

/////

export type Background = {
    resource: string,
    run: ScriptLineRunFunc,
}

export const Background = (resource: string) : Background => {
    return {
        resource,
        run: (_) => {},
    }
};

/////

export type Scene = {
    lines: ScriptLine[];
}

export type SceneGenerator = () => Scene;

export const Scene = (lines: ScriptLine[]) : Scene => {
    return {
        lines,
    }
};

/////

export type Episode = {
    startScene: SceneGenerator,
}

export const Episode = (startScene: SceneGenerator) : Episode => {
    const episode = {
        startScene,
    };
    runtime.episode = episode;
    return episode
};
