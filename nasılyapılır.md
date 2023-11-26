          JS ILE E COMMERCE SITESI NASIL YAPARIM :
¬¬
1)	Document e addEventListener eklerim kodlarimi bunun icine yazarim
2)	DOM dan lazim olan elementleri cagiririm
3)	Api yi cekerim	
a.	Async/awai icide try catch ile apiyi cekerim
b.	Try icinde if yapisi olustururum
c.	1. If response.ok ise json lastirir ve bunu products diye bir variable icinde tutarim.
2. gelen urunler object olarak gelecek bu yuzden kategorileri kontrol edebilmek icin katogoriler diye bir array acarim 
3.reduce ile products  gezerim bu arrayede product.category ile kategorileri toplarim
4.Daha sonra tarifini yapacagim urunleri ve kategorileri ekrana basma fonksiyonunu tam burada cagiririm
     4)    urunleri ekrana basma fonksiyonunu tarif ederim
	a.ilk basta sayfayi innerHtml ile temizlerim
	b.products I forEach ile gezerim.Destructuring yaparak products in id imge title , gibi istedigim ozelliklerini yakalarim
	c.Bu yakaladigim ozellikleri ile urunleri ekrana basmak icin productcard diye bir variable acaarim
	d.Productcard in nasil bir sey olmasini istiyorsam backstring icinde tarif ederim
	e.Productcardi  istedigim div e appen ederim

5)	Kategori butonlarini ekrana basacak fonksiyonu tarif ederim
a.buttonlari yerlestirecegim yeri DOM dan cekerim
b.bu yeri her seferinden innerHTML ile temizlerim
c.yukarida olusturdugum kategori isimlerini iceren arrayi forEach ile gezerim
d.her geziste bir buton create ederim
e.bu butona textcontent ile forEach ile gezdigim arraydeki elementler olan kategorinin ismini basarim.
f.switch case yapisi olustururum ve butonlarin renklerini belirlerim
g.olusturdugum butonlara addEventListener eklerim
h.Her click ile sonradan tarifini yazacagim bir filter fonksiyonu cagiririm
i.her click ile hangi kategoride oldugumuzu belirten texti html de istedigim yere basarim
k.Bu butonlari sonra dom da  cagirdigim yere append ederim

6)	filtreleme fonksiyonunu yazarim
a.	Secilen kategori diye bir variable  olustururum.Buna bir yukarida olusturdugum butonlara koydugum addeventlistener ile her tiklamada yazdirdigim kategori ismini assign ederim
b.	Inputa girilen deger diye bir variable olustururum.Buna searchInputu valuesunu assign ederim
c.	Filtrelenmis urunler diye bir variable olustururum
d.	Products  filter fonksiyonu ile gezerim. gezdigim urunun kategorisi secilen kategori ile aynimi veya all mi ve product.title input degeri ile ayni mi ona bakarak suzerim.Boylece hem kategoriye hemde searchinputa gore suzebilen bir fonksiyon yazmis olurum.

