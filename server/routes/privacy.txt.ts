import { defineEventHandler } from 'h3'
export default defineEventHandler(async(event) => { 

  appendHeader(event, 'Content-Type', 'text/plain')

  return `
# Personvernerklaering (GDPR)
Leseveiledning: De norske tegne i alfabetet er blitt byttet ut, med ae, o og aa.

## "Google Play" krever personvernerklaering
Google's regler for publisering av apper i "Google Play Store":
- "Apper skal ha personvernregler selv om de ikke har tilgang til personlige og sensitive brukerdata." (NO)
- "Apps that do not access any personal and sensitive user data must still submit a privacy policy. Please add or update your privacy policy,..." (EN)

## Hva slags personopplysninger behandles?
- Brukeraktivitet: Lese- og handlingshistorikk fra app og nettsider. Samt teknisk informasjon om enhetene de bruker.
Herettter benyttes begrepet brukeraktivitet istedenfor personopplysninger, fordi det beskriver de personopplysningene som behandles.

### Formaal
Formaalet er todelt, (1) kontroll av uonsket/ulovlig brukeraktivitet og (2) finne grunnlag for aa gjore appen bedre for brukerne.

## Om innhenting av brukeraktivitet
Opplysningene samles inn av "Google" og finnes i "Google Play Console", "Google Search Console" og "Google Analytics".
- Utvikleren samler ikke inn andre opplysninger enn det som samles inn og lagres av Google.
- Utvikleren har tilgang til denne informasjonen via Google, pga. verifisert eierskap til domenet hvor PWA er utplassert (se #### Url nedenfor).
- Utvikleren kopierer eller lagrer ikke brukeraktiviteten, som finnes paa Google', paa andre steder.

## Juridisk ansvar
Utvikleren erkjenner ansvar for studering av den brukeraktivit som Google' gjor tilgjengelig for utviklerne via: 
- Google Search Console: https://search.google.com/search-console/about
- Google Analytics: https://en.wikipedia.org/wiki/Google_Analytics

## Sporsmaal og innsigelser
Sporsmaal eller innsigelser til at utvikleren benytter seg av Googles anonymiserte opplysninger om brukeraktivitet av nevnte app og pwa, kan sendes paa email:
- jur.eleison@gmail.com

## Klage paa behandling av brukeraktivitet
I tillegg til aa klage til epostadressen nevnt i forrige avsnitt, kan du klage til Datatilsynet (i Norge), dersom du mener at han gjor noe uriktig.
- www.datatilsynet.no

## Om appen og utvikleren
### Om appen
#### Url
Appen er tilknyttet en pwa (via twa) som er utplassert paa et underdomene under Vercel.app med folgende url:
- https://eleison.vercel.app

#### Appnavn
Merk at appnavnet er:
- "Eleisons Bibel"

#### Aapen kildekode
Kildekode som ligger til grunn for bygging av denne appen (med @bubblewrap) er aapen og offentlig:
- https://github.com/lovkyndig/eleison

### Om Utvikleren
#### GitHub-konto
Det fremgaar ovenfor (av GitHub-konto) at utviklerens navn paa GitHub er:
- "lovkyndig".

#### Google utvikler-konto
Det klargjores at utviklerens navn paa Google Play Store er det samme som hans etternavn, nemlig 
- "Eleison".


Redigert: Juni 01, 2023
  `
})