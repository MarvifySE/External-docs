# Länk i e-post

Du kan länka till en FOTO-3D©-visning direkt i ett mejl eller nyhetsbrev. Det är ett enkelt och effektivt sätt att låta mottagaren öppna visningen i ett nytt fönster – till exempel från ett nyhetsbrev, kampanjutskick eller en personlig kontakt.

---

## Viktigt att känna till

> Om du skickar ett vanligt mejl (t.ex. via Gmail eller Outlook) fungerar det **inte** att klistra in HTML-kod som `<a href="...">`.  
> I så fall visas det bara som text. För att skapa en klickbar länk måste du använda e-postprogrammets **infoga länk**-funktion.

---

## Så gör du – manuellt i Gmail

1. Skriv till exempel: `Se produkten i 3D`
2. Markera texten
3. Klicka på **infoga länk** (ikonen med en kedja 🔗)
4. Klistra in länken:  
   `https://v.marvify.io/?m=<modell-id>`
5. Klicka på **OK**

*I dom flesta fallen så känner gmail igen en länk automatiskt.*

---

## Så gör du – manuellt i Outlook

1. Skriv till exempel: `Se produkten i 3D`
2. Markera texten
3. Högerklicka och välj **Länk > Infoga länk** (eller använd menyfliken Infoga → Länk)
4. Klistra in länken:  
   `https://v.marvify.io/?m=<modell-id>`
5. Bekräfta

*I dom flesta fallen så känner outlook igen en länk automatiskt.*

---

## Om du använder ett e-postverktyg

Om du använder ett utskicksverktyg som **Mailchimp**, **Brevo** eller liknande, kan du välja att:

- Använda deras **visuella editor** (markera text → lägg till länk)
- Eller, om du är van vid det, använda deras **HTML-block** för att klistra in HTML-kod direkt:

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank" rel="noopener noreferrer">Se produkten i 3D</a>
```

---

## Vad gör `target="_blank"`?

Den öppnar länken i ett nytt fönster eller flik, så att mottagaren kan fortsätta läsa mejlet efteråt.

---

## Kompatibilitet

- Klickbara textlänkar fungerar i alla moderna e-postklienter (Gmail, Outlook, Apple Mail m.fl.)
- Om mottagaren inte ser HTML (ovanligt), är det bra att även visa länken i sin helhet:

```
https://v.marvify.io/?m=<modell-id>
```

---

## Tips – om ni vill använda ett e-postverktyg

Vanliga verktyg som stöder klickbara länkar och HTML-utskick:

- [Mailchimp](https://mailchimp.com/?currency=SEK) – En av de mest använda, lätt att komma igång med.
- [Brevo](https://www.brevo.com/) – Europeiskt verktyg med fokus på GDPR och kostnadseffektivitet.

> FOTO-3D©-visningar fungerar i alla verktyg så länge HTML-länkar stöds.

<sub>Notering: Vi har ingen koppling till de tjänster som nämns ovan och får ingen ersättning. De listas bara som exempel.</sub>
