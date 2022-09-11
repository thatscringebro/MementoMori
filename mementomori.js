const nbdecades = 8;
const yearperbloc = 10;
const nbsemainesperyear = 52;

function remplir(nbsemaines)
    {
        var cptsemaine = 0;
        var cptyear = 0;
        for(var i = 0; i < nbdecades; i++)
        {
            var body = document.getElementById('calendar');
            var divboxes = document.createElement('div');
            divboxes.classList.add("boxes");
            var divdecade = document.createElement('div');
            divdecade.classList.add("decade");
            var divyear = document.createElement('div');
            divyear.classList.add("year");
            
            body.append(divdecade);
            divdecade.append(divboxes);
            
            for(var a = 0; a < yearperbloc; a++)
            {
                for(var b = 0; b < nbsemainesperyear + 1; b++)
                {
                    var divbox = document.createElement('div');
                    if(b == nbsemainesperyear / 2)
                        divbox.classList.add("box-break");
                    else
                    {
                        divbox.classList.add("box");
                        cptsemaine++;
                    }
                    if(cptsemaine <= nbsemaines)
                        divbox.classList.add("enabled");
                    divboxes.append(divbox);
                }
            }
            
            divdecade.append(divyear);
            
            for(a = 0; a < 3; a++)
            {
                var spanyear = document.createElement('span');
                
                if(a != 0)
                {
                    cptyear += 5;
                    spanyear.textContent = cptyear;
                }
                divyear.append(spanyear);
            }
        }
    }