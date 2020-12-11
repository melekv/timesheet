<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simtech dniówki</title>
    <link rel="icon" href="./img/icon.png" type="image/x-icon">
    <script src="https://kit.fontawesome.com/6f77e9fc62.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <!-- NAWIGACJA ORAZ LOGO -->
    @include('nav')
    <!-- END OF NAV -->

    <div class="container summary d-flex justify-content-end mt-3">
        <div class="mr-2">
            <p class="align-right">Norma czasowa</p>
            <p class="align-right">Suma czasu pracy</p>
            <p class="align-right">Nadgodziny</p>
        </div>
        <div class="mr-5" style="font-weight: 700;">
            <p class="align-right">160:00</p>
            <p class="align-right" id="sum-work-time">00:00</p>
            <p class="align-right">20:00</p>
        </div>
        <div class="mr-2">
            <p class="align-right">Pn-Pt</p>
            <p class="align-right">Sb</p>
            <p class="align-right">Nd/święta</p>
        </div>
        <div style="font-weight: 700;">
            <p class="align-right">136:15</p>
            <p class="align-right">20:00</p>
            <p class="align-right">15:15</p>
        </div>
    </div>

    <div id="spinner"></div>

    <!-- side panel, for data changing -->
    <aside class="aside hide-aside">
        <form class="">
            <!-- data -->
            <div class="form-group">
                <input type="date" name="add-item-date" id="add-item-date" class="form-control form-control-sm" placeholder="Data" required>
            </div>
            <!-- typ -->
            <div class="form-group">
                <select name="add-item-type" id="add-item-type" class="form-control form-control-sm" required>
                    <option value="">Typ</option>
                    <option value="Praca">Praca</option>
                    <option value="Podróż">Podróż</option>
                    <option value="Nieobecność">Nieobecność</option>
                </select>
            </div>
            <!-- przełożony -->
            <div class="form-group work travel absence hide">
                <select name="add-item-superior" id="add-item-superior" class="form-control form-control-sm" required>
                    <option value="">Przełożony</option>
                    <!-- <option value="JP">JP</option>
                    <option value="DR">DR</option>
                    <option value="TR">TR</option> -->
                </select>
            </div>
            <!-- typ nieobecności -->
            <div class="form-group absence hide">
                <select name="add-item-absence" id="add-item-absence" class="form-control form-control-sm">
                    <option value="">Typ nieobecności</option>
                    <!-- <option value="Urlop wypoczynkowy">Urlop wypoczynkowy</option>
                    <option value="Wolne za nadgodziny">Wolne za nadgodziny</option>
                    <option value="Wolne za sobotę">Wolne za sobotę</option> -->
                </select>
            </div>
            <div class="d-flex">
                <!-- Czas od -->
                <div class="form-group work travel absence hide" style="margin-right: 10px">
                    <input type="time" name="add-item-work-from" id="add-item-work-from" class="form-control form-control-sm">
                </div>
                <!-- Czas do -->
                <div class="form-group work travel absence hide">
                    <input type="time" name="add-item-work-to" id="add-item-work-to" class="form-control form-control-sm">
                </div>
            </div>
            <!-- Opis -->
            <div class="form-group work travel hide">
                <input type="text" name="add-item-description" id="add-item-description" class="form-control form-control-sm" placeholder="Opis">
            </div>
            <!-- Miejsce początkowe / pracy -->
            <div class="form-group work travel hide">
                <select name="add-item-place-start" id="add-item-place-start" class="form-control form-control-sm">
                    <option value="">Miejsce początkowe / pracy</option>
                    <option value="Miejsce oddelegowania">Miejsce oddelegowania</option>
                    <option value="Biuro Gliwice">Biuro Gliwice</option>
                    <option value="Miejsce zamieszkania">Miejsce zamieszkania</option>
                </select>
            </div>
            <!-- Miasto / inne -->
            <div class="form-group work travel hide">
                <input type="text" name="add-item-city-start" id="add-item-city-start" class="form-control form-control-sm" placeholder="Miasto / inne">
            </div>
            <!-- Kraj -->
            <div class="form-group work travel hide">
                <select name="add-item-country-start" id="add-item-country-start" class="form-control form-control-sm">
                    <option value="">Kraj</option>
                    <!-- <option value="Polska">Polska</option>
                    <option value="Niemcy">Niemcy</option>
                    <option value="Hiszpania">Hiszpania</option> -->
                </select>
            </div>
            <!-- dzień świąteczny -->
            <div class="form-check form-check-inline work travel hide" style="margin-bottom: 10px;">
                <input type="checkbox" name="add-item-holiday" id="add-item-holiday" class="form-check-input">
                <label for="add-item-holiday" class="form-check-label">Dzień świąteczny</label>
            </div>
            <!-- kod projektu -->
            <div class="form-group work travel hide">
                <select name="add-item-proj-code" id="add-item-proj-code" class="form-control form-control-sm">
                    <option value="">Kod projektu</option>
                    <!-- <option value="VW Poznań Procon">VW Poznań Procon</option>
                    <option value="Projekt VR">Projekt VR</option>
                    <option value="Inne">Inne</option> -->
                </select>
            </div>
            <div class="d-flex">
                <!-- Przerwa od -->
                <div class="form-group work hide" style="margin-right: 10px">
                    <input type="time" name="add-item-break-from" id="add-item-break-from" class="form-control form-control-sm">
                </div>
                <!-- Przerwa do -->
                <div class="form-group work hide">
                    <input type="time" name="add-item-break-to" id="add-item-break-to" class="form-control form-control-sm">
                </div>
            </div>
            <!-- Miejsce końcowe -->
            <div class="form-group travel hide">
                <select name="add-item-place-stop" id="add-item-place-stop" class="form-control form-control-sm">
                    <option value="">Miejsce końcowe</option>
                    <option value="Miejsce oddelegowania">Miejsce oddelegowania</option>
                    <option value="Biuro Gliwice">Biuro Gliwice</option>
                    <option value="Miejsce zamieszkania">Miejsce zamieszkania</option>
                </select>
            </div>
            <!-- Miasto / inne -->
            <div class="form-group travel hide">
                <input type="text" name="add-item-city-stop" id="add-item-city-stop" class="form-control form-control-sm" placeholder="Miasto / inne">
            </div>
            <!-- Kraj -->
            <div class="form-group travel hide">
                <select name="add-item-country-stop" id="add-item-country-stop" class="form-control form-control-sm">
                    <option value="">Kraj</option>
                    <!-- <option value="Polska">Polska</option>
                    <option value="Niemcy">Niemcy</option>
                    <option value="Hiszpania">Hiszpania</option> -->
                </select>
            </div>
            <!-- Środek transportu -->
            <div class="form-group travel hide">
                <select name="add-item-transport" id="add-item-transport" class="form-control form-control-sm">
                    <option value="">Środek transportu</option>
                    <!-- <option value="company-car">Samochód służbowy</option>
                    <option value="private-car">Samochód prywatny</option>
                    <option value="taxi">Taksówka</option>
                    <option value="other">Inny</option> -->
                </select>
            </div>
            <!-- Nr rejestracyjny -->
            <div class="form-group travel car-travel hide">
                <select name="add-item-reg-plate" id="add-item-reg-plate" class="form-control form-control-sm">
                    <option value="">Nr rejestracyjny</option>
                    <!-- <option value="SL2113F">SL2113F</option>
                    <option value="SL2118F">SL2118F</option>
                    <option value="SG0750N">SG0750N</option> -->
                </select>
            </div>
            <!-- Ilość osób w samochodzie -->
            <div class="form-group travel car-travel hide">
                <select name="add-item-person-num" id="add-item-person-num" class="form-control form-control-sm">
                    <option value="">Ilość osób w samochodzie</option>
                    <option value="Tylko ja">Tylko ja</option>
                    <option value="Ja + 1">Ja + 1</option>
                    <option value="Ja + 2">Ja + 2</option>
                    <option value="Ja + 3">Ja + 3</option>
                    <option value="Ja + 3">Ja + 4</option>
                </select>
            </div>
            <!-- Kierowca -->
            <div class="form-check form-check-inline travel car-travel hide" style="margin-bottom: 10px;">
                <input type="checkbox" name="add-item-driver" id="add-item-driver" class="form-check-input">
                <label for="add-item-driver" class="form-check-label">Kierowca?</label>
            </div>
            <div class="d-flex">
                <!-- Jako kierowca od -->
                <div class="form-group travel car-travel driver hide" style="margin-right: 10px">
                    <input type="time" name="add-item-driver-from" id="add-item-driver-from" class="form-control form-control-sm">
                </div>
                <!-- Jako kierowca do -->
                <div class="form-group travel car-travel driver hide">
                    <input type="time" name="add-item-driver-to" id="add-item-driver-to" class="form-control form-control-sm">
                </div>
            </div>
            <div class="d-flex">
                <button class="btn btn-primary flex-fill m-1" id="add-btn">Dodaj</button>
                <button class="btn btn-primary flex-fill m-1 hide" id="update-btn">Aktualizuj</button>
                <button class="btn btn-secondary flex-fill m-1" id="cancel-btn">Anuluj</button>
            </div>
        </form>
    </aside>

    <div class="notification-cover noti-info">
        <div class="blur d-flex justify-content-center align-items-center">
            <p>Usunięto rekord!</p>
        </div>
    </div>

    <div class="notification-cover noti-question">
        <div class="blur d-flex justify-content-center align-items-center">
            <div>
                <p>Czy usunąć rekord?</p>
                <div class="d-flex justify-content-end">
                    <button type="button" id="noti-btn-yes" class="btn btn-primary mr-2" style="width: 100px;">Tak</button>
                    <button type="button" id="noti-btn-no" class="btn btn-secondary" style="width: 100px;">Nie</button>
                </div>
            </div>
        </div>
    </div>
    
    <script type="module" src="./js/main.js"></script>
</body>
</html>