const mongoose = require('mongoose');

// Kết nối MongoDB với mongoose
mongoose.connect('mongodb+srv://thanhtamdang103:admin123@cluster0.rmnl5s8.mongodb.net/test', { useNewUrlParser: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch((err) => console.log('Lỗi kết nối MongoDB: ', err));

// Tạo một schema
const mySchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// Tạo một model
const MyModel = mongoose.model('MyModel', mySchema);


// Create
const newData = new MyModel({ name: 'John', age: 30, email: 'john@example.com' });
newData.save()
  .then((savedData) => console.log('Dữ liệu được lưu vào MongoDB: ', savedData))
  .catch((err) => console.log('Lỗi lưu dữ liệu vào MongoDB: ', err));
  mongoose.connection.close() 


// // Read
// MyModel.find({})
//   .then((data) => console.log('Dữ liệu được lấy từ MongoDB: ', data))
//   .catch((err) => console.log('Lỗi lấy dữ liệu từ MongoDB: ', err));

//Update
// MyModel.updateOne({ name: 'John' }, { age: 31 })
//   .then((result) => console.log('Dữ liệu đã được cập nhật trong MongoDB'))
//   .catch((err) => console.log('Lỗi cập nhật dữ liệu trong MongoDB: ', err));

//Delete
// MyModel.deleteOne({ name: 'John' })
//   .then((result) => console.log('Dữ liệu đã được xóa khỏi MongoDB'))
//   .catch((err) => console.log('Lỗi xóa dữ liệu trong MongoDB: ', err));
//Delete nhiều
// People.deleteMany({ status: "D" })
//   .then((result) => console.log('Đã xóa tất cả các documents có trường "status" có giá trị là "D"'))
//   .catch((err) => console.log('Lỗi xóa documents: ', err));

