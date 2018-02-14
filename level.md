--- 
title: اختيار المرحلة الدراسية
permalink: /level/
layout: none 

---
<style>
    body {
        margin: 32px;
        background: linear-gradient( rgba(255, 255, 255, 0.7),
        rgba(16, 15, 15, 0.63)),
        url(https://s-media-cache-ak0.pinimg.com/originals/17/cf/ac/17cfacce60dffe4717b6f1eaadb004ab.jpg);
    }

    .btn {
        float: left;
        display: block;
        padding: 10px 0;
        color: #fff;
        margin: 0 4px 4px 0;
        border-radius: 5px;
        font-size: 22;
        width: 100%;
        font-family: 'Mada', sans-serif;
        height: 26px;
        text-shadow: 0 0.5px 0 #000;
        opacity: 0.9;
        text-decoration: none;

    }

    .btn:hover {
        text-decoration: underline;
        opacity: 1;
    }

    .btn.b {
        background: #29b6f6;
    }

    .btn.g {
        background: #4caf50;
    }

    .btn.o {
        background: #f67629;
    }

    a.disabled {
        pointer-events: none;
        cursor: default;
        background: #ddd !important;
        color: #607D8B;
    }

    a.disabled::after {
        content: " - [غير متاح حاليا]";
        font-size: 14px;
        color: #000000;
    }

    h1.logo {
        font-family: 'Harmattan', sans-serif;
        width: max-content;
        padding: 12px;
        border-radius: 9px;
        background: #f7f7f7;
        box-shadow: 0.6px 2px 5px #7f7f7f;
        color: #6c41b9;
        font-family: 'Harmattan', sans-serif;
        overflow: hidden;
        text-shadow: 0px 0px 0 #d8d8d8, 1px 1px 0 #d8d8d8, 2px 2px 0 #d8d8d8, 3px 3px 0 #d8d8d8, 4px 4px 0 #d8d8d8, 5px 5px 0 #d8d8d8, 6px 6px 0 #d8d8d8, 7px 7px 0 #d8d8d8, 8px 8px 0 #d8d8d8, 9px 9px 0 #d8d8d8, 10px 10px 0 #d8d8d8, 11px 11px 0 #d8d8d8, 12px 12px 0 #d8d8d8, 13px 13px 0 #d8d8d8, 14px 14px 0 #d8d8d8, 15px 15px 0 #d8d8d8, 16px 16px 0 #d8d8d8, 17px 17px 0 #d8d8d8, 18px 18px 0 #d8d8d8, 19px 19px 0 #d8d8d8, 20px 20px 0 #d8d8d8, 21px 21px 0 #d8d8d8, 22px 22px 0 #d8d8d8, 23px 23px 0 #d8d8d8, 24px 24px 0 #d8d8d8, 25px 25px 0 #d8d8d8, 26px 26px 0 #d8d8d8, 27px 27px 0 #d8d8d8, 28px 28px 0 #d8d8d8, 29px 29px 0 #d8d8d8, 30px 30px 0 #d8d8d8, 31px 31px 0 #d8d8d8, 32px 32px 0 #d8d8d8, 33px 33px 0 #d8d8d8, 34px 34px 0 #d8d8d8, 35px 35px 0 #d8d8d8, 36px 36px 0 #d8d8d8, 37px 37px 0 #d8d8d8, 38px 38px 0 #d8d8d8, 39px 39px 0 #d8d8d8, 40px 40px 0 #d8d8d8, 41px 41px 0 #d8d8d8, 42px 42px 0 #d8d8d8, 43px 43px 0 #d8d8d8;
    }

</style>
<link href="https://fonts.googleapis.com/css?family=Harmattan|Mada" rel="stylesheet">
<center dir="rtl">
    <h1 style="font-size:40px" class="logo">{{site.title}}</h1>
    <p></p>
    <a href="#" class="btn o disabled" style="margin-bottom: 10px;">ابتدائي</a>
    <a href="#" class="btn g disabled" style="margin-bottom: 10px;">متوسط</a>
    <a href="/3" class="btn b">ثانوي</a>
</center>
