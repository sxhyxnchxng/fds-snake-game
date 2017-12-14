import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    { x: 5, y: 3 }
  ];

  // 먹이의 좌표
  this.fruit = { x: 4, y: 4 };
}



SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  console.log('up');
  this.direction = 'up';
}
SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');
  this.direction = 'down';
}
SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
  this.direction = 'left';
}
SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
  this.direction = 'right';
}
SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log('nextState');

  // 이동
  // 방향
  let head = this.joints[0];
  // 머리 위치

  switch (this.direction) {
    case 'up':
      this.joints.unshift({ x: head.x, y: head.y - 1 });
      head = this.joints[0];
      break;
    case 'down':
      this.joints.unshift({ x: head.x, y: head.y + 1 });
      head = this.joints[0];
      break;
    case 'left':
      this.joints.unshift({ x: head.x - 1, y: head.y });
      head = this.joints[0];
      break;
    default:
      this.joints.unshift({ x: head.x + 1, y: head.y });
      head = this.joints[0];
  }




  // 먹이를 먹으면 늘어나는 거
  if (head.x === this.fruit.x && head.y === this.fruit.y) {
    this.fruit = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
    // pop을 하지 않으면 되네.....
  } else {
    this.joints.pop();
  }
  // 먹이랑 몸이랑 겹치지 않게

  // 벽에 박으면 꽝
  if (head.x > COLS - 1 || head.x < 0 || head.y > ROWS - 1 || head.y < 0) {
    return false;
  }
  return true;

  // 자기 몸에 박으면 꽝

  //

}
export default SnakeGameLogic;