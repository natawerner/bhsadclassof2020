var vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.onresize = function(event) {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};


var events = [
  {
    "event": "Machineries of Joy<br>with Wassily Dyakonov",
    "date": "16th of June<br>17:00 (GMT+3)"
  },{
    "event": "Writing and design: plot and  healthy collaboration<br>with Sofia Kravtsova (feat. Ksenia Matorina)",
    "date": "16th of June<br>19:00 (GMT+3)"
  },{
    "event": "Audio Review<br>with Lissa Lupicheva",
    "date": "17th of June<br>17:00 (GMT+3)"
  },{
    "event": "GDB: GoogleDoc Brief<br>with Lesya Kuranova",
    "date": "17th of June<br>19:00 (GMT+3)"
  },{
    "event": "How common is your sexual experience?<br>with Regina Park",
    "date": "18th of June<br>17:00 (GMT+3)"
  },{
    "event": "Nonchalant Talks<br>with Tasha Shubina",
    "date": "18th of June<br>19:00 (GMT+3)"
  },{
    "event": "Dancing challenge<br>with Nastia Suchkova",
    "date": "19th of June<br>17:00 (GMT+3)"
  },{
    "event": "votpravda &#215; Mix Master Kutyma LIVINRUM GRADU8 MIX<br>with Martin Lezhenin",
    "date": "19th of June<br>19:00 (GMT+3)"
  },{
    "event": "Pinhole photography in metro<br>with Evgeniya Velichko",
    "date": "20th of June<br>17:00 (GMT+3)"
  },{
    "event": "Soviet graphical sound and synthetic music<br>with Sonia Solokhina",
    "date": "20th of June<br>19:00 (GMT+3)"
  },{
    "event": "Monologue: Urban Exploration<br>with Mikhail Selitsky",
    "date": "New date:<br>23rd of June<br>17:00 (GMT+3)"
  },{
    "event": "The process of processing systems<br>with Masha Andrianova and Nat Kukina",
    "date": "21st of June<br>19:00 (GMT+3)"
  },{
    "event": "3D For Dummies<br>with Ksenia Gabueva",
    "date": "22nd of June<br>17:00 (GMT+3)"
  },{
    "event": "Tattoo and design as fields of work<br>with Liza Falyugina",
    "date": "22nd of June<br>19:00 (GMT+3)"
  }
];
var projects = [
  {
    "project": "Passing<br>by Masha Andrianova",
    "letter": "B",
    "image": ['url(images/main/masha/masha-01.jpg)','url(images/main/masha/masha-02.jpg)','url(images/main/masha/masha-03.jpg)','url(images/main/masha/masha-04.jpg)','url(images/main/masha/masha-05.jpg)','url(images/main/masha/masha-06.jpg)','url(images/main/masha/masha-07.jpg)','url(images/main/masha/masha-08.jpg)','url(images/main/masha/masha-09.jpg)','url(images/main/masha/masha-10.jpg)','url(images/main/masha/masha-11.jpg)','url(images/main/masha/masha-12.jpg)','url(images/main/masha/masha-13.jpg)','url(images/main/masha/masha-14.jpg)','url(images/main/masha/masha-15.jpg)','url(images/main/masha/masha-16.jpg'],
    "book": ['url(../images/book/masha/1.jpg)', 'url(../images/book/masha/2.jpg)', 'url(../images/book/masha/3.jpg)', 'url(../images/book/masha/4.jpg)', 'url(../images/book/masha/5.jpg)']
  },{
    "project": "The walls on textile<br>by Valeria Bukharova",
    "letter": "H",
    "image": ['url(images/main/valeria/valeria-01.jpg)','url(images/main/valeria/valeria-02.jpg)','url(images/main/valeria/valeria-03.jpg)','url(images/main/valeria/valeria-04.jpg)','url(images/main/valeria/valeria-05.jpg)','url(images/main/valeria/valeria-06.jpg)','url(images/main/valeria/valeria-07.jpg)','url(images/main/valeria/valeria-08.jpg)','url(images/main/valeria/valeria-09.jpg)','url(images/main/valeria/valeria-10.jpg)','url(images/main/valeria/valeria-11.jpg)','url(images/main/valeria/valeria-12.jpg)','url(images/main/valeria/valeria-13.jpg)','url(images/main/valeria/valeria-14.jpg)','url(images/main/valeria/valeria-15.jpg)','url(images/main/valeria/valeria-16.jpg'],
    "book": ['url(../images/book/valeria/1.jpg)', 'url(../images/book/valeria/2.jpg)', 'url(../images/book/valeria/3.jpg)', 'url(../images/book/valeria/4.jpg)', 'url(../images/book/valeria/5.jpg)', 'url(../images/book/valeria/6.jpg)']
  },{
    "project": "Machineries of Joy<br>by Wassily Dyakonov",
    "letter": "S",
    "image": ['url(images/main/wassily/wassily-01.jpg)','url(images/main/wassily/wassily-02.jpg)','url(images/main/wassily/wassily-03.jpg)','url(images/main/wassily/wassily-04.jpg)','url(images/main/wassily/wassily-05.jpg)','url(images/main/wassily/wassily-06.jpg)','url(images/main/wassily/wassily-07.jpg)','url(images/main/wassily/wassily-08.jpg)','url(images/main/wassily/wassily-09.jpg)','url(images/main/wassily/wassily-10.jpg)','url(images/main/wassily/wassily-11.jpg)','url(images/main/wassily/wassily-12.jpg)','url(images/main/wassily/wassily-13.jpg)','url(images/main/wassily/wassily-14.jpg)','url(images/main/wassily/wassily-15.jpg)','url(images/main/wassily/wassily-16.jpg'],
    "book": ['url(../images/book/wassya/1.png)', 'url(../images/book/wassya/2.png)', 'url(../images/book/wassya/3.png)', 'url(../images/book/wassya/4.png)', 'url(../images/book/wassya/5.png)', 'url(../images/book/wassya/6.png)', 'url(../images/book/wassya/7.png)']
  },{
    "project": "Surface<br>by Liza Falyugina",
    "letter": "A",
    "image": ['url(images/main/liza/liza-01.jpg)','url(images/main/liza/liza-02.jpg)','url(images/main/liza/liza-03.jpg)','url(images/main/liza/liza-04.jpg)','url(images/main/liza/liza-05.jpg)','url(images/main/liza/liza-06.jpg)','url(images/main/liza/liza-07.jpg)','url(images/main/liza/liza-08.jpg)','url(images/main/liza/liza-09.jpg)','url(images/main/liza/liza-10.jpg)','url(images/main/liza/liza-11.jpg)','url(images/main/liza/liza-12.jpg)','url(images/main/liza/liza-13.jpg)','url(images/main/liza/liza-14.jpg)','url(images/main/liza/liza-15.jpg)','url(images/main/liza/liza-16.jpg'],
    "book": ['url(../images/book/liza/1.jpg)', 'url(../images/book/liza/2.jpg)', 'url(../images/book/liza/3.jpg)', 'url(../images/book/liza/4.jpg)', 'url(../images/book/liza/5.jpg)', 'url(../images/book/liza/6.jpg)', 'url(../images/book/liza/7.jpg)', 'url(../images/book/liza/8.jpg)', 'url(../images/book/liza/9.jpg)', 'url(../images/book/liza/10.jpg)']
  },{
    "project": "Oasis of Offers<br>by Ksenia Gabueva",
    "letter": "D",
    "image": ['url(images/main/ksenia/ksenia-01.jpg)','url(images/main/ksenia/ksenia-02.jpg)','url(images/main/ksenia/ksenia-03.jpg)','url(images/main/ksenia/ksenia-04.jpg)','url(images/main/ksenia/ksenia-05.jpg)','url(images/main/ksenia/ksenia-06.jpg)','url(images/main/ksenia/ksenia-07.jpg)','url(images/main/ksenia/ksenia-08.jpg)','url(images/main/ksenia/ksenia-09.jpg)','url(images/main/ksenia/ksenia-10.jpg)','url(images/main/ksenia/ksenia-11.jpg)','url(images/main/ksenia/ksenia-12.jpg)','url(images/main/ksenia/ksenia-13.jpg)','url(images/main/ksenia/ksenia-14.jpg)','url(images/main/ksenia/ksenia-15.jpg)','url(images/main/ksenia/ksenia-16.jpg'],
    "book": ['url(../images/book/ksenia/1.png)', 'url(../images/book/ksenia/2.png)', 'url(../images/book/ksenia/3.png)', 'url(../images/book/ksenia/4.png)', 'url(../images/book/ksenia/5.png)']
  },{
    "project": "And Other Stories<br>by Sofa Kravtsova",
    "letter": "C",
    "image": ['url(images/main/sofia/sofia-01.jpg)','url(images/main/sofia/sofia-02.jpg)','url(images/main/sofia/sofia-03.jpg)','url(images/main/sofia/sofia-04.jpg)','url(images/main/sofia/sofia-05.jpg)','url(images/main/sofia/sofia-06.jpg)','url(images/main/sofia/sofia-07.jpg)','url(images/main/sofia/sofia-08.jpg)','url(images/main/sofia/sofia-09.jpg)','url(images/main/sofia/sofia-10.jpg)','url(images/main/sofia/sofia-11.jpg)','url(images/main/sofia/sofia-12.jpg)','url(images/main/sofia/sofia-13.jpg)','url(images/main/sofia/sofia-14.jpg)','url(images/main/sofia/sofia-15.jpg)','url(images/main/sofia/sofia-16.jpg'],
    "book": ['url(../images/book/sofia/2.png)','url(../images/book/sofia/3.png)', 'url(../images/book/sofia/4.png)', 'url(../images/book/sofia/5.png)', 'url(../images/book/sofia/6.png)', 'url(../images/book/sofia/7.png)', 'url(../images/book/sofia/8.png)']
  },{
    "project": "GMDH02_00102<br>by Nat Kukina",
    "letter": "L",
    "image": ['url(images/main/nat/nat-01.jpg)','url(images/main/nat/nat-02.jpg)','url(images/main/nat/nat-03.jpg)','url(images/main/nat/nat-04.jpg)','url(images/main/nat/nat-05.jpg)','url(images/main/nat/nat-06.jpg)','url(images/main/nat/nat-07.jpg)','url(images/main/nat/nat-08.jpg)','url(images/main/nat/nat-09.jpg)','url(images/main/nat/nat-10.jpg)','url(images/main/nat/nat-11.jpg)','url(images/main/nat/nat-12.jpg)','url(images/main/nat/nat-13.jpg)','url(images/main/nat/nat-14.jpg)','url(images/main/nat/nat-15.jpg)','url(images/main/nat/nat-16.jpg'],
    "book": ['url(../images/book/nat/01.jpg)','url(../images/book/nat/1.jpg)', 'url(../images/book/nat/2.jpg)', 'url(../images/book/nat/3.jpg)', 'url(../images/book/nat/4.jpg)', 'url(../images/book/nat/5.jpg)', 'url(../images/book/nat/6.jpg)']
  },{
    "project": "We’ll see how it goes<br>by Lesya Kuranova",
    "letter": "A",
    "image": ['url(images/main/lesya/lesya-01.jpg)','url(images/main/lesya/lesya-02.jpg)','url(images/main/lesya/lesya-03.jpg)','url(images/main/lesya/lesya-04.jpg)','url(images/main/lesya/lesya-05.jpg)','url(images/main/lesya/lesya-06.jpg)','url(images/main/lesya/lesya-07.jpg)','url(images/main/lesya/lesya-08.jpg)','url(images/main/lesya/lesya-09.jpg)','url(images/main/lesya/lesya-10.jpg)','url(images/main/lesya/lesya-11.jpg)','url(images/main/lesya/lesya-12.jpg)','url(images/main/lesya/lesya-13.jpg)','url(images/main/lesya/lesya-14.jpg)','url(images/main/lesya/lesya-15.jpg)','url(images/main/lesya/lesya-16.jpg'],
    "book": ['url(../images/book/lesya/1.png)', 'url(../images/book/lesya/2.png)', 'url(../images/book/lesya/3.png)', 'url(../images/book/lesya/4.png)', 'url(../images/book/lesya/5.png)', 'url(../images/book/lesya/6.png)', 'url(../images/book/lesya/7.png)', 'url(../images/book/lesya/8.png)']
  },{
    "project": "Svetoustanovka Portativnaya<br>by Martin Lezhenin",
    "letter": "S",
    "image": ['url(images/main/martin/martin-01.jpg)','url(images/main/martin/martin-02.jpg)','url(images/main/martin/martin-03.jpg)','url(images/main/martin/martin-04.jpg)','url(images/main/martin/martin-05.jpg)','url(images/main/martin/martin-06.jpg)','url(images/main/martin/martin-07.jpg)','url(images/main/martin/martin-08.jpg)','url(images/main/martin/martin-09.jpg)','url(images/main/martin/martin-10.jpg)','url(images/main/martin/martin-11.jpg)','url(images/main/martin/martin-12.jpg)','url(images/main/martin/martin-13.jpg)','url(images/main/martin/martin-14.jpg)','url(images/main/martin/martin-15.jpg)','url(images/main/martin/martin-16.jpg'],
    "book": ['url(../images/book/martin/01.jpg)', 'url(../images/book/martin/1.jpg)', 'url(../images/book/martin/6.jpg)', 'url(../images/book/martin/2.jpg)', 'url(../images/book/martin/3.jpg)', 'url(../images/book/martin/4.jpg)', 'url(../images/book/martin/5.jpg)', 'url(../images/book/martin/7.jpg)', 'url(../images/book/martin/8.jpg)']
  },{
    "project": "A Poetry of Perception<br>by Lissa Lupicheva",
    "letter": "S",
    "image": ['url(images/main/vasilissa/vasilissa-01.jpg)','url(images/main/vasilissa/vasilissa-02.jpg)','url(images/main/vasilissa/vasilissa-03.jpg)','url(images/main/vasilissa/vasilissa-04.jpg)','url(images/main/vasilissa/vasilissa-05.jpg)','url(images/main/vasilissa/vasilissa-06.jpg)','url(images/main/vasilissa/vasilissa-07.jpg)','url(images/main/vasilissa/vasilissa-08.jpg)','url(images/main/vasilissa/vasilissa-09.jpg)','url(images/main/vasilissa/vasilissa-10.jpg)','url(images/main/vasilissa/vasilissa-11.jpg)','url(images/main/vasilissa/vasilissa-12.jpg)','url(images/main/vasilissa/vasilissa-13.jpg)','url(images/main/vasilissa/vasilissa-14.jpg)','url(images/main/vasilissa/vasilissa-15.jpg)','url(images/main/vasilissa/vasilissa-16.jpg'],
    "book": ['url(../images/book/lissa/1.png)', 'url(../images/book/lissa/2.png)', 'url(../images/book/lissa/3.png)', 'url(../images/book/lissa/4.png)', 'url(../images/book/lissa/5.png)']
  },{
    "project": "SexEd<br>by Regina Park",
    "letter": "O",
    "image": ['url(images/main/regina/regina-01.jpg)','url(images/main/regina/regina-02.jpg)','url(images/main/regina/regina-03.jpg)','url(images/main/regina/regina-04.jpg)','url(images/main/regina/regina-05.jpg)','url(images/main/regina/regina-06.jpg)','url(images/main/regina/regina-07.jpg)','url(images/main/regina/regina-08.jpg)','url(images/main/regina/regina-09.jpg)','url(images/main/regina/regina-10.jpg)','url(images/main/regina/regina-11.jpg)','url(images/main/regina/regina-12.jpg)','url(images/main/regina/regina-13.jpg)','url(images/main/regina/regina-14.jpg)','url(images/main/regina/regina-15.jpg)','url(images/main/regina/regina-16.jpg'],
    "book": ['url(../images/book/regina/1.jpg)', 'url(../images/book/regina/2.jpg)', 'url(../images/book/regina/3.jpg)', 'url(../images/book/regina/4.jpg)', 'url(../images/book/regina/5.jpg)', 'url(../images/book/regina/6.jpg)', 'url(../images/book/regina/7.jpg)']
  },{
    "project": "Hidden Rivers<br>by Mikhail Selitsky",
    "letter": "F",
    "image": ['url(images/main/mikhail/mikhail-01.jpg)','url(images/main/mikhail/mikhail-02.jpg)','url(images/main/mikhail/mikhail-03.jpg)','url(images/main/mikhail/mikhail-04.jpg)','url(images/main/mikhail/mikhail-05.jpg)','url(images/main/mikhail/mikhail-06.jpg)','url(images/main/mikhail/mikhail-07.jpg)','url(images/main/mikhail/mikhail-08.jpg)','url(images/main/mikhail/mikhail-09.jpg)','url(images/main/mikhail/mikhail-10.jpg)','url(images/main/mikhail/mikhail-11.jpg)','url(images/main/mikhail/mikhail-12.jpg)','url(images/main/mikhail/mikhail-13.jpg)','url(images/main/mikhail/mikhail-14.jpg)','url(images/main/mikhail/mikhail-15.jpg)','url(images/main/mikhail/mikhail-16.jpg'],
    "book": ['url(../images/book/mikhail/1.jpg)', 'url(../images/book/mikhail/2.jpg)', 'url(../images/book/mikhail/3.jpg)', 'url(../images/book/mikhail/4.jpg)', 'url(../images/book/mikhail/5.jpg)', 'url(../images/book/mikhail/6.jpg)', 'url(../images/book/mikhail/7.jpg)']
  },{
    "project": "Beyond Matter<br>by Tasha Shubina",
    "letter": "2",
    "image": ['url(images/main/tasha/tasha-01.jpg)','url(images/main/tasha/tasha-02.jpg)','url(images/main/tasha/tasha-03.jpg)','url(images/main/tasha/tasha-04.jpg)','url(images/main/tasha/tasha-05.jpg)','url(images/main/tasha/tasha-06.jpg)','url(images/main/tasha/tasha-07.jpg)','url(images/main/tasha/tasha-08.jpg)','url(images/main/tasha/tasha-09.jpg)','url(images/main/tasha/tasha-10.jpg)','url(images/main/tasha/tasha-11.jpg)','url(images/main/tasha/tasha-12.jpg)','url(images/main/tasha/tasha-13.jpg)','url(images/main/tasha/tasha-14.jpg)','url(images/main/tasha/tasha-15.jpg)','url(images/main/tasha/tasha-16.jpg'],
    "book": ['url(../images/book/tasha/1.jpg)', 'url(../images/book/tasha/2.jpg)', 'url(../images/book/tasha/3.jpg)', 'url(../images/book/tasha/4.jpg)', 'url(../images/book/tasha/5.jpg)', 'url(../images/book/tasha/6.jpg)', 'url(../images/book/tasha/7.jpg)', 'url(../images/book/tasha/8.jpg)', 'url(../images/book/tasha/9.jpg)', 'url(../images/book/tasha/10.jpg)']
  },{
    "project": "The origins of electronic music<br>by Sonia Solokhina",
    "letter": "0",
    "image": ['url(images/main/sonia/sonia-01.jpg)','url(images/main/sonia/sonia-02.jpg)','url(images/main/sonia/sonia-03.jpg)','url(images/main/sonia/sonia-04.jpg)','url(images/main/sonia/sonia-05.jpg)','url(images/main/sonia/sonia-06.jpg)','url(images/main/sonia/sonia-07.jpg)','url(images/main/sonia/sonia-08.jpg)','url(images/main/sonia/sonia-09.jpg)','url(images/main/sonia/sonia-10.jpg)','url(images/main/sonia/sonia-11.jpg)','url(images/main/sonia/sonia-12.jpg)','url(images/main/sonia/sonia-13.jpg)','url(images/main/sonia/sonia-14.jpg)','url(images/main/sonia/sonia-15.jpg)','url(images/main/sonia/sonia-16.jpg'],
    "book": ['url(../images/book/sonia/1.png)', 'url(../images/book/sonia/3.png)', 'url(../images/book/sonia/4.png)', 'url(../images/book/sonia/5.png)', 'url(../images/book/sonia/6.png)', 'url(../images/book/sonia/7.png)', 'url(../images/book/sonia/8.png)', 'url(../images/book/sonia/9.png)', 'url(../images/book/sonia/10.png)']
  },{
    "project": "Words’ dance<br>by Nastia Suchkova",
    "letter": "2",
    "image": ['url(images/main/anastasia/anastasia-01.jpg)','url(images/main/anastasia/anastasia-02.jpg)','url(images/main/anastasia/anastasia-03.jpg)','url(images/main/anastasia/anastasia-04.jpg)','url(images/main/anastasia/anastasia-05.jpg)','url(images/main/anastasia/anastasia-06.jpg)','url(images/main/anastasia/anastasia-07.jpg)','url(images/main/anastasia/anastasia-08.jpg)','url(images/main/anastasia/anastasia-09.jpg)','url(images/main/anastasia/anastasia-10.jpg)','url(images/main/anastasia/anastasia-11.jpg)','url(images/main/anastasia/anastasia-12.jpg)','url(images/main/anastasia/anastasia-13.jpg)','url(images/main/anastasia/anastasia-14.jpg)','url(images/main/anastasia/anastasia-15.jpg)','url(images/main/anastasia/anastasia-16.jpg'],
    "book": ['url(../images/book/nastia/1.jpg)', 'url(../images/book/nastia/2.jpg)', 'url(../images/book/nastia/3.jpg)', 'url(../images/book/nastia/4.jpg)']
  },{
    "project": "light:metro:time<br>by Evgeniya Velichko",
    "letter": "0",
    "image": ['url(images/main/evgeniya/evgeniya-01.jpg)','url(images/main/evgeniya/evgeniya-02.jpg)','url(images/main/evgeniya/evgeniya-03.jpg)','url(images/main/evgeniya/evgeniya-04.jpg)','url(images/main/evgeniya/evgeniya-05.jpg)','url(images/main/evgeniya/evgeniya-06.jpg)','url(images/main/evgeniya/evgeniya-07.jpg)','url(images/main/evgeniya/evgeniya-08.jpg)','url(images/main/evgeniya/evgeniya-09.jpg)','url(images/main/evgeniya/evgeniya-10.jpg)','url(images/main/evgeniya/evgeniya-11.jpg)','url(images/main/evgeniya/evgeniya-12.jpg)','url(images/main/evgeniya/evgeniya-13.jpg)','url(images/main/evgeniya/evgeniya-14.jpg)','url(images/main/evgeniya/evgeniya-15.jpg)','url(images/main/evgeniya/evgeniya-16.jpg'],
    "book": ['url(../images/book/evgeniya/1.jpg)', 'url(../images/book/evgeniya/2.jpg)', 'url(../images/book/evgeniya/3.jpg)', 'url(../images/book/evgeniya/4.jpg)', 'url(../images/book/evgeniya/5.jpg)', 'url(../images/book/evgeniya/6.jpg)', 'url(../images/book/evgeniya/7.jpg)', 'url(../images/book/evgeniya/8.jpg)']
  }
];
var live = [
  {
    "livenow": "LIVE NOW — Machineries of Joy with Wassily Dyakonov",
    "livenext": "NEXT LIVE EVENT — Machineries of Joy with Wassily Dyakonov — 16th of June 17:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/DEhz7dEnnEU"
  },{
    "livenow": "LIVE NOW — Writing and design: plot and  healthy collaboration with Sofia Kravtsova (feat. Ksenia Matorina)",
    "livenext": "NEXT LIVE EVENT — Writing and design: plot and  healthy collaboration with Sofia Kravtsova (feat. Ksenia Matorina) — 16th of June 19:00 (GMT+3)",
    "link": "-------------"
  },{
    "livenow": "LIVE NOW — Audio Review with Lissa Lupicheva",
    "livenext": "NEXT LIVE EVENT — Audio Review with Lissa Lupicheva — 17th of June 17:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/7jdtVkVKPv0"
  },{
    "livenow": "LIVE NOW — GDB: GoogleDoc Brief with Lesya Kuranova",
    "livenext": "NEXT LIVE EVENT — GDB: GoogleDocBrief with Lesya Kuranova — 17th of June 19:00 (GMT+3)",
    "link": "https://docs.google.com/document/d/149WSCMnEDfXAzQRE0EiGkr1zVeDQxxCIRmf-qaq5MlY/edit"
  },{
    "livenow": "LIVE NOW — How common is your sexual experience? with Regina Park",
    "livenext": "NEXT LIVE EVENT — How common is your sexual experience? with Regina Park — 18th of June 17:00 (GMT+3)",
    "link": "-------------"
  },{
    "livenow": "LIVE NOW — Nonchalant Talks with Tasha Shubina",
    "livenext": "NEXT LIVE EVENT — Nonchalant Talks with Tasha Shubina — 18th of June 19:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/qEkATjDPIRY"
  },{
    "livenow": "LIVE NOW — Dancing challenge with Nastia Suchkova",
    "livenext": "NEXT LIVE EVENT — Dancing challenge with Nastia Suchkova — 19th of June 17:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/1m8-ckPHMws"
  },{
    "livenow": "LIVE NOW — votpravda &#215; Mix Master Kutyma LIVINRUM GRADU8 MIX with Martin Lezhenin",
    "livenext": "NEXT LIVE EVENT — votpravda &#215; Mix Master Kutyma LIVINRUM GRADU8 MIX with Martin Lezhenin — 19th of June 19:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/PK5lCmSYn-E"
  },{
    "livenow": "LIVE NOW — Pinhole photography in metro with Evgeniya Velichko",
    "livenext": "NEXT LIVE EVENT — Pinhole photography in the metro with Evgeniya Velichko — 20th of June 17:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/FxHtOsYvjII"
  },{
    "livenow": "LIVE NOW — Soviet graphical sound and synthetic music with Sonia Solokhina",
    "livenext": "NEXT LIVE EVENT — Soviet graphical sound and synthetic music with Sonia Solokhina — 20th of June 19:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/OFS8i4QX14g"
  },{
    "livenow": "LIVE NOW — Monologue: Urban Exploration with Mikhail Selitsky",
    "livenext": "NEXT LIVE EVENT — Monologue: Urban Exploration with Mikhail Selitsky — 23rd of June 17:00 (GMT+3)",
    "link": ""
  },{
    "livenow": "LIVE NOW — The process of processing systems with Masha Andrianova and Nat Kukina",
    "livenext": "NEXT LIVE EVENT — The process of processing systems with Masha Andrianova and Nat Kukina — 21st of June 19:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/4STt-AnSVuQ"
  },{
    "livenow": "LIVE NOW — 3D For Dummies with Ksenia Gabueva",
    "livenext": "NEXT LIVE EVENT — 3D For Dummies with Ksenia Gabueva — 22nd of June 17:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/7qduYaR4Eps"
  },{
    "livenow": "LIVE NOW — Tattoo and design as areas of work with Liza Falyugina",
    "livenext": "NEXT LIVE EVENT — Tattoo and design as areas of work with Liza Falyugina — 22nd of June 19:00 (GMT+3)",
    "link": "https://www.youtube.com/embed/xCOT5YsDMYg"
  },
  {
    "livenow": "Go to the EVENTS page to see the events archive.",
    "link": "eventsarchive.html"
  }
];






