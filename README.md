<div align="center">
  <h1>Formularz</h1>
</div>

### [WEJDŹ NA STRONĘ](https://form-probierz.netlify.app/)

#### Autorka:
- [Marta Probierz](https://github.com/marta-probierz)

## Cel projektu
Celem projektu było dostarczenie aplikacji „Formularz” pozwalającej użytkownikom na wpisanie odpowiednich danych oraz sprawdzenie poprawności użytego numeru PESEL bądź NIP.

## Działanie aplikacji

### Strona główna

Na stronie głównej znajduje się pasek narzędzi oraz formularz.

#### - Pasek narzędzi

Zawiera on funkcję przełączania na dark bądź light mode.
![Zrzut ekranu 2022-08-07 o 13 27 06](https://user-images.githubusercontent.com/75137091/183288643-908c9397-c701-4ea4-a692-ae33b2304097.png)
![Zrzut ekranu 2022-08-07 o 13 27 13](https://user-images.githubusercontent.com/75137091/183288649-898871b1-dc52-4e52-981b-4e97beee6cdb.png)

#### - Formularz

Główna część aplikacji to formularz. Znajduje się w nim kilka pól, między innymi: imię, nazwisko, przyciski wyboru, dzięki którym użytkownik może wybrać czy jest osobą czy firmą (po kliknięciu na „Osoba” pojawi się dodatkowe pole „PESEL”, z kolei po kliknięciu „Firma” - „NIP”), a także pole pozwalające na wgranie zdjęcia z dysku. 
![Zrzut ekranu 2022-08-07 o 17 52 42](https://user-images.githubusercontent.com/75137091/183299582-bd6b2af0-37cb-4ad0-8c7b-f30401b8a557.png)


#### Walidacja
W formularzu została przeprowadzona walidacja. 
- Pole wyboru osoby bądź firmy jest obowiązkowe. 
![Zrzut ekranu 2022-08-07 o 13 27 29](https://user-images.githubusercontent.com/75137091/183288826-91880124-3f6d-4eec-afb7-7bd222af22c5.png)

- Pola PESEL oraz NIP posiadają walidację możliwości wpisania wyłącznie cyfr, prawidłowej długości danego numeru (PESEL - 11 cyfr, NIP - 10 cyfr), a także ogólnej poprawności wprowadzonych danych (zostały zastosowane funkcje, w których zostały zadeklarowane odpowiednie wagi cyfr, zmienna sumująca, działanie odejmowania lub dzielenia oraz przypisanie do zmiennej ostatniej cyfry, która jest cyfrą kontrolną).
W przypadku niedokonania wyboru lub wpisania niepoprawnych danych, użytkownik zauważy odpowiednie komunikaty pod danym polem.
![Zrzut ekranu 2022-08-07 o 13 29 17](https://user-images.githubusercontent.com/75137091/183288885-7769db69-5952-4431-a7b5-05145c0a048f.png)
![Zrzut ekranu 2022-08-07 o 13 29 29](https://user-images.githubusercontent.com/75137091/183288891-64adeca7-5e1a-4ac3-aa19-2a29745676e8.png)
![Zrzut ekranu 2022-08-07 o 13 29 33](https://user-images.githubusercontent.com/75137091/183288894-9a43375a-d725-4ed0-b9af-9063d2af3693.png)
![Zrzut ekranu 2022-08-07 o 13 29 31](https://user-images.githubusercontent.com/75137091/183288896-9ee50732-03c7-4d98-9d71-db8922abb447.png)

### Strona Add Contractor

Po wpisaniu danych zostanie wyświetlony komunikat o pozytywnym lub negatywnym zapisie, po czym użytkownik zostaje przeniesiony na stronę Add Contractor. Znajduje się na niej przycisk, kliknięcie którego przeniesie użytkownika na stronę formularza.
![Zrzut ekranu 2022-08-07 o 17 53 25](https://user-images.githubusercontent.com/75137091/183299617-323c3752-57ed-4563-a0f2-0d481682f720.png)
![Zrzut ekranu 2022-08-07 o 13 32 13](https://user-images.githubusercontent.com/75137091/183288750-1ba37b8c-2de5-4c49-aa03-6b1932f78abb.png)


 ### Strona Not Found

Dodatkowo została przygotowana strona Not Found. W przypadku wpisania błędnego adresu, użytkownik zostanie na nią przeniesiony. Znajduje się tu informacja o tym, że strona nie została znaleziona oraz przycisk, kliknięcie którego przeniesie użytkownika na stronę formularza.
![Zrzut ekranu 2022-08-07 o 13 32 31](https://user-images.githubusercontent.com/75137091/183288714-4bc92439-42d7-4c60-8077-e8b0511f015d.png)


## Responsywność
W projekcie została zrealizowana responsywność stron.
<div align="center">
  <img height="500px" src="https://user-images.githubusercontent.com/75137091/183299327-100f1259-fff8-4226-beba-beed92d2ebfb.jpg">
  <img height="500px" src="https://user-images.githubusercontent.com/75137091/183299331-72539841-8601-4982-89aa-52a6be5a9936.jpg">
  <img height="500px" src="https://user-images.githubusercontent.com/75137091/183299333-75f965c5-99c1-48c4-bb3c-2d28c0dfb78b.jpg">
  <br>
  <img height="500px" src="https://user-images.githubusercontent.com/75137091/183299337-6e5d96ae-13de-4617-a576-ffd2cbe6830b.jpg">
  <img height="500px" src="https://user-images.githubusercontent.com/75137091/183299341-c211d56c-be46-40c9-9565-5651dca4bf78.jpg">
  <img height="500px" src="https://user-images.githubusercontent.com/75137091/183299345-6e93731d-0d76-4fef-947a-8e853641390a.jpg">
</div>

## Dodatkowe informacje
1. Aplikacja została wdrożona na Netlify.
2. Została również użyta biblioteka Prettier, służąca do formatowania kodu. Niniejsza biblioteka jest świetnym narzędziem, który wyłapuje błędy składni, automatycznie poprawia linie kodu według zdefiniowanej konfiguracji.

## Technologie użyte w projekcie:
1. Typescript
2. Axios
3. Formik
4. i18next
5. React Toastify
6. React Toggle Dark Mode
7. Styled Components
8. Yup

## Narzędzia pomocnicze
1. Visual Studio Code
2. Yarn

## Instalacja

#### Uruchomienie projektu:

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Sklonuj repozytorium.
2. Otwórz je w ulubionym edytorze.
3. Zainstaluj zależności za pomocą komendy: yarn.
4. Wystartuj serwer za pomocą komendy: yarn start.

Aplikacja będzie dostępna pod adresem: http://localhost:60001/
