let a = prompt('Nhập số dự đoán từ 10-15: ')
let x = 10 + Math.round(Math.random()*5);

if(a == x){
    alert(`Chúc mừng bạn`)
}else{
    alert(`Chúc bạn may mắn lần sau`)
}