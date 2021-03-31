# chongdacap

Tiện ích trình duyệt giúp định danh đa cấp!

# Report đa cấp

Nếu các bạn muốn report đa cấp có thể report qua [form](https://forms.gle/ZFtebEJUkFPydcDj9) này nhé.

# Cách cài đặt

- Bước 1: Tải `.zip` file ở phần [release](https://github.com/phamleduy04/chongdacap/releases) về và giải nén.
- Bước 2: Nhập địa chỉ `chrome://extensions/` vào thanh trình web của bạn.
- Bước 3: Bật chế độ `Developer Mode` ở góc bên phải
- Bước 4: Chọn `Load Unpacked` và dẫn tới folder vừa giải nén.

# API
Các bạn có thể truy cập vào API của extension một cách dễ dàng:
BaseURL: https://chongdacap.herokuapp.com/

-   **URL**
    
	   `/api/blacklist`
    
-   **Method:**
    
    `GET` 
    
-   **URL Params**
    
    **Optional:**
    
    `type=[array|json]` (default: json)
        
-   **Success Response:**
    
    -   **Code:**  200  
        **Content:**  `{"success":true,"response":[...],"length": x}` hoặc `["100009298983786","100036435135387", ...]`
