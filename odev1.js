
function Run (numbers,target){  //toplama yerine çıkarma yapılacak. işleme alınan her sayı diziden silinecek.
    for (let index = 0; index < numbers.length; index++) {
        let secure = numbers[index]  // işlemdeki sayı silinmeden önce ayrılıyor
        numbers.splice(index,1,null) // 2 tane aynı sayıdan olması ihtimaline karşı, işlemdeki sayı silindi.
        //console.log(numbers)  //açıklama satırını açarak dizinin son durumunu görebilirsiniz.
        let element = numbers.indexOf(target - secure) // çıkarma sonucu dizide aranıyor. 
        if (element != -1) {console.log(index,element)} // dönen bir index varsa ekrana yazdırıyor.     
    }
}
let nums = [2,7,11,15,1,8] // toplamları hedef olan tüm kombinasyonların çıktısını verecektir. 
let target = 9
Run(nums,target)