function skillsMember() {
    var member = document.getElementById('member');
    var memberValue = member.value;
    var memberLength = memberValue.length;
    var memberMsg = document.getElementById('memberMsg');
    if (memberLength < 1) {
        memberMsg.innerHTML = '請輸入會員帳號';
        memberMsg.style.color = 'red';
    } else {
        memberMsg.innerHTML = '';
    }
}