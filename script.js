function isDivisible() {
  let a = +prompt('Nhập giá trị của a');
  let b = +prompt('Nhập giá trị của b');
  let result = a % b == 0 ? 'a chia hết cho b' : 'a không chia hết cho b';

  alert(result);
}

function isOldEnough() {
  let inputOld = +prompt('Nhập tuổi của học sinh');

  if (inputOld <= 15 && inputOld >= 100)
    alert('Học sinh không đủ điều kiện học lớp 10');
  else alert('Học sinh đủ điều kiện học lớp 10');
}

function isPositiveNumber() {
  let inputNumber = +prompt('Nhập số');

  if (inputNumber > 0) alert('Số đã nhập lớn hơn 0');
  else if (inputNumber < 0) alert('Số đã nhập nhỏ hơn 0');
  else alert('Số 0!! OKKKKKK');
}

function findMaxNumber() {
  let number1 = +prompt('Nhập số thứ 1');
  let number2 = +prompt('Nhập số thứ 2');
  let number3 = +prompt('Nhập số thứ 3');

  if (number1 > number2 && number1 > number3) alert(`Số ${number1} lớn nhất`);
  else if (number2 > number1 && number2 > number3)
    alert(`Số ${number2} lớn nhất`);
  else alert(`Số ${number3} lớn nhất`);
}

function rank() {
  let kiemTra = +prompt('Nhập điểm bài kiểm tra'); // 20%
  let giuaKi = +prompt('Nhập điểm bài thi giữa kì'); // 30%
  let cuoiKi = +prompt('Nhập điểm bài thi cuối kì'); // 50%
  let result = kiemTra * 0.2 + giuaKi * 0.3 + cuoiKi * 0.5;

  if (result >= 8.0) alert('Học sinh giỏi');
  else if (result >= 6.5) alert('Học sinh khá');
  else if (result >= 5) alert('Học sinh trung bình');
  else alert('Học sinh yếu. Học ngu quá !!!');
}

function rosé() {
  let rosesssssssss = +prompt('Mức hoa hồng (%)');
  let cost = +prompt('Nhập giá bán');

  alert(`Số tiền hoa hồng bạn nhập được: ${(rosesssssssss / 100) * cost}`);
}

function phoneCharge() {
  let input = +prompt('Nhập vào thời gian gọi (giây)');

  alert(
    `Số tiền phải trả cước điện thoại là: ${Math.floor((input / 60) * 3.3)}`
  );
}

function square() {
  let a = +prompt('Hãy nhập chiều dài');
  let b = +prompt('Hãy nhập chiều rộng');

  alert(`Diện tích hình chữ nhật: ${a * b}`);
}

function triangle() {
  let a = +prompt('Hãy nhập cạnh kề thứ 1');
  let b = +prompt('Hãy nhập cạnh kề thứ 2');

  alert(`Diện tích tam giác vuông đó là: ${(a * b) / 2}`);
}

function ﬁrstDegree() {
  let a = +prompt('Nhập ẩn số a');
  let b = +prompt('Nhập ẩn số b');

  if (a == 0) {
    alert('Phương trình vô nghiệm');
  } else {
    alert(`Nghiệm của phương trình là: ${-b / a}`);
  }
}

function secondDegree() {
  let a = +prompt('Nhập ẩn số a');
  let b = +prompt('Nhập ẩn số b');
  let c = +prompt('Nhập ẩn số c');

  if (a == 0) {
    if (b == 0) {
      if (c == 0) {
        alert('Vô số nghiệm');
      } else {
        alert('Phương trình vô nghiệm');
      }
    } else {
      alert(`Nghiệm phương trình x = ${-c / b}`);
    }
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      alert('Phương trình vô nghiệm');
    } else if (delta == 0) {
      alert(`Nghiệm của phương trình x1 = x2 = ${-b / (2 * a)}`);
    } else {
      alert(
        `Nghiem x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}, 
        x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`
      );
    }
  }
}

function isAge() {
  let number = +prompt('Nhập vào số tuổi cần kiểm tra');

  if (number > 0 && number <= 120) alert('Tuổi hợp lệ');
  else alert('Tuổi không hợp lệ');
}

function isSideTriangle() {
  let a = +prompt('Nhập cạnh thứ 1');
  let b = +prompt('Nhập cạnh thứ 2');
  let c = +prompt('Nhập cạnh thứ 3');

  if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b)
    alert('Ba cạnh có thể tạo thành 1 tam giác');
  else alert('Ba cạnh không thể tạo thành 1 tam giác');
}

function electricPrice() {
  /* 
      Bậc 1	 | Cho kWh từ   | 0 - 50	        | 1.678đ
      Bậc 2	 | Cho kWh từ   | 51 - 100	      | 1.734đ
      Bậc 3	 | Cho kWh từ   | 101 - 200	      | 2.014đ
      Bậc 4	 | Cho kWh từ   | 201 - 300	      | 2.536đ
      Bậc 5	 | Cho kWh từ   | 301 - 400	      | 2.834đ
      Bậc 6	 | Cho kWh từ   | 401 trở lên	    | 2.927đ
      */

  let input = +prompt('Nhập số điện đã sử dụng');
  function calc(input) {
    if (input > 0 && input <= 50) {
      return input * 1.678;
    } else if (input <= 100) {
      return 50 * 1.678 + (input - 50) * 1.734;
    } else if (input <= 200) {
      return 50 * 1.678 + 50 * 1.734 + (input - 100) * 2.014;
    } else if (input <= 300) {
      return 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (input - 200) * 2.536;
    } else if (input <= 400) {
      return (
        50 * 1.678 +
        50 * 1.734 +
        100 * 2.014 +
        100 * 2.536 +
        (input - 300) * 2.834
      );
    } else {
      return (
        50 * 1.678 +
        50 * 1.734 +
        100 * 2.014 +
        100 * 2.536 +
        100 * 2.834 +
        (input - 400) * 2.927
      );
    }
  }
  alert(`Số tiền bạn phải trả: ${calc(input)}`);
}

function calculateTax() {
  let income = +prompt('Thu nhập của bạn là');
  alert(`Thuế suất bạn phải nộp = 20% * ${income} = ${0.2 * income}`);
}

function money() {
  /* FV = PV x (1 + i)^n
      FV: giá trị của tương lai ở năm thứ n
      PV: giá trị của số vốn tại thời điểm hiện tại
      i: lãi suất
      n: số năm
      */

  let moneyBefore = +prompt('Nhập số tiền bạn gửi');
  let time = +prompt('Nhập thời gian bạn muốn gửi (-> ngày)');
  let rateMonth = +prompt('Nhập lãi suất hàng tháng');
  alert(
    `Số tiền bạn nhận được sau ${time} ngày là: ${
      moneyBefore * (1 + rateMonth) ** time
    }`
  );
}
