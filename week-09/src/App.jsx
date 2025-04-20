// src/App.jsx
import { AppHeader } from './components/layout';
import { COLORS } from './constants';

function App() {
  return (
    <div>
      <AppHeader />
      <div className="container py-5">
        <h1 className="text-center mb-4">Chefify - Ứng dụng công thức nấu ăn</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Header đã được tạo thành công!</h5>
                <p className="card-text">Đây là phần minh chứng cho việc tạo component Header.</p>
                <button className="btn btn-primary" style={{ backgroundColor: COLORS.primary }}>
                  Màu chủ đạo từ constants
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;