function goToEvents() {window.location.href = "eventsarchive.html";}
function goToProjects() {window.location.href = "index.html";}
function goToInfo() {window.location.href = "info.html";}
function goToLive() {window.location.href = "eventsarchive.html";}
function goToEventsDeep() {window.location.href = "https://classof2020.online/eventsarchive.html";}
function goToProjectsDeep() {window.location.href = "https://classof2020.online/index.html";}
function goToInfoDeep() {window.location.href = "https://classof2020.online/info.html";}
function goToLiveDeep() {window.location.href = "https://classof2020.online/eventsarchive.html";}



window.onload = function(event) {
  var now = Date.now();
  var liveEvent = document.getElementById('liveEvent');
  if (now < 1592316000000) {
    var eventText = live[0].livenext;
    y = 0;
    document.getElementById("menuLive").style.setProperty('--tw', "74ch");
    document.getElementById("menuLive").style.setProperty('--ad', "22s");
  } /*else if (now < 1592319600000) {
    var eventText = live[0].livenow;
    y = 0;
    cell = "wassily";
    document.getElementById("menuLive").style.setProperty('--tw', "52ch");
    document.getElementById("menuLive").style.setProperty('--ad', "15s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592323200000) {
    var eventText = live[1].livenext;
    y = 1;
    document.getElementById("menuLive").style.setProperty('--tw', "107ch");
    document.getElementById("menuLive").style.setProperty('--ad', "33s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  }  else if (now < 1592328600000) {
    var eventText = live[1].livenow;
    y = 1;
    cell = "sofia";
    document.getElementById("menuLive").style.setProperty('--tw', "87ch");
    document.getElementById("menuLive").style.setProperty('--ad', "26s");
    document.getElementById("menuLive").classList.add('liveNow');
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/livezoom.html"};
  }  else if (now < 1592402400000) {
    var eventText = live[2].livenext;
    y = 2;
    document.getElementById("menuLive").style.setProperty('--tw', "67ch");
    document.getElementById("menuLive").style.setProperty('--ad', "20s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592405100000) {
    var eventText = live[2].livenow;
    y = 2;
    cell = "vasilissa";
    document.getElementById("menuLive").style.setProperty('--tw', "47ch");
    document.getElementById("menuLive").style.setProperty('--ad', "13s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592409600000) {
    var eventText = live[3].livenext;
    y = 3;
    document.getElementById("menuLive").style.setProperty('--tw', "67ch");
    document.getElementById("menuLive").style.setProperty('--ad', "22s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592413200000) {
    var eventText = live[3].livenow;
    y = 3;
    cell = "lesya";
    document.getElementById("menuLive").style.setProperty('--tw', "52ch");
    document.getElementById("menuLive").style.setProperty('--ad', "15s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592488800000) {
    var eventText = live[4].livenext;
    y = 4;
    document.getElementById("menuLive").style.setProperty('--tw', "79ch");
    document.getElementById("menuLive").style.setProperty('--ad', "24s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592492400000) {
    var eventText = live[4].livenow;
    y = 4;
    cell = "regina";
    document.getElementById("menuLive").style.setProperty('--tw', "59ch");
    document.getElementById("menuLive").style.setProperty('--ad', "17s");
    document.getElementById("menuLive").classList.add('liveNow');
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/livequiz.html"};
  } else if (now < 1592496000000) {
    var eventText = live[5].livenext;
    y = 5;
    document.getElementById("menuLive").style.setProperty('--tw', "67ch");
    document.getElementById("menuLive").style.setProperty('--ad', "20s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592497800000) {
    var eventText = live[5].livenow;
    y = 5;
    cell = "tasha";
    document.getElementById("menuLive").style.setProperty('--tw', "70ch");
    document.getElementById("menuLive").style.setProperty('--ad', "13s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592575200000) {
    var eventText = live[6].livenext;
    y = 6;
    document.getElementById("menuLive").style.setProperty('--tw', "72ch");
    document.getElementById("menuLive").style.setProperty('--ad', "22s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592578800000) {
    var eventText = live[6].livenow;
    y = 6;
    cell = "anastasia";
    document.getElementById("menuLive").style.setProperty('--tw', "47ch");
    document.getElementById("menuLive").style.setProperty('--ad', "13s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592582400000) {
    var eventText = live[7].livenext;
    y = 7;
    document.getElementById("menuLive").style.setProperty('--tw', "97ch");
    document.getElementById("menuLive").style.setProperty('--ad', "30s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592584800000) {
    var eventText = live[7].livenow;
    y = 7;
    cell = "martin";
    document.getElementById("menuLive").style.setProperty('--tw', "77ch");
    document.getElementById("menuLive").style.setProperty('--ad', "23s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592661600000) {
    var eventText = live[8].livenext;
    y = 8;
    document.getElementById("menuLive").style.setProperty('--tw', "82ch");
    document.getElementById("menuLive").style.setProperty('--ad', "25s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592662800000) {
    var eventText = live[8].livenow;
    y = 8;
    cell = "evgeniya";
    document.getElementById("menuLive").style.setProperty('--tw', "57ch");
    document.getElementById("menuLive").style.setProperty('--ad', "17s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592668800000) {
    var eventText = live[9].livenext;
    y = 9;
    document.getElementById("menuLive").style.setProperty('--tw', "87ch");
    document.getElementById("menuLive").style.setProperty('--ad', "26s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592671200000) {
    var eventText = live[9].livenow;
    y = 9;
    cell = "sonia";
    document.getElementById("menuLive").style.setProperty('--tw', "67ch");
    document.getElementById("menuLive").style.setProperty('--ad', "20s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592755200000) {
    var eventText = live[11].livenext;
    y = 11;
    document.getElementById("menuLive").style.setProperty('--tw', "102ch");
    document.getElementById("menuLive").style.setProperty('--ad', "28s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592758800000) {
    var eventText = live[11].livenow;
    y = 11;
    cell = "maria-nat";
    document.getElementById("menuLive").style.setProperty('--tw', "72ch");
    document.getElementById("menuLive").style.setProperty('--ad', "22s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592834400000) {
    var eventText = live[12].livenext;
    y = 12;
    document.getElementById("menuLive").style.setProperty('--tw', "70ch");
    document.getElementById("menuLive").style.setProperty('--ad', "21s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592835600000) {
    var eventText = live[12].livenow;
    y = 12;
    cell = "ksenia";
    document.getElementById("menuLive").style.setProperty('--tw', "70ch");
    document.getElementById("menuLive").style.setProperty('--ad', "13s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592841600000) {
    var eventText = live[13].livenext;
    y = 13;
    document.getElementById("menuLive").style.setProperty('--tw', "82ch");
    document.getElementById("menuLive").style.setProperty('--ad', "25s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
  } else if (now < 1592845200000) {
    var eventText = live[13].livenow;
    y = 13;
    cell = "liza";
    document.getElementById("menuLive").style.setProperty('--tw', "60ch");
    document.getElementById("menuLive").style.setProperty('--ad', "18s");
    document.getElementById("menuLive").classList.add('liveNow');
  } else if (now < 1592920800000) {
    var eventText = live[10].livenext;
    y = 10;
    document.getElementById("menuLive").style.setProperty('--tw', "77ch");
    document.getElementById("menuLive").style.setProperty('--ad', "23s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/comingsoon.html"};
    else if (now < 1592923147007) {
    var eventText = live[10].livenow;
    y = 13;
    cell = "mikhail";
    document.getElementById("menuLive").style.setProperty('--tw', "60ch");
    document.getElementById("menuLive").style.setProperty('--ad', "18s");
    document.getElementById("menuLive").classList.add('liveNow');
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/livemonologue.html"};
  } */
    else /*(now > 1592845200000)*/ {
    var eventText = live[14].livenow;
    y = 14;
    document.getElementById("menuLive").style.setProperty('--tw', "52ch");
    document.getElementById("menuLive").style.setProperty('--ad', "15s");
    document.getElementById("menuLive").classList.remove("liveNow");
    document.getElementById("menuLive").onclick=function(){window.location.href = "https://classof2020.online/eventsarchive.html"};
  }

liveEvent.innerHTML = eventText;
  var liveVideo = document.getElementById('liveVideo');

  var docPath = location.pathname.split("/").slice(-1);
  var docName = docPath[0];
  var videoLink = live[y].link;

  if ((docName === "index.html") || (docName === "index--.html")){
      for (let y = 0; y < 16; y++) {
        var otherCell = document.getElementById('cell' + y);
        otherCell.style.backgroundImage = 'none';
        var otherCellText = document.getElementById('cellText' + y);
        var letter = projects[y].letter;
        otherCellText.innerHTML = letter;
      };
  } /*else if (docName === "livenow.html"){
    liveVideo.setAttribute("src", videoLink);
  } else if ((docName === "anastasia.html") ||
    (docName === "evgeniya.html") ||
    (docName === "ksenia.html") ||
    (docName === "lesya.html") ||
    (docName === "liza.html") ||
    (docName === "maria-nat.html") ||
    (docName === "martin.html") ||
    (docName === "sofia.html") ||
    (docName === "sonya.html") ||
    (docName === "tasha.html") ||
    (docName === "vasilissa.html") ||
    (docName === "wassily.html")) {
        var liveCell = document.getElementById(cell);
        liveCell.innerHTML = "Watch now!";
        var parentCell = document.getElementById(cell).parentNode;
        parentCell.style.background = 'red';
        parentCell.onclick = function() { window.location.href = "../livenow.html"; };
  } else if (docName === "mikhail.html") {
        var liveCell = document.getElementById(cell);
        liveCell.innerHTML = "Watch now!";
        var parentCell = document.getElementById(cell).parentNode;
        parentCell.style.background = 'red';
        parentCell.onclick = function() { window.location.href = "https://www.youtube.com/watch?v=Wi5W95G13L4";};
      }*/


};


