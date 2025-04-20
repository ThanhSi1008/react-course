// src/App.jsx
import { AppHeader, SiteFooter } from './components/layout';
import { SectionTitle } from './components/common';
import { COLORS } from './constants';

function App() {
  return (
    <div>
      <AppHeader />
      <div className="container py-5">
        <SectionTitle 
          title="Chefify - Ứng dụng công thức nấu ăn" 
          subtitle="Khám phá thế giới ẩm thực với các công thức nấu ăn tuyệt vời"
          titleStyle={{ color: COLORS.primary }}
        />
        
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Các component dùng chung đã được tạo!</h5>
                <p className="card-text">Đây là phần minh chứng cho việc tạo các component dùng chung.</p>
                <ul>
                  <li>SectionTitle - Đang được sử dụng ở trên</li>
                  <li>BookmarkButton - Nút đánh dấu công thức</li>
                  <li>RecipeCard - Thẻ hiển thị công thức</li>
                </ul>
                <button className="btn btn-primary" style={{ backgroundColor: COLORS.primary }}>
                  Màu chủ đạo từ constants
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export default App;