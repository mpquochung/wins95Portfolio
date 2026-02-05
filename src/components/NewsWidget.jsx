import { useContext } from 'react';
import announcements from '../announcements';
import '../css/NewsWidget.css';
import UseContext from '../Context';

function NewsWidget() {
  const { newsWidgetVisible, setNewsWidgetVisible } = useContext(UseContext);

  if (!newsWidgetVisible || announcements.length === 0) return null;

  return (
    <div className="news_widget">
      <div className="news_widget_bar">
        <span>News</span>
        <button
          className="news_widget_close"
          onClick={() => setNewsWidgetVisible(false)}
          aria-label="Close"
          type="button"
        >
          ×
        </button>
      </div>
      <div className="news_widget_body">
        {announcements.map((item, idx) => (
          <div className="news_widget_item" key={`${item.title}-${idx}`}>
            <div className="news_widget_title">{item.title}</div>
            {item.date ? <div className="news_widget_date">{item.date}</div> : null}
            {item.text ? <div className="news_widget_text">{item.text}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsWidget;
