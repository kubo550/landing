import { b, t, type BlogPost } from './types';

export const post: BlogPost = {
  slug: 'wordpress-bez-aktualizacji-kasyno-online',
  date: '2026-05-15',
  readingMinutes: 5,
  content: {
    pl: {
      title:
        'Strona klienta od 2019 roku bez aktualizacji. W zeszłym tygodniu zaczęła reklamować kasyno w Irlandii.',
      lead: 'WordPress postawiony lata temu, zero backupu, kontakt do osoby, która go stawiała, dawno utracony. Zamiast oferty: bonus 500 € i spiny w Dublin Casino. Klasyk, który zdarza się co tydzień jakiejś polskiej firmie.',
      tags: ['Case study', 'WordPress', 'Bezpieczeństwo'],
      blocks: [
        { kind: 'h2', text: 'Co się stało' },
        {
          kind: 'p',
          nodes: [
            t(
              'Strona, która od 2019 roku stała na WordPressie i przez ten czas nie dostała ani jednej aktualizacji. Pewnego dnia klienci zaczęli dzwonić, że „coś się dzieje na stronie". Wpisujesz adres, i zamiast oferty masz reklamę kasyna online z bonusem powitalnym po irlandzku.',
            ),
          ],
        },
        {
          kind: 'p',
          nodes: [
            t(
              'To nie sabotaż, nie zemsta, nie nikt „celowo zaatakował akurat tę firmę". To zwykły bot, który skanuje internet w poszukiwaniu starych wtyczek. Trafił, wszedł, podmienił.',
            ),
          ],
        },
        { kind: 'h2', text: 'Dlaczego to działa' },
        {
          kind: 'p',
          nodes: [
            t('WordPress to '),
            b('około 43% internetu'),
            t(
              ', co oznacza, że jest też 43% celów dla botów skanujących znane luki 24 godziny na dobę. Wtyczka, której nikt nie aktualizował od kilku lat, to nie „stara wtyczka". To otwarte drzwi z tabliczką „wejdź".',
            ),
          ],
        },
        {
          kind: 'p',
          nodes: [
            t(
              'W tym przypadku atakujący nawet się nie ukrywał: wstrzyknął przekierowania, ale tylko dla ruchu z Google. Otwierasz stronę bezpośrednio, widzisz swoją ofertę. Wchodzisz z wyszukiwarki, lądujesz w kasynie. To tzw. ',
            ),
            b('cloaking'),
            t(
              ', i jest dokładnie tak paskudny, jak brzmi: kradnie Ci ruch z SEO, a Ty nawet nie widzisz, że coś jest nie tak.',
            ),
          ],
        },
        { kind: 'h2', text: 'Dlaczego nie da się tego ogarnąć samemu' },
        {
          kind: 'p',
          nodes: [t('Standardowy scenariusz przy nieaktualizowanej stronie:')],
        },
        {
          kind: 'ul',
          items: [
            [t('login do panelu administratora, utracony albo nieaktualny,')],
            [t('hasło, nie pamiętamy,')],
            [t('kontakt do osoby, która stronę stawiała, odbija lub nieaktywny,')],
            [t('hosting, wykupiony „gdzieś tam", w jakiejś firmie, której nazwa się rozmyła,')],
            [t('backupy, nie istnieją.')],
          ],
        },
        {
          kind: 'p',
          nodes: [
            t('To moment, w którym większość firm rezygnuje i mówi: '),
            { kind: 'em', value: '„trudno, postawimy nową stronę od zera"' },
            t('. Tracąc przy okazji '),
            b('całą historię w Google, treści budowane latami i linki zwrotne z całego internetu'),
            t('. Z marketingowego punktu widzenia: powrót do punktu zero.'),
          ],
        },
        { kind: 'h2', text: 'Wayback Machine, czyli internet niczego nie zapomina' },
        {
          kind: 'p',
          nodes: [
            t('Zanim się zacznie cokolwiek odbudowywać od zera, warto sprawdzić '),
            b('web.archive.org'),
            t(
              '. Większość stron jest tam snapshotowana regularnie. W tym przypadku kropki w kalendarzu sięgały początku istnienia domeny. Wystarczy wybrać ostatnią „czystą" wersję i ma się komplet: opisy, zdjęcia, strukturę, dane techniczne.',
            ),
          ],
        },
        {
          kind: 'p',
          nodes: [
            t(
              'Reszta to robota mrówki: ręczne wyciąganie treści, zdjęć, układu. Czasem Archive zapisał tekst, ale nie zapisał wersji 1200 px zdjęcia, wtedy ratuje Google Cache. Czasem trzeba dorobić od zera. Zasada jest jedna: ',
            ),
            b('żaden bajt nie ginie'),
            t(', dopóki ktoś chce go znaleźć.'),
          ],
        },
        { kind: 'h2', text: 'Co zmieniło się przy okazji' },
        {
          kind: 'p',
          nodes: [t('Skoro i tak składamy stronę od nowa, to składamy ją mądrzej. Wynik:')],
        },
        {
          kind: 'ul',
          items: [
            [
              b('Czas ładowania spadł z 6,8 s do 1,2 s'),
              t(' (Lighthouse 98/100).'),
            ],
            [t('Strona w końcu wygląda jak strona, a nie rozjechana tabela na telefonie.')],
            [
              t('Zamiast WordPressa: statyczny stack. Nie ma admin panelu, nie ma wtyczek, nie ma czego włamać.'),
            ],
            [t('Stare URL-e przekierowane 301, pozycje w Google odzyskane w trzy tygodnie.')],
            [
              t('Formularz kontaktowy, który '),
              { kind: 'em', value: 'naprawdę' },
              t(' działa. Poprzedni od dwóch lat wysyłał maile w pustkę.'),
            ],
          ],
        },
        { kind: 'h2', text: 'Co możesz sprawdzić u siebie w 10 minut' },
        {
          kind: 'ol',
          items: [
            [
              t(
                'Otwórz swoją stronę w trybie incognito, najlepiej z innej sieci (np. dane mobilne). Cache w przeglądarce potrafi kłamać.',
              ),
            ],
            [
              t('Wpisz w Google '),
              { kind: 'code', value: 'site:twojadomena.pl' },
              t(
                '. Jeśli widzisz tytuły po chińsku, koreańsku albo „Best Online Casino 2025", masz problem.',
              ),
            ],
            [
              t(
                'Sprawdź datę ostatniej aktualizacji WordPressa i wtyczek. Wszystko starsze niż pół roku to żółta lampka. Starsze niż rok: czerwona.',
              ),
            ],
          ],
        },
        { kind: 'h2', text: 'Morał' },
        {
          kind: 'p',
          nodes: [
            t('Jeśli Twoja strona stoi na WordPressie, a ostatnia aktualizacja była dawno temu, to nie jest pytanie '),
            { kind: 'em', value: 'czy' },
            t(', tylko '),
            { kind: 'em', value: 'kiedy' },
            t(
              ' zadzwoni pierwszy klient z pytaniem o kasyno w Irlandii. Dobra wiadomość: nawet jak już zadzwoni, da się to odkręcić. Tylko taniej i szybciej jest zadziałać wcześniej.',
            ),
          ],
        },
      ],
    },
    en: {
      title:
        'A client site running since 2019 with zero updates. Last week it started advertising an Irish online casino.',
      lead: 'WordPress installed years ago, no backups, the person who built it long gone. Instead of the offer: a 500 € welcome bonus and free spins at Dublin Casino. A classic that happens to some Polish business every single week.',
      tags: ['Case study', 'WordPress', 'Security'],
      blocks: [
        { kind: 'h2', text: 'What happened' },
        {
          kind: 'p',
          nodes: [
            t(
              'A site that had been running on WordPress since 2019 without a single update. One day clients started calling that „something is going on with the site". You type in the address, and instead of the offer you get an online casino ad with a welcome bonus in Irish.',
            ),
          ],
        },
        {
          kind: 'p',
          nodes: [
            t(
              'This is not sabotage, not revenge, not someone „deliberately attacking this particular company". It is a plain bot scanning the internet for old plugins. It found one, walked in, swapped things out.',
            ),
          ],
        },
        { kind: 'h2', text: 'Why this works' },
        {
          kind: 'p',
          nodes: [
            t('WordPress powers '),
            b('roughly 43% of the internet'),
            t(
              ', which means 43% of the targets for bots scanning known vulnerabilities around the clock. A plugin nobody has updated for a few years is not „an old plugin". It is an open door with a „come in" sign on it.',
            ),
          ],
        },
        {
          kind: 'p',
          nodes: [
            t(
              'In this case the attacker barely bothered hiding: they injected redirects, but only for traffic coming from Google. Open the site directly, you see the real offer. Click in from search results, you land in a casino. This is called ',
            ),
            b('cloaking'),
            t(
              ', and it is exactly as nasty as it sounds: it steals your SEO traffic and you never even see anything is wrong.',
            ),
          ],
        },
        { kind: 'h2', text: 'Why you cannot fix this on your own' },
        {
          kind: 'p',
          nodes: [t('The standard scenario for a neglected site:')],
        },
        {
          kind: 'ul',
          items: [
            [t('admin panel login, lost or outdated,')],
            [t('password, nobody remembers it,')],
            [t('the person who built the site, unreachable or inactive,')],
            [t('hosting, bought „somewhere", at some company whose name has faded out of memory,')],
            [t('backups, do not exist.')],
          ],
        },
        {
          kind: 'p',
          nodes: [
            t('This is the moment when most businesses give up and say: '),
            { kind: 'em', value: '„never mind, we will just build a new site from scratch"' },
            t('. Losing in the process '),
            b('all of their Google history, years of content, and backlinks from across the web'),
            t('. From a marketing standpoint: back to square one.'),
          ],
        },
        { kind: 'h2', text: 'Wayback Machine, or the internet forgets nothing' },
        {
          kind: 'p',
          nodes: [
            t('Before rebuilding anything from scratch, it is worth checking '),
            b('web.archive.org'),
            t(
              '. Most sites are snapshotted there regularly. In this case the dots on the calendar reached all the way back to when the domain was first registered. Pick the last „clean" version and you have the whole set: descriptions, photos, structure, technical details.',
            ),
          ],
        },
        {
          kind: 'p',
          nodes: [
            t(
              'The rest is ant work: pulling out text, images, layout by hand. Sometimes Archive saved the text but not the 1200 px version of a photo, and Google Cache covers the gap. Sometimes you have to rebuild a piece from zero. The rule is one: ',
            ),
            b('no byte is ever lost'),
            t(', as long as someone wants to find it.'),
          ],
        },
        { kind: 'h2', text: 'What changed in the process' },
        {
          kind: 'p',
          nodes: [t('Since we are rebuilding anyway, we rebuild smarter. The result:')],
        },
        {
          kind: 'ul',
          items: [
            [
              b('Load time dropped from 6.8 s to 1.2 s'),
              t(' (Lighthouse 98/100).'),
            ],
            [t('The site finally looks like a site, not a broken table on a phone.')],
            [
              t('Instead of WordPress: a static stack. No admin panel, no plugins, nothing to break into.'),
            ],
            [t('Old URLs 301-redirected, Google rankings recovered within three weeks.')],
            [
              t('A contact form that '),
              { kind: 'em', value: 'actually' },
              t(' works. The previous one had been sending emails into the void for two years.'),
            ],
          ],
        },
        { kind: 'h2', text: 'A 10-minute check you can run on your own site' },
        {
          kind: 'ol',
          items: [
            [
              t(
                'Open your site in an incognito window, ideally on a different network (mobile data is fine). Your browser cache can lie to you.',
              ),
            ],
            [
              t('Search Google for '),
              { kind: 'code', value: 'site:yourdomain.com' },
              t(
                '. If you see titles in Chinese, Korean, or „Best Online Casino 2025", you have a problem.',
              ),
            ],
            [
              t(
                'Check the last update date for WordPress and its plugins. Anything older than six months is a yellow light. Older than a year: red.',
              ),
            ],
          ],
        },
        { kind: 'h2', text: 'The takeaway' },
        {
          kind: 'p',
          nodes: [
            t('If your site runs on WordPress and the last update was a long time ago, the question is not '),
            { kind: 'em', value: 'whether' },
            t(' but '),
            { kind: 'em', value: 'when' },
            t(
              ' the first client will call asking about a casino in Ireland. Good news: even then, it can be untangled. It is just cheaper and faster to act earlier.',
            ),
          ],
        },
      ],
    },
  },
};
