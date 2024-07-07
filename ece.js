
let ogrenci={
    ad:'can',
    yas:29,
    email:'cnboz@gmail.com',
    sinif:12,
    dersler:[
        {isim:'matematik', puan:90},
        {isim:'fizik',puan:80},
        {isim:'kimya',puan:85},
    ],

    login()
    {
        console.log('ogrenci giris yapti');
    },
    logout()
    {
        console.log('ogrenci cikis yapti');
    },
    printlessons()
    {
        console.log(this.dersler);
        //console.log(this);
        this.dersler.forEach(a=> {
            console.log(a.isim,a.puan);
        })
    }

};
console.log(this);
ogrenci.login();
ogrenci.logout();
ogrenci.printlessons();