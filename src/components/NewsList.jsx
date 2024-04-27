import { useState } from 'react';

const initialNewsData = [
  {
    id: 1,
    title: 'لشگرکشی غول های ان بی ای به پاریس',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    category: 'تکنولوژی',
  },
  {
    id: 2,
    title: 'لشگرکشی غول های ان بی ای به پاریس',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    category: 'تکنولوژی',
  },
  {
    id: 3,
    title: ' لشگرکشی غول های ان بی ای به پاریس',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    category: 'سلامت',
  },
  {
    id: 4,
    title: 'لشگرکشی غول های ان بی ای به پاریس',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    category: 'علم',
  },
  {
    id: 5,
    title: 'لشگرکشی غول های ان بی ای به پاریس',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    category: 'سیاست',
  },
];

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredNews, setFilteredNews] = useState(initialNewsData);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const handleSearch = () => {
    let filteredResults = initialNewsData;

    if (searchTerm) {
      filteredResults = filteredResults.filter(
        (news) =>
          news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          news.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredResults = filteredResults.filter(
        (news) => news.category === selectedCategory
      );
    }

    setFilteredNews(filteredResults);
  };

  const handleRowClick = (news) => {
    setSelectedNews(news);
    setShowPopup(true);
    document.body.classList.add('blur');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.classList.remove('blur');
  };
  return (
    <div className="news-list">
      <div className="news-list-search-box">
        <div className="news-list-search-box-first-row">
          <input
            type="text"
            placeholder="جستجو..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="news-list-input"
          />
        </div>
        <div className="news-list-search-box-second-row">
          <button className="news-list-btn" onClick={handleSearch}>
            جستجو
          </button>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="news-list-select"
          >
            <option value="">همه دسته‌بندی ها</option>
            <option value="تکنولوژی">تکنولوژی</option>
            <option value="سلامت">سلامت</option>
            <option value="علم">علم</option>
            <option value="سیاست">سیاست</option>
          </select>
        </div>
      </div>
      <table className="news-list-table">
        <tbody>
          {filteredNews.map((news) => (
            <tr
              className="news-list-row"
              key={news.id}
              onClick={() => handleRowClick(news)}
            >
              <td className="news-list-cell">
                <div className="news-list-cell-title">{news.title}</div>
                <div className="news-list-cell-content">{news.content}</div>
                <div className="news-list-cell-footer">
                  <button
                    className="news-list-cell-btn"
                    style={{ backgroundColor: 'red', borderColor: 'red' }}
                  >
                    حذف
                  </button>
                  <button className="news-list-cell-btn">ویرایش</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && selectedNews && (
        <div className="popup-overlay">
          <div className="popup no-blur">
            <h1>{selectedNews.category}</h1>
            <h2>{selectedNews.title}</h2>
            <p>{selectedNews.content}</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={handleClosePopup}>بستن</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;

// const NewsList = ({ newsList }) => {
//   return (
//     <table className="new-list">
//       <tr className="news-list-row">
//         <td className="news-list-cell">kos</td>
//       </tr>
//     </table>
//   );
// };

// export default NewsList;
