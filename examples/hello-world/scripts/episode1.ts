import * as r from "probable-tribble-runtime"
import * as characters from "./characters"

r.Episode(start);

function start() {
    return r.Scene([
        r.Background('bg.png'),
        r.Enter(characters.m),
        r.Enter(characters.b),
        r.Narration('나레이션 부분'),
        r.Say(characters.m, '나의 대사'),
        r.Say(characters.b, '밥의 대사'),
        r.Narration('연속 나레이션 1'),
        r.Narration('연속 나레이션 2'),
        r.Jump(menu),
    ]);
}

export function menu() {
    return r.Scene([
        r.Menu([
            r.TextChoice(menu_01, '1. 1번으로 이동'),
            r.TextChoice(menu_02, '2. 2번으로 이동'),
        ])
    ]);
}

function menu_01() {
    return r.Scene([
        r.Narration('1번을 선택하셨습니다.'),
        r.Jump(menu_end),
    ]);
}

function menu_02() {
    return r.Scene([
        r.Narration('2번을 선택하셨습니다.'),
        r.Jump(menu_end),
    ]);
}

function menu_end() {
    return r.Scene([
        r.Narration('종료합니다.'),
    ]);
}

export default start;
