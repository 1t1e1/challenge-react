
## root page
```
curl http://localhost:3000/        
{"0":{"id":0,"kitapAdi":"Gulun adi","yazarinAdi":"umberto eco","yayinEvi":"Can Yayinlari"},"1":{"id":1,"kitapAdi":"Gulun adi1","yazarinAdi":"umberto eco1","yayinEvi":"Can Yayinlari"},"2":{"id":2,"kitapAdi":"Gulun adi2","yazarinAdi":"umberto eco2","yayinEvi":"Can Yayinlari"},"3":{"id":3,"kitapAdi":"Gulun adi3","yazarinAdi":"umberto eco3","yayinEvi":"Can Yayinlari"},"4":{"id":4,"kitapAdi":"Gulun adi4","yazarinAdi":"umberto eco4","yayinEvi":"Can Yayinlari"}}%
```

## detail page
```
curl http://localhost:3000/detail/1
{"id":1,"kitapAdi":"Gulun adi1","yazarinAdi":"umberto eco1","yayinEvi":"Can Yayinlari"}%
```

## create page

```
╰─➤ curl http://localhost:3000/create -X POST  
{"id":"af43eabf-35d5-48bd-91ba-0ffee9f3f8d1","kitapAdi":"deneme","yazarinAdi":"deneme","yayinEvi":"deneme"}%                                                    ╭
╰─➤  curl http://localhost:3000/detail/af43eabf-35d5-48bd-91ba-0ffee9f3f8d1
{"id":"af43eabf-35d5-48bd-91ba-0ffee9f3f8d1","kitapAdi":"deneme","yazarinAdi":"deneme","yayinEvi":"deneme"}%                                                    ╭
```
