import * as p from 'probable-tribble-runtime/runtime'

(() => {

    const runtime = p.createRuntime();

    require('./scripts/episode1');

    p.start(runtime);

})();
