import { defineEventHandler } from 'h3'
export default defineEventHandler(async(event) => { 

  appendHeader(event, 'Content-Type', 'text/plain')

  return `
# Personvernerklæring (GDPR)
## "Google Play" krever personvernerklæring
Google's regler for publisering av apper i "Google Play Store":
- "Apper må ha personvernregler selv om de ikke har tilgang til personlige og sensitive brukerdata."
Sitat (på norsk) fra de nødvendige regelkravene i "Google Play Console". Engelsk version:
- "Apps that do not access any personal and sensitive user data must still submit a privacy policy. Please add or update your privacy policy,..."

## Hva slags personopplysninger behandles?
- Brukeraktivitet: Lese- og handlingshistorikk fra app og nettsider. Samt teknisk informasjon om enhetene de bruker.
Herettter benyttes begrepet brukeraktivitet istedenfor personopplysninger, fordi det beskriver de personopplysningene som behandles.

### Formål
Formålet er todelt, (1) kontroll av uønsket/ulovlig brukeraktivitet og (2) finne grunnlag for å gjøre appen bedre for brukerne.

## Om innhenting av brukeraktivitet
Opplysningene samles inn av "Google" og finnes i "Google Search Console" og "Google Analytics".
- Utvikleren samler ikke inn andre opplysninger enn det som samles inn og lagres av Google.
- Utvikleren har tilgang til denne informasjonen via hans utviklerkonto på Google, som er verifisert ved eierskap til domenet hvor PWA er utplassert (se #### Url nedenfor).
- Utvikleren kopierer eller lagrer ikke brukeraktiviteten, som finnes på Google', på andre steder.

## Juridisk ansvar
Utvikleren erkjenner å være ansvarlig for å studere den brukeraktivitet som Google' gjør tilgjengelig for utviklerne via: 
- Google Search Console: https://search.google.com/search-console/about
- Google Analytics: https://en.wikipedia.org/wiki/Google_Analytics

## Spørsmål og innsigelser
Dersom du har spørsmål eller innsigelser til at utvikleren benytter seg av Googles anonymiserte opplysninger om brukeraktivitet av nevnte app og pwa, 
kan sendes på email:
- jur.eleison@gmail.com

## Klage på behandling av brukeraktivitet
I tillegg til å klage til epostadressen nevnt i forrige avsnitt, kan du klage til Datatilsynet (i Norge), dersom du mener at han gjør noe uriktig.
- www.datatilsynet.no

## Om appen og utvikleren
### Om appen
#### Url
Appen er tilknyttet en pwa (via twa) som er utplassert Vercel på følgende url:
- https://eleison.vercel.app

#### Appnavn
Merk at appnavnet er:
- "Eleison"

#### Åpen kildekode
Kildekode som ligger til grunn for bygging av denne appen (med @bubblewrap) er åpen og offentlig:
- https://github.com/lovkyndig/eleison

### Om Utvikleren
#### GitHub-konto
Det fremgår ovenfor (av GitHub-konto) at utviklerens navn på GitHub er:
- "lovkyndig".

#### Google utvikler-konto
Det klargjøres at utviklerens navn på Google Play Store er det samme som hans etternavn, nemlig 
- "Eleison".


Redigert: Mai 09, 2023
  `
})