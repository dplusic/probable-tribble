import * as s from './script'

export type Runtime = {
    episode: s.Episode | null,
    sceneMap: { [sceneGeneratorString: string]: s.Scene }
}

let runtime: Runtime;

export const createRuntime = (): Runtime => {
    const r = {
        episode: null,
        sceneMap: {},
    };
    runtime = r;
    return r;
};

export const getRuntime = (): Runtime => {
    return runtime
};

const runScene = (scene: s.Scene) => {
    scene.lines.forEach(line => {
        console.log(line);
    });
};

const getScene = (r: Runtime, sceneGenerator: s.SceneGenerator): s.Scene => {
    let scene = r.sceneMap[sceneGenerator.toString()];
    if (scene == null) {
        scene = sceneGenerator();
        r.sceneMap[sceneGenerator.toString()] = scene;
    }
    return scene;
};

export const start = (r: Runtime) => {
    if (!r.episode) {
        console.error('error');
        return;
    }

    const scene = getScene(r, r.episode.startScene);
    runScene(scene);
};
