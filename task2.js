// son va harflar aralashib yotgan payt faqat harflarni chiqarsin sonlarni tashlab ketsin masalan a=S45h8e9r78z98o78d javob:Sherzod deb chiqsin 
let a=prompt("Harflar va sonlarni aralashtirib yozing istaganizcha");
let i=-1;
while(i<a.length-1){
  i++
  if(a[i]=Number(a[i])) {continue}
  document.write(String(a[i]));
  console.log(String(a[i]));
}
