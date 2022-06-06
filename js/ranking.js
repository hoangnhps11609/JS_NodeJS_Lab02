let fullname = prompt('Nhập họ tên: ');
let points = prompt('Nhập điểm: ')

const upFullname = fullname.toUpperCase();

document.writeln(`<br>Họ tên sinh viên: ${upFullname}`)
document.writeln(`<br>Điểm: ${points}`)

if (points<5){
    document.writeln(`<br>Rớt`);
}else{
    document.writeln(`<br>Đậu`)
}