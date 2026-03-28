import { historyData } from '../../../../shared/datas/historyData.js';
import HistorySvgLine from './historySvgLine.jsx';
import './historySection.css';

const HistorySection = () => {
    return (
        <div className="history-section">
            <h2 className="history-title">연혁</h2>

            <div className="history-container">
                {/* 중앙선 */}
                <div className="history-svg-container">
                    <HistorySvgLine itemCount={historyData.length} />
                </div>

                {historyData.map((data, index) => (
                    <div key={data.year} className={`history-item ${data.side}`}>
                        {/* 연도 박스 */}
                        <div className="history-year">{data.year}</div>

                        {/* 내용 리스트 */}
                        <ul className="history-content-list">
                            {data.items.map((line, idx) => (
                                <li key={idx} className={`history-content-line ${line.isArrow ? 'is-arrow' : ''}`}>
                                    {/* 화살표 글머리 */}
                                    {line.isArrow && <span className="history-arrow-icon">→ </span>}

                                    {/* 텍스트 본문 (하이라이트 처리) */}
                                    <span className="history-text-content">
                                        {line.highlight ? (
                                            <>
                                                <span className="history-highlight-pink">{line.highlight}</span>
                                                {line.text.replace(line.highlight, "")}
                                            </>
                                        ) : (
                                            line.text
                                        )}
                                    </span>

                                    {/* 하늘색 점 글머리 */}
                                    {line.isPoint && <span className="history-blue-dot"></span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistorySection;