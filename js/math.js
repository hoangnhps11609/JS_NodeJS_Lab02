let num = prompt("Nhập giá trị số");

if (isNaN(num)) {
  alert(`Số vừa nhập không hợp lệ`);
} else {
  const sprt = Math.sqrt(num);
  const pow = Math.pow(num, 2);
  const round = Math.round(num);
  document.writeln(`<br>Giá trị nhập vào ${num}`);
  document.writeln(`<br>Căn bậc 2 của ${num} là ${sprt}`);
  document.writeln(`<br>Bình phương của ${num} là ${pow}`);
  document.writeln(`<br>Làm tròn ${num} là ${round}`);
}
