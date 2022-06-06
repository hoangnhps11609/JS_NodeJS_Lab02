const a = prompt("Nhập a: ");
const b = prompt("Nhập b: ");
const c = prompt("Nhập c: ");

if (a == 0) {
  const x = -c / b;
  document.writeln(`PT có 1 biến duy nhất: ${x}`);
} else {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta == 0) {
    const x = (-b / 2) * a;
    document.writeln(`PT có 1 biến duy nhất: ${x}`);
  } else if (delta < 0) {
    document.writeln(`PT vô nghiệm`);
  } else {
    const x1 = (-b - Math.sqrt(delta)) / (2 * a);
    const x2 = (-b + Math.sqrt(delta)) / (2 * a);
    document.writeln(`Pt có 2 nghiệm phân biệt : ${x1}, ${x2}`);
  }
}