7)	Modal fonksiyonunu yazarim
a.modal title  DOM dan cagiririm
b.modal body I DOM dan cagiririm
c.Modal title a product.title gomerim
d.modalin body sine gomecegim yapiyi backstring ile tarif ederim
e.sonra bu yapiyi innerHtml ile modal body e gomerim
     8) Documente bir kez daha addEventListener eklerim ve aksiyonlarimi bunun icinde tarif ederim.Parametreli bir fonksiyon yazarim ve e.target ile dolasmya baslarim
	a.Sepete ekle butonuna tiklanirsa ne olacak onu yazarim
		1.hangi urunde tiklanmis ise onun id sini yakalarim
		2.sonra bu id yi  sepete ekleme fonksiyonuna atarim
	b.See Details butonuna tiklanirsa ne olacak onu yazarim
		1.hangi urunde tiklanmis ise onun id sini yakalarim
		2.products ta bu id ile eslesen objecti find metodu ile yakalarim 
		3.Bu objecti yukarida tarif ettigim modal gosterme fonksiyonun icine atarak burada cagiririm
	c.Sepetteki arttirma eksiltme ve silme butonlarina tiklanirsa ne olacak onu tarif ederim
		1.Kosul parantezinin icine or ile bu uc butondan biri tiklanirsa derim
		2.kosulu belirledikten sonra suslu parantez icine switch case ile her butonun askiyonunu anlatir ve o aksiyon yakalinrsa hangi fonksiyon cagirilacak onlari yazarim . Bu durumda ileride arttirma azaltam ve silme fonksiyonlari yazmam lazim
            9) Sepete urun ekleme fonksiyonunu tarif ederim
		1.eklenecek urun diye bir degisken tanimlarim bunu products ta find ile ara id ye gore eslerim
		2.varolan urun diye bir degisken belirler seoetteki urunler diye bir array de find ile id ye gore ararim
		3.if yapisinda sepette urun varsa sepetteki urunun miktarini arttir yoksa sepetteki urun arrayine ekle derim
		4.ileride tarifini yazacagim septeteki urunler toplam tutar ve toplam miktar duzenleme fonksiyonlarini hemen burada cagiririm
	10) sepetteki urunu arttirma butonunun fonksiyonunu yazarim
		1. sepet urunu diye bir degisken olusturur bunu sepetteki urunler diye olusturdugum onceki arrayed find ile arar ve miktarini arttir derim
		2. ileride tarifini yazacagim septeteki urunler toplam tutar ve toplam miktar duzenleme fonksiyonlarini hemen burada cagiririm
	11) septteki urunu azaltma fonksiyonunu burada yazarim
		1.sepet urunu diye bir degisken olusturur bunu sepetteki urunler diye olusturdugum onceki arrayed find ile arar ve miktarini azalt derim
		2. ileride tarifini yazacagim septeteki urunler toplam tutar ve toplam miktar duzenleme fonksiyonlarini hemen burada cagiririm
	12)sepetteki urunu kaldirma butonunun fonksiyonunu burada yazarim
		1.sepet urunu diye bir degisken olusturur bunu sepetteki urunler diye olusturdugum onceki arrayed find ile arar ve kaldir derim
		2. ileride tarifini yazacagim septeteki urunler toplam tutar ve toplam miktar duzenleme fonksiyonlarini hemen burada cagiririm
 	13) Ana sayfada sepetim butonu uzerindeki miktari gosteren kismi duzenleyen fonksiyonu tarif ederim
		1.septteki urun sayisi kismini domdan cagiririm
		2.toplam miktar diye bir degisken olusturum
		3.toplam miktari sepetteki urunler diye olusturdugum arrayi reduce ile gezerek her itemin miktarini topla seklinde gezerim
		4.sonra bunu doma gomerim
	14)Sepete yolladigim urunun orada goseterilmesini yani dom daki o kisma basilmasini saglayan fonksiyonu tarif ederim	
		1.sepet  kismini dom dan cagiririm
		2.her seferinde innerHtml ile temizle derim
		3.sepet urunleri arrayi ni forEach ile gezerim
		4.her geziste bir div olusturur bu div in icinde ne olmasini istiyorsam backstirn icinde tarif ederim
		5. Sonra bu divi sepet kismina append ederim

	15) yukaridaki fonksiyonlarin icinde cagirdigim guncelleme fonksiyonlarini burada tarif ederim
		1.Miktari guncelleyen fonksiyon 
			a.toplam miktar kismini dom dan cagiririm
			b.toplam deger diye bir degisken olustururum ve buna toplam degeri hesaplama diye bir fonksiyon assign ederim
			c.Domda cagirdigim toplam miktar kismina toplam degeri innertext ile gomerim
		2.yukarida assign ettigim toplam degeri hesaplama fonksiyonunu burada tarif ederim
			1.total diye bir degisken olustururum
			2.sepetteki urunleri forEack ile gezerim her itemin fiyat ve miktarini carpar total e += ile eklerim
			3.totali return eder toFixed ile duzenlerim
	16)en yukarida icine try catch ilea pi yi cektigim apiyi cagirma fonksiyonunu burada cagiririm


		