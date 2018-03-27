const mijnOpgave = document.getElementById('mijnOpgave');
const mijnAntwoord = document.getElementById('mijnAntwoord');
const feedback = document.getElementById('feedback');

let mijnSommen = [];
let teller = 0;


for (let i=0; i<10; i++)
{
    let mijnSom = {};
    mijnSom.getalA = maakGetal();
    mijnSom.getalB = maakGetal();
    mijnSom.goedeAntwoord = mijnSom.getalA * mijnSom.getalB;
    mijnSommen.push(mijnSom);
}

//mijnAntwoord.autofocus;
feedback.style.display="none";
mijnOpgave.innerHTML = mijnSommen[0].getalA + " x " + mijnSommen[0].getalB;

    function invoer(event)
    {
        if (event.keyCode == 13)
        {
            mijnSommen[teller].mijnAntwoord = mijnAntwoord.value;
            mijnAntwoord.value = "";
            teller++;
            //console.log(mijnSommen);
            if (teller >= mijnSommen.length)
            {
                eindeSpel();
            }
            else
                {
                    mijnOpgave.innerHTML = mijnSommen[teller].getalA + " x " + mijnSommen[teller].getalB;
                }
        }
    }




    function eindeSpel()
    {
        console.log(mijnSommen);
        mijnOpgave.style.display="none";
        mijnAntwoord.style.display="none";
        feedback.style.display="block";
        //Tabel
        let mijnTabel = document.createElement('table');
        mijnTabel.setAttribute('border','1');
        for (let i=0; i<mijnSommen.length; i++)
        {
            let row = mijnTabel.insertRow();

            if (mijnSommen[i].goedeAntwoord == mijnSommen[i].mijnAntwoord)
            {
                row.className = "Goed";
            }
            else
            {
                row.className = "Fout";
            }

            let cell1 = row.insertCell();
            cell1.innerHTML = mijnSommen[i].getalA + " x " + mijnSommen[i].getalB + " = " + mijnSommen[i].goedeAntwoord;
            let cell2 = row.insertCell();
            cell2.innerHTML = mijnSommen[i].mijnAntwoord;
        }
        feedback.appendChild(mijnTabel);


    }

// mijnSommen[teller].mijnAntwoord = "Hoi";
// console.log(mijnSommen);
// console.log(mijnSommen[teller]);

function maakGetal() {
    let mijnGetal = Math.floor(Math.random() * 9) + 1;
    return mijnGetal;
}

mijnAntwoord.addEventListener('keydown',invoer,false);

