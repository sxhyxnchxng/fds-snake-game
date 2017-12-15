import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 }
  ];

  // 먹이의 좌표
  this.fruit = { x: 3, y: 5 };

  direction = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  console.log('up');
  direction = 'up';
}
SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');
  direction = 'down';
}
SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
  direction = 'left';
}
SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
  direction = 'right';
}
SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log('nextState');


  // 방향
  let newHead;
  if (this.direction === 'up') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    };
  } else if (this.direction === 'down') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    };
  } else if (this.direction === 'left') {
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    };
  } else if (this.direction === 'right') {
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    };
  }


  // 게임 오버 상태 VALIDATION
  if (
    newHead.x < 0 ||
    newHead.x >= COLS ||
    newHead.y < 0 ||
    newHead.y >= ROWS ||
    this.joints.some(j => j.x === newHead.x && j.y === newHead.y)
  ) {
    return false;
  }

  // 먹이
  if (newHead.x === this.fruit.x && newHead.y === this.fruit.y) {
    do {
      // 일단 랜덤한 위치에 생성
      this.fruit.x = Math.floor(Math.random() * COLS);
      this.fruit.y = Math.floor(Math.random() * ROWS);
    } while (
      this.joints.some(j => j.x === this.fruit.x && j.y === this.fruit.y) ||
      (newHead.x === this.fruit.x && newHead.y === this.fruit.y) // 연산자 우선순위에서 앞서지만 편의를 위해 괄호로 둘러싸 주는 것이 좋다.
    )
  } else {
    this.joints.pop();
  }

  this.joints.unshift(newHead);
  return true;
}
export default SnakeGameLogic;