function projectCell(x) {
  for (let y = 0; y < 16; y++) {
    var otherCell = document.getElementById('cell' + y);
    var images = projects[x].image;
    var image = images[y];
    otherCell.style.backgroundImage = image;
    otherCell.style.backgroundSize = "cover";
    var otherCellText = document.getElementById('cellText' + y);
    otherCellText.innerHTML = '';}

  var cellText = document.getElementById('cellText' + x);
  var cell = document.getElementById('cell' + x);
  cell.style.backgroundImage = 'none';
  project = projects[x].project;
  cellText.innerHTML = project;
}


function normalCell(x) {
  for (let y = 0; y < x; y++) {
    var otherCell = document.getElementById('cell' + y);
    /*otherCell.removeChild(otherCell.lastElementChild);*/
    otherCell.style.backgroundImage = 'none';
    var otherCellText = document.getElementById('cellText' + y);
    var letter = projects[y].letter;
    otherCellText.innerHTML = letter;
  }

  var cellText = document.getElementById('cellText' + x);
  var cell = document.getElementById('cell' + x);
  var letter = projects[x].letter;
  cellText.innerHTML = letter;

  for (let y = x + 1; y < 16; y++) {
    var otherCell = document.getElementById('cell' + y);
    /*otherCell.removeChild(otherCell.lastElementChild);*/
    otherCell.style.backgroundImage = 'none';
    var otherCellText = document.getElementById('cellText' + y);
    var letter = projects[y].letter;
    otherCellText.innerHTML = letter;
  }
}


