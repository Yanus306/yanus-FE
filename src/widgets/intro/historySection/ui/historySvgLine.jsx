const HistorySvgLine = ({ itemCount }) => {
  const width = 200; 
  const centerX = width / 2;
  const zigzagWidth = 120;  // 수평 이동 거리
  const stepY = 200;  // 지그재그 수직 거리

  // 각도 통일하기 위한 절반 스텝 (중앙 <-> 사이드 이동 시 사용)
  const firstStepY = stepY / 2; 

  // 시작점 설정
  const startCircleY = 20;  // 최상단 원 위치
  const straightLineLength = 80;  // 처음에 수직으로 내려올 직선 길이
  const startZigzagY = startCircleY + straightLineLength;  // 본격적으로 꺾이기 시작하는 Y

  let points = [
    { x: centerX, y: startCircleY }, // 원 위치
    { x: centerX, y: startZigzagY }  // 직선으로 내려온 끝점
  ];

  // 데이터 개수만큼 지그재그 좌표 추가
  for (let i = 0; i < itemCount; i++) {
    const isEven = i % 2 === 0;
    const targetX = isEven ? centerX + zigzagWidth : centerX - zigzagWidth;
    
    // Y 좌표 계산: 꺾이기 시작한 지점 + 첫 번째 꺾임(절반) + 이후 지그재그(전체)
    const targetY = startZigzagY + firstStepY + (i * stepY);
    
    points.push({ x: targetX, y: targetY });
  }

  // 마지막 복귀 및 화살표
  const lastPoint = points[points.length - 1];
  
  // 마지막 정점에서 중앙으로 들어올 때도 각도를 위해 firstStepY 사용
  const returnY = lastPoint.y + firstStepY; 
  const arrowY = returnY + 80; // 최종 수직 화살표 길이

  points.push({ x: centerX, y: returnY }); // 중앙 복귀
  points.push({ x: centerX, y: arrowY });  // 화살표 끝점

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <svg 
      width={width} 
      height={arrowY + 20} 
      viewBox={`0 0 ${width} ${arrowY + 20}`} 
      style={{ overflow: 'visible' }}
    >
      <circle cx={centerX} cy={startCircleY} r={6} fill="var(--secondary-color)" />

      <path
        d={pathD}
        stroke="var(--secondary-color)"
        strokeWidth="2.5"
        strokeDasharray="8 6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d={`M ${centerX - 10} ${arrowY - 10} L ${centerX} ${arrowY} L ${centerX + 10} ${arrowY - 10}`}
        stroke="var(--secondary-color)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HistorySvgLine;