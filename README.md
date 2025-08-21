# QRCODE_GENERATOR

A simple Node.js application that generates a QR Code from any URL you provide.  
The QR code is saved as **`qr_img.png`** and the URL is stored in **`URL.txt`**.

---

## 📌 Features
- ✅ Generate a QR code from any URL  
- ✅ Saves the QR code as a PNG image  
- ✅ Stores the original URL in a text file  

---

## ⚡ Installation & Usage

### 1. Clone the repository
```bash
git clone https://github.com/ARYAN3012-G/QRCode_Generator.git
cd QRCode_Generator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
node index.js
```

### 4. Enter your URL  
The app will automatically:  
- Save the QR code as **`qr_img.png`**  
- Save the entered URL inside **`URL.txt`**

---

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)  
- [Inquirer](https://www.npmjs.com/package/inquirer) (for user input)  
- [qr-image](https://www.npmjs.com/package/qr-image) (for QR code generation)  
- [fs](https://nodejs.org/api/fs.html) (for file system operations)  

---

## 📸 Example

**Input:**  
```
ENTER URL: https://github.com/ARYAN3012-G
```

**Output:**  
- `qr_img.png` → QR code image  
- `URL.txt` → contains the entered URL  

---

## 👨‍💻 Author
**Aryan (@ARYAN3012-G)**  
🔗 [GitHub Profile](https://github.com/ARYAN3012-G)  

---
