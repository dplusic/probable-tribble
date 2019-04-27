import * as p from "probable-tribble-runtime/script"
import {me, bob} from "./characters"

p.Episode(start);

function start() {
    return p.Scene([
        p.Background('bg.png'),
        p.Enter(me),
        p.Enter(bob),
        p.Narration('나레이션 부분'),
        p.Say(me, '나의 대사'),
        p.Say(bob, '밥의 대사'),
        p.Narration('연속 나레이션 1'),
        p.Narration('연속 나레이션 2'),
        p.Jump(menu),
    ]);
}

export function menu() {
    return p.Scene([
        p.Menu([
            p.TextChoice(menu_01, '1. 1번으로 이동'),
            p.TextChoice(menu_02, '2. 2번으로 이동'),
        ])
    ]);
}

function menu_01() {
    return p.Scene([
        p.Narration('1번을 선택하셨습니다.'),
        p.Jump(menu_end),
    ]);
}

function menu_02() {
    return p.Scene([
        p.Narration('2번을 선택하셨습니다.'),
        p.Jump(menu_end),
    ]);
}

function menu_end() {
    return p.Scene([
        p.Narration('종료합니다.'),
    ]);
}