function eventTitle(x) {
  var eventText = document.getElementById('eventText' + x);
  event = events[x].event;
  eventText.innerHTML = event;
}

function normalEvent(x) {
  var eventText = document.getElementById('eventText' + x);
  date = events[x].date;
  eventText.innerHTML = date;
}




u = 0;
function previousPage(n) {
  var spread = document.getElementById('spread');
  var images = projects[n].book;

  if (u == 0) {
  } else if (u == 1){
    var navigation = document.getElementById('back');
    navigation.style.opacity = '0%';
    u = 0;
    var image = images[u];
    spread.style.backgroundImage = image;
  } else {
      u--;
      var image = images[u];
      spread.style.backgroundImage = image;
      var navigation = document.getElementById('forward');
      navigation.style.opacity = '100%';
  }


}

function nextPage(n) {
  var spread = document.getElementById('spread');
  var images = projects[n].book;

  if (u < images.length-2) {
    u++;
    var image = images[u];
    spread.style.backgroundImage = image;
    var navigation = document.getElementById('forward');
    navigation.style.opacity = '100%';
    var navigation = document.getElementById('back');
    navigation.style.opacity = '100%';
  } else if (u == images.length-2) {
      u++;
      var navigation = document.getElementById('forward');
      navigation.style.opacity = '0%';
      var image = images[u];
      spread.style.backgroundImage = image;
  } else if (u == images.length-1) {
    u = u;
  }
};
