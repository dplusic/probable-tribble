import * as r from "probable-tribble-runtime"
import * as characters from "./characters"

r.createEpisode(start);

function start() {
    return r.createScene([
        r.createBackground('bg.png'),
        r.createEnter(characters.m),
        r.createEnter(characters.b),
        r.createNarration('나레이션 부분'),
        r.createSay(characters.m, '나의 대사'),
        r.createSay(characters.b, '밥의 대사'),
        r.createNarration('연속 나레이션 1'),
        r.createNarration('연속 나레이션 2'),
        r.createJump(menu),
    ]);
}

export function menu() {
    return r.createScene([
        r.createMenu([
            r.createTextChoice(menu_01, '1. 1번으로 이동'),
            r.createTextChoice(menu_02, '2. 2번으로 이동'),
        ])
    ]);
}

function menu_01() {
    return r.createScene([
        r.createNarration('1번을 선택하셨습니다.'),
        r.createJump(menu_end),
    ]);
}

function menu_02() {
    return r.createScene([
        r.createNarration('2번을 선택하셨습니다.'),
        r.createJump(menu_end),
    ]);
}

function menu_end() {
    return r.createScene([
        r.createNarration('종료합니다.'),
    ]);
}

export default start;
