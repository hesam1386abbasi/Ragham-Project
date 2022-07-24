function navigation () {
    if (document.documentElement.scrollTop > 10) {
        document.getElementById("navigation-bar").style.boxShadow = "0 1px lavender";
    }
    else {
        document.getElementById("navigation-bar").style.boxShadow = "0 0px lavender";

    }
}
function InfoTabFirstButton () {
    document.getElementById("first-button").style.backgroundColor = "mediumblue";
    document.getElementById("first-button").style.color = "white";
    document.getElementById("second-button").style.backgroundColor = "#edeaea";
    document.getElementById("second-button").style.color = "#333333";
    document.getElementById("third-button").style.backgroundColor = "#edeaea";
    document.getElementById("third-button").style.color = "#333333";
    document.getElementById("info-third-part-image").src = "Images/info-third-part-image-first-button.png"
    document.getElementById("info-third-part-heading").innerHTML = "شریکی کار می کنی یا تنهایی؟";
    document.getElementById("info-third-part-paragraph").innerHTML = "رقم را روی دستگاه شرکا هم نصب کن و صورت حساب ها را با هر چند نفر لازم داشته باشی به راحتی به اشتراک بگذار";
}
function InfoTabSecondButton () {
    document.getElementById("second-button").style.backgroundColor = "mediumblue";
    document.getElementById("second-button").style.color = "white";
    document.getElementById("first-button").style.backgroundColor = "#edeaea";
    document.getElementById("first-button").style.color = "#333333";
    document.getElementById("third-button").style.backgroundColor = "#edeaea";
    document.getElementById("third-button").style.color = "#333333";
    document.getElementById("info-third-part-image").src = "Images/info-third-part-image-second-button.png"
    document.getElementById("info-third-part-heading").innerHTML = "تعمیرات، نصب یا راه اندازی؟";
    document.getElementById("info-third-part-paragraph").innerHTML = "برای تمام کارهای خدماتی می توانی حساب کتاب مشتری هایت را با رقم ثبت و نگهداری کنی";
}
function InfoTabThirdButton () {
    document.getElementById("third-button").style.backgroundColor = "mediumblue";
    document.getElementById("third-button").style.color = "white";
    document.getElementById("first-button").style.backgroundColor = "#edeaea";
    document.getElementById("first-button").style.color = "#333333";
    document.getElementById("second-button").style.backgroundColor = "#edeaea";
    document.getElementById("second-button").style.color = "#333333";
    document.getElementById("info-third-part-image").src = "Images/info-third-part-image-third-button.png"
    document.getElementById("info-third-part-heading").innerHTML = "اقساطی یا نقدی؟";
    document.getElementById("info-third-part-paragraph").innerHTML = "هیچ فرقی نمی کند که چطوری کار می کنی. با رقم می توانی معاملات خرید و فروش ها را به راحتی پیگیری کنی";
}