
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
─➤  curl -X POST -H "Content-Type:application/json" http://localhost:3000/create -d '{"kitapAdi":"book from console", "yazarinAdi":"yazar from console", "yayinEvi":"yayin evi console"}'       
{"id":"155c5762-12c2-4690-8712-ac0af6bdddf2","kitapAdi":"book from console","yazarinAdi":"yazar from console","yayinEvi":"yayin evi console"}
```
